const appContainer = document.querySelector("#app");

import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

function createCodeContainer(code) {
  const container = document.createElement("div");
  container.innerHTML = `<pre><code class="javascript">${code}</code></pre>`;
  const codeElement = container.querySelector("code");
  hljs.highlightElement(codeElement);
  return container;
}


const code = `
i = 3;
console.log(i);
`;

const codeContainer = createCodeContainer(code);

const createAndAppendDiv = (newDiv) => {
  const newDivOrange = document.createElement("div");
  newDivOrange.style.border = "1px solid orange"; // border color
  newDivOrange.style.height = "150px"; // fixed height for each div
  newDivOrange.style.display = "flex";
  newDivOrange.style.width = "50%";
  newDivOrange.style.alignItems = "center"; // center content vertically
  newDivOrange.style.justifyContent = "center"; // center content horizontally
  newDivOrange.appendChild(newDiv); // append the div to the specified container
  appContainer.appendChild(newDivOrange);
};

createAndAppendDiv(codeContainer); // div1
createAndAppendDiv(codeContainer.cloneNode(true)); // div2
createAndAppendDiv(codeContainer.cloneNode(true)); // div3
createAndAppendDiv(codeContainer.cloneNode(true)); // div4