const sections = document.querySelectorAll(".screen");
const links = document.querySelectorAll(".side-menu-link");

const cb = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
      links.forEach((link) => link.classList.remove("link-active"));

      const activeId = entry.target.id;
      const activeLink = document.querySelector(
        `.side-menu-link[href="#${activeId}"]`
      );

        activeLink.classList.add("link-active");

    }
  });
};

const sectionObserver = new IntersectionObserver(cb, {
  threshold: [0.2, 0.5, 0.8]
});

sections.forEach((sec) => {
  sectionObserver.observe(sec);
});


