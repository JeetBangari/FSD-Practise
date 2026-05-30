const questions =[
    {
        Q: 'Which is a super bike among the following?',
        A:"Classic 350",
        B:"Meteor 350",
        C:"S1000RR",
        D:"Apache 310 RR",
        Correct: "C"
    },
    {
        Q: 'Which is a super car among the following?',
        A:"I20",
        B:"Honda City",
        C:"Baleno",
        D:"Lamborghini",
        Correct: "D"
    },
    {
        Q: "In which year India got it's freedom?",
        A:"1919",
        B:"1947",
        C:"1857",
        D:"1950",
        Correct: "B"
    },
    {
        Q: 'Who is the richest person on earth?',
        A:"Elon Musk",
        B:"Jeff Bezoz",
        C:"Mukesh Ambani",
        D:"Gautam Adani",
        Correct: "A"
    },
];

let index = 0;
let score = 0;

document.getElementById('start').onclick=function(){
    document.getElementById('start').style.display = 'none';
    document.getElementById('question').style.display = 'block';
    document.getElementById('reset').style.display = 'block';
    document.querySelectorAll('.btn').forEach(btn => btn.style.display='inline-block');
    loadQuestion();
}

function loadQuestion(){
    let q = questions[index];
    document.getElementById('question').innerText = q.Q;
    document.getElementById('btnA').innerText = q.A;
    document.getElementById('btnB').innerText = q.B;
    document.getElementById('btnC').innerText = q.C;
    document.getElementById('btnD').innerText = q.D;
    document.querySelectorAll(".btn").forEach(btn => {
        btn.style.backgroundColor = "purple";
        btn.disabled = false;
    });
    document.getElementById('next-btn').style.display = 'none';
}

function checkAnswer(option){
    let correct = questions[index].Correct;
    if(option === correct){
        document.getElementById('btn'+option).style.backgroundColor = 'green';

        score++;
    }else{
        document.getElementById('btn'+option).style.backgroundColor = 'red';
    }
    document.querySelectorAll('.btn').forEach(btn=>{btn.disabled=true});
    document.getElementById('next-btn').style.display = 'block';
};

document.getElementById('next-btn').onclick = function(){
    index++;
    if(index<questions.length){
        loadQuestion();
    }else{
        document.getElementById('question').innerText = 'Quiz Completed';
        document.getElementById('result').innerText = 'Your score is '+score+' / '+questions.length;
    }
};

document.getElementById('reset').onclick=function(){
    index=0;
    score=0;
    document.getElementById('result').innerText = '';
    document.getElementById('question').style.display='block';
    document.querySelectorAll('.btn').forEach(btn=>btn.style.display='inline-block');
    loadQuestion();
}