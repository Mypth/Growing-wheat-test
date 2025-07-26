var imgCount = -1;
var images = ["Wheat_Age_0.webp", "Wheat_Age_1.webp", "Wheat_Age_2.webp", "Wheat_Age_3.webp", "Wheat_Age_4.webp", "Wheat_Age_5.webp", "Wheat_Age_6", "Wheat_Age_7.webp"];
function change() {
  imgCount++;
    if (imgCount >= 6) {
    clearInterval(interval);
    return;
  }
  var image = document.getElementById('wheat');
  image.src = images[imgCount];
}