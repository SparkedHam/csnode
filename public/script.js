function updateTimeAndLatencyAndNode() {
    const startTime = Date.now();
    const timeElement = document.getElementById('time');
    const latencyElement = document.getElementById('latency');
    const nodeNameElement = document.getElementById('node-name');

    timeElement.textContent = new Date().toLocaleTimeString();

    fetch('/latency')
        .then(response => response.text())
        .then(latency => {
            const latencyTime = Date.now() - startTime;
            latencyElement.textContent = `Latency: ${latencyTime} ms`;
        });

    fetch('/node-name')
        .then(response => response.text())
        .then(nodeName => {
            nodeNameElement.textContent = `Node: ${nodeName}`;
        });
}

setInterval(updateTimeAndLatencyAndNode, 1000);
updateTimeAndLatencyAndNode();
