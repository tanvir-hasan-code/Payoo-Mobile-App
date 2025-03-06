document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const mainBalance = document.getElementById("main-balance").innerText;
    const convartMainBalance = parseFloat(mainBalance);
    const accountNumbe = document.getElementById("account-number").value;
    const amount = document.getElementById("amount").value;
    const convartedAmount = parseFloat(amount);
    const accountPin = document.getElementById("account-addmoney-pin").value;
    const convartedPin = parseInt(accountPin);

    if (amount && accountPin) {
      if (convartedPin === 1234) {
        const totalBalance = convartMainBalance + convartedAmount;
        document.getElementById("main-balance").innerText = totalBalance;
        alert("Balance Added Successfull");
        historyAdd("Added" ,amount, accountNumbe);
      } else {
        alert("Your PIN in Not match");
      }
    } else {
      alert("Please Enter your valid A/c Number and PIN");
    }
  });
