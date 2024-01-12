// import "./style.css";

import { Niivue } from "@niivue/niivue";

document.querySelector("#app").innerHTML = `
  <div style="position: absolute; top: 0; left: 0;"> 
    <canvas id="gl" width="800" height="800"></canvas>
  </div>
`;

// make an array of volumes to load
let volumeList = [
  { url: "https://niivue.github.io/niivue-demo-images/mni152.nii.gz" },
];
const nv = new Niivue({ isResizeCanvas: false });
nv.attachTo("gl"); // attach to canvas with id="gl"
nv.loadVolumes(volumeList);
