fetch("https://source.unsplash.com/random?nature")
  .then(response => response.blob())
  .then(images => {
    const img = URL.createObjectURL(images);
    const el = document.getElementById("background");
    el.style.backgroundImage = `url("${img}")`;
    el.style.opacity = 1;
  });
