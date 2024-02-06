const appContainer = document.querySelector("#app");

appContainer.style.maxWidth = "1000px"; // Set maximum width to 1000px
appContainer.style.margin = "auto"; // Center the container on the page

import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

function createCodeContainer(code) {
  const container = document.createElement("div");
  container.style.cssText = "height: 350px; overflow: auto;"; // Set height and overflow
  container.innerHTML = `<pre><code class="javascript">${code}</code></pre>`;
  hljs.highlightElement(container.querySelector("code"));
  return container;
}

function createStyledDiv(newDiv) {
  const styledDiv = document.createElement("div");
  styledDiv.style.cssText =
    "border: 4px solid rgba(255, 165, 0, 0.05); display: flex; width: 50%; align-items: center; justify-content: center;";
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

//////////////////////////

const row1 = createRow();

const code1a = `Hi There`;
row1.appendChild(createStyledDiv(createCodeContainer(code1a)));

const code1b = `Hello World`;
row1.appendChild(createStyledDiv(createCodeContainer(code1b)));

appContainer.appendChild(row1);

//////////////////////////

const row2 = createRow();

const code2a = `

const nv = new Niivue({ isResizeCanvas: false });
nv.attachTo("gl");

const volumeList1 = [
  {
    url: "mni152.nii.gz",
    colormap: "gray",
    visible: true,
    opacity: 1,
  },
];

nv.loadVolumes(volumeList1)
  .then(() => {
    console.log("Volume loaded");
    console.log("hi" + nv.colormaps());
    nv.setOpacity(0, 0.5);
    nv.setColorMap(nv.volumes[0].id, "red");
  })
  .catch((error) => {
    console.error("Error loading volumes", error);
  });

`;
row2.appendChild(createStyledDiv(createCodeContainer(code2a)));

import { Niivue } from "@niivue/niivue";

const canvasContainer = document.createElement("div");
row2.appendChild(createStyledDiv(canvasContainer));

canvasContainer.innerHTML = '<canvas id="gl"></canvas>';
appContainer.appendChild(row2);

const nv = new Niivue({ isResizeCanvas: false });
nv.attachTo("gl");

const volumeList1 = [
  {
    url: "mni152.nii.gz",
    colormap: "gray",
    visible: true,
    opacity: 1,
  },
];

nv.loadVolumes(volumeList1)
  .then(() => {
    console.log("Volume loaded");
    console.log("hi" + nv.colormaps());
    nv.setOpacity(0, 0.5);
    nv.setColorMap(nv.volumes[0].id, "red");
  })
  .catch((error) => {
    console.error("Error loading volumes", error);
  });

//////////////////////////
