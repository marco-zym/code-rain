var ad = document.getElementById("ad");
var ctx = ad.getContext("2d");
ad.height = window.innerHeight;
ad.width = window.innerWidth;
var chinese = "GREEF";
chinese = chinese.split("");
var font_size = 10;
var columns = ad.width / font_size;
var drops = [];
for (var x = 0; x < columns; x++) drops[x] = 1;
function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, ad.width, ad.height);
    ctx.fillStyle = "#0F0";
    ctx.font = font_size + "px arial";
    for (var i = 0; i < drops.length; i++) {
        var text = chinese[Math.floor(Math.random() * chinese.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);
        if (drops[i] * font_size > ad.height && Math.random() > 0.975)
            drops[i] = 0;
        drops[i]++;
    }
}
setInterval(draw, 70);