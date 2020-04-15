const getTimeZone = () =>
  localStorage.getItem("timeZone") || "America/Los_Angeles";
const setTimeZone = tz => localStorage.setItem("timeZone", tz);

const displayTime = () => {
  try {
    document.getElementById("time").innerHTML = new Date().toLocaleString(
      "en-US",
      {
        timeZone: getTimeZone(),
        weekday: "long",
        month: "long",
        day: "2-digit"
      }
    );
  } catch (e) {
    console.warn(`${e.message} setting to "America/Los_Angeles". See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones`);
    setTimeZone("America/Los_Angeles");
  }
};
setInterval(() => displayTime(), 10 * 1000);
displayTime();

document.getElementById("time_zone").addEventListener("click", () => {
  setTimeZone(prompt("Change Time Zone", getTimeZone()));
  displayTime();
});
