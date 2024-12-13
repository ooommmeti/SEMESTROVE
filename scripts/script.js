document.addEventListener("DOMContentLoaded", function () {
    // Зміна кольору тексту заголовка та параграфа
    const textColorBtn = document.getElementById("change-text-color");
    textColorBtn.addEventListener("click", function () {
        const color = prompt("Введіть колір для тексту (наприклад, red, blue, #ff0000):");
        document.querySelectorAll("h2, p").forEach(element => {
            element.style.color = color;
        });
    });

    // Зміна розміру шрифта
    const fontSizeSelect = document.getElementById("font-size");
    fontSizeSelect.addEventListener("change", function () {
        const fontSize = fontSizeSelect.value;
        document.querySelectorAll("h2, p").forEach(element => {
            element.style.fontSize = fontSize;
        });
    });

    // Зміна ширини контейнера
    const containerWidthInput = document.getElementById("container-width");
    containerWidthInput.addEventListener("input", function () {
        const width = containerWidthInput.value + "%";
        document.querySelector(".container").style.width = width;
    });

    // Перемикання кольору фону сторінки
    const bgColorBtn = document.getElementById("change-bg-color");
    bgColorBtn.addEventListener("click", function () {
        const color = prompt("Введіть колір фону (наприклад, #f0f0f0, lightblue):");
        document.body.style.backgroundColor = color;
    });


    
    const toggleBtn = document.getElementById("toggle-btn");
    const stylePanel = document.getElementById("style-panel");

    toggleBtn.addEventListener("click", function () {
        stylePanel.classList.toggle("open");
        if (stylePanel.classList.contains("open")) {
            toggleBtn.textContent = "⇧"; 
        } else {
            toggleBtn.textContent = "⇩";
        }
    });
});
