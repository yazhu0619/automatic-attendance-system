// Wait until the web page completely loads
document.addEventListener("DOMContentLoaded", () => {
    
    // Find our action button in the HTML
    const launchButton = document.querySelector("button");
    const statusText = document.querySelector("p");

    // Listen for when a user clicks the button
    launchButton.addEventListener("click", () => {
        // Change the text dynamically on screen
        statusText.innerText = "System Status: Scanning for faces...";
        statusText.style.color = "#e67e22"; // Turn text orange
        launchButton.innerText = "Camera Active";
        launchButton.style.backgroundColor = "#e74c3c"; // Turn button red
        
        console.log("Attendance camera initialization sequence started.");
        
        // Simulate finding a match after 3 seconds
        setTimeout(() => {
            statusText.innerText = "Attendance Logged Successfully!";
            statusText.style.color = "#27ae60"; // Turn text green
            launchButton.innerText = "Launch Attendance Camera";
            launchButton.style.backgroundColor = "#3498db"; // Reset button color
        }, 3000);
    });
});
