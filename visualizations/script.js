// Reserved for future homepage animations.
// Keeping this file intentionally minimal for now.

const faviconFrames = [
  "./images/favicon-main.png",
  "./images/favicon-main.png"
];

let faviconIndex = 0;
const favicon = document.querySelector("link[rel='icon']");

setInterval(() => {
  if (!favicon) return;
  faviconIndex = (faviconIndex + 1) % faviconFrames.length;
  favicon.href = faviconFrames[faviconIndex] + "?v=" + Date.now();
}, 2200);