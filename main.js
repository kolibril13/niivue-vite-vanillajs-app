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
    colormap: "green",
    visible: true,
    opacity: 1,
  },
];

const nv = new Niivue({ isResizeCanvas: false });
nv.attachTo("gl");
nv.loadVolumes(volumeList1);
