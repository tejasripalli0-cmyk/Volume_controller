const slider = document.getElementById("volumeSlider");
const volumeValue = document.getElementById("volumeValue");
const audio = document.getElementById("audio");

audio.volume = 0.5;

slider.addEventListener("input", () => {

    const volume = slider.value / 100;

    audio.volume = volume;

    volumeValue.textContent =
        `Volume: ${slider.value}%`;
});
