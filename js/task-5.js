document.body.style.fontFamily = "'Montserrat', sans-serif";

const body = document.querySelector("body");
const widget = document.querySelector(".widget")
const textLabel = document.querySelector(".widget > p")
const changeColorButton = document.querySelector(".change-color");
const colorName = document.querySelector(".color")

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  changeColorButton.addEventListener("click", event => {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
    colorName.textContent = randomColor;
})

textLabel.style.margin = "0";

widget.style.display = "inline-flex";
widget.style.justifyContent = "center";
widget.style.alignItems = "center";
widget.style.padding = "100px 88px";
widget.style.flexDirection = "column";
widget.style.gap = "10px";
widget.style.borderRadius = "8px";
widget.style.background = "#FFF";
widget.style.color = "#2e2f42";
widget.style.fontFamily = "'Montserrat', sans-serif";
widget.style.fontSize = "16px";
widget.style.fontStyle = "normal";
widget.style.fontWeight = "400";
widget.style.lineHeight = "24px";
widget.style.letterSpacing = "0.64px";

changeColorButton.style.outline = "none";
changeColorButton.style.width = "148px";
changeColorButton.style.height = "40px";
changeColorButton.style.display = "flex";
changeColorButton.style.justifyContent = "center";
changeColorButton.style.alignItems = "center";
changeColorButton.style.padding = "8px 16px";
changeColorButton.style.borderRadius = "8px";
changeColorButton.style.border = "none";
changeColorButton.style.background = "#4E75FF";
changeColorButton.style.color = "#FFF";
changeColorButton.style.fontFamily = "'Montserrat', sans-serif";
changeColorButton.style.fontSize = "16px";
changeColorButton.style.fontStyle = "normal";
changeColorButton.style.fontWeight = "500";
changeColorButton.style.lineHeight = "24px";
changeColorButton.style.letterSpacing = "0.64px";

changeColorButton.addEventListener("mouseenter", () => {
    changeColorButton.style.background = "#6C8CFF";
});
changeColorButton.addEventListener("mouseleave", () => {
    changeColorButton.style.background = "#4E75FF";
});