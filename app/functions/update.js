import { regexIncludeName, regexIncludePhone } from "../constants/constant.js";
import { renderContacts } from "./renderItem.js";
import { handleError } from "./error.js";

export function handleContactUpdate({
  contactList,
  contacts,
  addContactBtn,
  contactForm,
  nameInput,
  phoneInput,
}) {
  contactList.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("edit-btn")) {
      const contactId = e.target.parentElement.getAttribute("data-id");
      console.log("Hola", contactId);
      const contactToEdit = contacts.find(function (contact) {
        return contact.id === Number(contactId);
      });
      console.log(contactToEdit);
      document.getElementById("name").value = contactToEdit.name;
      document.getElementById("phone").value = contactToEdit.phone;
      addContactBtn.textContent = "Update Contact";
      const updateHandler = () => {
        const updatedName = document.getElementById("name").value.trim();
        const updatedPhone = document.getElementById("phone").value.trim();
        if (!regexIncludeName.test(updatedName)) {
          handleError(nameInput, "Name should contain only letters.");
          return;
        }
        if (!regexIncludePhone.test(updatedPhone)) {
          handleError(phoneInput, "Phone should contain only numbers.");
          return;
        }
        contacts = contacts.map(function (contact) {
          return contact.id === Number(contactId)
            ? { ...contact, name: updatedName, phone: updatedPhone }
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
