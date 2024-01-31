import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { Niivue } from "@niivue/niivue";

// Original code example
const code1 = `
import { Niivue } from "@niivue/niivue";

var volumeList1 = [
  {
    url: "mni152.nii.gz",
    colormap: "gray",
    visible: true,
    opacity: 1,
  },
];

const nv = new Niivue({ isResizeCanvas: false });
nv.attachTo("gl");

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

// Second code example with modifications
const code2 = `
import { Niivue } from "@niivue/niivue";

var volumeList1 = [
  {
    url: "mni152.nii.gz",
    colormap: "gray",
    visible: true,
    opacity: 1,
  },
];

const nv = new Niivue({ isResizeCanvas: false });
nv.attachTo("gl");

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
const createContainer = (content) => {
  const container = document.createElement("div");
  container.style.margin = "0 auto"; // Center the container
  container.innerHTML = content;
  return container;
};

const codeContainer1 = createContainer(`<pre><code class="javascript">${code1}</code></pre>`);
hljs.highlightElement(codeContainer1.querySelector("code"));

const codeContainer2 = createContainer(`<pre><code class="javascript">${code2}</code></pre>`);
hljs.highlightElement(codeContainer2.querySelector("code"));

const canvasContainer1 = createContainer('<canvas id="gl1" style="width:100%"></canvas>');
const canvasContainer2 = createContainer('<canvas id="gl2" style="width:100%"></canvas>');

const column1 = document.createElement("div");
column1.style.width = "50%";
column1.style.float = "left"; // Makes the column float to the left
column1.appendChild(codeContainer1);
column1.appendChild(canvasContainer1);

const column2 = document.createElement("div");
column2.style.width = "50%";
column2.style.float = "left"; // Makes the column float to the left
column2.appendChild(codeContainer2);
column2.appendChild(canvasContainer2);

const appContainer = document.querySelector("#app");
appContainer.appendChild(column1);
appContainer.appendChild(column2);

// Clear floats after the columns
const clearDiv = document.createElement("div");
clearDiv.style.clear = "both";
appContainer.appendChild(clearDiv);

// Initialize Niivue for the first canvas
const nv1 = new Niivue({ isResizeCanvas: true });
nv1.attachTo("gl1");

// Initialize Niivue for the second canvas
const nv2 = new Niivue({ isResizeCanvas: true });
nv2.attachTo("gl2");


const volumeList1 = [
  {
    url: "mni152.nii.gz",
    colormap: "gray",
    visible: true,
    opacity: 1,
  },
];

nv1.loadVolumes(volumeList1)
  .then(() => {
    console.log("Volume loaded");
    console.log("hi" + nv.colormaps());
    nv.setOpacity(0, 0.5);
    nv.setColorMap(nv.volumes[0].id, "red");
  })
  .catch((error) => {
    console.error("Error loading volumes", error);
  });


nv2.loadVolumes(volumeList1)
.then(() => {
  console.log("Volume loaded");
  console.log("hi" + nv.colormaps());
  nv.setOpacity(0, 0.5);
  nv.setColorMap(nv.volumes[0].id, "red");
})
.catch((error) => {
  console.error("Error loading volumes", error);
});
