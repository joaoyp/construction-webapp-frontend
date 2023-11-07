export const scrollToDemoProjects = () => {
  const demoProjectsElement = document.getElementById("demo-projects");
  if (demoProjectsElement) {
    const headerHeight = document.querySelector("header").clientHeight;
    const topDemoProjects = demoProjectsElement.getBoundingClientRect().top;
    window.scrollTo({
      top: topDemoProjects + window.scrollY - headerHeight,
      behavior: "smooth",
    });
  }
};
