function burger_menu() {
  const menu = document.querySelector(".burger-menu");
  const burger = document.querySelector(".burger-menu-button");
  const close_btn = document.querySelector(".close-btn");
  const nav_menu = document.querySelector(".menu");
  menu.style.display = "none";
  burger.addEventListener("click", () => {
    if (menu.style.display == "flex") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    }
  });
  close_btn.addEventListener("click", () => {
    if (menu.style.display == "flex") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    }
  });
  nav_menu.addEventListener("click", () => {
    if (menu.style.display == "flex") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    }
  });
}

burger_menu();
