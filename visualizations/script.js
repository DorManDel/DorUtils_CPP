/* ==========================================================
   DORUTILS VISUALIZATION HUB SCRIPT
========================================================== */

const fishLayer = document.getElementById("asciiFishLayer");
const fishToggleBtn = document.getElementById("fishToggleBtn");

if (fishLayer && fishToggleBtn) {
  let fishEnabled = true;

  fishToggleBtn.addEventListener("click", () => {
    fishEnabled = !fishEnabled;
    fishLayer.classList.toggle("is-hidden", !fishEnabled);
    fishToggleBtn.classList.toggle("is-off", !fishEnabled);
    fishToggleBtn.textContent = fishEnabled ? "Fish ON" : "Fish OFF";
    fishToggleBtn.setAttribute("aria-pressed", String(fishEnabled));
  });
}