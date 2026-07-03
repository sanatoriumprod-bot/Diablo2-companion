(function () {
  function boot() {
    if (window.HoradricUI) {
      window.HoradricUI.initSidebarToggle();
      window.HoradricUI.initCardSelection();
    }

    if (window.HoradricSearch) {
      window.HoradricSearch.initCardSearch();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
