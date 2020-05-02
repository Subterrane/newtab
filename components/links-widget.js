customElements.define(
  "links-widget",
  class extends HTMLElement {
    constructor() {
      super();

      const widget_wrapper = document.createElement("div");
      widget_wrapper.classList.add("links");

      const links_wrapper = document.createElement("div");
      links_wrapper.classList.add("links_wrapper");

      const add = document.createElement("div");
      add.classList.add("control");
      add.classList.add("add");
      add.innerHTML = "+";

      const remove = document.createElement("div");
      remove.classList.add("control");
      remove.classList.add("remove");
      remove.innerHTML = "-";

      var style = document.createElement("style");
      style.textContent = `.links {
      min-width: 60px;
      margin-bottom: 10px;
    }
    .links_wrapper {
      min-height: 60px;
    }
    .link {
      display: inline-block;
      position: relative;
      width: 50px;
      height: 50px;
      background-color: rgba(255, 255, 255, 0.85);
      text-decoration: none;
      color: black;
      border-radius: 5px;
      margin: 0 10px 10px 0;
    }
    .link img {
      display: block;
      width: 16px;
      height: 16px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%);
    }
    .control {
      display: inline-block;
      position: relative;
      width: 20px;
      height: 20px;
      line-height: 18px;
      background-color: rgb(255, 255, 255);
      text-decoration: none;
      color: black;
      border-radius: 10px;
      text-align: center;
      font-family: Helvetica, sans-serif;
      font-weight: bold;
      font-size: 14px;
      vertical-align: middle;
      opacity: 0.4;
      cursor: pointer;
      margin-right: 3px;
    }`;

      const shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(style);
      shadow.appendChild(widget_wrapper);

      widget_wrapper.appendChild(links_wrapper);
      widget_wrapper.appendChild(add);
      widget_wrapper.appendChild(remove);

      add.addEventListener("click", () => addLink(this));
      remove.addEventListener("click", () => removeLink(this));
    }

    connectedCallback() {
      displayLinks(this);
    }
  }
);

function displayLinks(elem) {
  const shadow = elem.shadowRoot;
  const el = shadow.querySelector(".links_wrapper");
  const key = getStorageKey(elem);

  let links = fetchLinksFromStorage(key);

  // clear it first
  el.innerHTML = "";

  //add them in
  links.forEach(link => {
    const a = document.createElement("a");
    a.classList = "link";
    a.href = link;

    const img = document.createElement("img");
    img.src = getFaviconUrl(link);

    a.appendChild(img);
    el.appendChild(a);
  });
}

function getStorageKey(elem) {
  return elem.hasAttribute("key") ? elem.getAttribute("key") : "default_links";
}

function getLinks(storageKey) {
  return JSON.parse(localStorage.getItem(storageKey));
}

function setLinks(storageKey, links) {
  return localStorage.setItem(storageKey, JSON.stringify(links));
}

function getFaviconUrl(linkUrl) {
  const img_src = new URL("https://www.google.com/s2/favicons");
  img_src.search = `domain=${new URL(linkUrl).host}`;
  return img_src.href;
}

function fetchLinksFromStorage(storageKey) {
  let links = getLinks(storageKey);

  if (!links) {
    links = ["https://github.com/Subterrane/newtab"];
    setLinks(storageKey, links);
  }

  return links;
}

function addLink(elem) {
  const key = getStorageKey(elem);

  try {
    const links = fetchLinksFromStorage(key);
    const new_url = prompt("Add Link URL");
    const url = new URL(new_url);
    const href = url.href;
    if (href) links.push(href);
    setLinks(key, links);
    displayLinks(elem);
  } catch (err) {
    console.error("Try adding a Fully Qualfied URL (ex: https://example.com)");
  }
}

function removeLink(elem) {
  const key = getStorageKey(elem);

  const links = fetchLinksFromStorage(key);
  const list = links.reduce((acc, cur, idx) => {
    acc += `${idx} → ${cur}\n`;
    return acc;
  }, "Remove Link (Choose ID):\n");
  const rem_idx = parseInt(prompt(list));
  const new_links = links.filter((_link, idx) => idx !== rem_idx);
  setLinks(key, new_links);
  displayLinks(elem);
}
