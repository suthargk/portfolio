export const setDarkModeFunc = (darkMode, darkTheme) => {
  if (!darkMode) {
    document.body.classList.remove(...document.body.classList);
    document.body.style.backgroundColor = "unset";
  } else {
    document.body.classList.add(darkTheme);
    document.body.style.backgroundColor = "#000";
  }
};
