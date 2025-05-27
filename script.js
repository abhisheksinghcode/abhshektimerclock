let timer;
        let seconds = 0;

        function startTimer() {
            clearInterval(timer);
            timer = setInterval(updateClock, 1000);
        }

        function resetTimer() {
            clearInterval(timer);
            seconds = 0;
            document.getElementById('time').textContent = "00:00:00";
        }

        function updateClock() {
            seconds++;
            let hrs = Math.floor(seconds / 3600);
            let mins = Math.floor((seconds % 3600) / 60);
            let secs = seconds % 60;
            document.getElementById('time').textContent =
                (hrs < 10 ? "0" : "") + hrs + ":" + 
                (mins < 10 ? "0" : "") + mins + ":" + 
                (secs < 10 ? "0" : "") + secs;
        }