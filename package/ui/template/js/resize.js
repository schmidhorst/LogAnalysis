// Script um die H�he der Box mit Logfileausgabe an Fenstergr��e anzupassen

function setBoxHeight() {
  var h0=window.innerHeight;
  var o1=document.getElementById("file-content-box");
  if (!!o1) {
    var h1=o1.style.height;
    var t1=o1.getBoundingClientRect().top;
    let h2=h0-t1-25;
    o1.style.height = h2+"px";
    var o2=document.getElementById("file-content-txt");
    if (!!o2) {
      o2.style.height=h2+"px";
    }
  }
}


function myLoad() {
  setBoxHeight();
  var o2=document.getElementById("file-content-txt");
  if (!!o2) {
    var sy=o2.scrollHeight;
    o2.scrollTo(0, sy);
    }
  }

window.onload=myLoad;
window.onresize=setBoxHeight;
