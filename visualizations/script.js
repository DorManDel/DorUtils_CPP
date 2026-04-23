/*======================================================================
  DorUtils Homepage Script
  Purpose:
  - animate favicon gently
  - keep homepage behavior simple and maintainable
======================================================================*/

const faviconFrames = [
  "./images/favicon-main-1.png",
  "./images/favicon-main-1.png",
  "./images/favicon-main-1.png"
];

let faviconIndex = 0;
const faviconEl = document.getElementById("site-favicon");

/* -------------------------------------------------------------
   Summary:
   Rotate favicon frames every few seconds to simulate animation.
------------------------------------------------------------- */
function animateFavicon() {
  if (!faviconEl) return;

  faviconIndex = (faviconIndex + 1) % faviconFrames.length;
  faviconEl.href = faviconFrames[faviconIndex] + "?v=" + Date.now();
}

setInterval(animateFavicon, 1800);