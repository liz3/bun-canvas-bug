import { createCanvas } from "canvas";
const f = () => {
    const canvas = createCanvas(850, 600);
    // this causes the bug:
    const ctx = canvas.getContext("2d");
    return { buffer: canvas.toBuffer("raw") };
};
for (let i = 0; i < 200; i++) {
    if (process.argv[2] === "gc") Bun.gc(true);
    new Promise((r) => f());
}
