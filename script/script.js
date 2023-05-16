function takeScreenshot() {
  var htmlContent = document.documentElement;
    domtoimage.toPng(htmlContent)
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'screenshot.png';
        link.click();
      })
      .catch(function (error) {
        console.error('Error capturing screenshot:', error);
      });
  }
  
  var screenshotBtn = document.getElementById("screenshot-btn");
  screenshotBtn.addEventListener("click", takeScreenshot);