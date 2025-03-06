function historyAdd(type, amount, accountNumbe) {
  const historyAdd = document.getElementById("history");
  const p = document.createElement("p");
  p.classList.add("history-style");
  p.innerText = `${type} ${amount} from ${accountNumbe}`;
  historyAdd.appendChild(p);
}
