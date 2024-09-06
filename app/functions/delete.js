import { renderContacts } from "./renderItem.js";
export function handleContactDelete({ contactList }) {
  contactList.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn__delete")) {
      let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
      const contactId = e.target.parentElement.getAttribute("data-id");
      contacts = contacts.filter(function (contact) {
        return contact.id !== Number(contactId);
      });
      localStorage.setItem("contacts", JSON.stringify(contacts));
      renderContacts(contactList, contacts);
    }
  });
}
