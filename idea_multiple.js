import { Niivue } from "@niivue/niivue";

// Async function to create and append a canvas
async function createCanvas(index) {
    const canvas = document.createElement("canvas");
    canvas.id = "gl" + index; // Unique ID for each canvas
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
    ];

    const nv = new Niivue({ isResizeCanvas: false });
    nv.attachTo(canvas.id);
    await nv.loadVolumes(volumeList1);
    console.log("Canvas " + index + ": " + nv.colormaps());
    nv.setOpacity(0, 0.5);
    nv.setColorMap(nv.volumes[0].id, "red");
}

// Create 10 canvases
for (let i = 0; i < 10; i++) {
    createCanvas(i).catch(error => console.error("Error in canvas " + i + ": ", error));
}
