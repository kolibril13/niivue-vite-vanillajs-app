// Create main container
const container = document.createElement("div");
container.style.display = "flex";
container.style.justifyContent = "space-between";

// Create code block container
const codeBlock = document.createElement("div");
codeBlock.style.width = "50%";
codeBlock.textContent = `
import { Niivue } from "@niivue/niivue";
var volumeList1 = [
  {
    url: "images/mni152.nii.gz",
    colormap: "gray",
    visible: true,
    opacity: 1,
  },
];

const nv = new Niivue({ isResizeCanvas: false });
nv.attachTo("gl");
await nv.loadVolumes(volumeList1);
console.log("hi" + nv.colormaps());
nv.setOpacity(0, 0.5);
nv.setColorMap(nv.volumes[0].id, "red");
`;
codeBlock.style.whiteSpace = "pre-wrap";

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

// Append the main container to the body of the document
// document.body.appendChild(container);

document.querySelector("#app").appendChild(container);
import { Niivue } from "@niivue/niivue";
var volumeList1 = [
  {
    url: "images/mni152.nii.gz",
    colormap: "gray",
    visible: true,
    opacity: 1,
  },
];

const nv = new Niivue({ isResizeCanvas: false });
nv.attachTo("gl");
await nv.loadVolumes(volumeList1);
console.log("hi" + nv.colormaps());
nv.setOpacity(0, 0.5);
nv.setColorMap(nv.volumes[0].id, "red");
