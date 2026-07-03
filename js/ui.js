(function () {
  const UNKNOWN_CARD_NAME = "Unknown";
  const state = {
    selectedCard: null,
  };

  function renderDetail(detailBody, name) {
    detailBody.textContent = "";

    if (!name) {
      const emptyText = document.createElement("p");
      emptyText.textContent = "Select a recipe card to inspect runes and forged attributes.";
      detailBody.appendChild(emptyText);
      return;
    }

    const title = document.createElement("h3");
    title.textContent = name;

    const base = document.createElement("p");
    base.textContent = "Base Type: Socketed Item";

    const runes = document.createElement("p");
    runes.textContent = "Runes: (placeholder) — integrated data arrives in next iteration.";

    const flavor = document.createElement("p");
    flavor.textContent = "Inspection feed displays handcrafted item properties and cube notes.";

    detailBody.appendChild(title);
    detailBody.appendChild(base);
    detailBody.appendChild(runes);
    detailBody.appendChild(flavor);
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
