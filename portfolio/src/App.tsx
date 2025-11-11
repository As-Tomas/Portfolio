import { lazy, Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import EnableVoiceGate from './components/EnableVoiceGate';

const LazyVapiWidget = lazy(async () => {
  const module = await import('@vapi-ai/client-sdk-react');
  return { default: module.VapiWidget };
});

const App = () => {
  const [content, setContent] = useState('about');
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);
  const [widgetSize, setWidgetSize] = useState<'compact' | 'full'>('full');
  const [overlayState, setOverlayState] = useState<'show' | 'move' | 'hidden'>('show');
  const [overlayOffset, setOverlayOffset] = useState(0);
  const gateAnchorRef = useRef<HTMLDivElement | null>(null);
  const expandedPanelRef = useRef<HTMLDivElement | null>(null);
  const conversationAreaRef = useRef<HTMLDivElement | null>(null);

  const publicKey = import.meta.env.VITE_VAPI_PUBLIC_KEY;
  const assistantId = import.meta.env.VITE_VAPI_ASSISTANT_ID;

  const widgetConfig = useMemo(() => {
    if (!publicKey || !assistantId) {
      return null;
    }

    return {
      publicKey,
      assistantId,
    };
  }, [assistantId, publicKey]);

  useEffect(() => {
    if (isVoiceEnabled && !widgetConfig) {
      console.warn(
        '[Vapi] Widget enabled but environment keys are missing. Check VITE_VAPI_PUBLIC_KEY and VITE_VAPI_ASSISTANT_ID.'
      );
    }
  }, [isVoiceEnabled, widgetConfig]);

  const startOverlayCollapse = useCallback(() => {
    if (isVoiceEnabled || overlayState !== 'show') {
      return;
    }

    const anchorRect = gateAnchorRef.current?.getBoundingClientRect();
    if (anchorRect) {
      const viewportCenter = window.innerHeight / 2;
      const anchorCenter = anchorRect.top + anchorRect.height / 2;
      setOverlayOffset(anchorCenter - viewportCenter);
    } else {
      setOverlayOffset(0);
    }

    setOverlayState('move');
  }, [isVoiceEnabled, overlayState]);

  useEffect(() => {
    if (isVoiceEnabled) {
      setOverlayState('hidden');
      return;
    }

    if (overlayState !== 'show') {
      return;
    }

    const timer = window.setTimeout(() => {
      startOverlayCollapse();
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [isVoiceEnabled, overlayState, startOverlayCollapse]);

  const handleEnableVoice = useCallback(() => {
    setIsVoiceEnabled(true);
    setOverlayState('hidden');
    setWidgetSize('full');
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.setItem('vapi_widget_expanded', 'true');
      } catch (error) {
        console.warn('[Vapi] unable to seed expanded state', error);
      }
    }
    console.log('[Vapi] widget enabled by user gesture');
  }, []);

  const handleCallStart = useCallback(() => {
    console.log('[Vapi] call-start');
    // TODO: send to analytics
  }, []);

  const handleCallEnd = useCallback(() => {
    console.log('[Vapi] call-end');
    // TODO: send to analytics
  }, []);

  const handleMessage = useCallback((message: unknown) => {
    console.log('[Vapi] message', message);
    // TODO: send to analytics
  }, []);

  const handleError = useCallback((error: Error) => {
    console.error('[Vapi] error', error);
    // TODO: send to analytics
  }, []);

  const handleOverlayAnimationComplete = useCallback(() => {
    if (!isVoiceEnabled && overlayState === 'move') {
      setOverlayState('hidden');
    }
  }, [isVoiceEnabled, overlayState]);

  const showOverlayGate = !isVoiceEnabled && overlayState !== 'hidden';

  const overlayVisualState =
    overlayState === 'move'
      ? { opacity: 0, backdropFilter: 'blur(0px)' }
      : { opacity: 1, backdropFilter: 'blur(14px)' };

  const overlayTransition = { duration: 0.5, ease: 'easeOut' };

  const handleOverlayBackgroundInteraction = useCallback(() => {
    startOverlayCollapse();
  }, [startOverlayCollapse]);

  useEffect(() => {
    if (!isVoiceEnabled) {
      return;
    }

    const handleOutsidePointer = (event: PointerEvent) => {
      const wrapper = document.querySelector('.vapi-widget-wrapper');
      if (!wrapper) {
        return;
      }

      const targetNode = event.target as Node | null;
      const isInsideWidget = targetNode ? wrapper.contains(targetNode) : false;
      const isExpanded = Boolean(wrapper.querySelector('.vapi-conversation-area'));

      if (!isExpanded) {
        return;
      }

      if (isInsideWidget) {
        return;
      }

      const closeButton = wrapper.querySelector<HTMLButtonElement>('.vapi-widget-wrapper .border-b button:last-of-type')
        ?? wrapper.querySelector<HTMLButtonElement>('.border-b button:last-of-type');

      if (closeButton) {
        closeButton.click();
        if (typeof window !== 'undefined') {
          try {
            sessionStorage.setItem('vapi_widget_expanded', 'false');
          } catch (error) {
            console.warn('[Vapi] unable to persist collapsed state', error);
          }
        }
        window.setTimeout(() => setWidgetSize('compact'), 120);
      }
    };

    document.addEventListener('pointerdown', handleOutsidePointer, true);

    return () => {
      document.removeEventListener('pointerdown', handleOutsidePointer, true);
    };
  }, [isVoiceEnabled]);

  useEffect(() => {
    if (!isVoiceEnabled) {
      return;
    }

    let cleanupObserver: MutationObserver | null = null;
    let rafId: number;

    const initObserver = () => {
      const wrapper = document.querySelector('.vapi-widget-wrapper');
      if (!wrapper) {
        rafId = window.requestAnimationFrame(initObserver);
        return;
      }

      const handleWidgetMutation = () => {
        const conversationArea = wrapper.querySelector<HTMLDivElement>('.vapi-conversation-area');
        const sizedContainers = wrapper.querySelectorAll<HTMLDivElement>(
          'div[style*="width: 28rem"], div[style*="height: 40rem"]'
        );

        if (conversationArea && sizedContainers.length > 0) {
          sizedContainers.forEach((container) => {
            container.style.width = '19.6rem';
            container.style.height = '28rem';
            container.style.maxWidth = '19.6rem';
            container.style.maxHeight = '28rem';
            expandedPanelRef.current = container;
          });

          conversationArea.style.transform = '';
          conversationArea.style.transformOrigin = '';
          conversationAreaRef.current = conversationArea;
          setWidgetSize('full');
          return;
        }

        setWidgetSize('compact');

        if (expandedPanelRef.current) {
          expandedPanelRef.current.style.width = '';
          expandedPanelRef.current.style.height = '';
          expandedPanelRef.current.style.maxWidth = '';
          expandedPanelRef.current.style.maxHeight = '';
          expandedPanelRef.current = null;
        }

        if (conversationAreaRef.current) {
          conversationAreaRef.current.style.transform = '';
          conversationAreaRef.current.style.transformOrigin = '';
          conversationAreaRef.current = null;
        }
      };

      cleanupObserver = new MutationObserver(handleWidgetMutation);

      cleanupObserver.observe(wrapper, {
        childList: true,
        subtree: true,
      });

      handleWidgetMutation();
    };

    rafId = window.requestAnimationFrame(initObserver);

    return () => {
      if (cleanupObserver) {
        cleanupObserver.disconnect();
      }
      window.cancelAnimationFrame(rafId);
    };
  }, [isVoiceEnabled]);

  return (
    <div className="app-shell text-slate-100">
      <div className="floating-orb lagoon top-[2%] right-[8%] w-[32rem] h-[32rem] max-[768px]:w-[20rem] max-[768px]:h-[20rem] max-[768px]:top-[5%] max-[768px]:right-[5%] z-0" aria-hidden="true" />
      <div className="floating-orb aurora top-[30%] left-[2%] w-[28rem] h-[28rem] max-[768px]:w-[18rem] max-[768px]:h-[18rem] max-[768px]:top-[35%] max-[768px]:left-[5%] z-0" aria-hidden="true" />
      <div className="floating-orb sunset bottom-[12%] right-[2%] w-[34rem] h-[34rem] max-[768px]:w-[22rem] max-[768px]:h-[22rem] max-[768px]:bottom-[15%] max-[768px]:right-[5%] z-0" aria-hidden="true" />

      <Header content={content} setContent={setContent} />

      <main className="relative z-10 flex-1 pt-24 lg:pt-32 pb-32 px-0 sm:px-6 lg:px-8">
        <div className="mx-auto w-full">
          <Main content={content} setContent={setContent} />
          {!isVoiceEnabled ? (
            <div ref={gateAnchorRef} className="voice-gate-anchor">
              <div
                className={`transition-opacity duration-500 ${
                  overlayState !== 'hidden' ? 'pointer-events-none opacity-0' : 'opacity-100'
                }`}
                aria-hidden={overlayState !== 'hidden'}
              >
                <div className="voice-gate-wrapper mx-auto flex w-full max-w-3xl flex-1 justify-center px-4 py-16 sm:py-20 lg:py-24">
                  <EnableVoiceGate onEnable={handleEnableVoice} />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </main>

      <Footer />

      {isVoiceEnabled && widgetConfig ? (
        <Suspense fallback={null}>
          <LazyVapiWidget
            publicKey={widgetConfig.publicKey}
            assistantId={widgetConfig.assistantId}
            mode="voice"
            position="bottom-right"
            size={widgetSize}
            voiceShowTranscript
            borderRadius="medium"
            theme="dark"
            baseBgColor="#0f172a"
            accentColor="#00f5d4"
            ctaButtonColor="#14b8a6"
            ctaButtonTextColor="#022c22"
            title="Talk with AI"
            ctaTitle="AI"
            consentContent="By confirming, you agree to my AI assistant's privacy policy."
            requireConsent
            
            onCallStart={handleCallStart}
            onCallEnd={handleCallEnd}
            onMessage={handleMessage}
            onError={handleError}
          />
        </Suspense>
      ) : null}

      <AnimatePresence>
        {showOverlayGate ? (
          <motion.div
            key="voice-gate-overlay"
            className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/30"
            style={{ backdropFilter: 'blur(0px)' }}
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={overlayVisualState}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={overlayTransition}
            onMouseDown={handleOverlayBackgroundInteraction}
            onTouchStart={handleOverlayBackgroundInteraction}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 0 }}
              animate={
                overlayState === 'move'
                  ? { opacity: 1, scale: 1, y: overlayOffset }
                  : { opacity: 1, scale: 1, y: 0 }
              }
              exit={{ opacity: 0, scale: 0.9, y: overlayOffset }}
              transition={{ type: 'spring', stiffness: 120, damping: 18 }}
              onAnimationComplete={handleOverlayAnimationComplete}
              onMouseDown={(event) => event.stopPropagation()}
              onTouchStart={(event) => event.stopPropagation()}
            >
              <div className="w-full max-w-2xl px-4 sm:px-6 mx-auto">
                <EnableVoiceGate onEnable={handleEnableVoice} />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default App;
