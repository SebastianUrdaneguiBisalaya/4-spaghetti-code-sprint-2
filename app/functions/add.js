import { sanitize } from "./sanitizing.js";
import { renderContacts } from "./renderItem.js";
import { handleError } from "./error.js";

export function handleContactFormSubmit({
  contactForm,
  nameInput,
  phoneInput,
  termsInput,
  addContactBtn,
  contactList,
  contacts,
  regexValidate,
  regexIncludeName,
  regexIncludePhone,
}) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (addContactBtn.textContent === "Add Contact") {
      const name = sanitize(nameInput.value, regexValidate).trim();
      const phone = sanitize(phoneInput.value, regexValidate).trim();
      const terms = termsInput.checked;
      if (!regexIncludeName.test(name)) {
        handleError(nameInput, "Name should contain only letters.");
        return;
      }
      if (!regexIncludePhone.test(phone)) {
        handleError(phoneInput, "Phone should contain only numbers.");
        return;
      }
      if (!name || !phone || !terms) {
        handleError(
          addContactBtn,
          "Please fill in all fields and accept the terms"
        );
        return;
      }
      const newContact = { id: Date.now(), name: name, phone: phone };
      contacts.push(newContact);
      localStorage.setItem("contacts", JSON.stringify(contacts));
      renderContacts(contactList, contacts);
      contactForm.reset();
    }
  });
}
