import "./index.css";
import { toggleDropdown } from "./dropdown/dropdown.js";

function $(tagName, attributes = {}) {
  return function (...children) {
    const element = document.createElement(tagName);
    for (const [attribute, value] of Object.entries(attributes)) {
      element.setAttribute(attribute, value);
    }
    element.replaceChildren(...children);
    return element;
  };
}

function myDropdownComponent() {
  const dropdown = $("div", { class: "dropdown" })(
    $("button", { class: "dropdown-toggle" })("Click me"),
    $("div", { class: "dropdown-content" })("This is a dropdown"),
  );
  dropdown.addEventListener("click", toggleDropdown);
  return dropdown;
}

function mainComponent() {
  return $("div")(myDropdownComponent(), myDropdownComponent());
}

document.getElementById("content")?.appendChild(mainComponent());
