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
  });
})(jQuery);
