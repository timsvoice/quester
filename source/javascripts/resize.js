//splash 
function resizesplash(divId) {
      var heights = window.innerHeight;
      document.getElementById("splash").style.height = heights +0 + "px";
  }

  resizesplash();
  
  window.onresize = function() {
    resizesplash();
};