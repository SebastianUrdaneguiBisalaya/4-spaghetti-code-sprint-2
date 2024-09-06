import { sanitize } from "./sanitizing.js";
import { renderContacts } from "./renderItem.js";
import { handleError } from "./error.js";

export function handleContactFormSubmit({
  contactForm,
  nameInput,
  phoneInput,
  emailInput,
  termsInput,
  addContactBtn,
  contactList,
  regexValidate,
  regexIncludeName,
  regexIncludePhone,
  regexEmail,
}) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (addContactBtn.textContent.trim() === "Add Contact") {
      const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
      const name = sanitize(nameInput.value, regexValidate).trim();
      const phone = sanitize(phoneInput.value, regexValidate).trim();
      const email = sanitize(emailInput.value, regexValidate).trim();
      const terms = termsInput.checked;
      if (!regexIncludeName.test(name)) {
        handleError(nameInput, "Name should contain only letters.");
        return;
      }
      if (!regexIncludePhone.test(phone)) {
        handleError(phoneInput, "Phone should contain only numbers.");
        return;
      }
      if (!regexEmail.test(email)) {
        handleError(emailInput, "It should be a valid email.");
        return;
      }
      if (!name || !phone || !email || !terms) {
        handleError(
          addContactBtn,
          "Please fill in all fields and accept the terms"
        );
        return;
      }
      const newContact = {
        id: Date.now(),
        name: name,
        phone: phone,
        email: email,
      };
      contacts.push(newContact);
      localStorage.setItem("contacts", JSON.stringify(contacts));
      renderContacts(contactList, contacts);
      contactForm.reset();
    }
  });
}
