/*
 Constructor: TintColor(srcImage, tintColor, blendMode)
 + srcImage: (string) url of image.
     Example: 
 + tintColor: (string) new color as Hex or RGB
     Example: '#ff00ff' or 'rgb(255, 0, 255)'
 + blendMode: (string) blending mode. 
     Example: 'destination-atop'
    
	Including: 
    source-over, source-in, source-out, source-atop, 
	destination-over, destination-in, destination-out, destination-atop,
	lighter, copy, xor, multiply, screen, overlay, darken, lighten, 
	color-dodge, color-burn, hard-light, soft-light, difference, exclusion,
	hue, saturation, color, luminosity
	
	Ref: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
*/

(function(document, window){ 
  var TintColor = function(srcImage, tintColor, blendMode) {
    this.srcImage = srcImage;
    this.tintColor = tintColor;
    this.blendMode = blendMode;
  }
  TintColor.prototype.setSourceImage = function(srcImage) {
    this.srcImage = srcImage;
  }
  TintColor.prototype.setTintColor = function(tintColor) {
    this.tintColor = tintColor;
  }
  TintColor.prototype.setBlendMode = function(blendMode) {
    this.blendMode = blendMode;
  }
  TintColor.prototype.run = function() {
    var self = this;
    return new Promise(function(resolve, reject){
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      var image = new Image();
	  image.crossOrigin = "Anonymous";
      image.onload = function() {
        canvas.width  = image.width;
        canvas.height = image.height;
    
        context.fillStyle = self.tintColor;
        context.fillRect(0, 0, canvas.width, canvas.height);
    
        context.globalCompositeOperation = self.blendMode;
    
        context.drawImage(image, 0, 0, image.width, image.height);
    
        var dataUrl = canvas.toDataURL();
        resolve({url: dataUrl, width: image.width, height: image.height});
      };
      image.onerror = function(error) {
        reject(error);
      }
      image.src = srcImg;
    });  
  }
  TintColor.prototype.getSize = function getSize() {
    var self = this;
    return new Promise(function(resolve, reject) {
      var image = new Image();
	  image.crossOrigin = "Anonymous";
      image.onload = function() {
        resolve({url: self.srcImage, width: image.width, height: image.height});
      };
      image.onerror = function(error) {
        reject(error);
      }
      image.src = self.srcImage; 
    }); 
  }
  window.TintColor = TintColor;
})(document, window);
