(function () {
  document.querySelectorAll("[data-offcanvas-id]").forEach(function (entry) {
    entry.addEventListener("click", function (e) {
      //   e.preventDefault();
      let id = this.getAttribute("data-offcanvas-id");
      let offcanvas = document.getElementById(id);
      if (offcanvas) {
        offcanvas.classList.toggle("active");
      }

      document.body.classList.toggle("offcanvas-opened");
    });
  });
})();
