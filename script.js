function toggleMenu() {
    const nav = document.getElementById("nav-links");
    nav.classList.toggle("show");
}

function gradeQuiz() {
    let score = 0;
    const total = 5;

    const answerKey = {
        q1: "600",
        q2: "b",
        q3: "c",
        q4: "b",
        q5: ["a", "b", "d"]
    };

    const resultsBox = document.getElementById("results");
    resultsBox.innerHTML = "";

    const q1 = document.getElementById("q1").value.trim();
    if (q1 === answerKey.q1) score++;

    ["q2", "q3", "q4"].forEach(function(q) {
        let selected = document.querySelector(`input[name="${q}"]:checked`);
        if (selected && selected.value === answerKey[q]) {
            score++;
        }
    });

    let q5answers = Array.from(document.querySelectorAll(`input[name="q5"]:checked`)).map(x => x.value);
    if (q5answers.length === answerKey.q5.length &&
        q5answers.every(val => answerKey.q5.includes(val))) {
        score++;
    }

    const percent = ((score / total) * 100).toFixed(1);

    resultsBox.innerHTML = `
        <h3>Your Score: ${score}/${total} (${percent}%)</h3>
        <p>${percent >= 70 ? "PASS ✅" : "FAIL ❌"}</p>
        <button onclick="resetQuiz()">Retake Quiz</button>
    `;
}

function resetQuiz() {
    document.getElementById("quizForm").reset();
    document.getElementById("results").innerHTML = "";
}