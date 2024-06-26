let elementRefs = {};
init();

function init() {
  // element refs
  const inputElement = select(".input");
  select(".result");

  // listeners
  // inputElement.addEventListener("keyup", calculate);
  // inputElement.focus();
}

// utils
function select(selector) {
  if (selector in elementRefs) return elementRefs[selector];
  const elementRef = document.querySelector(selector);
  if (!elementRef) return null;
  elementRefs[selector] = elementRef;
  return elementRef;
}

function value($event) {
  try {
    return $event.target.value;
  } catch {}
  return "";
}

function calculate($event) {
  const inputValue = value($event);

  // render
  const resultElement = select(".result");
  resultElement.innerText = `=${Calculate(inputValue)}`;
}
