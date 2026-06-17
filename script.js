const slider = document.getElementById("volumeSlider");
const volumeValue = document.getElementById("volumeValue");

slider.addEventListener("input", () => {
    volumeValue.textContent =
        `Volume: ${slider.value}%`;
});
