const appContainer = document.querySelector("#app");

appContainer.style.maxWidth = "1000px"; // Set maximum width to 1000px
appContainer.style.margin = "auto"; // Center the container on the page


import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

function createCodeContainer(code) {
  const container = document.createElement("div");
  container.innerHTML = `<pre><code class="javascript">${code}</code></pre>`;
  hljs.highlightElement(container.querySelector("code"));
  return container;
}

function createStyledDiv(newDiv) {
  const styledDiv = document.createElement("div");
  styledDiv.style.cssText =
    "border: 4px solid rgba(255, 165, 0, 0.05); height: 150px; display: flex; width: 50%; align-items: center; justify-content: center;";
  styledDiv.style.margin = "10px";
  styledDiv.appendChild(newDiv);
  return styledDiv;
}

function createRow() {
  const row = document.createElement("div");
  row.style.border = "4px solid rgba(255, 165, 0, 0.5)";
  row.style.margin = "10px";
  row.style.display = "flex";
  return row;
}

const code1 = `i = 3;\nconsole.log(i);`;
const code2 = `i = 4;\nconsole.log(i);`;

const row1 = createRow();
row1.appendChild(createStyledDiv(createCodeContainer(code1)));
row1.appendChild(createStyledDiv(createCodeContainer(code1)));

const row2 = createRow();
row2.appendChild(createStyledDiv(createCodeContainer(code2)));
row2.appendChild(createStyledDiv(createCodeContainer(code2)));

appContainer.appendChild(row1);
appContainer.appendChild(row2);
