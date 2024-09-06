import { handleContactFormSubmit } from "./functions/add.js";
import { handleContactDelete } from "./functions/delete.js";
import { handleContactUpdate } from "./functions/update.js";
import { renderContacts } from "./functions/renderItem.js";
import { handleCleanerFilterButton } from "./functions/cleanerFilterButton.js";
import { handleFilterInput } from "./functions/filter.js";
import {
  regexIncludeName,
  regexIncludePhone,
  regexValidate,
} from "./constants/constant.js";

const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
const contactList = document.getElementById("contactList");
const filterInput = document.getElementById("filter");
const clearFilterBtn = document.getElementById("clearFilterBtn");
const contactForm = document.getElementById("contacts");
const addContactBtn = document.getElementById("addContactBtn");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const termsInput = document.getElementById("terms");

document.addEventListener("DOMContentLoaded", () => {
  handleContactFormSubmit({
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
  });
  handleContactDelete({
    contactList,
    contacts,
  });
  handleContactUpdate({
    contactList,
    contacts,
    addContactBtn,
    contactForm,
    nameInput,
    phoneInput,
  });
  handleFilterInput({
    filterInput,
    contactList,
  });
  handleCleanerFilterButton({ clearFilterBtn, filterInput, contactList });
  renderContacts(contactList, contacts);
});
