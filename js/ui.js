(function () {
  const state = {
    selectedCard: null,
  };

  function initSidebarToggle() {
    const sidebar = document.getElementById("sidebar");
    const sidebarToggle = document.getElementById("sidebarToggle");

    if (!sidebar || !sidebarToggle) return;

    sidebarToggle.addEventListener("click", function () {
      sidebar.classList.toggle("is-open");
    });
  }

  function initCardSelection() {
    const cards = Array.from(document.querySelectorAll(".codex-card"));
    const detailBody = document.getElementById("detailBody");
    const clearDetail = document.getElementById("clearDetail");

    if (!cards.length || !detailBody || !clearDetail) return;

    cards.forEach(function (card) {
      card.addEventListener("click", function () {
        state.selectedCard = card.dataset.name || "Unknown";
        detailBody.innerHTML = "<p><strong>" + state.selectedCard + "</strong></p><p>Recipe data will appear here in a future iteration.</p>";
      });
    });

    clearDetail.addEventListener("click", function () {
      state.selectedCard = null;
      detailBody.innerHTML = "<p>Select a card to inspect future recipe details.</p>";
    });
  }

  window.HoradricUI = {
    initSidebarToggle: initSidebarToggle,
    initCardSelection: initCardSelection,
  };
})();
