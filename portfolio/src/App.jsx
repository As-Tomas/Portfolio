import { useState } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

function App() {
  const [content, setContent] = useState("about");

  return (
    <>
      <div
        className="initial  "
         style={{ 
          backgroundImage: `url(https://img.freepik.com/free-vector/abstract-blue-red-paper-cut-background-with-simple-shapes_8829-2520.jpg?w=1060&t=st=1690130003~exp=1690130603~hmac=be02e42313763296a7b2ca027bcf900b6d9d9fd851af8b294c959deb49b04d26)`,
          backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              boxSizing: "border-box",
         }}
      >
        <Header setContent={setContent} />
        <div className="pt-20    ">
          <Main content={content} />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
