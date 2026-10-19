
class Login extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400&family=Instrument+Sans:wght@400&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="login.css">

      <style>
        :host {
          display: block;
          position: fixed;
          inset: 0;
          z-index: 9999;
          --color-background: #fdfbf9;
          --color-navy: #323951;
          --color-text: #000;
          --font-body: "Instrument Sans", sans-serif;
          --font-mono: "IBM Plex Mono", monospace;
        }

        *, *::before, *::after {
          box-sizing: border-box;
        }

        .password-page {
          min-height: 100dvh;
          background: #fdfbf9;
          color: #000;
          font-family: var(--font-body);
          font-size: 16px;
          font-weight: 400;
        }

        button, input {
          font: inherit;
        }

        .password-access__error[hidden] {
          display: none;
        }
      </style>

      <main class="password-page">
        <section class="password-access" aria-labelledby="password-prompt">
          <div class="password-access__logo">
            <img src="assets/password-page-logo.svg" alt="Yori Jomo">
          </div>

          <p class="password-access__prompt" id="password-prompt">
            Please enter the password to access
          </p>

          <p class="password-access__error" id="password-error" role="alert" hidden>
            Incorrect password. Please try again.
          </p>

          <form class="password-access__form">
            <label class="visually-hidden" for="site-password">
              Password
            </label>

            <input
              class="password-access__input"
              id="site-password"
              name="password"
              type="password"
              placeholder="Password"
              autocomplete="current-password"
              required
            >

            <button
              class="password-access__submit"
              type="submit"
              aria-label="Submit password"
            >
              <img src="assets/password-page-arrow.svg" alt="">
            </button>
          </form>
        </section>
      </main>
    `;

    const form = this.shadowRoot.querySelector("form");
    const input = this.shadowRoot.querySelector("#site-password");
    const error = this.shadowRoot.querySelector("#password-error");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (input.value === "ek") {
        document.querySelector("#totally-delete-me")?.remove();
      } else {
        error.hidden = false;
        input.value = "";
        input.focus();
      }
    });
  }
}

customElements.define("iform-login", Login);

window.addEventListener("load", () => {
  const div = document.createElement("div");

  div.id = "totally-delete-me";
  div.style.position = "fixed";
  div.style.inset = "0";
  div.style.zIndex = "9999";

  div.innerHTML = "<iform-login></iform-login>";
  document.body.prepend(div);
});
