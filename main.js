import hljs from "highlight.js";
import 'highlight.js/styles/atom-one-dark.css'; 
import { Niivue } from "@niivue/niivue";

// Create main container
const container = document.createElement("div");
container.style.display = "flex";
container.style.justifyContent = "space-between";

// Create code block container
const codeBlock = document.createElement("pre");
const codeElement = document.createElement("code");
codeElement.className = "javascript";
codeElement.textContent = `import { Niivue } from "@niivue/niivue";

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

// Use .then() to wait for the volume to load
nv.loadVolumes(volumeList1).then(() => {
  console.log("Volume loaded");
  console.log("hi" + nv.colormaps());
  nv.setOpacity(0, 0.5);
  nv.setColorMap(nv.volumes[0].id, "red");
}).catch((error) => {
  console.error("Error loading volumes", error);
});
`;
codeBlock.appendChild(codeElement);
codeBlock.style.width = "50%";
codeBlock.style.whiteSpace = "pre-wrap";
hljs.highlightElement(codeElement);

// Create canvas container
const canvasContainer = document.createElement("div");
canvasContainer.style.width = "50%";

// Create and configure canvas
const canvas = document.createElement("canvas");
canvas.id = "gl";
canvas.width = 800;
canvas.height = 800;
canvas.style.border = "1px solid black";
canvasContainer.appendChild(canvas);

// Append the containers to the main container
container.appendChild(codeBlock);
container.appendChild(canvasContainer);

// Append the main container to the document
document.querySelector("#app").appendChild(container);

// Initialize and Execute Niivue
const nv = new Niivue({ isResizeCanvas: false });
nv.attachTo("gl");

var volumeList1 = [
  {
    url: "mni152.nii.gz",
    colormap: "gray",
    visible: true,
    opacity: 1,
  },
];

nv.loadVolumes(volumeList1).then(() => {
  console.log("Volume loaded");
  console.log("hi" + nv.colormaps());
  nv.setOpacity(0, 0.5);
  nv.setColorMap(nv.volumes[0].id, "red");
}).catch((error) => {
  console.error("Error loading volumes", error);
});
