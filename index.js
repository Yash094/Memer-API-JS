import { config } from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { createCanvas, loadImage } from "canvas";
config();

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const app = express();
const PORT = 3000;


app.get("/api/v4/disability", async (req, res) => {
    let { avatars } = req.query;
    const canvas = createCanvas(663, 618);
    const ctx = canvas.getContext("2d");
    const image = await loadImage(
        "https://raw.githubusercontent.com/DankMemer/imgen/master/assets/disability/disability.bmp"
    );
    const imageperson = await loadImage(avatars);
    ctx.drawImage(image, 0, 0, 663, 618);
    ctx.drawImage(imageperson, 450, 325, 175, 175);

    res.set("Content-Type", "image/png");
    res.send(canvas.toBuffer("image/png"));
});
app.get("/api/v4/dab", async (req, res) => {
    let { avatars } = req.query;
    const canvas = createCanvas(800, 611);
    const ctx = canvas.getContext("2d");
    const image = await loadImage(
        "https://raw.githubusercontent.com/DankMemer/imgen/master/assets/dab/dab.bmp"
    );
    const imageperson = await loadImage(avatars);

    ctx.drawImage(imageperson, 300, 0, 500, 500);
    ctx.drawImage(image, 0, 0, 800, 611);
    res.set("Content-Type", "image/png");
    res.send(canvas.toBuffer("image/png"));
});

app.get("/api/v4/cry", async (req, res) => {
    let { text } = req.query;
    const canvas = createCanvas(626, 768);
    const ctx = canvas.getContext("2d");
    const image = await loadImage(
        "https://raw.githubusercontent.com/DankMemer/imgen/master/assets/cry/cry.bmp"
    );

    ctx.drawImage(image, 0, 0, 626, 768);
    ctx.font = "20px Poppins";
    ctx.fillStyle = "#000000";
    ctx.fillText(text, 382, 80);
    res.set("Content-Type", "image/png");
    res.send(canvas.toBuffer("image/png"));
});

app.get("/api/v4/door", async (req, res) => {
    let { avatars } = req.query;
    const canvas = createCanvas(1000, 479);
    const ctx = canvas.getContext("2d");
    const image = await loadImage(
        "https://raw.githubusercontent.com/DankMemer/imgen/master/assets/door/door.bmp"
    );
    const imageperson = await loadImage(avatars);
    ctx.drawImage(imageperson, 250, 0, 479, 479);
    ctx.drawImage(image, 0, 0, 1000, 479);

    res.set("Content-Type", "image/png");
    4;
    res.send(canvas.toBuffer("image/png"));
});

app.get("/api/v4/egg", async (req, res) => {
    let { avatars } = req.query;
    const canvas = createCanvas(350, 350);
    const ctx = canvas.getContext("2d");
    const image = await loadImage(
        "https://raw.githubusercontent.com/DankMemer/imgen/master/assets/egg/egg.bmp"
    );
    const imageperson = await loadImage(avatars);
    ctx.drawImage(image, 0, 0, 350, 350);
    ctx.drawImage(imageperson, 143, 188, 50, 50);

    res.set("Content-Type", "image/png");
    res.send(canvas.toBuffer("image/png"));
});

app.get("/api/v4/excuseme", async (req, res) => {
    let { text } = req.query;
    const canvas = createCanvas(807, 745);
    const ctx = canvas.getContext("2d");
    const image = await loadImage(
        "https://raw.githubusercontent.com/DankMemer/imgen/master/assets/excuseme/excuseme.bmp"
    );
    ctx.drawImage(image, 0, 0, 807, 745);
    ctx.font = "20px Poppins";
    ctx.fillStyle = "#000000";
    ctx.fillText(text, 20, 15);
    res.set("Content-Type", "image/png");
    res.send(canvas.toBuffer("image/png"));
});

