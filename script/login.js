// alert()
document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
	  event.preventDefault();
	  
    const accountNumber = document.getElementById("account-number").value;

	  const accountPin = document.getElementById("account-pin").value;
	  if (accountNumber.length === 11) {
		  if (accountPin === '1234') {
			  redirectToMain();
		  } else {
			  alert('This pin Don"t match')
		  }
	  } else {
		  alert('This account Number not valid.');
	  }
  });
  function redirectToMain() {
	window.location.href = "../main.html"; 
}



