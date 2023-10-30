let question = +prompt("Nechta savol beray?");
if (question > 100) {
  alert("100 dan kichik son kiriting");
  location.reload();
} else {
  let answertrue = 0;
  let answerfalse = 0;
  for (let i = 1; i <= question; i++) {
    let num1 = Math.floor(1 + Math.random() * 10);
    let num2 = Math.floor(1 + Math.random() * 10);
    let answer = +prompt(`${i}-savol: ${num1} + ${num2} = ?`);

    if (answer == num1 + num2) {
      document.write(`${num1} + ${num2} = ${answer} To'g'ri <br>`);
      answertrue++;
    } else {
      document.write(
        `${num1} + ${num2} = ${answer} Xato! (Javob: ${num1 + num2}) <br>`
      );
      answerfalse++;
    }
  }

  document.write("<br>");
  document.write(
    `To'g'ri javoblari soni: ${answertrue} ta. <br> Xato javoblar: ${answerfalse} ta`
  );
}
