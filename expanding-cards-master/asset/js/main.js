const panels = [...document.querySelectorAll(".panel")];

panels.forEach((panel) => {
  panel.addEventListener("click", (e) => {
    // To delete active class from panels while clicking
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });

    panel.classList.add("active");
  });
});
