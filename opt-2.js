window.addEventListener("load", () => {
  let qA = 5;
  let qB = "5";

  document.getElementById("q1Result").textContent = qA == qB;

  let q2A = 5;
  let q2B = "5";

  document.getElementById("q2Result").textContent = q2A === q2B;

  let q3A = 10;
  let q3B = "10";

  document.getElementById("q3Result").textContent = q3A != q3B;

  let q4A = 10;
  let q4B = "10";

  document.getElementById("q4Result").textContent = q4A !== q4B;

  let q5A = 15;
  let q5B = 9;

  document.getElementById("q5Result").textContent = q5A > q5B;

  let q6A = 3;
  let q6B = 2;

  document.getElementById("q6Result").textContent = q6A < q6B;

  let q7A = 10;
  let q7B = 10;

  document.getElementById("q7Result").textContent = q7A >= q7B;

  let q8A = 8;
  let q8B = 7;

  document.getElementById("q8Result").textContent = q8A <= q8B;
});
