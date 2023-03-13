console.log(ml5.version);

function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/D5ODrTWbk/model.json", modelReady);
}

function modelReady(){
    console.log("Model is ready")
    classifier.classify(gotResults);
}

function gotResults(error, results){
    console.log(results);
}