//Challenge 2: Speed Detector
function speedDetector(speed){
    
    // Check if the speed is within the speed limit of 70
    if (speed < 70) {
        console.log("Ok.");
        } 
        else {
            let demeritPoints = 0;
            demeritPoints = Math.floor((speed - 70) / 5);

            if (demeritPoints >= 12) {
              console.log("License suspended");
            } else {
              console.log("Points: " + demeritPoints);
            }
          }
    }
    
    // Call the function to start the grading process
    speedDetector(80);
