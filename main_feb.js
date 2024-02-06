import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { Niivue } from "@niivue/niivue";

const code = `
const canvasContainer = createContainer("50%", '<canvas id="gl"></canvas>');
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

const createContainer = (width, content) => {
  const container = document.createElement("div");
  container.style.width = width;
  container.style.display = "inline-block";
  container.innerHTML = content;
  return container;
};

const codeContainer = createContainer(
  "50%",
  `<pre><code class="javascript">${code}</code></pre>`
);
hljs.highlightElement(codeContainer.querySelector("code"));

const mainContainer = document.createElement("div");
mainContainer.style.display = "flex";
mainContainer.appendChild(codeContainer);
mainContainer.appendChild(canvasContainer);

document.querySelector("#app").appendChild(mainContainer);

const canvasContainer = createContainer("50%", '<canvas id="gl"></canvas>');
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
