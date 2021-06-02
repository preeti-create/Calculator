// var btn1= document.getElementsById("btn1");
// var btn2= document.getElementsById("btn2");
// var outer = document.getElementByClassName("outer");
// var inner = document.getElementByClassName("inner");

// btn1.addEventListener("click", function(){
//     outer.innerHTML{
//         backgroundColor: green;
//     }
//    // outer.style.backgroundColor = green;
// })

// btn2.addEventListener("click", function(){
//     innerr.innerHTML{
//         backgroundColor: green;
//     }
// })


// // document.getElementById(id).style.property = new style

// // document.getElementById("myDIV").classList.add("mystyle");

var butn = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operand1=0;
var operand2=null;
var operator=null;

for(var i=0; i<butn.length; i++)
    {
        butn[i].addEventListener('click', function(){
           var value = this.getAttribute('data-value'); 
            if(value== "AC")
            {
             display.innerText = "";
            }
            else if(value=="+/-")
                {
                    operand1 = parseFloat(display.textContent);
                    var result = eval(operand1 * -1 );             
                     console.log(result);
                    display.innerText = result;  
                    //eval
                    //print resut
                } 
            else if(value== "+")
                {
                    operator = "+";
                    operand1 = parseFloat(display.textContent);
                    console.log(operand1);
                    display.innerHTML="";
                }
            else if(value== "-")
                {
                    operator = "-";
                    operand1 = parseFloat(display.textContent);
                    display.innerHTML="";
                }
            else if(value== "*")
                {
                    operator = "*";
                    operand1 = parseFloat(display.textContent);
                    display.innerHTML="";
                }
            else if(value== "/")
                {
                    operator = "/";
                    operand1 = parseFloat(display.textContent);
                    display.innerHTML="";
                }
            else if(value== "%")
                {
                    operator = "%";
                    operand1 = parseFloat(display.textContent);
                    display.innerHTML="";
                }
            else if(value=="=")
                {
                    operand2 = parseFloat(display.textContent);
                    console.log(operand2);
                    // var ans = eval(new String(operand1 + operand + operand2));
                    
       var result = eval(operand1 + ' ' + operator + ' ' + operand2);             
                    // console.log(operand1+operator+operand2);
                    console.log(result);
                    display.innerText = result;  
                    //eval
                    //print resut
                }
            else
            {
            display.innerText += value;    
            }
        });
}

