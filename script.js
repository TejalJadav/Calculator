let Length;
let calc = document.querySelector(".inner");
calc.addEventListener("click",function(val){
    let number = val.target.innerHTML;
   
    let textbox = document.querySelector("#textbox");
    if(number == "AC" )
    {
       textbox.value = "";
    }
    else if(number == "DEL" )
    {   
        Length = textbox.value;
        let newlength = Length.length - 1;
        textbox.value = Length.slice(0,newlength);
    }   
    else if(number == "=" )
    {   
        let perform = textbox.value;
        Length = textbox.value.length;
        if(perform.includes("%"))
        {
            console.log("yess");
             let index = perform.indexOf("%");
             let rightValue = perform.slice((index+1),(Length+1));
             let total = ((perform.slice(0,index)) / 100) * rightValue;
             textbox.value = total;           
        }
        else{
            console.log("no");
            if(perform != ""){
                try{
                    textbox.value = eval(perform);
                }
                catch{
                    textbox.value = "";
                }
               
            }
        }
    }
    else {
        textbox.value += number; 
    }
})


   
