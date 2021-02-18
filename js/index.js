"use strict";
// 스크롤 내리면 컨텐츠 나타나기
(() => {
  const contentElement = document.querySelectorAll(".scroll-content");

  window.addEventListener("scroll", () => {
    let content;
    let boundingRect;
    let innerHeight;

    for (let i = 0; i < contentElement.length; i++) {
      content = contentElement[i];
      boundingRect = content.getBoundingClientRect().top;
      innerHeight = window.innerHeight;

      if (innerHeight * 0.9 > boundingRect && boundingRect > -40) {
        content.classList.add("visible");
      } else {
        content.classList.remove("visible");
      }
    }
  });
})();
