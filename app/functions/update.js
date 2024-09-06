import { renderContacts } from "./renderItem.js";
import { handleError } from "./error.js";

export function handleContactUpdate({
  contactList,
  contacts,
  addContactBtn,
  contactForm,
  nameInput,
  phoneInput,
  emailInput,
  regexIncludeName,
  regexIncludePhone,
  regexEmail,
}) {
  contactList.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("edit-btn")) {
      const contactId = e.target.parentElement.getAttribute("data-id");
      const contactToEdit = contacts.find(function (contact) {
        return contact.id === Number(contactId);
      });
      document.getElementById("name").value = contactToEdit.name;
      document.getElementById("phone").value = contactToEdit.phone;
      addContactBtn.textContent = "Update Contact";
      const updateHandler = () => {
        const updatedName = document.getElementById("name").value.trim();
        const updatedPhone = document.getElementById("phone").value.trim();
        const updatedEmail = document.getElementById("email").value.trim();
        if (!regexIncludeName.test(updatedName)) {
          handleError(nameInput, "Name should contain only letters.");
          return;
        }
        if (!regexIncludePhone.test(updatedPhone)) {
          handleError(phoneInput, "Phone should contain only numbers.");
          return;
        }
        if (!regexEmail.test(updatedEmail)) {
          handleError(emailInput, "It should be a valid email.");
          return;
        }
        contacts = contacts.map(function (contact) {
          return contact.id === Number(contactId)
            ? {
                ...contact,
                name: updatedName,
                phone: updatedPhone,
                email: updatedEmail,
              }
            : contact;
        });
        localStorage.setItem("contacts", JSON.stringify(contacts));
        renderContacts(contactList, contacts);
        contactForm.reset();
        addContactBtn.textContent = "Add Contact";
        addContactBtn.removeEventListener("click", updateHandler);
      };
      addContactBtn.addEventListener("click", updateHandler);
    }
  });
}
