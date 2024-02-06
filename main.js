const appContainer = document.querySelector("#app");

appContainer.style.maxWidth = "1200px"; // Set maximum width to 1000px
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

////////////////////////// ROW1



const row1 = createRow();

const code1a = `Code`;
row1.appendChild(createStyledDiv(createCodeContainer(code1a)));

const code1b = `Corresponding Output`;
row1.appendChild(createStyledDiv(createCodeContainer(code1b)));


appContainer.appendChild(row1);

////////////////////////// ROW2

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

////////////////////////// ROW3

const row3 = createRow();

const code3a = `
import { Niivue } from "@niivue/niivue";

const nv2 = new Niivue({ isResizeCanvas: true });
nv2.attachTo("gl3");
nv2.setSliceType(nv2.sliceTypeRender);
nv2.opts.isColorbar = true;
nv2.opts.show3Dcrosshair = true;
nv2.opts.backColor = [1, 1, 1, 1];
nv2.loadMeshes([
  {
    url: "Human.colin.Cerebral.R.VERY_INFLATED.71723.surf.gii",
    rgba255: [255, 255, 255, 255],
    layers: [
      {
        url: "Human.colin.R.FUNCTIONAL.71723.func.gii",
        colormap: "rocket",
        opacity: 0.7,
      },
    ],
  },
]);
nv2.setClipPlane([-0.1, 270, 0]);
`;
row3.appendChild(createStyledDiv(createCodeContainer(code3a)));


const canvasContainer3 = document.createElement("div");
row3.appendChild(createStyledDiv(canvasContainer3));

canvasContainer3.innerHTML = '<canvas id="gl2"></canvas>';
appContainer.appendChild(row3);

const nv2 = new Niivue({ isResizeCanvas: true });
nv2.attachTo("gl2");
nv2.setSliceType(nv2.sliceTypeRender);
nv2.opts.isColorbar = true;
nv2.opts.show3Dcrosshair = true;
nv2.opts.backColor = [1, 1, 1, 1];
nv2.loadMeshes([
  {
    url: "Human.colin.Cerebral.R.VERY_INFLATED.71723.surf.gii",
    rgba255: [255, 255, 255, 255],
    layers: [
      {
        url: "Human.colin.R.FUNCTIONAL.71723.func.gii",
        colormap: "rocket",
        opacity: 0.7,
      },
    ],
  },
]);
nv2.setClipPlane([-0.1, 270, 0]);


