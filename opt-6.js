window.addEventListener("load", () => {
  let qA = 5;

  /* wrong way
  document.getElementById("q1Result").textContent = qA ? "Odd" : "Even";
  */
  document.getElementById("q1Result").textContent =
    qA % 2 === 0 ? "Even" : "Odd";

  let q2A = 15;

  //  little correction need to add = to make it correct
  document.getElementById("q2Result").textContent =
    q2A >= 18 ? "Adult" : "Minor";

  let q3A = 28;

  document.getElementById("q3Result").textContent = q3A > 30 ? "Hot" : "Normal";

  let q4A = 45;

  document.getElementById("q4Result").textContent = q4A >= 50 ? "Pass" : "Fail";

  let q5A = false;

  document.getElementById("q5Result").textContent = q5A
    ? "Dashboard"
    : "Login page";

  let q6A = -100;

  document.getElementById("q6Result").textContent =
    q6A > 0 ? "Positive" : "Negative";

  let q7A = 8;
  let q7B = 12;

  document.getElementById("q7Result").textContent =
    q7A > q7B ? q7A + " is bigger" : q7B + " is bigger";

  let q8A = 12;

  document.getElementById("q8Result").textContent = q8A < 18 ? "Day" : "Night";

  let q9A = "Hello, World!";

  document.getElementById("q9Result").textContent =
    q9A.length > 5 ? "Long string" : "Short string";

  let q10A = 2;

  document.getElementById("q10Result").textContent =
    q10A > 0 ? "Checkout" : "Empty cart";
});
