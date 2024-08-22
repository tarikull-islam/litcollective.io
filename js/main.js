function flyMenuToggle() {
  document.body.classList.toggle("fly-menu");
}
(function ($) {
  $(document).ready(function ($) {
    //! WINDOW FLY MENU HANDLE
    function flyMenuHandle() {
      $("body").removeClass("fly-menu");
    }
    $(window).resize(function () {
      const currentWidth = $(window).width();
      if (currentWidth > 768) {
        flyMenuHandle();
      }
    });
    // ! ------------------------
    function langHandle() {
      const languageState = localStorage.getItem("lag");
      const flagState = localStorage.getItem("flag");
      if (languageState) {
        $(".select-btn .selected-text")[0].innerText = languageState;
        $(".select-btn .selected-flag").attr("src", flagState);
      }
    }
    // ! ------------------
    langHandle();
    function linkHandle() {
      document.body.classList.remove("fly-menu");
    }
    $(".nav-link").click(function () {
      linkHandle();
    });
    // ! --------------
    function languageSelect() {
      $(".option").click(function (e) {
        $(".select-btn .selected-text")[0].innerText = e.target.innerText;
        $(".select-btn .selected-flag").attr(
          "src",
          e.currentTarget.children[0].getAttribute("src")
        );
        localStorage.setItem("lag", e.target.innerText);
        localStorage.setItem(
          "flag",
          e.currentTarget.children[0].getAttribute("src")
        );
      });
    }
    languageSelect();
  });
})(jQuery);
