function call(){
    var ObtainedMarks = document.getElementById("input").value;
    console.log(ObtainedMarks);
    var percentage1 = ObtainedMarks*100/850;
    percentage2 =(Math.floor(percentage1));
    document.getElementById("Percentage").innerHTML=`Your obtained marks is ${ObtainedMarks} and your percentage  ${percentage2} is:`;
}

function grade(){
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
    else if(percentage2 > 50 && percentage2 <= 60){
        document.getElementById("grade").innerHTML=" Congralution! <br> your grade is C";
    }
    else{
        document.getElementById("grade").innerHTML=" Try Again! <br> oooooops fail !";
    }
}


