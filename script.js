document.addEventListener("DOMContentLoaded", () => {
    const clockElement = document.getElementById("retro-clock");
    
    // Function to update the clock every second
    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        // Add leading zeroes to minutes and seconds if needed
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        // Format the time like a retro digital clock (e.g., 12:05:09)
        const timeString = `${hours}:${minutes}:${seconds}`;

        // Update the clock element with the formatted time
        clockElement.textContent = timeString;
    }

    // Update the clock every second
    setInterval(updateClock, 1000);

    // Start the clock immediately
    updateClock();
});

window.addEventListener('scroll', function() {
    var littlefella = document.querySelector('.littlefella');
    var scrollPosition = window.scrollY || window.pageYOffset;
    if (scrollPosition > 300) { // Adjust the value as needed
      littlefella.style.opacity = '0';
    } else {
      littlefella.style.opacity = '1';
    }
  });