app.get("/api/v4/savehumanity", async (req, res) => {
    let { text } = req.query;
    const canvas = createCanvas(720, 723);
    const ctx = canvas.getContext("2d");
    const image = await loadImage(
        "https://raw.githubusercontent.com/DankMemer/imgen/master/assets/humanity/humanity.bmp"
    );
    ctx.drawImage(image, 0, 0, 720, 723);
    ctx.font = "20px Poppins";
    ctx.fillStyle = "#000000";
    ctx.fillText(text, 450, 490);
    res.set("Content-Type", "image/png");
    res.send(canvas.toBuffer("image/png"));
});

app.get("/api/v4/stonks", async (req, res) => {
    let { text } = req.query;
    const canvas = createCanvas(408, 408);
    const ctx = canvas.getContext("2d");
    const image = await loadImage("https://i.ibb.co/M9rshwf/stonks.jpg");
    ctx.drawImage(image, 0, 0, 408, 408);
    ctx.font = "30px Poppins";
    ctx.fillStyle = "#000000";
    ctx.fillText(text, 10, 22);
    res.set("Content-Type", "image/png");
    res.send(canvas.toBuffer("image/png"));
});

app.get("/api/v4/ohno", async (req, res) => {
    let { text } = req.query;
    const canvas = createCanvas(640, 640);
    const ctx = canvas.getContext("2d");
    const image = await loadImage(
        "https://raw.githubusercontent.com/DankMemer/imgen/master/assets/ohno/ohno.bmp"
    );
    ctx.drawImage(image, 0, 0, 640, 640);
    ctx.font = "20px Poppins";
    ctx.fillStyle = "#000000";
    ctx.fillText(text, 340, 20);
    res.set("Content-Type", "image/png");
    res.send(canvas.toBuffer("image/png"));
});

app.get("/api/v4/failure", async (req, res) => {
    let { avatars } = req.query;
    const canvas = createCanvas(572, 767);
    const ctx = canvas.getContext("2d");
    const image = await loadImage(
        "https://raw.githubusercontent.com/DankMemer/imgen/master/assets/failure/failure.bmp"
    );
    const imageperson = await loadImage(avatars);
    ctx.drawImage(image, 0, 0, 572, 767);
    ctx.drawImage(imageperson, 143, 525, 215, 215);

    res.set("Content-Type", "image/png");
    res.send(canvas.toBuffer("image/png"));
});

app.get("/api/v4/trash", async (req, res) => {
    let { avatars } = req.query;
    const canvas = createCanvas(960, 960);
    const ctx = canvas.getContext("2d");
    const image = await loadImage(
        "https://raw.githubusercontent.com/DankMemer/imgen/master/assets/trash/trash.bmp"
    );
    const imageperson = await loadImage(avatars);
    ctx.drawImage(image, 0, 0, 960, 960);
    ctx.drawImage(imageperson, 480, 0, 483, 483);
    res.set("Content-Type", "image/png");
    res.send(canvas.toBuffer("image/png"));
});

