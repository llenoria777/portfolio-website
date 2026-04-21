document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".scroll-container");
    const skewStage = document.querySelector(".skew-stage");
    const backIcon = document.getElementById("backIcon");
  
    if (!scrollContainer || !skewStage) return;
  
    function update() {
      const maxScroll =
        scrollContainer.scrollHeight - scrollContainer.clientHeight;
  
      const limit = maxScroll * 0.9;
  
      if (scrollContainer.scrollTop >= limit) {
        scrollContainer.scrollTop = limit;
        return;
      }
  
      const scrollTop = scrollContainer.scrollTop;
  
      const moveX = -scrollTop * 0.35;
      const moveY = -scrollTop * 0.35;
  
      skewStage.style.transform =
        `rotate(-45deg) translate3d(${moveX}px, ${moveY}px, 0)`;
    }
  
    scrollContainer.addEventListener("scroll", update);
  
    if (backIcon) {
      backIcon.addEventListener("click", function () {
        window.location.href = "index.html";
      });
    }
  
    update();
  });