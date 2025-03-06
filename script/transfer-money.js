document
  .getElementById("btn-transfer-money")
  .addEventListener("click", function () {
    const mainBalance = document.getElementById("main-balance").innerText;
    const convartMainBalance = parseFloat(mainBalance);
    const agentNumber = document.getElementById("transfer-number").value;
    const withdrawAmount = document.getElementById("transfer-amount").value;
    const convartWithdrawAmount = parseFloat(withdrawAmount);
    const accountPin = document.getElementById("account-transfer-pin").value;
    const convartAccountPin = parseInt(accountPin);
    withdraw(
      convartMainBalance,
      agentNumber,
      convartAccountPin,
      convartWithdrawAmount
    );

    function withdraw(
      convartMainBalance,
      agentNumber,
      convartAccountPin,
      convartWithdrawAmount
    ) {
      if (agentNumber.length === 11) {
        if (convartMainBalance >= convartWithdrawAmount) {
          if (convartAccountPin === 1234) {
            alert("Transfer Successfull!");
            const balance = convartMainBalance - convartWithdrawAmount;
            document.getElementById("main-balance").innerText = balance;

            historyAdd("Money Transfered" ,withdrawAmount, agentNumber);
          } else {
            alert("Invalid PIN");
          }
        } else {
          alert("Not Avilable Balance");
        }
      } else {
        alert("Invalid Transfer Number");
      }
    }
  });
