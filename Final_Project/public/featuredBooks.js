(function(){
     let form = document.getElementById("form");
     if(form){
          const errorContainer = document.getElementById("error-container");
          const errorTextElement = errorContainer.getElementsByClassName(
            "text-goes-here"
          )[0];
          let inputNum = document.getElementById("inputNum");
          let listContainer = document.getElementById("attempts");
          form.addEventListener("submit", function(event){
               event.preventDefault();
               try{
                    let numValue = inputNum.value;
                    let parsedNumValue = parseInt(numValue);
                    let result = CheckPrimeNumber(parsedNumValue);
                    if(result){
                         let addList1 = document.createElement("li");
                         addList1.className = "is-Prime";
                         let addText1 = document.createTextNode(parsedNumValue + " is a prime number.");
                         addList1.appendChild(addText1);
                         listContainer.appendChild(addList1);
                    }else{
                         let addList2 = document.createElement("li");
                         addList2.className = "not-prime";
                         let addText2 = document.createTextNode(parsedNumValue + " is Not a prime number.");
                         addList2.appendChild(addText2);
                         listContainer.appendChild(addList2); 
                    }
               }catch(e){
                    const message = typeof e === "string" ? e : e.message;
                    errorTextElement.textContent = e;
                    errorContainer.classList.remove("hidden");
                    // res.status(500).json({error: 'something wrong'});
               }
          })
     }
})()

