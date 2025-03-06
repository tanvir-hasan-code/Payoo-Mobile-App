document
  .getElementById("btn-bonus-money")
  .addEventListener("click", function () {
    const mainBalanceElement = document.getElementById("main-balance");
    const mainBalance = document.getElementById("main-balance").innerText;
    const convartMainBalance = parseInt(mainBalance);
    const coupon = document.getElementById("coupon-code");
    const couponCode = document.getElementById("coupon-code").value;
    if (couponCode === "TANVIR") {
      const balance = convartMainBalance + 250;
      mainBalanceElement.innerText = balance;
      coupon.value = "";
      const btn = document.getElementById("btn-bonus-money");
      document
        .getElementById("btn-bonus-money")
        .addEventListener("click", function () {
          btn.setAttribute("disabled", true);
        });
      const historyAdd = document.getElementById("history");
      const p = document.createElement("p");
      p.classList.add("history-style");
      p.innerText = `Added ${250} from Coupon Code`;
      historyAdd.appendChild(p);
    } else {
      alert("Coupon Code is Invalid");
    }
  });
