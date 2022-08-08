const form = document.querySelector(".formulario");
const sections = document.querySelectorAll(".section");

form.addEventListener("submit", (evento) => {
  sections.forEach((section) => {
    const elem = !!section.querySelector("img");
    if (!isValidInput(section) && !elem) {
      showElement(section);
    } else if (isValidInput(section) && elem) {
      hideElement(section);
    }
    evento.preventDefault();
  });
});
function showElement(section) {
  section.style.marginBottom = "0.5em";
  addErrorIcon(section);
  addError(section);
}
function hideElement(section) {
  const img = section.querySelector("img");
  const span = section.querySelector("span");
  section.removeChild(img);
  section.removeChild(span);
  styleHide(section);
}
function styleHide(section) {
  section.children[0].classList.remove("border-color");
  section.children[0].classList.remove("email-color");
  section.style.marginBottom = "1.93em";
  section.children[0].placeholder = section.children[0].name;
}
function isValidInput(element) {
  const valido = element.children[0].value;
  return valido === "" ? false : true;
}
function addError(element) {
  const span = document.createElement("span");
  span.classList.add("error");
  span.innerHTML = `${element.children[0].name} cannot be empty`;
  element.appendChild(span);
  element.children[0].classList.add("border-color");
  element.children[0].placeholder = "";
  if (element.children[0].type === "email") {
    styleEmail(element);
  }
}
function styleEmail(element) {
  element.children[0].placeholder = "email@example/com";
  element.children[0].classList.add("email-color");
}
function addErrorIcon(element) {
  const img = document.createElement("img");
  img.classList.add("error-icon");
  img.src = "../images/icon-error.svg";
  img.alt = "Error";
  element.appendChild(img);
}
