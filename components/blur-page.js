customElements.define(
  "blur-page",
  class extends HTMLElement {
    constructor() {
      super();
      window.onload = _event => document.body.blur();
    }
  }
);
