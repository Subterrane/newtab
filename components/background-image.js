customElements.define(
  "background-image",
  class extends HTMLElement {
    constructor() {
      super();

      const background = document.createElement("div");
      background.classList.add("fullscreen");
      background.classList.add("background");

      const background_image = document.createElement("div");
      background_image.classList.add("fullscreen");
      background_image.classList.add("background_image");

      const background_opacity = document.createElement("div");
      background_opacity.classList.add("fullscreen");
      background_opacity.classList.add("background_opacity");

      var style = document.createElement("style");
      style.textContent = `.fullscreen {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
    .background {
      background-color: slategray;
      z-index: -3;
    }
    .background_image {
      background-size: cover;
      transition: opacity 500ms ease-in;
      opacity: 0;
      z-index: -2;
    }
    .background_opacity {
      background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.5),
        transparent,
        transparent
      );
      z-index: -1;
    }`;

      const shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(style);
      shadow.appendChild(background);
      shadow.appendChild(background_image);
      shadow.appendChild(background_opacity);
    }

    connectedCallback() {
      fetchImage(this);
    }
  }
);

function fetchImage(elem) {
  const shadow = elem.shadowRoot;

  fetch("https://source.unsplash.com/random?nature")
    .then(response => response.blob())
    .then(images => {
      const img = URL.createObjectURL(images);
      const el = shadow.querySelector(".background_image");
      el.style.backgroundImage = `url("${img}")`;
      el.style.opacity = 1;
    });
}
