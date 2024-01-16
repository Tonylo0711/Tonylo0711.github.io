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


//button
let button=document.querySelector("button");
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

//if (true) localStorage.clear(); 




