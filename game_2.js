$(document).ready(function() {
    //correct answers for level 2
   var answers = ["true", "true", "true", "true", "true"]; //if without quotes this becomes true, false gets evaluated to 1's and 0's
   var questionList = document.getElementById("level_2");
   var answerList = document.getElementsByTagName("li");
   
   
    function getRadioVal(form, name) {
        var val;
        //get list of radio buttons with specified name
        var radios = form.elements[name];
        //loop through list of radio buttons
        for (var i = 0, len = radios.length; i < len; i++) {
            if (radios[i].checked) { //radio checked?
                val = radios[i].value;
                break;
            } 
        }
        return val;
    }
    
   
    
   
    
    

   
   
   //not the cleanest code, could do better
   $("#submit").click(function() {
        var wrong = 0;
        //get user-selected values from form 
        var user_answers = [];
        user_answers.push(getRadioVal(document.getElementById('level_2'), 'answer1'));
        user_answers.push(getRadioVal(document.getElementById('level_2'), 'answer2'));
        user_answers.push(getRadioVal(document.getElementById('level_2'), 'answer3'));
        user_answers.push(getRadioVal(document.getElementById('level_2'), 'answer4'));
        user_answers.push(getRadioVal(document.getElementById('level_2'), 'answer5'));
         //compare user answers against correct answers
        for (var i = 0; i < answers.length; i++) {
            if (user_answers[i] === undefined) {
                continue;
            } 
            else if (user_answers[i].toUpperCase() !== answers[i].toUpperCase()) {
                wrong++;
            }
        }
        var score_box= document.createElement("P");
        var score_percent = ((answers.length - wrong) / answers.length) * 100;
        var score_text = document.createTextNode("Your Score is: " + score_percent + "%"); 
        score_box.appendChild(score_text); 
        
        //document.body.appendChild(score_box); //THIS SHOULD WORK BUT IDK WHY IT HAS A BUG
        alert("Your score is: " + score_percent + "%");    
   });
   
});