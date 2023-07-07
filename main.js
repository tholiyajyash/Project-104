Webcam.set({

width : 350,
height : 300,
image_format : "jpeg",
jpeg_quality : 95
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "captured_image" src = "'+data_uri+'"/>';
    });}

console.log('ml5 version:' , ml5.version);

function modelLoaded() {
console.log('Model Loaded!');}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/fQYuQxS3F/model.json' , modelLoaded);

