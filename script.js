//This block lets the website to open/close Hamburger menu
function toggleMenu() {
    const nav = document.getElementById("nav-links");
    nav.classList.toggle("show");
}
//This function sets the initial score to 0 and sets the number of questions to 5
function gradeQuiz() {
    let score = 0;
    const total = 5;
//Stores the correct answers to the questions 
    const answerKey = {
        q1:  "600",
        q2: "b",
        q3:  "c",
        q4: "b",
        q5: ["a", "b", "d"]
    };
// This finds where the results should be displayed
    const resultsBox = document.getElementById("results");
    resultsBox.innerHTML = "";
// Gets and trims the users answer and adds to the score when correct.
    const q1 = document.getElementById("q1").value.trim();
    if (q1 ===  answerKey.q1) score++ ;
// Grades the rest of the questions and adds the correct answers to the score.
    ["q2", "q3", "q4"].forEach(function(q) {
        let selected = document.querySelector(`input[name="${q}"]:checked`);
        if (selected && selected.value === answerKey[q]) {
            score++;
        }
    });
//  Grades Question 5
    let q5answers = Array.from(document.querySelectorAll(`input[name="q5"]:checked`)).map(x => x.value);
    if (q5answers.length === answerKey.q5.length &&
        q5answers.every(val => answerKey.q5.includes(val))) {
        score++;
    }
// calculates final score percentages
    const percent = ((score / total) * 100).toFixed(1);
// outputs results
    resultsBox.innerHTML = `
        <h3>Your Score: ${score}/${total} (${percent}%)</h3>
        <p>${percent >= 70 ? "PASS ✅" : "FAIL ❌"}</p>
        <button onclick="resetQuiz()">Retake Quiz</button>
    `;
}
// This function resets the quiz
function resetQuiz() {
    document.getElementById("quizForm").reset();
    document.getElementById("results").innerHTML = "";
}