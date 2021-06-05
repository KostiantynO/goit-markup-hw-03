(() => {
  /* Hru-hru Dark-Magic: */
  const constDarkMagic = {
    comeToTheDarkSideBtn: document.querySelector("[data-dark-side]"),
    comeToTheLightSideBtn: document.querySelector("[data-light-side]"),
    pageBackgroundToggle: document.querySelector("[data-choose-side]"),
  };

  constDarkMagic.comeToTheDarkSideBtn.addEventListener("click", useForce);
  constDarkMagic.comeToTheLightSideBtn.addEventListener("click", useForce);

  function useForce() {
    constDarkMagic.comeToTheDarkSideBtn.classList.toggle("is-hidden");
    constDarkMagic.comeToTheLightSideBtn.classList.toggle("is-hidden");
    constDarkMagic.pageBackgroundToggle.classList.toggle("dark-side");
    constDarkMagic.pageBackgroundToggle.classList.toggle("light-side");
  }
})();
