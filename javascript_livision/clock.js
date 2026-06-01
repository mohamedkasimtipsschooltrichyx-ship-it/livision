  function Clock() {
      const now = new Date();

      // Hours, minutes, seconds
      let hours = now.getHours();
      let minutes = String(now.getMinutes()).padStart(2, '0');
      let seconds = String(now.getSeconds()).padStart(2, '0');

      // AM/PM
      let ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;

      // Automatically detect system time zone abbreviation
      const formatter = new Intl.DateTimeFormat(undefined, {
        timeZoneName: "short"
      });
      const tz = formatter.formatToParts(now).find(p => p.type === "timeZoneName").value;

      // Display formatted time with zone
      document.getElementById('clock').textContent =
        `${hours}:${minutes}:${seconds} ${ampm} ${tz}`;
    }

    setInterval(Clock, 1000);
    Clock(); // initial call
