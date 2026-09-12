function submitQuiz() {

    var score = 0;

    // Question 1
    var q1 = document.querySelector('input[name="q1"]:checked');

    if (q1 && q1.value == "Yudhishthira") {
        score++;
    }

    // Question 2
    var q2 = document.querySelector('input[name="q2"]:checked');

    if (q2 && q2.value == "Kunti") {
        score++;
    }

    // Question 3
    var q3 = document.querySelector('input[name="q3"]:checked');

    if (q3 && q3.value == "Dronacharya") {
        score++;
    }

    // Question 4
    var q4 = document.querySelector('input[name="q4"]:checked');

    if (q4 && q4.value == "Krishna") {
        score++;
    }

    // Question 5
    var q5 = document.querySelector('input[name="q5"]:checked');

    if (q5 && q5.value == "Kurukshetra") {
        score++;
    }

    // Calculate wrong answers
    var wrong = 5 - score;

    // Display result
    document.getElementById("result").innerHTML =
    "<h2>🎉 CONGRATULATIONS! 🎉</h2>" +
    "<p>Correct Answers: " + score + "</p>" +
    "<p>Wrong Answers: " + wrong + "</p>" +
    "<p>Total Score: " + score + " / 5</p>";
}