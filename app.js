function Cal() {
    var totalMarks =document.getElementById("input").value;
    console.log(totalMarks);
    var userMarks =document.getElementById("input1").value;
    console.log(userMarks);
    var showPercentage =document.getElementById("showPercentage");
    var showGrade =document.getElementById("Showgrade");
    var calculatePercentage = parseFloat((userMarks/totalMarks)*100);
    console.log(calculatePercentage);
    if(calculatePercentage <= 100 && calculatePercentage >= 0){
        showPercentage.innerHTML=`Your Percentage is ${calculatePercentage}%`;
    }
    else{
        showPercentage.innerHTML=" ";
    }

    if (calculatePercentage < 49 && calculatePercentage > 0 ) {
        showGrade.innerHTML=`Try Again : You are fail`;
    }
    else if(calculatePercentage >= 50 && calculatePercentage < 60){
        showGrade.innerHTML=`Congralution : Your grade is C`;
    }
    else if(calculatePercentage >= 60 && calculatePercentage < 70){
        showGrade.innerHTML=`Congralution : Your grade is B`;
    }
    else if(calculatePercentage >=70 && calculatePercentage < 80){
        showGrade.innerHTML=`Congralution : Your grade is A`;
    }
    else if(calculatePercentage >=80 && calculatePercentage < 90){
        showGrade.innerHTML=`Congralution : Your grade is A<sup>+<sup>`;
    }
    else if(calculatePercentage >=90 && calculatePercentage < 100){
        showGrade.innerHTML=`Congralution : you are the yop of list`;
    }
    else if (!totalMarks && !userMarks) {
        showGrade.innerHTML=`Please enter your value`;
    } 
    else{
        showGrade.innerHTML=`Invalid value`;
    }
}