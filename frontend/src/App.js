import React from "react";
import Fileupload from "./Fileupload";

function App() {

  return (

    <div
      className="
      h-screen
      flex
      flex-col
      justify-center
      items-center
      bg-gradient-to-br
      from-gray-100
      to-gray-300
      "
    >

      <h1
        className="
        text-3xl
        font-bold
        mb-8
        "
      >
        React + Node.js Image Upload
      </h1>

      <Fileupload />

    </div>

  );
}

export default App;

