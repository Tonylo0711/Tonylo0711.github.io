let start=document.querySelector("#challenge");
let puzzle=document.querySelector("#question");
let radio1=document.querySelector("#radio1");
let radio2=document.querySelector("#radio2");
let radio3=document.querySelector("#radio3");
let image1=document.querySelector("#image1");
let image2=document.querySelector("#image2");
let image3=document.querySelector("#image3");
let submit=document.querySelector("#submit");
let description1=document.querySelector("#description1");
let description2=document.querySelector("#description2");
let description3=document.querySelector("#description3");
let correct=0;
let question=1;
let portal=document.querySelector("#portal");
let portal_hint=document.querySelector("#portal_hint");

function startTimer(duration, display) 
{
    var timer = duration, minutes, seconds;
    let interval=setInterval(()=>{
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "Question "+question+"----"+minutes + " : " + seconds+" / Current score: "+correct;
        if (question==1) puzzle.setAttribute("src","memory1.jpg");
        else if (question==2) puzzle.setAttribute("src","memory3.jpg");
        else if (question==3) puzzle.setAttribute("src","memory2.jpg");
        else if (question==4) puzzle.setAttribute("src","memory5.jpg");
        else if (question==5) puzzle.setAttribute("src","memory4.jpg");
        if (--timer < 0) 
        {
            display.textContent="Time is up!";
            puzzle.setAttribute("src","");
            clearInterval(interval);
            if (question==1)
            {
                display.textContent = "What is the image on row 2, column 4?";
                radio1.setAttribute("type","radio");
                radio2.setAttribute("type","radio");
                radio3.setAttribute("type","radio");
                image1.setAttribute("src","memory1-1.jpg"); 
                image2.setAttribute("src","memory1-2.jpg");
                image3.setAttribute("src","memory1-3.jpg");
                submit.setAttribute("type","submit");
            }
            else if (question==2)
            {
                display.textContent = "What is the color of the mother's socks in the picture?";
                radio1.setAttribute("type","radio");
                radio2.setAttribute("type","radio");
                radio3.setAttribute("type","radio"); 
                description1.textContent="red";
                description2.textContent="orange";
                description3.textContent="yellow";
                submit.setAttribute("type","submit");
            }
            else if (question==3)
            {
                display.textContent = "Which mahjong card doesn't appear on the table?";
                radio1.setAttribute("type","radio");
                radio2.setAttribute("type","radio");
                radio3.setAttribute("type","radio");
                image1.setAttribute("src","fourtenthousand.png"); 
                image2.setAttribute("src","threecake.png");
                image3.setAttribute("src","ninestick.png");
                submit.setAttribute("type","submit");
            }
            else if (question==4)
            {
                display.textContent = "How many windows does the house on row 2, column 1 have?";
                radio1.setAttribute("type","radio");
                radio2.setAttribute("type","radio");
                radio3.setAttribute("type","radio"); 
                description1.textContent="6";
                description2.textContent="7";
                description3.textContent="8";
                submit.setAttribute("type","submit");
            }
            else if (question==5)
            {
                display.textContent = "How many scarfs do the people wear in this picture?";
                radio1.setAttribute("type","radio");
                radio2.setAttribute("type","radio");
                radio3.setAttribute("type","radio"); 
                description1.textContent="3";
                description2.textContent="4";
                description3.textContent="5";
                submit.setAttribute("type","submit");
            }
        }
    }, 1000);
}

start.addEventListener("click",()=>
{
    let countdown=10;
    display = document.querySelector('#time');
    startTimer(countdown, display);
});

submit.addEventListener("click",()=>
{
    if (question==1)
    {
        if (radio2.checked==true)
        {
            display.textContent = "Congratulation! You've chosen the right answer!";
            correct++;
        }
        else
        {
            display.textContent = "Oops! You've chosen the wrong answer!";
        }
        question=2;
    }
    else if (question==2)
    {
        if (radio2.checked==true)
        {
            display.textContent = "Congratulation! You've chosen the right answer!";
            correct++;
        }
        else
        {
            display.textContent = "Oops! You've chosen the wrong answer!";
        }
        question=3;
    }
    else if (question==3)
    {
        if (radio2.checked==true)
        {
            display.textContent = "Congratulation! You've chosen the right answer!";
            correct++;
        }
        else
        {
            display.textContent = "Oops! You've chosen the wrong answer!";
        }
        question=4;
    }
    else if (question==4)
    {
        if (radio2.checked==true)
        {
            display.textContent = "Congratulation! You've chosen the right answer!";
            correct++;
        }
        else
        {
            display.textContent = "Oops! You've chosen the wrong answer!";
        }
        question=5;
    }
    else if (question==5)
    {
        if (radio2.checked==true)
        {
            display.textContent = "Congratulation! You've chosen the right answer!";
            correct++;
        }
        else
        {
            display.textContent = "Oops! You've chosen the wrong answer!";
        }
        setTimeout(()=>{
            if (correct>=3)
            {
                display.textContent = "Hooray! Your short-term memory is beyond expectation!";
                setTimeout(()=>{
                    window.location.assign("6.html");
                },2000);
            }
            else
            {
                display.textContent = "I am sorry, you are not able to overcome this challenge...";
                setTimeout(()=>{
                    localStorage.setItem("challenge",5);
                    window.location.assign("fail.html");
                },2000);
            }
        },2000);
        question=6;
    }
    if (question!=6)
    {
        setTimeout(()=>{
            var countdown = 10;
            display = document.querySelector('#time');
            display.textContent="";
            radio1.setAttribute("type","hidden");
            radio2.setAttribute("type","hidden");
            radio3.setAttribute("type","hidden");
            description1.textContent="";
            description2.textContent="";
            description3.textContent="";
            image1.setAttribute("src","");
            image2.setAttribute("src","");
            image3.setAttribute("src","");
            submit.setAttribute("type","hidden");
            radio1.checked=false;
            radio2.checked=false;
            radio3.checked=false;
            startTimer(countdown, display);
        },2000);
    }
    else
    {
        radio1.setAttribute("type","hidden");
        radio2.setAttribute("type","hidden");
        radio3.setAttribute("type","hidden");
        description1.textContent="";
        description2.textContent="";
        description3.textContent="";
        image1.setAttribute("src","");
        image2.setAttribute("src","");
        image3.setAttribute("src","");
        submit.setAttribute("type","hidden");
    }
});

//portal
if (localStorage.getItem("have_portal")=="yes")
{
    portal.setAttribute("type","submit");
    portal.style.width="50px";
    portal.style.height="25px";
}

portal.addEventListener("mouseover",()=>{
    portal_hint.textContent="What is this stuff?";
})

portal.addEventListener("mouseout",()=>{
    portal_hint.textContent="";
})

portal.addEventListener("click",()=>{
    localStorage.setItem("have_portal","no");
    portal_hint.textContent="Great, you find a portal to the challenge you failed just now!";
    setTimeout(return_website,3000);
})

function return_website()
{
    let challenge_choose=localStorage.getItem("challenge");
    if (challenge_choose==3)
        {
            window.location.assign("3.html");
        }
        else if (challenge_choose==5)
        {
            window.location.assign("5.html");
        }
        else if (challenge_choose==7)
        {
            window.location.assign("7.html");
        }
}
