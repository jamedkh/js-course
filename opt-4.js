window.addEventListener("load", () => {
  let qA = 10;

  document.getElementById("q1Result").textContent = qA += 5;

  let q2A = 50;

  document.getElementById("q2Result").textContent = q2A -= 20;

  let q3A = 6;

  document.getElementById("q3Result").textContent = q3A *= 3;

  let q4A = 100;

  document.getElementById("q4Result").textContent = q4A /= 4;

  let q5A = 15;

  document.getElementById("q5Result").textContent = q5A %= 4;

  let q6A = 0;
  q6A += 10;

  document.getElementById("q6Result").textContent = q6A -= 3;

  let q7A = 200;

  document.getElementById("q7Result").textContent = q7A -= 20;

  let q8A = 1;

  document.getElementById("q8Result").textContent = q8A *= 3;

  let q9A = 9;

  document.getElementById("q9Result").textContent = q9A /= 3;

  let q10A = 5;
  q10A += 2;

  document.getElementById("q10Result").textContent = q10A *= 3;
});
