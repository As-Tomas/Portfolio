import { useState } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

function App() {
  const [content, setContent] = useState("about");

  return (
    <div className="app-shell text-slate-100">
      <div className="floating-orb lagoon top-[-6%] right-[10%] w-[32rem] h-[32rem] z-0" aria-hidden="true" />
      <div className="floating-orb aurora top-[30%] left-[-6%] w-[28rem] h-[28rem] z-0" aria-hidden="true" />
      <div className="floating-orb sunset bottom-[12%] right-[-4%] w-[34rem] h-[34rem] z-0" aria-hidden="true" />

      <Header content={content} setContent={setContent} />

      <main className="relative z-10 flex-1 pt-24 lg:pt-32 pb-32 px-0 sm:px-6 lg:px-8">
        <div className="mx-auto w-full">
          <Main content={content} setContent={setContent} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
