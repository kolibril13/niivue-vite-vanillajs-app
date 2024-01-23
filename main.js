import { Niivue } from "@niivue/niivue";

const canvas = document.createElement("canvas");
canvas.id = "gl";
canvas.width = 800;
canvas.height = 800;

document.querySelector("#app").appendChild(canvas);

var volumeList1 = [
  {
    url: "images/mni152.nii.gz",
    colormap: "gray",
    visible: true,
    opacity: 1,
  },
  {
    url: "images/hippo.nii.gz",
    colormap: "red",
    visible: true,
    opacity: 0.8,
  },
];

const nv = new Niivue({ isResizeCanvas: false });
nv.attachTo("gl");
nv.loadVolumes(volumeList1);
// nv. SOME CODE to set the opacity of the hippocampus to 0.2 
nv.setOpacity(1, 0.1)