import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

const code = `
i = 3;
console.log(i);
`;

const createContainer = (content, width) => {
  const container = document.createElement("div");
  container.style.width = width;
  container.innerHTML = content;
  return container;
};

const codeContainer = createContainer(
  `<pre><code class="javascript">${code}</code></pre>`,
  `50%`
);
hljs.highlightElement(codeContainer.querySelector("code"));

const mainContainer = document.createElement("div");
mainContainer.appendChild(codeContainer);

document.querySelector("#app").appendChild(mainContainer);
