const cat = document.getElementById("cat");
const score = document.getElementById("score");
const Timer=document.getElementById('timer'); //스코어 기록창-분

let sc = 0;
let sec = 10;

PlAYTIME=setInterval(function(){
    
   if(sec>0){ //sec=60 에서 1씩 빼서 출력해준다.
        sec=sec-1;
        Timer.innerText='타이머: '+sec; //실수로 계산되기 때문에 소숫점 아래를 버리고 출력해준다.
    }
    if(sec===0){
        sec=60;
        Timer.innerText =  '종료되었습니다. cps:' + sc /10;
        
    }     

},1000); //1초마다 
setTimeout(function(){
    clearInterval(PlAYTIME);
},10000);//3분이 되면 타이머를 삭제한다.

function mouseup(){
    cat.src = "./assets/img/normal.png";
}
function mousedown(){   
    cat.src = "./assets/img/waaaa.png"

    const audio = new Audio("./assets/pop.mp3");
    audio.play();

    sc+=1
    score.innerText = sc;
}
cat.addEventListener("mousedown", mousedown)
cat.addEventListener("mouseup",mouseup)
cat.addEventListener(  "mouseout",mouseup)

timerId = setInterval("ozit_interval_test()", 5000); 