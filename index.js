var colorArr = ['black', 'red', 'pink', 'blue', 'purple'];

var color = document.getElementsByClassName('color');
var img = document.getElementById('img');
for (var i = 0; i < color.length; i++) {
  let colour = colorArr[i];
  color[i].addEventListener('click', function () {
    img.src = './assets/' + colour + 'watch.png';
  });
}

//making the digital clock run
setInterval(function () {
  var hour = new Date().getHours();
  var min = new Date().getMinutes();
  var sec = new Date().getSeconds();
  document.getElementById('hour').innerText = hour;
  document.getElementById('min').innerText = min;
  document.getElementById('sec').innerText = sec;
}, 1000);

//switching bw clock and heart rate monitor
document.getElementById('time').addEventListener('click', function () {
  document.getElementById('time-feature').style.display = 'block';
  document.getElementById('heart-feature').style.display = 'none';
});

document.getElementById('heartRate').addEventListener('click', function () {
  document.getElementById('time-feature').style.display = 'none';
  document.getElementById('heart-feature').style.display = 'flex';
});
