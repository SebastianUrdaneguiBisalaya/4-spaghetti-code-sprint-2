import { renderContacts } from "./renderItem.js";
import { sanitize } from "./sanitizing.js";
import { regexValidate } from "../constants/constant.js";

export function handleFilterInput({ filterInput, contactList, contacts }) {
  filterInput.addEventListener("input", () => {
    const filterValue = String(
      sanitize(filterInput.value, regexValidate)
    ).toLowerCase();
    const transformContacts = transformDataToLowerCase(contacts);
    const filterData = filterDataInput({
      data: transformContacts,
      target: filterValue,
    });
    renderContacts(contactList, filterData);
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
