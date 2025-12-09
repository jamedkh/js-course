window.addEventListener("load", () => {
  let qA = 5;
  document.getElementById("q1Result").textContent = qA++;

  let q2A = 10;

  document.getElementById("q2Result").textContent = q2A--;

  let q3A = 1;
  let q3B = 2;

  document.getElementById("q3Result").textContent =
    q3A++ + " post increament value" + ", " + ++q3B + " pre increament value";

  let q4A = 3;

  document.getElementById("q4Result").textContent = q4A++ + ", then " + q4A;

  let q5A = 7;

  document.getElementById("q5Result").textContent = ++q5A + ", then " + q5A;

  let q6A = 0;
  q6A++;
  q6A++;
  q6A++;

  document.getElementById("q6Result").textContent = q6A;

  let q7A = 100;
  --q7A;
  document.getElementById("q7Result").textContent = q7A;

  let q8A = 8;

  document.getElementById("q8Result").textContent = q8A++ + ++q8A;
});
