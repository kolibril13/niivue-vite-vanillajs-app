import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

const code = `
i = 3;
console.log(i);
`;

function createCodeContainer(code, width) {
    const container = document.createElement('div');
    container.style.width = width;
    container.innerHTML = `<pre><code class="javascript">${code}</code></pre>`;
    return container;
}

function highlightCode(container) {
    const codeElement = container.querySelector('code');
    hljs.highlightElement(codeElement);
}

function appendToApp(container) {
    const appElement = document.querySelector('#app');
    appElement.appendChild(container);
}

const codeContainer = createCodeContainer(code, '50%');
highlightCode(codeContainer);
appendToApp(codeContainer);
