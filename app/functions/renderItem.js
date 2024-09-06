export function renderContacts(contactList, contacts = null) {
  const newContacts =
    contacts || JSON.parse(localStorage.getItem("contacts")) || [];
  contactList.innerHTML = "";
  newContacts.forEach((contact) => {
    const li = document.createElement("li");
    li.classList.add("contact-item");
    li.setAttribute("data-id", contact.id);
    li.innerHTML = `<strong>${contact.name}</strong> <span>${contact.phone}</span> <span>${contact.email}</span> <button class="btn__edit">Edit</button> <button class="btn__delete">Delete</button>`;
    contactList.appendChild(li);
  });
}
