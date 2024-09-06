import { renderContacts } from "./renderItem.js";

export function handleFilterInput({ filterInput, contactList }) {
  filterInput.addEventListener("input", () => {
    var filterValue = "";
    var filteredContacts = [];
    contactList.innerHTML = "";
    renderContacts(contactList, filteredContacts);
  });
}
