import { Niivue } from "@niivue/niivue";

const canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 1500;

document.querySelector("#app").appendChild(canvas);

var nv1 = new Niivue({
  show3Dcrosshair: true,
  backColor: [1, 1, 1, 1],
});
nv1.setSliceType(nv1.sliceTypeRender);
nv1.attachToCanvas(canvas);
nv1.opts.isColorbar = true;
var meshLHLayersList1 = [
  {
    url: "images/BrainMesh_ICBM152.lh.motor.mz3",
    cal_min: 2,
    cal_max: 5,
    useNegativeCmap: true,
    opacity: 0.7,
  },
];
await nv1.loadMeshes([
  { url: "images/BrainMesh_ICBM152.lh.mz3", layers: meshLHLayersList1 },
]);
nv1.setMeshShader(nv1.meshes[0].id, "Matcap");
nv1.setClipPlane([-0.1, 270, 0]);
