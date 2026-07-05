let RunEmotionDetection = () => {
    // Get the text from the HTML text box
    let textToAnalyze = document.getElementById("textToAnalyze").value;
    
    // Create an AJAX request to communicate with the Flask backend
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Display the text returned by server.py
            document.getElementById("system_response").innerHTML = xhttp.responseText;
        }
    };
    
    // Send the text to the /emotionDetector route
    xhttp.open("GET", "/emotionDetector?textToAnalyze=" + encodeURIComponent(textToAnalyze), true);
    xhttp.send();
}
