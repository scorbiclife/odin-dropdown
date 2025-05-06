import "./index.css";

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

function component() {
  return $("div")("Hello, Webpack!");
}

document.getElementById("content")?.appendChild(component());
