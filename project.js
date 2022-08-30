const btn = document.querySelector("#btn");
const text = document.querySelector("#text");
btn.addEventListener("click", (e) => {
   if (text.textContent == "Добрий вечір") {
        text.textContent  = "Добрий ранок"
   } else { text.textContent = "Добрий вечір"}
//    text.textContent = text.textContent == "Добрий вечір" ? "Добрий ранок" : "Добрий вечір"; скоротили (тернарний оператор)
});


