//Create speedDetector Function
function speedDetector(){

    let speed = prompt('Please enter car speed:');
    
    // Check if the speed is below the speed limit of 70
    if (speed < 70) {
        console.log("Ok.");
        } 

        //Calculate demerit points based on how far off from speed limit
        else {
            let demeritPoints = 0;
            demeritPoints = Math.floor((speed - 70) / 5);

            //Display license suspended if calculated demerit points are 12 or above
            if (demeritPoints >= 12) {
              console.log("License suspended");
            }
            //Display demirit points if they are below 12 points
            else {
              console.log("Points: " + demeritPoints);
            }
          }
    }
    
    // Call the function to run the speedDector calculations and pass a test value as parameter
    speedDetector();
