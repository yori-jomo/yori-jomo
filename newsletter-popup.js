
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("yoriPopup");
  const backdrop = document.getElementById("yoriPopupBackdrop");
  const closeButton = document.getElementById("yoriPopupClose");
  const form = document.getElementById("yoriPopupForm");

  if (!popup || !backdrop || !closeButton) return;

  let previouslyFocused = null;

  function openPopup() {
    previouslyFocused = document.activeElement;
    popup.classList.add("is-visible");
    backdrop.classList.add("is-visible");
    popup.setAttribute("aria-hidden", "false");
    closeButton.focus();
  }

  function closePopup() {
    popup.classList.remove("is-visible");
    backdrop.classList.remove("is-visible");
    popup.setAttribute("aria-hidden", "true");
    previouslyFocused?.focus?.();
  }

  closeButton.addEventListener("click", closePopup);
  backdrop.addEventListener("click", closePopup);

  document.addEventListener("keydown", (event) => {
    if (!popup.classList.contains("is-visible")) return;

    if (event.key === "Escape") closePopup();

    if (event.key === "Tab") {
      const focusable = [...popup.querySelectorAll(
        'button, input, a[href]'
      )].filter((element) => !element.disabled);

      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
  });


  const loginOverlay = document.querySelector("iform-login");

  if (!loginOverlay) {
    openPopup();
  } else {
    const observer = new MutationObserver(() => {
      const style = getComputedStyle(loginOverlay);
      const hidden =
        !loginOverlay.isConnected ||
        style.display === "none" ||
        style.visibility === "hidden";

      if (hidden) {
        observer.disconnect();
        openPopup();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["style", "class", "hidden"]
    });
  }
});
