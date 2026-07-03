(function () {
  const UNKNOWN_CARD_NAME = "Unknown";
  const state = {
    selectedCard: null,
  };

  function renderDetail(detailBody, name) {
    detailBody.textContent = "";

    if (!name) {
      const emptyText = document.createElement("p");
      emptyText.textContent = "Select a card to inspect future recipe details.";
      detailBody.appendChild(emptyText);
      return;
    }

    const title = document.createElement("p");
    const strong = document.createElement("strong");
    strong.textContent = name;
    title.appendChild(strong);

    const description = document.createElement("p");
    description.textContent = "Recipe data will appear here in a future iteration.";

    detailBody.appendChild(title);
    detailBody.appendChild(description);
  }

  function initSidebarToggle() {
    const sidebar = document.getElementById("sidebar");
    const sidebarToggle = document.getElementById("sidebarToggle");

    if (!sidebar || !sidebarToggle) return;

    sidebarToggle.addEventListener("click", function () {
      sidebar.classList.toggle("is-open");
    });
  }

  function initCardSelection() {
    const actionButtons = Array.from(document.querySelectorAll(".codex-card footer .text-button"));
    const detailBody = document.getElementById("detailBody");
    const clearDetail = document.getElementById("clearDetail");

    if (!actionButtons.length || !detailBody || !clearDetail) return;

    actionButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const card = button.closest(".codex-card");
        if (!card) return;
        state.selectedCard = card.dataset.name || UNKNOWN_CARD_NAME;
        renderDetail(detailBody, state.selectedCard);
      });
    });

    clearDetail.addEventListener("click", function () {
      state.selectedCard = null;
      renderDetail(detailBody, state.selectedCard);
    });
  }

  window.HoradricUI = {
    initSidebarToggle: initSidebarToggle,
    initCardSelection: initCardSelection,
  };
})();
