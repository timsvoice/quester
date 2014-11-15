//splash 
function resizesplash(divId) {
      var heights = window.innerHeight;
      document.getElementById("splash").style.height = heights -14 + "px";
  }

  resizesplash();
  
  window.onresize = function() {
    resizesplash();
};

//splash 
function resizeprojects() {
      var heights = window.innerHeight;
      document.getElementById("signup").style.height = heights -14 + "px";
  }

  resizeprojects();
  window.onresize = function() {
      resizesplash();
};