import "./dropdown.css";

export function toggleDropdown(event) {
  if (event.currentTarget.dataset.dropdownOpen === undefined) {
    event.currentTarget.dataset.dropdownOpen = "";
  } else {
    delete event.currentTarget.dataset.dropdownOpen;
  }
}
