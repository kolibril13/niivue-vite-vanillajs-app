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
const createContainer = (width, content) => {
  const container = document.createElement("div");
  container.style.width = width;
  container.style.display = "inline-block";
  container.innerHTML = content;
  return container;
};

const createHorizontalLine = () => {
  const line = document.createElement("hr");
  line.style.color = "yellow"; // Set the color of the line
  return line;
};

const codeContainer1 = createContainer("50%", `<pre><code class="javascript">${code1}</code></pre>`);
hljs.highlightElement(codeContainer1.querySelector("code"));

const codeContainer2 = createContainer("50%", `<pre><code class="javascript">${code2}</code></pre>`);
hljs.highlightElement(codeContainer2.querySelector("code"));

const canvasContainer = createContainer("50%", '<canvas id="gl"></canvas>');

const mainContainer = document.createElement("div");
mainContainer.style.display = "flex";
mainContainer.appendChild(codeContainer1);
mainContainer.appendChild(createHorizontalLine()); // Add the horizontal line here
mainContainer.appendChild(codeContainer2);
mainContainer.appendChild(canvasContainer);

document.querySelector("#app").appendChild(mainContainer);

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
