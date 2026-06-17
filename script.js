const slider = document.getElementById("volumeSlider");
const volumeValue = document.getElementById("volumeValue");

slider.addEventListener("input", () => {

    volumeValue.textContent =
        `Volume: ${slider.value}%`;

    const audioContext =
        new (window.AudioContext || window.webkitAudioContext)();

    const oscillator =
        audioContext.createOscillator();

    const gain =
        audioContext.createGain();

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    gain.gain.value =
        slider.value / 100;

    oscillator.frequency.value = 440;

    oscillator.start();

    oscillator.stop(
        audioContext.currentTime + 0.1
    );
});
