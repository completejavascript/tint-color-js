## TintColor.js
Create Tint Color for Images Using JavaScript.

## Usage
  * Constructor: TintColor(srcImage, tintColor, blendMode)
    + srcImage: (string) url of image. 
    + tintColor: (string) new color as Hex or RGB. Example: '#ff00ff' or 'rgb(255, 0, 255)'
    + blendMode: (string) blending mode. Example: 'destination-atop'
    
    Including: 
        source-over, source-in, source-out, source-atop, 
        destination-over, destination-in, destination-out, destination-atop,
        lighter, copy, xor, multiply, screen, overlay, darken, lighten, 
        color-dodge, color-burn, hard-light, soft-light, difference, exclusion,
        hue, saturation, color, luminosity
  * API:
    + setSourceImage(srcImage)
    + setTintColor(tintColor)
    + setBlendMode(blendMode)
    + run()
    + getSize()

## Example

```js
const srcImg = "https://res.cloudinary.com/drcrre4xg/image/upload/c_scale,w_200/v1515227140/star-yellow_hjfybq.png";
const newColor = "#ff00ff";
const blendMode = "destination-atop";

var tintWorker;

window.onload = function() {
  tintWorker = new TintColor(srcImg, newColor, blendMode);
};

/*
* Show original image 
*/
function view() {
  var originImgDiv = document.getElementById("originImg");
  tintWorker
    .getSize()
    .then(
      result => setImage(originImgDiv, result.url, result.width, result.height),
      error => console.log("Get size of image error: ", error)
    );
}

/*
* Show normal image after changing image's color
*/
function test() {
  var tintImgDiv = document.getElementById("newImg");
  tintWorker
    .run()
    .then(result =>
      setImage(tintImgDiv, result.url, result.width, result.height)
    )
    .catch(error => {
      console.log("Failed to change color of image", error);
    });
}

function setImage(divElement, srcURL, width, height) {
  divElement.style.width = width + "px";
  divElement.style.height = height + "px";
  divElement.style.backgroundSize = "" + width + "px " + height + "px";
  divElement.style.backgroundImage = "url('" + srcURL + "')";
}
```
## References

  * [Apply Tint Color for Images Using TintColor.js](https://codepen.io/completejavascript/pen/vpWyjG)
  * [JavaScript Tint Color](https://completejavascript.com/javascript-tint-color-thay-doi-mau-sac-buc-anh/)
  
