const rdbtn1=document.getElementById("rdbtn1")
const rdbtn2=document.getElementById("rdbtn2")
const btn1=document.getElementById("btn1")
const par1=document.getElementById("par1")

btn1.onclick=function(){
    event.preventDefault();
    let input=document.getElementById("display").value;

    if (isNaN(input)) {
        document.getElementById("par1").textContent=`not a valid input`   
    }
    else if (rdbtn1.checked) {
        let f1=(input*9/5)+32;
        document.getElementById("par1").textContent=`°${input} Celcius is °${f1} Farhrenheit`
    } else {
        let C1=(input-32)*5/9;
        document.getElementById("par1").textContent=`°${input} Farhrenheit is °${C1} Celcius`
    }

}