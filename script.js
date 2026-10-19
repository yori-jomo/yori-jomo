const searchToggle = document.querySelector(".header-navigation__search-toggle");
const searchForm = document.querySelector(".header-search");
const searchInput = document.querySelector("#site-search-input");
const menuToggle = document.querySelector(".header-navigation__menu-toggle");
const navigationLinks = document.querySelector(".header-navigation__links");
const productCards = [...document.querySelectorAll(".product-card")];
const newsletterForm = document.querySelector(".newsletter-form");
const newsletterStatus = document.querySelector(".newsletter-form__status");

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  newsletterStatus.textContent = "Newsletter signup is not connected yet.";
});

searchToggle.addEventListener("click", () => {
  const isOpen = searchToggle.getAttribute("aria-expanded") === "true";
  searchToggle.setAttribute("aria-expanded", String(!isOpen));
  searchForm.hidden = isOpen;

  if (isOpen) {
    searchInput.value = "";
    productCards.forEach((card) => {
      card.hidden = false;
    });
  } else {
    searchInput.focus();
  }
});

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLocaleLowerCase();
  productCards.forEach((card) => {
    card.hidden = !card.textContent.toLocaleLowerCase().includes(query);
  });
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    searchToggle.click();
    searchToggle.focus();
  }
});

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  navigationLinks.classList.toggle("is-open", !isOpen);
});

navigationLinks.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    menuToggle.setAttribute("aria-expanded", "false");
    navigationLinks.classList.remove("is-open");
  }
});

menuToggle.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    menuToggle.setAttribute("aria-expanded", "false");
    navigationLinks.classList.remove("is-open");
    menuToggle.focus();
  }
});

navigationLinks.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    menuToggle.setAttribute("aria-expanded", "false");
    navigationLinks.classList.remove("is-open");
    menuToggle.focus();
  }
});
