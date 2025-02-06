function dropdown() {
  const nav_links = document.querySelector(".nav-links");
  const navbar = document.querySelector(".navbar");

  if (nav_links.style.display === "flex") {
    nav_links.style.display = "none";
  } else {
    nav_links.style.display = "flex";
  }

  if(navbar.style.position === "fixed") {
    navbar.style.position = "static";
    navbar.style.height = "auto";
  } else {
    navbar.style.position = "fixed";
    navbar.style.height = "100vh"
  }
}