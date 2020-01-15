const getLinks = () => JSON.parse(localStorage.getItem("links"));
const setLinks = links => localStorage.setItem("links", JSON.stringify(links));
const linksEl = document.getElementById("links");

const displayLinks = () => {
  let links = getLinks();
  if (!links) {
    links = ["https://github.com/Subterrane/newtab"];
    setLinks(links);
  }

  linksEl.innerHTML = "";
  links.forEach(link => {
    const img_src = new URL("https://www.google.com/s2/favicons");
    img_src.search = `domain=${new URL(link).host}`;

    const img = document.createElement("img");
    img.src = img_src.href;

    const a = document.createElement("a");
    a.classList = "link";
    a.href = link;

    a.appendChild(img);
    linksEl.appendChild(a);
  });
};

displayLinks();

const helpText = `a - add link\nd - delete link`;

document.addEventListener("keypress", keyEvent => {
  const links = getLinks();

  switch (keyEvent.key) {
    case "a":
      try {
        const new_url = prompt("New Link URL");
        const url = new URL(new_url).href;
        if (url) links.push(url);
        setLinks(links);
        displayLinks();
      } catch (_err) {}
      break;
    case "d":
      const list = links.reduce((acc, cur, idx) => {
        acc += `${idx} - ${cur}\n`;
        return acc;
      }, "Delete URL:\n");
      const rem_idx = parseInt(prompt(list));
      const new_links = getLinks().reduce((acc, cur, idx) => {
        if (idx !== rem_idx) acc.push(cur);
        return acc;
      }, []);
      setLinks(new_links);
      displayLinks();
      break;
    case "?":
      alert(helpText);
      break;
    default:
      console.log("unknown key");
  }
});
