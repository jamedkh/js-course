window.addEventListener("load", () => {
  let qA = "5";

  document.getElementById("q1Result").textContent = +qA;

  let q2A = 5;

  document.getElementById("q2Result").textContent = -q2A;

  let q3A = true;

  document.getElementById("q3Result").textContent = typeof q3A;

  let q4A = "Hello";

  document.getElementById("q4Result").textContent = typeof q4A;

  let q5A = true;

  document.getElementById("q5Result").textContent = +q5A;

  let q6A = false;

  document.getElementById("q6Result").textContent = +q6A;

  let q7A = "hello";

  document.getElementById("q7Result").textContent = !q7A;

  let q8A = 0;

  document.getElementById("q8Result").textContent = !q8A;

  let q9A = 10 - 4;

  document.getElementById("q9Result").textContent = -q9A;

  let q10A = [1, 2, 3];

  document.getElementById("q10Result").textContent = typeof q10A;
});
