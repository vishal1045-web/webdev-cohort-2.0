var score = 65;
  if (score<0 || score >100)
    return "INVALID";
 
  if(score >=90 || score <=100){
    return "A";
  }
  if(score >79 || score <90){
    grade = 'B';
  }
  else if(score >= 70 || score <= 79)
    grade = "C";
  else if(score >= 60 || score <= 69)
    return "D";
  else if(score >=50 || score <= 59)
    return "E";
  else 
    return "F";

var score = 86;
if (score <0 || score >= 100){
    return "INVALID";
}else if(score <=100 || score>=90)
{
    return "A";
}else return "B";