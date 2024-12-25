//script 在 html 中 body 的位置要放在最下面!!!
/*
let heading = document.querySelector("h1"); //read html's content
heading.textContent = "Hey"; 

document.querySelector("html").onclick = function () 
{
    alert("Ouch! Stop poking me!");
};
console.log("Hello World!");
alert("Hi!")
let person = 
{
    name: "Tony", 
    age: 30
};

function greet(name)
{
    console.log("Hello "+name);
}

person.name = "Mary";
greet(person["name"]);*/

//glass
let image = document.querySelector("img");

image.onclick = function()
{
    let src = image.getAttribute("src"); 
    if (src=="glass.bmp")
    {
        image.setAttribute("src","glass_b.bmp");
        alert("glass break!");
    }
    else
    {
        image.setAttribute("src","glass.bmp");
    }
}


//button(name)
let button=document.querySelector("button.name");
let heading=document.querySelector("h1");

function setusername()
{
    let myname=prompt("please input your name:"); //對話視窗 
    if (!myname||myname==null) //!myname偵測的是輸入值為空，myname==NULL則是按下取消
    {
        setusername();
    }
    else
    {
        localStorage.setItem("name",myname); //儲存資料在瀏覽器中(即使關閉網頁也會儲存),再用setItem將myname存入name這個變數中
        heading.innerHTML="Hi "+myname+"!";
        //heading.innerHTML=`Hi ${myname}!`; (using ` `)
        //heading.textContent="Hi "+myname+"!"; 
    }
}

if(!localStorage.getItem("name")) //name是否存在(在剛進入網頁時)
{
    setusername();
}
else //重新開啟網頁時，也能顯現出過往輸入的名字
{
    let storename=localStorage.getItem("name");
    heading.innerHTML="Hi "+storename+"!";
    //heading.textContent="Hi "+storename+"!";
}


button.onclick=function() //點擊按鈕更換名字
{
    setusername();
}

//button(color)
let button2=document.querySelector("button.color");

function rand(num)
{
    return Math.floor(Math.random()*(num+1));
}

button2.addEventListener("dblclick",(event)=>{
    document.body.style.backgroundColor=`rgb(${rand(255)},${rand(255)},${rand(255)})`;
    event.target.style.backgroundColor=`rgb(${rand(255)},${rand(255)},${rand(255)})`; //the button2 itself(event.target)
});

//textbox
let textbox=document.querySelector("#textbox");
let output=document.querySelector("#output");
let submit=document.querySelector("#submit");

textbox.addEventListener("keydown",(event)=>{
    output.textContent=`You pressed "${event.key}".`;
})

submit.addEventListener("click",(e)=>{
    if(textbox.value==="")
    {
        e.preventDefault(); //prevent receiving nothing from user
        output.textContent="You need to input your age before submission.";
    }
    else
    {
        output.textContent="OK, we have received your reply.";
    }
});






  /*
  #loop
  
  numbers=[1,2,3];
  function double(num) {return num*2};
  (1) for loop
  let doubled=[];
  let i=0;
  for (const number of numbers)
  {
    doubled[i]=double(number);
    i++;
  }
  //for (let i=0; i<numbers.length; i++)
  {
    doubled[i]=double(number[i]);
  }
  console.log(doubled); 
  
  (2)mapping
  let doubled = numbers.map(double); //double every number 
  console.log(doubled); 
  

  #filter
  function test(food)
  {
    return food.endsWith("t"); //notice:end"s"With, start"s"With
  }
  let food=["hotpot","tea","turkey"];
  let foodFiltered=food.filter(test); 
  // we can simplify the expression as let foodfiltered=food.filter((food)=>{return food.endsWith("t")}) 
  or foodFiltered=food.filter(function(food){return food.endsWith("t")});
  let foodMapped=food.map(test);
  console.log(foodFiltered);
  console.log(foodMapped);
  
  #object
  function person(name) //"function" constructor(need to write "function")(no need to build object first)
  {
    this.name=name;
    this.greet=function()
    {
        console.log(`Hello, ${this.name}`);
    }
  }

  const Tony=new person("Tony"); //"new" object(no need to use pointer in JS)
  Tony.greet();

  //class

  class Person
  {
    #name; //private member variable

    constructor(name)
    {
        this.name=name;
    }

    greet()
    {
        console.log(this.name);
    }
  }

  class Student: extends Person //extends means inheritance
  {
    #grade;

    get_grade() {return this.grade}
  } 
  
  */


