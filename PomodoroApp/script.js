let userinput;
      let time = document.getElementById("displayTime");
      let [minutes, seconds] = [0, 0];
      let timer = null;

      function updateTimer() {
        userinput = parseInt(document.getElementById("inputTime").value) || 0;
        if (userinput <= 0) {
          alert("Please enter a valid number of minutes!");
          userinput.innerText = 0;
          return;
        }
        time.innerText = (userinput < 10 ? "0" : "") + userinput + ":00";
        [minutes, seconds] = [userinput, 0];
      }
      function watchStart() {
        if (timer !== null) {
          clearInterval(timer);
        }
        timer = setInterval(() => {
          if (minutes === 0 && seconds === 0) {
            clearInterval(timer);
            alert("Times up");
            watchReset();
            return;
          }
          time.innerText =
            (minutes < 10 ? "0" : "") +
            minutes +
            ":" +
            (seconds < 10 ? "0" : "") +
            seconds;
          seconds--;
          if (seconds < 0) {
            seconds = 59;
            minutes--;
          }
        }, 1000);
      }

      function watchStop() {
        clearInterval(timer);
      }

      function watchReset() {
        clearInterval(timer);
        timer = null;
        userinput = parseInt(document.getElementById("inputTime").value) || 0;
        [minutes, seconds] = [userinput, 0];
        time.innerText = (userinput < 10 ? "0" : "") + userinput + ":00";
      }