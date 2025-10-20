let [seconds, minutes, hours] = [0,0,0];
        let hrs = document.getElementById("hrs");
        let mins = document.getElementById("min");
        let sec = document.getElementById("sec");
        let timer = null

        function watchStart() {

            if (timer !== null) {
                clearInterval(timer);
            }
        timer = setInterval(()=>{
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes++;
                if (minutes == 60) {
                    minutes = 0;
                    hours++;
                }
            }
            hrs.innerText = ((hours < 10) ? "0" : "") + hours;
        mins.innerText = ((minutes < 10) ? "0" : "") + minutes;
        sec.innerText = ((seconds < 10) ? "0" : "") + seconds;
        }, 1000);

    }

    function watchStop() {
        clearInterval(timer);
    }

    function watchReset() {
        clearInterval(timer);
        [hours, minutes, seconds] = [0,0,0];
        hrs.innerText = "00";
        mins.innerText = "00";
        sec.innerText = "00";
    }