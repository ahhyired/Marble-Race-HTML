document.addEventListener("DOMContentLoaded", function() {
  const track = document.querySelector(".track");
  
  // Create marbles and add them to the track
  const numberOfMarbles = 5;
  for (let i = 0; i < numberOfMarbles; i++) {
    const marble = document.createElement("div");
    marble.classList.add("marble");
    track.appendChild(marble);
  }
  
  // Race the marbles down the track
  const marbles = document.querySelectorAll(".marble");
  marbles.forEach(function(marble) {
    let position = 0;
    let speed = Math.random() * 2 + 1; // Random speed between 1 and 3
    
    const race = setInterval(function() {
      position += speed;
      marble.style.transform = `translateX(${position}px)`;
      
      // Check if the marble has reached the end of the track
      if (position >= track.offsetWidth) {
        clearInterval(race);
        console.log("Marble finished the race!");
      }
    }, 10);
  });
});
