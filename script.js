const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

if (menuToggle && primaryNav) {
  const setMenuOpen = (isOpen) => {
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    primaryNav.classList.toggle("is-open", isOpen);
  };

  menuToggle.addEventListener("click", () => {
    setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
  });

  primaryNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenuOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });
}

const toolFilter = document.querySelector(".tool-filter");
const toolCards = document.querySelectorAll(".tool-card");
const filterStatus = document.querySelector(".filter-status");

if (toolFilter && toolCards.length && filterStatus) {
  toolFilter.hidden = false;
  toolFilter.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-filter]");
    if (!button) return;

    const category = button.dataset.filter;
    toolFilter.querySelectorAll("button").forEach((item) => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    toolCards.forEach((card) => {
      card.hidden = category !== "all" && card.dataset.category !== category;
    });
    filterStatus.textContent = category === "all" ? "Showing all tool categories." : `Showing ${button.textContent.trim()} tools.`;
  });
}

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());
