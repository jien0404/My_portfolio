// Menu
const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

document.addEventListener("DOMContentLoaded", function () {
  const changeLayoutBtn = document.querySelector(".change_layout");

  function noStyles() {
      document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
          if (link.href.includes("main.css") || link.href.includes("style2.css")) {
              link.disabled = true;
          }
      });
  }

  function reStyle(n) {
      noStyles();
      let styleSheet;
      if (n === 0) {
          styleSheet = document.querySelector('link[href*="main.css"]');
      } else {
          styleSheet = document.querySelector('link[href*="style2.css"]');
      }
      if (styleSheet) {
          styleSheet.disabled = false;
      }
  }

  let currentStyle = 0; // 0: main.css, 1: style2.css
  changeLayoutBtn.addEventListener("click", function () {
      currentStyle = 1 - currentStyle; // Chuyển đổi qua lại
      reStyle(currentStyle);
  });

  reStyle(0); // Mặc định dùng main.css
});


document.addEventListener("DOMContentLoaded", function () {
    function getRandomCPA() {
        return (Math.random() * (4.0 - 3.5) + 3.5).toFixed(2); // Tạo số từ 2.5 đến 4.0
    }

    // Tìm phần tử chứa CPA
    const cpaElement = document.querySelector("h3:nth-of-type(2)");

    if (cpaElement && cpaElement.textContent.includes("CPA:")) {
        cpaElement.textContent = `CPA: ${getRandomCPA()}`;
    }
});

