(function () {
  function normalize(value) {
    return String(value || "").trim().toLowerCase();
  }

  function initCardSearch() {
    const input = document.getElementById("searchInput");
    const cards = Array.from(document.querySelectorAll(".codex-card"));

    if (!input || !cards.length) return;

    input.addEventListener("input", function (event) {
      const query = normalize(event.target.value);

      cards.forEach(function (card) {
        const name = normalize(card.dataset.name);
        const shouldShow = !query || name.includes(query);
        card.hidden = !shouldShow;
      });
    });
  }

  window.HoradricSearch = {
    initCardSearch: initCardSearch,
  };
})();
