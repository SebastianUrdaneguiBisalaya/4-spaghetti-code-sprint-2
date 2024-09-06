import { renderContacts } from "./renderItem.js";
import { sanitize } from "./sanitizing.js";
import { regexValidate } from "../constants/constant.js";

export function handleFilterInput({ filterInput, contactList }) {
  filterInput.addEventListener("input", () => {
    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    const filterValue = String(
      sanitize(filterInput.value, regexValidate)
    ).toLowerCase();
    contacts = transformDataToLowerCase(contacts);
    contacts = filterDataInput({
      data: contacts,
      target: filterValue,
    });
    renderContacts(contactList, contacts);
  });
}

function transformDataToLowerCase(data) {
  return data.map((item) =>
    Object.fromEntries(
      Object.entries(item).map(([key, value]) => [
        key,
        typeof value === "string" ? value.toLowerCase() : value,
      ])
    )
  );
}

function filterDataInput({ data, target }) {
  return data.filter((item) =>
    Object.values(item).some((value) => String(value).includes(target))
  );
}
