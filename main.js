import hljs from "highlight.js";
import 'highlight.js/styles/atom-one-dark.css'; 
const container = document.createElement("div");

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
container.appendChild(codeBlock);

document.querySelector("#app").appendChild(container);

hljs.highlightElement(codeElement);


