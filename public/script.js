function updateTimeAndLatency() {
    const startTime = Date.now();
    const timeElement = document.getElementById('time');
    const latencyElement = document.getElementById('latency');

    timeElement.textContent = new Date().toLocaleTimeString();

    fetch('/latency')
        .then(response => response.text())
        .then(latency => {
            const latencyTime = Date.now() - startTime;
            latencyElement.textContent = `Latency: ${latencyTime} ms`;
        });
}

setInterval(updateTimeAndLatency, 1000);
updateTimeAndLatency();
