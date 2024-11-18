const controlsPart = document.querySelector("#controls")
const inputNumber = document.querySelector("input");
const buttons = document.querySelectorAll("button");
const createButton = document.querySelector("[data-create]")
const destroyButton = document.querySelector("[data-destroy]")
const boxesPart = document.querySelector("#boxes")

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

function destroyBoxes() {
    boxesPart.innerHTML = "";
}

function createBoxes(amount) {
    destroyBoxes();

    if (amount < 1 || amount > 100) {
        return;
    };

    const elements = [];
    let boxSize = 30;

    for (let i = 0; i < amount; i++) {
        const div = document.createElement("div");
        div.style.width = `${boxSize}px`;
        div.style.height = `${boxSize}px`;
        div.style.background = getRandomHexColor();
        elements.push(div);
        boxSize += 10;
    }

    boxesPart.append(...elements);
    inputNumber.value = "";
};

createButton.addEventListener("click", () => {
    const amount = Number(inputNumber.value.trim());
    createBoxes(amount);
});

destroyButton.addEventListener("click", destroyBoxes);

controlsPart.style.display = "flex";
controlsPart.style.padding = "32px";
controlsPart.style.alignItems = "flex-start"
controlsPart.style.gap = "16px";
controlsPart.style.borderRadius = "8px";
controlsPart.style.background = "#F6F6FE";

boxesPart.style.marginTop = "16px";
boxesPart.style.display = "flex";
boxesPart.style.padding = "32px";
boxesPart.style.flexDirection = "column";
boxesPart.style.alignItems = "flex-start"
boxesPart.style.gap = "10px";
boxesPart.style.borderRadius = "8px";
boxesPart.style.background = "#F6F6FE";

inputNumber.style.fontFamily = "'Montserrat', sans-serif";
inputNumber.style.height = "40px";
inputNumber.style.display = "flex";
inputNumber.style.padding = "8px 72px";
inputNumber.style.flexDirection = "column";
inputNumber.style.justifyContent = "center";
inputNumber.style.alignItems = "center"
inputNumber.style.borderRadius = "8px";
inputNumber.style.background = "#F6F6FE";
inputNumber.style.outline = "none";
inputNumber.style.border = "1px solid #808080";

inputNumber.addEventListener("mouseenter", () => {
    inputNumber.style.border = "1px solid #000";
});
inputNumber.addEventListener("mouseleave", () => {
    inputNumber.style.border = "1px solid #808080";
});

buttons.forEach(button => {
    button.style.width = "120px";
    button.style.display = "flex";
    button.style.justifyContent = "center";
    button.style.alignItems = "center";
    button.style.padding = "8px 16px";
    button.style.borderRadius = "8px";
    button.style.border = "none";
    button.style.color = "#FFF";
    button.style.fontFamily = "'Montserrat', sans-serif";
    button.style.fontSize = "16px";
    button.style.fontStyle = "normal";
    button.style.fontWeight = "500";
    button.style.lineHeight = "24px";
    button.style.letterSpacing = "0.64px";
})

createButton.style.background = "#4E75FF"
createButton.addEventListener("mouseenter", () => {
    createButton.style.background = "#6C8CFF";
});
createButton.addEventListener("mouseleave", () => {
    createButton.style.background = "#4E75FF";
});

destroyButton.style.background = "#FF4E4E"
destroyButton.addEventListener("mouseenter", () => {
    destroyButton.style.background = "#FF7070";
});
destroyButton.addEventListener("mouseleave", () => {
    destroyButton.style.background = "#FF4E4E";
});