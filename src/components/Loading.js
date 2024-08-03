import React from "react";

const Loading = ({ page }) => (
  <div className="flex items-center justify-center min-h-screen bg-primary">
    <div className="loader font-extrabold sm:text-5xl text-3xl uppercase tracking-wider animate-bounce">
      {page ? `${page}` : "Loading"}
      <div className=" mt-3 flex">
        <div class="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div class="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div class="h-8 w-8 bg-black rounded-full animate-bounce"></div>
      </div>
    </div>
  </div>
);

export default Loading;
