const toggleTheme = () => {
  document.body.classList.toggle("dark-theme");
};

window.addEventListener("load", () => {
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.addEventListener("click", () => {
      hero.classList.toggle("hero--active");
    });
  }
});
