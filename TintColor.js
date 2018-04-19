class TintColor {
  constructor(_srcImage, _tintColor) {
    this._srcImage = _srcImage;
    this._tintColorArray = this._getRGBAArray(_tintColor);
  }
  setSourceImage(_srcImage) {
    this._srcImage = _srcImage;
    return this;
  }
  setTintColorArray(_tintColor) {
    this._tintColorArray = this._getRGBAArray(_tintColor);
    return this;
  }
  run() {
    return new Promise((resolve, reject) => {
      let canvas = document.createElement('canvas');
      let context = canvas.getContext('2d');
      let image = new Image();
	    image.crossOrigin = "Anonymous";
      image.onload = () => {
        canvas.width  = image.width;
        canvas.height = image.height;

        context.drawImage(image, 0, 0, canvas.width, canvas.height);

        let imgData = context.getImageData(0, 0, canvas.width, canvas.height);
        let data = imgData.data;

        for (let i = 0; i < data.length; i += 4) {
          // Change color of pixel which is different from transparent
          if (data[i + 0] || data[i + 1] || data[i + 2] || data[i + 3]) {
            data[i + 0] = this._tintColorArray[0];
            data[i + 1] = this._tintColorArray[1];
            data[i + 2] = this._tintColorArray[2];
            data[i + 3] = this._tintColorArray[3];
          }
        }
        context.putImageData(imgData, 0, 0);
        resolve({url: canvas.toDataURL(), width: image.width, height: image.height});
      };
      image.onerror = error => reject(this._srcImage, error);
      image.src = this._srcImage;
    });  
  }
  _getRGBAArray(color) {
    // Check input as rgba/rgb color
    let m = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)$/.exec(color);
    if(m) {
      if(m[4]) return [m[1], m[2], m[3], m[4] * 255];
      return [m[1], m[2], m[3], 255];
    }

    // Check input as hex 6-digit color
    m = /^#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/.exec(color);
    if(m) {
      return [parseInt(m[1], 16), parseInt(m[2], 16) , parseInt(m[3], 16), 255];
    }
  }
}
