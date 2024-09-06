export function handleCleanerFilterButton({
  clearFilterBtn,
  filterInput,
  contactList,
}) {
  clearFilterBtn.addEventListener("click", () => {
    filterInput.value = "";
    contactList.innerHTML = "";
  });
}
