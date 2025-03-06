document.getElementById("addmoney").style.display = "none";
document.getElementById("withdrawmoney").style.display = "none";
document.getElementById("transfermoney").style.display = "none";
document.getElementById("bonusmoney").style.display = "none";
document.getElementById("paybill").style.display = "none";
document.getElementById("transactionshistory").style.display = "none";

document.getElementById("logout").addEventListener("click", function () {
  window.location.href = "../index.html";
});

document.getElementById("add-money").addEventListener("click", function () {
  document.getElementById("featured").style.display = "none";
  document.getElementById("addmoney").style.display = "block";
  document.getElementById("withdrawmoney").style.display = "none";
  document.getElementById("transfermoney").style.display = "none";
  document.getElementById("bonusmoney").style.display = "none";
  document.getElementById("paybill").style.display = "none";
  document.getElementById("transactionshistory").style.display = "none";
});

document
  .getElementById("withdraw-money")
  .addEventListener("click", function () {
    document.getElementById("featured").style.display = "none";
    document.getElementById("addmoney").style.display = "none";
    document.getElementById("withdrawmoney").style.display = "block";
    document.getElementById("transfermoney").style.display = "none";
    document.getElementById("bonusmoney").style.display = "none";
    document.getElementById("paybill").style.display = "none";
    document.getElementById("transactionshistory").style.display = "none";
  });

document
  .getElementById("transfer-money")
  .addEventListener("click", function () {
    document.getElementById("featured").style.display = "none";
    document.getElementById("addmoney").style.display = "none";
    document.getElementById("withdrawmoney").style.display = "none";
    document.getElementById("transfermoney").style.display = "block";
    document.getElementById("bonusmoney").style.display = "none";
    document.getElementById("paybill").style.display = "none";
    document.getElementById("transactionshistory").style.display = "none";
  });

document.getElementById("bonus-money").addEventListener("click", function () {
  document.getElementById("featured").style.display = "none";
  document.getElementById("addmoney").style.display = "none";
  document.getElementById("withdrawmoney").style.display = "none";
  document.getElementById("transfermoney").style.display = "none";
  document.getElementById("bonusmoney").style.display = "block";
  document.getElementById("paybill").style.display = "none";
  document.getElementById("transactionshistory").style.display = "none";
});

document.getElementById("pay-bill").addEventListener("click", function () {
  document.getElementById("featured").style.display = "none";
  document.getElementById("addmoney").style.display = "none";
  document.getElementById("withdrawmoney").style.display = "none";
  document.getElementById("transfermoney").style.display = "none";
  document.getElementById("bonusmoney").style.display = "none";
  document.getElementById("paybill").style.display = "block";
  document.getElementById("transactionshistory").style.display = "none";
});

document
  .getElementById("transactions-history")
  .addEventListener("click", function () {
    document.getElementById("featured").style.display = "none";
    document.getElementById("addmoney").style.display = "none";
    document.getElementById("withdrawmoney").style.display = "none";
    document.getElementById("transfermoney").style.display = "none";
    document.getElementById("bonusmoney").style.display = "none";
    document.getElementById("paybill").style.display = "none";
    document.getElementById("transactionshistory").style.display = "block";
  });
