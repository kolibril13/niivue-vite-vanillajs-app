const appContainer = document.querySelector("#app");

appContainer.style.maxWidth = "1000px"; // Set maximum width to 1000px
appContainer.style.margin = "auto"; // Center the container on the page

import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

function createCodeContainer(code) {
  const container = document.createElement("div");
  container.style.cssText = "overflow: auto;"; // Set height and overflow
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

const code1a = `Code`;
row1.appendChild(createStyledDiv(createCodeContainer(code1a)));

const code1b = `Corresponding Output`;
row1.appendChild(createStyledDiv(createCodeContainer(code1b)));


appContainer.appendChild(row1);

//////////////////////////

const row2 = createRow();

const code2a = `
import { Niivue } from "@niivue/niivue";

const nv = new Niivue({ isResizeCanvas: true });
nv.attachTo("gl");

const volumeList1 = [
  {
    url: "mni152.nii.gz",
    colormap: "gray",
    visible: true,
    opacity: 1,
  },
];

nv.loadVolumes(volumeList1).then(() => {
  nv.setOpacity(0, 0.5);
  nv.setColorMap(nv.volumes[0].id, "red");
});
`;
row2.appendChild(createStyledDiv(createCodeContainer(code2a)));


const canvasContainer = document.createElement("div");
row2.appendChild(createStyledDiv(canvasContainer));

canvasContainer.innerHTML = '<canvas id="gl"></canvas>';
appContainer.appendChild(row2);
import { Niivue } from "@niivue/niivue";

const nv = new Niivue({ isResizeCanvas: true });
nv.attachTo("gl");

const volumeList1 = [
  {
    url: "mni152.nii.gz",
    colormap: "gray",
    visible: true,
    opacity: 1,
  },
];

nv.loadVolumes(volumeList1).then(() => {
  nv.setOpacity(0, 0.5);
  nv.setColorMap(nv.volumes[0].id, "red");
});

//////////////////////////

//////////////////////////

const row3 = createRow();

const code3a = `
import { Niivue } from "@niivue/niivue";

const nv = new Niivue({ isResizeCanvas: true });
nv.attachTo("gl");

const volumeList1 = [
  {
    url: "mni152.nii.gz",
    colormap: "gray",
    visible: true,
    opacity: 1,
  },
];

nv.loadVolumes(volumeList1).then(() => {
  nv.setOpacity(0, 0.5);
  nv.setColorMap(nv.volumes[0].id, "red");
});
`;
row3.appendChild(createStyledDiv(createCodeContainer(code3a)));


const canvasContainer3 = document.createElement("div");
row3.appendChild(createStyledDiv(canvasContainer3));

canvasContainer3.innerHTML = '<canvas id="gl3"></canvas>';
appContainer.appendChild(row3);

const nv2 = new Niivue({ isResizeCanvas: true });
nv2.attachTo("gl3");

const volumeList2 = [
  {
    url: "mni152.nii.gz",
    colormap: "gray",
    visible: true,
    opacity: 1,
  },
];

nv2.loadVolumes(volumeList2).then(() => {
  nv2.setOpacity(0, 1);
  nv2.setColorMap(nv2.volumes[0].id, "blue");
});

//////////////////////////
