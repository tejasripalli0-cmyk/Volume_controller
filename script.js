const slider = document.getElementById("volumeSlider");
const volumeValue = document.getElementById("volumeValue");
const audio = document.getElementById("audio");

slider.addEventListener("input", () => {

    volumeValue.textContent =
        `Volume: ${slider.value}%`;

    audio.volume = slider.value / 100;
});
