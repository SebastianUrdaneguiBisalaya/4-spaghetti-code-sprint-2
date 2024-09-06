import { renderContacts } from "./renderItem.js";

export function handleCleanerFilterButton({
  clearFilterBtn,
  filterInput,
  contactList,
}) {
  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  clearFilterBtn.addEventListener("click", () => {
    filterInput.value = "";
    contactList.innerHTML = "";
    renderContacts(contactList, contacts);
  });
}
