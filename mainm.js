import { Niivue } from "@niivue/niivue";

const canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 1500;

var label = document.createElement("label");
label.setAttribute("for", "meshSlider");
label.textContent = "Threshold";
label.style.color = "white";
label.style.fontSize = "25px";
// Create input
var input = document.createElement("input");
input.setAttribute("type", "range");
input.setAttribute("min", "1");
input.setAttribute("max", "49");
input.setAttribute("value", "20");
input.setAttribute("class", "slider");
input.setAttribute("id", "meshSlider");
input.style.width = "400px";

// Append elements to #app
document.querySelector("#app").appendChild(label);
document.querySelector("#app").appendChild(input);

var slider = document.getElementById("meshSlider");
slider.oninput = function () {
  nv1.setMeshLayerProperty(nv1.meshes[0].id, 0, "cal_min", this.value * 0.1);
};

document.querySelector("#app").appendChild(canvas);

var nv1 = new Niivue({
  show3Dcrosshair: true,
  backColor: [1, 1, 1, 1],
});
nv1.setSliceType(nv1.sliceTypeRender);
nv1.attachToCanvas(canvas);
nv1.opts.isColorbar = true;

nv1.loadMeshes([
  {
    url: "images/Human.colin.Cerebral.R.VERY_INFLATED.71723.surf.gii",
    rgba255: [255, 255, 255, 255],
    layers: [
      {
        url: "images/Human.colin.R.FUNCTIONAL.71723.func.gii",
        colormap: "rocket",
        opacity: 0.7,
      },
    ],
  },
]);
nv1.setClipPlane([-0.1, 270, 0]);
