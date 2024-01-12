import { Niivue } from "@niivue/niivue";

// Create a canvas element
const canvas = document.createElement("canvas");
canvas.id = "gl";
canvas.width = 800;
canvas.height = 800;

// Append the canvas to the element with id="app"
document.querySelector("#app").appendChild(canvas);

// Make an array of volumes to load
let volumeList = [
    { url: "https://niivue.github.io/niivue-demo-images/mni152.nii.gz" },
];

const nv = new Niivue({ isResizeCanvas: false });
nv.attachTo("gl"); // attach to canvas with id="gl"
nv.loadVolumes(volumeList);
