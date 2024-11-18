const inputField = document.querySelector('#name-input');
const heading = document.querySelector('h1');
const greetings = document.querySelector('#name-output');

inputField.addEventListener("input", event => {
    const trimmedValue = event.target.value.trim();
    greetings.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
});

const wrapper = document.createElement('div');
inputField.parentNode.insertBefore(wrapper, inputField);
wrapper.appendChild(inputField);
wrapper.appendChild(heading);

wrapper.style.display = "inline-flex";
wrapper.style.padding = "24px";
wrapper.style.flexDirection = "column";
wrapper.style.alignItems = "flex-start";
wrapper.style.gap = "16px";
wrapper.style.borderRadius = "8px";
wrapper.style.background = "#FFF";

heading.style.margin = "0";
heading.style.color = "#2E2F42";
heading.style.fontFamily = "Montserrat";
heading.style.fontSize = "24px";
heading.style.fontStyle = "normal";
heading.style.fontWeight = "600";
heading.style.lineHeight = "32px"; /* 133.333% */
heading.style.letterSpacing = "0.96px";

inputField.style.outline = 'none';
inputField.style.width = "312px";
inputField.style.height = "40px";
inputField.style.color = "#2E2F42";
inputField.style.fontFamily = "Montserrat";
inputField.style.fontSize = "16px";
inputField.style.fontStyle = "normal";
inputField.style.fontWeight = "400";
inputField.style.lineHeight = "24px"; /* 150% */
inputField.style.letterSpacing = "0.64px";
inputField.style.borderRadius = "4px";
inputField.style.border = "1px solid #808080";
inputField.style.padding = "8px 16px";

inputField.addEventListener("mouseenter", () => {
    inputField.style.border = "1px solid #000";
});
inputField.addEventListener("mouseleave", () => {
    inputField.style.border = "1px solid #808080";
});