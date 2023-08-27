let x = 0;
function reset() {
  document.getElementById("count").innerText = x = 0;
  document.getElementById("emoji").innerText = "😶Oppsss";
  document.getElementById("remark").innerText = "Koi na sbke hota h";
}

function decrement() {
  document.getElementById("count").innerText = --x;
  document.getElementById("emoji").innerText = "😒ohnonono...";
  document.getElementById("remark").innerText = "ur score is going decrease";
}

function increment() {
  document.getElementById("count").innerText = ++x;
  document.getElementById("emoji").innerText = "😃Great";
  document.getElementById("remark").innerText = "Love it baby💕";
}
