export const scrollTo = (toElement) => {
  const element = document.getElementById(toElement);
  if (element) {
    const headerHeight = document.querySelector("header").clientHeight;
    const topOfDiv = element.getBoundingClientRect().top;
    window.scrollTo({
      top: topOfDiv + window.scrollY - headerHeight,
      behavior: "smooth",
    });
  }
};
