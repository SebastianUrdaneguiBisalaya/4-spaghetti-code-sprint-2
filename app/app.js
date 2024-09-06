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
  regexEmail,
} from "./constants/constant.js";

const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
const contactList = document.getElementById("contactList");
const filterInput = document.getElementById("filter");
const clearFilterBtn = document.getElementById("clearFilterBtn");
const contactForm = document.getElementById("contacts");
const addContactBtn = document.getElementById("addContactBtn");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const termsInput = document.getElementById("terms");

document.addEventListener("DOMContentLoaded", () => {
  handleContactFormSubmit({
    contactForm,
    nameInput,
    phoneInput,
    emailInput,
    termsInput,
    addContactBtn,
    contactList,
    contacts,
    regexValidate,
    regexIncludeName,
    regexIncludePhone,
    regexEmail,
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
    emailInput,
    regexIncludeName,
    regexIncludePhone,
    regexEmail,
  });
  handleFilterInput({
    filterInput,
    contactList,
    contacts,
  });
  handleCleanerFilterButton({
    clearFilterBtn,
    filterInput,
    contactList,
    contacts,
  });
  renderContacts(contactList, contacts);
});
