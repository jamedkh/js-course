window.addEventListener("load", () => {
  let qA = true;
  let qB = false;

  document.getElementById("q1Result").textContent = qA && qB;

  let q2A = true;
  let q2B = false;

  document.getElementById("q2Result").textContent = q2A || q2B;

  let q3A = true;

  document.getElementById("q3Result").textContent = !q3A;

  let q4A = 5 > 3;
  let q4B = 10 > 8;

  document.getElementById("q4Result").textContent = q4A && q4B;

  let q5A = 15;
  let q5B = 9;

  document.getElementById("q5Result").textContent = q5A > q5B;

  let q6A = 20;
  let q6B = 10;

  document.getElementById("q6Result").textContent = !(q6A < q6B);

  let q7A = 18;
  let q7B = true;

  document.getElementById("q7Result").textContent = q7A && q7B;
});
