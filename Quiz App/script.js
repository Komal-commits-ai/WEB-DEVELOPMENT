let timer=document.getElementById("timer");
let q_cont=document.getElementById("q-container");
let question=document.getElementById("question");
let ans_btns=document.getElementById("ans-btns");
const buttons = ans_btns.querySelectorAll(".button");
let next_btn=document.getElementById("next-btn");
let result=document.getElementById("result");
let mark_sms=document.getElementById("mark-sms");
let marks=document.getElementById("marks");
let remarks=document.getElementById("remarks");
let try_again=document.getElementById("try again");
let back_btn=document.getElementById("back-btn");
let detail=document.getElementById("details");
let mark_dtl=document.getElementById("mark-details");
let table=document.getElementById("table");

let questions=[
    {
    question:"What does HTML stand for? ",
    options:["Hyper Text Markup Language","High Tech Modern Language",
        "Hyperlinks and Text Markup Language","Home Tool Markup Language"],
    answer: "Hyper Text Markup Language"
    },
     {
    question:"Which tag is used to create a hyperlink in HTML? ",
    options:["<link>",'<a>','<href>','<rel>'],
    answer: "<a>"
    },
     {
    question:"What is the correct HTML element for inserting a line break? ",
    options:["<br>",'<line>','<break>','<lb>'],
    answer: "<br>"
    },
     {
    question:"Which CSS property changes the text color? ",
    options:["font-color",'background-color','color','text-style'],
    answer: "color"
    },
     {
    question:"How do you select an element with the ID header in CSS? ",
    options:[".header",'#header','*header','header'],
    answer: "#header"
    },
     {
    question:"Which CSS property adds space between the content and its border? ",
    options:["margin",'width','height','padding'],
    answer: "padding"
    },
     {
    question:"How do you declare a JavaScript variable? ",
    options:["variable x;",'let x;','v x;','declare x;'],
    answer: "let x;"
    },
     {
    question:" Which method prints output to the browser console? ",
    options:["document.write()",'console.log()','console.write()','alert()'],
    answer: "console.log()"
    },
     {
    question:"What is the correct syntax for an if statement in JavaScript?",
    options:["if (x == 5) { }",'if x = 5 then { }','if x == 5 then { }','if {x == 5}'],
    answer: "if (x == 5) { }"
    },
     {
    question:"  Which HTML attribute is used to reference an external JavaScript file?",
    options:["href",'img','src','script-src'],
    answer: "src"
    },
];
let time_left=29;
 let show;
 let timeInterval;
let score=0;
let i=-1;
let ans;
let ans_array=new Array(questions.lenth).fill(false);

   function showQuestion()
   {
    i++;
    if (i > 0) { 
    back_btn.style.display = 'block';
} else {
    back_btn.style.display = 'none'; 
}

    clearInterval(timeInterval);
    setTime();
    if (i<questions.length)
       {
      question.textContent="Q"+(i+1)+" )  "+ questions[i].question;
     for(let j=0;j<4;j++)
        {
        buttons[j].textContent=questions[i].options[j];
        }
       }
    else
        {

            clearInterval(show);
            showResult();
        }

   }

  
   function minusTime()
   {
    timer.textContent='TIME LEFT:'+ time_left;
    time_left--;
   }

   function setTime()
   {
    time_left=29;
    timeInterval=setInterval(minusTime,1000);
   }
  
   function resetInterval()
   {
        if(i<questions.length)
        {
            clearInterval(show);
            show=setInterval(showQuestion,30000);
            showQuestion(i);

        }
    };

    function showResult()
    {
        q_cont.style.display='none';
        result.style.display='block';
        marks.textContent='YOU HAVE SCORED: ' + score +'/10';
        showremark();
    }
   function startQuiz()
   {
    i=-1;
    score=0;
    time_left=29;
    mark_dtl.style.display='none';
    result.style.display='none';
    q_cont.style.display='block';

    showQuestion(i);
    show=setInterval(showQuestion,30000);
    next_btn.addEventListener('click',resetInterval);
    back_btn.addEventListener('click',prevBtn);
    detail.addEventListener('click',showMarksDetails);
    buttons.forEach((x)=>
        {
           x.addEventListener('click',ansbtn);
           /*x.removeEventListener('click',handler);*/
        });
  }
         function ansbtn()
         {
           ans=this.textContent;
           if(ans===questions[i].answer)
            {
               score++;
               ans_array[i]=true;
            }
            resetInterval();
  }

    function prevBtn()
       {
         if(ans===questions[i-1].answer)
            {
               score--;
            }
            ans_array[i-1]=false;
        i=i-2;
        resetInterval();
    }
   
    function showremark()
    {
        if(score<5)
        {
            remarks.textContent="You lost,better luck next time.😔";
        }
        else if(score<7)
        {
            remarks.textContent="Not Bad,Keep Trying.😊";
        }
         else if(score<10)
        {
            remarks.textContent="Good.✨";
        }
        else{
            remarks.textContent="Excellent.💯🎉";
        }
    }

    function showMarksDetails()
    {
       result.style.display='none';
       mark_dtl.style.display='block';
       for(let k=0;k<questions.length;k++)
       {
          let newRow= table.insertRow();
          newRow.insertCell(0).textContent='Q' + (k+1)+')  '+questions[k].question;
          if(ans_array[k]===true)
          {
             let cell = newRow.insertCell(1);
             cell.textContent = "Correct ✅";
             cell.style.color = "green";
          }
          else{
             let cell = newRow.insertCell(1);
             cell.textContent = "Incorrect ❌";
             cell.style.color = "red";    ;
          }
          newRow.insertCell(2).textContent=questions[k].answer;
          
       }
    }


    function initializeQuiz(){
          startQuiz();
           try_again.addEventListener('click',startQuiz);
    }
 
  initializeQuiz();