app.get("/api/v4/kiss", async (req, res) => {
    let { avatar1, avatar2 } = req.query;
    const canvas = createCanvas(768, 574);

    const ctx = canvas.getContext("2d");
    const image = await loadImage(`https://i.ibb.co/8rnFHYS/kiss.png`);
    const imageperson = await loadImage(avatar1);
    const imageperson2 = await loadImage(avatar2);
    ctx.drawImage(image, 0, 0, 768, 574);
    ctx.drawImage(imageperson, 150, 25, 200, 200);
    ctx.drawImage(imageperson2, 370, 25, 200, 200);
    res.set("Content-Type", "image/png");
    res.send(canvas.toBuffer("image/png"));
});
app.get("/api/v4/vr", async (req, res) => {
    let { text } = req.query;
    const canvas = createCanvas(680, 670);
    const ctx = canvas.getContext("2d");
    const image = await loadImage(
        "https://raw.githubusercontent.com/DankMemer/imgen/master/assets/vr/vr.bmp"
    );
    ctx.drawImage(image, 0, 0, 680, 670);
    ctx.font = "16px Poppins";
    ctx.fillStyle = "#000000";
    ctx.fillText(text, 80, 485);
    res.set("Content-Type", "image/png");
    res.send(canvas.toBuffer("image/png"));
});
app.get("/api/v4/isearch", async (req, res) => {
    let { text } = req.query;
    const canvas = createCanvas(700, 612);
    const ctx = canvas.getContext("2d");
    const image = await loadImage(
        "https://raw.githubusercontent.com/DankMemer/imgen/master/assets/search/thesearch.bmp"
    );
    ctx.drawImage(image, 0, 0, 700, 612);
    ctx.font = "16px Poppins";
    ctx.fillStyle = "#000000";
    ctx.fillText(text, 65, 355);
    res.set("Content-Type", "image/png");
    res.send(canvas.toBuffer("image/png"));
});
app.get("/api/v4/satan", async (req, res) => {
    let { avatars } = req.query;
    const canvas = createCanvas(600, 450);
    const ctx = canvas.getContext("2d");
    const image = await loadImage(
        "https://raw.githubusercontent.com/DankMemer/imgen/master/assets/satan/satan.bmp"
    );
    const imageperson = await loadImage(avatars);
    ctx.drawImage(image, 0, 0, 600, 450);
    ctx.drawImage(imageperson, 200, 90, 195, 195);
    res.set("Content-Type", "image/png");
    res.send(canvas.toBuffer("image/png"));
});
app.get("/api/v4/stroke", async (req, res) => {
    let { text } = req.query;
    const canvas = createCanvas(490, 492);
    const ctx = canvas.getContext("2d");
    const image = await loadImage(
        "https://raw.githubusercontent.com/DankMemer/imgen/master/assets/stroke/stroke.bmp"
    );
    ctx.drawImage(image, 0, 0, 490, 492);
    ctx.font = "12px Poppins";
    ctx.fillStyle = "#000000";
    ctx.fillText(text, 272, 300);
    res.set("Content-Type", "image/png");
    res.send(canvas.toBuffer("image/png"));
});
app.get("/api/v4/roblox", async (req, res) => {
    let { avatars } = req.query;
    const canvas = createCanvas(420, 420);
    const ctx = canvas.getContext("2d");
    const image = await loadImage(
        "https://raw.githubusercontent.com/DankMemer/imgen/master/assets/roblox/roblox.bmp"
    );
    const imageperson = await loadImage(avatars);
    ctx.drawImage(image, 0, 0, 420, 420);
    ctx.drawImage(imageperson, 168, 41, 56, 74);
    res.set("Content-Type", "image/png");
    res.send(canvas.toBuffer("image/png"));
});
app.get("/api/v4/hitler", async (req, res) => {
    let { avatars } = req.query;
    const canvas = createCanvas(480, 360);
    const ctx = canvas.getContext("2d");
    const image = await loadImage(
        "https://raw.githubusercontent.com/DankMemer/imgen/master/assets/hitler/hitler.bmp"
    );
    const imageperson = await loadImage(avatars);
    ctx.drawImage(image, 0, 0, 480, 360);
    ctx.drawImage(imageperson, 43, 43, 140, 140);
    res.set("Content-Type", "image/png");
    res.send(canvas.toBuffer("image/png"));
});
app.get("/api/v4/jail", async (req, res) => {
    let { avatars } = req.query;
    const canvas = createCanvas(350, 350);
    const ctx = canvas.getContext("2d");
    const image = await loadImage(
        "https://raw.githubusercontent.com/DankMemer/imgen/master/assets/jail/jail.bmp"
    );
    const imageperson = await loadImage(avatars);
    ctx.drawImage(imageperson, 0, 0, 350, 350);
    ctx.drawImage(image, 0, 0, 350, 350);

    res.set("Content-Type", "image/png");
    res.send(canvas.toBuffer("image/png"));
});
app.get("/api/v4/slap", async (req, res) => {
    let { avatar1, avatar2 } = req.query;
    const canvas = createCanvas(1000, 500);

    const ctx = canvas.getContext("2d");
    const image = await loadImage(
        `https://raw.githubusercontent.com/DankMemer/imgen/master/assets/batslap/batslap.bmp`
    );
    const imageperson = await loadImage(avatar1);
    const imageperson2 = await loadImage(avatar2);
    ctx.drawImage(image, 0, 0, 1000, 500);
    ctx.drawImage(imageperson, 580, 260, 200, 200);
    ctx.drawImage(imageperson2, 350, 70, 200, 200);
    res.set("Content-Type", "image/png");
    res.send(canvas.toBuffer("image/png"));
});
app.get("/api/v4/delete", async (req, res) => {
    let { avatars } = req.query;
    const canvas = createCanvas(748, 356);
    const ctx = canvas.getContext("2d");
    const image = await loadImage(
        "https://raw.githubusercontent.com/DankMemer/imgen/master/assets/delete/delete.bmp"
    );
    const imageperson = await loadImage(avatars);
    ctx.drawImage(image, 0, 0, 748, 356);
    ctx.drawImage(imageperson, 120, 135, 195, 195);
    res.set("Content-Type", "image/png");
    res.send(canvas.toBuffer("image/png"));
});
app.get("/api/v4/keepurdistance", async (req, res) => {
    let { text } = req.query;
    const canvas = createCanvas(640, 863);
    const ctx = canvas.getContext("2d");
    const image = await loadImage(
        "https://raw.githubusercontent.com/DankMemer/imgen/master/assets/keepurdistance/keepurdistance.png"
    );
    ctx.drawImage(image, 0, 0, 640, 863);
    ctx.font = "33px Poppins";
    ctx.fillStyle = "#fff";
    ctx.fillText(text, 92, 700);
    res.set("Content-Type", "image/png");
    res.send(canvas.toBuffer("image/png"));
});
app.get("/api/v4/walking", async (req, res) => {
    let { text } = req.query;
    const canvas = createCanvas(1080, 1080);
    const ctx = canvas.getContext("2d");
    const image = await loadImage(
        "https://raw.githubusercontent.com/DankMemer/imgen/master/assets/walking/walking.bmp"
    );
    ctx.drawImage(image, 0, 0, 1080, 1080);
    ctx.font = "33px Poppins";
    ctx.fillStyle = "#000";
    ctx.fillText(text, 35, 35);
    res.set("Content-Type", "image/png");
    res.send(canvas.toBuffer("image/png"));
});
app.get("/api/v4/fakenews", async (req, res) => {
    let { avatars } = req.query;
    const canvas = createCanvas(1200, 786);
    const ctx = canvas.getContext("2d");
    const image = await loadImage(
        "https://raw.githubusercontent.com/DankMemer/imgen/master/assets/fakenews/fakenews.bmp"
    );
    const imageperson = await loadImage(avatars);
    ctx.drawImage(imageperson, 390, 0, 447, 447);
    ctx.drawImage(image, 0, 0, 1200, 786);

    res.set("Content-Type", "image/png");
    res.send(canvas.toBuffer("image/png"));
});
app.get("/api/v4/wanted", async (req, res) => {
    let { avatars } = req.query;
    const canvas = createCanvas(736, 959);
    const ctx = canvas.getContext("2d");
    const image = await loadImage(
        "https://raw.githubusercontent.com/DankMemer/imgen/master/assets/wanted/wanted.bmp"
    );
    const imageperson = await loadImage(avatars);

    ctx.drawImage(image, 0, 0, 736, 959);

    ctx.drawImage(imageperson, 145, 282, 447, 447);
    res.set("Content-Type", "image/png");
    res.send(canvas.toBuffer("image/png"));
});
app.get("/api/v4/godwhy", async (req, res) => {
    let { text } = req.query;
    const canvas = createCanvas(1061, 1080);
    const ctx = canvas.getContext("2d");
    const image = await loadImage(
        "https://raw.githubusercontent.com/DankMemer/imgen/master/assets/godwhy/godwhy.png"
    );
    ctx.drawImage(image, 0, 0, 1061, 1080);
    ctx.font = "24px Poppins";
    ctx.fillStyle = "#000";
    ctx.fillText(text, 35, 580);
    res.set("Content-Type", "image/png");
    res.send(canvas.toBuffer("image/png"));
});
app.get("/api/v4/violence", async (req, res) => {
    let { text } = req.query;
    const canvas = createCanvas(640, 737);
    const ctx = canvas.getContext("2d");
    const image = await loadImage(
        "https://raw.githubusercontent.com/DankMemer/imgen/master/assets/violence/violence.jpg"
    );
    ctx.drawImage(image, 0, 0, 640, 737);
    ctx.font = "24px Poppins";
    ctx.fillStyle = "#000";
    ctx.fillText(text, 370, 20);
    res.set("Content-Type", "image/png");
    res.send(canvas.toBuffer("image/png"));
});
app.get("/api/v4/laid", async (req, res) => {
    let { avatars } = req.query;
    const canvas = createCanvas(900, 504);
    const ctx = canvas.getContext("2d");
    const image = await loadImage(
        "https://raw.githubusercontent.com/DankMemer/imgen/master/assets/laid/laid.bmp"
    );
    const imageperson = await loadImage(avatars);

    ctx.drawImage(image, 0, 0, 900, 504);

    ctx.drawImage(imageperson, 512, 360, 115, 115);
    res.set("Content-Type", "image/png");
    res.send(canvas.toBuffer("image/png"));
});
app.get("/api/v4/ugly", async (req, res) => {
    let { avatars } = req.query;
    const canvas = createCanvas(600, 418);
    const ctx = canvas.getContext("2d");
    const image = await loadImage(
        "https://raw.githubusercontent.com/DankMemer/imgen/master/assets/ugly/ugly.bmp"
    );
    const imageperson = await loadImage(avatars);

    ctx.drawImage(image, 0, 0, 600, 418);

    ctx.drawImage(imageperson, 120, 55, 175, 175);
    res.set("Content-Type", "image/png");
    res.send(canvas.toBuffer("image/png"));
});
app.get("/api/v4/humansgood", async (req, res) => {
    let { text } = req.query;
    const canvas = createCanvas(930, 928);
    const ctx = canvas.getContext("2d");
    const image = await loadImage(
        "https://raw.githubusercontent.com/DankMemer/imgen/master/assets/humansgood/humansgood.bmp"
    );
    ctx.drawImage(image, 0, 0, 930, 928);
    ctx.font = "20px Poppins";
    ctx.fillStyle = "#000";
    ctx.fillText(text, 525, 782);
    res.set("Content-Type", "image/png");
    res.send(canvas.toBuffer("image/png"));
});
app.get("/api/v4/bed", async (req, res) => {
    let { avatar1, avatar2 } = req.query;
    const canvas = createCanvas(316, 768);

    const ctx = canvas.getContext("2d");
    const image = await loadImage(
        `https://raw.githubusercontent.com/DankMemer/imgen/master/assets/bed/bed.bmp`
    );
    const imageperson = await loadImage(avatar1);
    const imageperson2 = await loadImage(avatar2);
    ctx.drawImage(image, 0, 0, 316, 768);
    ctx.drawImage(imageperson, 25, 100, 100, 100);
    ctx.drawImage(imageperson, 25, 300, 100, 100);
    ctx.drawImage(imageperson2, 53, 450, 100, 100);
    ctx.drawImage(imageperson, 53, 575, 70, 70);
    res.set("Content-Type", "image/png");
    res.send(canvas.toBuffer("image/png"));
});
app.get("/api/v4/changemymind", async (req, res) => {
    let { text } = req.query;
    const canvas = createCanvas(768, 568);
    const ctx = canvas.getContext("2d");
    const image = await loadImage(
        "https://raw.githubusercontent.com/DankMemer/imgen/master/assets/changemymind/changemymind.bmp"
    );
    ctx.drawImage(image, 0, 0, 768, 568);
    ctx.font = "20px Poppins";
    ctx.fillStyle = "#000";
    ctx.fillText(text, 310, 320);

    res.set("Content-Type", "image/png");
    res.send(canvas.toBuffer("image/png"));
});
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});