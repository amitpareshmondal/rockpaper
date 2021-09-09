let user_score= document.getElementById("user_score");
let comp_score=document.getElementById("comp_score");
let result=document.querySelector("p");
let r=document.getElementById("rock");
let p=document.getElementById("paper");
let s=document.getElementById("scissors");
function computer(){
  let arr=['r','p','s'];
  let d=Math.random()*3;
  let b=Math.floor(d);
  return arr[b];
}
function game(user,comp){
  let d=user+comp;
  switch(d){
    case "ss":
    case "pp":
    case "rr":
      
      result.innerHTML="draw";
      break;
    case "rs":
    case "pr":
    case "sp":

        result.innerHTML="you win , computer chose "+ comp;
        let n=Number(user_score.innerHTML);
        n++;
        user_score.innerHTML=n;
        break;
  case "sr":
  case "rp":
  case "ps":
  result.innerHTML = "you Lose :"+ "computer chose " + comp;
  let z=Number(comp_score.innerHTML);
  z++;
  comp_score.innerHTML=z;
  break;
  }
}
function input(){
  r.addEventListener('click',()=>{

    game("r",computer());
  })
  p.addEventListener('click',()=>{
    game("p",computer());
  })
  s.addEventListener('click',()=>{
    game("s",computer());
  })


}
input();
