import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { Niivue } from "@niivue/niivue";

const code = `
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

const codeContainer = createContainer("50%", `<pre><code class="javascript">${code}</code></pre>`);
hljs.highlightElement(codeContainer.querySelector("code"));

const canvasContainer = createContainer("50%", '<canvas id="gl"></canvas>');

const mainContainer = document.createElement("div");
mainContainer.style.display = "flex";
mainContainer.appendChild(codeContainer);
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
