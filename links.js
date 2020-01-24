const linkContainers = document.getElementsByClassName("links");

for (let container of linkContainers) {
  const storageKey = container.getAttribute("id");
  addButtonHandlers(storageKey, container);
  displayLinks(storageKey, container);
}

function addButtonHandlers(storageKey, parentElement) {
  parentElement.querySelector(".add").addEventListener("click", () => {
    addLink(storageKey, parentElement);
  });
  parentElement.querySelector(".remove").addEventListener("click", () => {
    removeLink(storageKey, parentElement);
  });
}

function displayLinks(storageKey, parentElement) {
  let links = fetchLinksFromStorage(storageKey);
  parentElement.firstElementChild.innerHTML = "";
  links.forEach(link => addLinkToDom(link, parentElement.firstElementChild));
}

function addLink(storageKey, parentElement) {
  try {
    const links = fetchLinksFromStorage(storageKey);
    const new_url = prompt("Add Link URL");
    const url = new URL(new_url);
    const href = url.href;
    if (href) links.push(href);
    setLinks(storageKey, links);
    displayLinks(storageKey, parentElement);
  } catch (err) {
    console.error("Try adding a Fully Qualfied URL (ex: https://example.com)");
  }
}

function removeLink(storageKey, parentElement) {
  const links = fetchLinksFromStorage(storageKey);
  const list = links.reduce((acc, cur, idx) => {
    acc += `${idx} → ${cur}\n`;
    return acc;
  }, "Remove Link (Choose ID):\n");
  const rem_idx = parseInt(prompt(list));
  const new_links = links.filter((_link, idx) => idx !== rem_idx);
  setLinks(storageKey, new_links);
  displayLinks(storageKey, parentElement);
}

function getLinks(storageKey) {
  return JSON.parse(localStorage.getItem(storageKey));
}

function setLinks(storageKey, links) {
  return localStorage.setItem(storageKey, JSON.stringify(links));
}

function addLinkToDom(linkUrl, parentElement) {
  const a = document.createElement("a");
  a.classList = "link";
  a.href = linkUrl;

  const img = document.createElement("img");
  img.src = getFaviconUrl(linkUrl);

  a.appendChild(img);
  parentElement.appendChild(a);
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
