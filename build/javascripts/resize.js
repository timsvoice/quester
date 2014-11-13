//splash 
function resizesplash(divId) {
      var heights = window.innerHeight;
      document.getElementById("splash").style.height = heights -14 + "px";
  }

  resizesplash();
  
  window.onresize = function() {
    resizesplash();
};
