document
  .getElementById("btn-bonus-money")
  .addEventListener("click", function () {
    const mainBalanceElement = document.getElementById("main-balance");
	  const mainBalance = document.getElementById('main-balance').innerText;
    const convartMainBalance = parseInt(mainBalance);
	  const coupon = document.getElementById("coupon-code");
    const couponCode = document.getElementById("coupon-code").value;
    if (couponCode === "TANVIR") {
		const balance = convartMainBalance + 250;
		mainBalanceElement.innerText = balance;
		coupon.value = "";
		const btn = document.getElementById('btn-bonus-money');
		document.getElementById('btn-bonus-money').addEventListener('click',
			function () {
				btn.setAttribute('disabled',true)
			}
		)
		alert("Congratulations! You Got 250 Tk Bonus 🎉")

    } else {
      alert("Coupon Code is Invalid");
    }
  });
