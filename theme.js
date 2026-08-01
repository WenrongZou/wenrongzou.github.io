// Click handler for the light/dark button in the nav.
// The matching no-flash snippet lives inline in the <head> of every page —
// it has to run before first paint, so it cannot live in this file.
document.getElementById("theme-toggle").addEventListener("click", function () {
  var root = document.documentElement;
  var current =
    root.getAttribute("data-theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  var next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});
