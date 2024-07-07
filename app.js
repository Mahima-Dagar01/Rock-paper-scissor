let userscore = 0;
let compscore = 0;
let choices  = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userscorerep = document.querySelector("#userscore");
let compscorerep = document.querySelector("#compscore");
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        let userchoice = choice.getAttribute("id");
        console.log(userchoice);
        getcompchoice(userchoice);
    })
})
const options = ['rock' , 'paper' , 'scissor'];
const getcompchoice = (userchoice) => {
    let randIndx = Math.floor(Math.random()*3);
    let compchoice = options[randIndx];
    checkwinner(userchoice, compchoice);
    // alert(compchoice);
}
const checkwinner =(userchoice,compchoice) => {
    let userwin = true;
    if(userchoice === compchoice){
        msg.innerText = "Match draws!";
        msg.style.backgroundColor = "#855A5C";
    }else{
        if(userchoice === 'rock'){
            userwin = compchoice==='scissor'? true : false;
            updatescore(userwin,userchoice,compchoice);
        }else if(userchoice === 'paper'){
            userwin = compchoice==='rock'? true : false;
            updatescore(userwin,userchoice,compchoice);
        }else{
            userwin = compchoice==='rock'? false : true;
            updatescore(userwin,userchoice,compchoice);
        }
    }
}
const updatescore = (userwin,userchoice,compchoice) => {
    if(userwin){
        userscore++;
        userscorerep.innerText = userscore;
        msg.innerText = `You won !!! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compscorerep.innerText = compscore;
        msg.innerText = `Comp won !!! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}