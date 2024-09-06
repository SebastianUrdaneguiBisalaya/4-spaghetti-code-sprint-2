export function handleError(element, message) {
  const nameError = document.createElement("span");
  nameError.classList.add("error");
  nameError.textContent = message;
  element.insertAdjacentElement("afterend", nameError);
  setTimeout(function () {
    nameError.remove();
  }, 1500);
}
