const tekstDiv = document.getElementById("tekst");
const btnKolor = document.getElementById("btnKolor");
const btnRozmiar = document.getElementById("btnRozmiar");
const btnCzcionka = document.getElementById("btnCzcionka");
const btnReset = document.getElementById("btnReset");

btnKolor.addEventListener("click", () => {
  if (tekstDiv.classList.contains("kolor")) {
    tekstDiv.classList.remove("kolor");
  } else {
    tekstDiv.classList.add("kolor");
  }
});

btnRozmiar.addEventListener("click", () => {
  if (tekstDiv.classList.contains("rozmiar")) {
    tekstDiv.classList.remove("rozmiar");
  } else {
    tekstDiv.classList.add("rozmiar");
  }
});


btnCzcionka.addEventListener("click", () => {
  if (tekstDiv.classList.contains("czcionka")) {
    tekstDiv.classList.remove("czcionka");
  } else {
    tekstDiv.classList.add("czcionka");
  }
});


btnReset.addEventListener("click", () => {
  tekstDiv.classList.remove("kolor", "rozmiar", "czcionka");
});
