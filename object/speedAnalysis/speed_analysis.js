let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest(){
    document.getElementById("inputText").value = testText;

    // Reset results and timer
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();

    let button_end = document.getElementById("btn-end");
    button_end.innerHTML = "End Test";
    button_end.onclick = endTest;

}

function endTest(){
    endTime = new Date().getTime();

    // Disable user input
    document.getElementById("userInput").readOnly = true;

    // Calculate time elapsed and words per minute
    let timeElapsed = (endTime - startTime) / 1000;
    let userTypedText = document.getElementById("userInput").value;

    // Calculate Total Length of characters
    let typedCharacters = userTypedText.length

    // Split text to count words
    let typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;

    let wpm = 0;

    if(timeElapsed !== 0 && !isNaN(typedWords)){
        wpm = Math.round((typedWords / timeElapsed) * 60)
    }

    // Display result
    let outputDiv = document.getElementById("output");
            outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
                "<p>Total Length: " + typedCharacters +
                "<p>Words Typed: " + typedWords + "</p>" +
                "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
                "<p>Words Per Minute (WPM): " + wpm + "</p>";


    //Reset
    let button = document.getElementById("btn");
    button.innerHTML = "Restart Test";
    button.onclick = startTest;
}

