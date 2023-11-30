// Add an event listener for when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Grab references to the buttons and display elements in the HTML
    var toggleButton = document.getElementById('toggleButton');
    var autoButtonDisplay = document.getElementById('autoModeButton');
    var manualIndicator = document.getElementById('manualIndicator');
    var autoModeIndicator = document.getElementById('autoModeIndicator');
    var autoModeButton = document.getElementById('autoModeButton');
    var ledButton = document.getElementById('toggleButton');

    // Variable to store the time gap
    var timeGap; 


     // defines a function to update the Auto Mode state display and button text
    function updateAutoModeState(state) {
        // Update the text content depending on the auto mode state (true/false)
        autoButtonDisplay.textContent = state ? 'On' : 'Off';
        // Update the classes for styling the Auto Mode indicator and button
        if(state) {
            autoModeIndicator.classList.remove('led-off');
            autoModeIndicator.classList.add('led-on');
            autoModeButton.classList.add('btn-success');
        } else {
            autoModeIndicator.classList.remove('led-on');
            autoModeIndicator.classList.add('led-off');
            autoModeButton.classList.remove('btn-success');
        }
    }


    
    // defines a function to update the LED state display and indicator on the page
    function updateLedState(state) {
        // Update the text content depending on the state (true/false)
        ledButton.textContent = state ? 'On' : 'Off';
        // Update the classes for styling the LED indicator and toggle button
        if(state) {
            manualIndicator.classList.remove('led-off');
            manualIndicator.classList.add('led-on');
            toggleButton.classList.add('btn-success');
        } else {
            manualIndicator.classList.remove('led-on');
            manualIndicator.classList.add('led-off');
            toggleButton.classList.remove('btn-success');
        }
    }

   

    // fetches the photoresistor's state and updates the led
    function pollLdrAndUpdateLed() {
        // Make a GET request to the server endpoint
        fetch('/lightcontrol/control_led_with_ldr/', { method: 'GET' })
            .then(response => response.json()) // Parse the JSON response
            .then(data => {
                // Update the LED state based on the response
                updateLedState(data.led_state);
            })
            .catch((error) => {
                // Log any errors to the console
                console.error('Error:', error);
            });
    }

    

    // Upon clicking the auto mode
    autoModeButton.addEventListener('click', function() {
        // Make a GET request to toggle the auto mode on or off
        fetch('/lightcontrol/toggle_auto_mode/', { method: 'GET' })
            .then(response => response.json()) // Parse the JSON response
            .then(data => {
                // Update the Auto Mode state based on the response
                updateAutoModeState(data.auto_mode);
                if (data.auto_mode) {
                    // If Auto Mode is turned on, start polling at intervals
                    // refreshes eery half second for faster response
                    timeGap = setInterval(pollLdrAndUpdateLed, 500); 
                } else {
                    // If Auto Mode is turned off, stop polling
                    clearInterval(timeGap);
                }
            })
            .catch((error) => {
                // Log any errors to the console
                console.error('Error:', error);
            });
    });



    // upon clicking the manual mode
    toggleButton.addEventListener('click', function() {
        // get request to switch the LED on or off
        fetch('/lightcontrol/toggle/', { method: 'GET' })
            .then(response => response.json()) // Parse the JSON response
            .then(data => {
                // updates the LED state based on the led's status
                updateLedState(data.led_state);
            })
            .catch((error) => {
                // Log any errors to the console
                console.error('Error:', error);
            });
    });

    // Perform an initial check of the LED state when the page loads
    fetch('/lightcontrol/state/', { method: 'GET' })
        .then(response => response.json()) // Parse the JSON response
        .then(data => {
            // Update the LED state based on the response
            updateLedState(data.led_state);
        })
        .catch((error) => {
            // Log any errors to the console
            console.error('Error:', error);
        });

    // Perform an initial check of the Auto Mode state when the page loads
    fetch('/lightcontrol/auto_mode_state/', { method: 'GET' })
        .then(response => response.json())
        .then(data => {
            // Update the Auto Mode state based on the response
            updateAutoModeState(data.auto_mode);
        })
        .catch((error) => {
            // Log any errors to the console
            console.error('Error:', error);
        });

    // Add an event listener for the window's beforeunload event
    window.addEventListener('beforeunload', function() {
        // Clear the polling interval when the window is about to be unloaded
        clearInterval(timeGap);
    });
});
