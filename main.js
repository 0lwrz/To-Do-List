const text = document.querySelector(".text");
document.querySelector(".submit").onclick = function(){
    if (document.querySelector(".ToDoList .text").value.length==0){
        alert("Please write the task!!");
    }
    else{
        document.querySelector("li").innerHTML+=`
        
        <div class="inputValue">
        <input type= "checkbox" class="check"/>
        <span class="value">${text.value}</span>
        </div>

        `
    
    }
    
    const checkbox = document.querySelectorAll(".check");
    const result = document.querySelectorAll(".value");
    for (let i=0;i<checkbox.length;i++){
        checkbox[i].addEventListener("click",()=>{
            if(checkbox[i].checked){
                result[i].classList.add("decoration");
            }
            else{
                result[i].classList.remove("decoration");
            }
        });
    }
    // checkbox.addEventListener("click",()=>{
    //     if(checkbox.checked){
    //         result.classList.add("decoration");
    //     }
    //     else{
    //         result.classList.remove("decoration");
    //     }
    // });
}

