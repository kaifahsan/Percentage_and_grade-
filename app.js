function call(){
var totalMarks = document.getElementById("input").value.trim();
var numericMarks = parseFloat(totalMarks);

if (isNaN(numericMarks)) {
    document.getElementById("errorgen").innerHTML = "Invalid value:Total Marks is not a number";
    return;
}

var ObtainedMarks = document.getElementById("input1").value.trim();
var numericMarks1 = parseFloat(ObtainedMarks);

if (isNaN(numericMarks1)) {
    document.getElementById("errorgen").innerHTML = "Invalid value:Obtained Marks is  not a number";
    return;
}
else if (numericMarks1 > numericMarks) {
    document.getElementById("errorgen").innerHTML = `Invalid value ! Obtained Marks is greater than total marks`;
    return;
} 
else if (numericMarks < numericMarks1) {
    document.getElementById("errorgen").innerHTML = `Invalid value ! Obtained Marks is less than total marks`;
    return;
} 
else {
    document.getElementById("errorgen").innerHTML = ""; 
}

    var percentage1 = numericMarks1*100/numericMarks;
    percentage2 =(Math.floor(percentage1));
    document.getElementById("Percentage").innerHTML=`Your obtained marks is ${numericMarks1} and your percentage is  ${percentage2} :`;

    if (percentage2 > 90){
        document.getElementById("grade").innerHTML=" Congralution! <br> your marks is highest";
    }
    else if(percentage2 > 80 && percentage2 <= 90){
        document.getElementById("grade").innerHTML=" Congralution! <br> your grade is A-one";
    }
    else if(percentage2 > 70 && percentage2 <= 80){
        document.getElementById("grade").innerHTML=" Congralution! <br> your grade is A";
    }
    else if(percentage2 > 60 && percentage2 <= 70){
        document.getElementById("grade").innerHTML=" Congralution! <br> your grade is B";
    }
    else if(percentage2 >= 50 && percentage2 <= 60){
        document.getElementById("grade").innerHTML=" Congralution! <br> your grade is C";
    }
    else{
        document.getElementById("grade").innerHTML=" Try Again! <br> oooooops fail !";
    }
}