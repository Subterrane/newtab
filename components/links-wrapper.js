customElements.define(
  "links-wrapper",
  class extends HTMLElement {
    constructor() {
      super();

      let shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(tmpl.content.cloneNode(true));
    }
  }
);

const tmpl = document.createElement("template");
tmpl.innerHTML = `
  <slot></slot>
`;
