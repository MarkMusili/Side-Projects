document.addEventListener("DOMContentLoaded", () => {
    const timezoneSelect = document.getElementById("timezone");
    const current_time = document.getElementById("current-time");
    const selected_time = document.getElementById("selected-time");
    const time_difference = document.getElementById("time-difference");
    const convert_button = document.getElementById("convert");

    // Function to populate timezones in the dropdown
    function populateTimezones() {
        // Fetch a list of timezones from the WorldTimeAPI
        fetch("https://worldtimeapi.org/api/timezone")
            .then(response => response.json())
            .then(timezones => {
                // Iterate through timezones and populate the dropdown
                timezones.forEach(timezone => {
                    const option = document.createElement("option");
                    option.value = timezone;
                    option.textContent = timezone;
                    timezoneSelect.appendChild(option);
                });
            })
            .catch(error => console.error("Error fetching timezones:", error));
    }

    // Function to format and display the time
    function displayTime(time, element) {
        const formattedTime = new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZone: time.timezone,
        }).format(new Date(time.utc_datetime));

        element.innerHTML = `TimeZone: ${time.timezone}, Time: ${formattedTime}`;
    }

    // Event listener for the "Convert" button
    convert_button.addEventListener("click", () => {
        const selectedTimezone = timezoneSelect.value;

        // Fetch the current time of the user
        fetch('https://worldtimeapi.org/api/ip')
            .then(response => response.json())
			.then(userData => {
				// Display the user's current time
				displayTime(userData, current_time);
			
			})
			.catch(error => console.error("Error fetching user's time:", error));
			
			// Fetch the selected timezone time
			fetch(`https://worldtimeapi.org/api/timezone/${selectedTimezone}`)
			.then(response => response.json())
			.then(selectedTime => {
				// Display the selected timezone time
				displayTime(selectedTime, selected_time);
			})
			.catch(error => console.error("Error fetching selected timezone time:", error));
		});

		// Populate the dropdown with timezones when the page is loaded
		populateTimezones();
});
