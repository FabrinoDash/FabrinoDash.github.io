const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

const recordedVideo = document.getElementById('recordedVideo');
const loader = document.querySelector('.loader');

loader.style.display = "none";

let mediaRecorder;
let recordedChunks = [];

//default stop button
stopBtn.style.border = "3px solid red";
stopBtn.style.background = "transparent";
stopBtn.style.color = "red";
stopBtn.disabled = true;

// default recorded video screen
recordedVideo.style.display = "none";

startBtn.addEventListener('click', async () => {
    // show loader
    loader.style.display = "block";
    const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });

    mediaRecorder = new MediaRecorder(stream);
    // when done, close loader
    loader.style.display = "none";

    startBtn.style.border = "3px solid red";
    startBtn.style.background = "transparent";
    startBtn.style.color = "red";
    startBtn.innerHTML = "Recording...";
    startBtn.disabled = true;

    // stop button activated
    stopBtn.style.border = "none";
    stopBtn.style.background = "#044283";
    stopBtn.style.color = "white";
    stopBtn.disabled = false;

    mediaRecorder.ondataavailable = event => {
        if (event.data.size > 0) {
            recordedChunks.push(event.data);
        }
    };

    mediaRecorder.start();

    // When It Stops
    mediaRecorder.onstop = () => {
        const blob = new Blob(recordedChunks, { type: 'video/mp4' });
        recordedVideo.src = URL.createObjectURL(blob);
        recordedChunks = [];
    };

    // Stop Recording
    stopBtn.addEventListener('click', () => {
        mediaRecorder.stop();

        // showing video screen
        recordedVideo.style.display = "block";

        startBtn.style.border = "none";
        startBtn.style.background = "#044283";
        startBtn.style.color = "white";
        startBtn.innerHTML = "Start Recording";
        startBtn.disabled = false;

        //make as default
        stopBtn.style.border = "3px solid red";
        stopBtn.style.background = "transparent";
        stopBtn.style.color = "red";
        stopBtn.disabled = true;
    });
});