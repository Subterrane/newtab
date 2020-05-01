class DisplayTime extends HTMLElement {
  constructor() {
    super();

    const timeEl = document.createElement("div");
    timeEl.setAttribute("class", "time");

    var style = document.createElement("style");
    style.textContent = `.time {
      width: 225px;
      color: #fff;
      font-size: 4em;
      line-height: 3.5rem;
    };`;

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(style);
    shadow.appendChild(timeEl);

    timeEl.addEventListener("click", () => {
      setTimeZone(prompt("Change Time Zone", getTimeZone() || defaultTZ));
      displayTime(this);
    });
  }

  connectedCallback() {
    setInterval(() => displayTime(this), 10 * 1000);
    displayTime(this);
  }
}

customElements.define("display-time", DisplayTime);

const defaultTZ = "America/Los_Angeles";
const getTimeZone = () => localStorage.getItem("timeZone") || defaultTZ;
const setTimeZone = tz => localStorage.setItem("timeZone", tz);

function displayTime(elem) {
  const shadow = elem.shadowRoot;

  try {
    shadow.querySelector(".time").innerHTML = new Date().toLocaleString(
      "en-US",
      {
        timeZone: getTimeZone() || defaultTZ,
        weekday: "long",
        month: "long",
        day: "2-digit",
        //year: "numeric",
        //era: "long",
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short"
      }
    );
  } catch (e) {
    console.warn(
      `${e.message} setting to "America/Los_Angeles". See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones`
    );
    setTimeZone("America/Los_Angeles");
  }
}
