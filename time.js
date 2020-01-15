const displayTime = () =>
  (document.getElementById("time").innerHTML = new Date().toLocaleTimeString(
    "en-US",
    {
      timeZone: "America/Los_Angeles",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "2-digit",
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short"
    }
  ));

setInterval(() => displayTime(), 10 * 1000);
displayTime();
