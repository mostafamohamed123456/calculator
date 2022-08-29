let calculatorBtns = document.querySelectorAll(".calculator-btns button");
let calculationNumber = document.querySelector(".number");
let resultNumber = document.querySelector(".result");
let calculatorContainer = document.querySelector(".calculator-container");

calculatorBtns.forEach((btn)=>{
    btn.onclick = (e)=>{
        switch(e.target.innerText){
            case "C":
                calculationNumber.innerHTML = "";
                resultNumber.innerHTML = "";
                break;

            case "del":
                calculationNumber.innerHTML = calculationNumber.innerHTML.slice(0,-1);
                break;

            case "=":
                if(calculationNumber.innerHTML){
                    resultNumber.innerHTML = eval(calculationNumber.innerHTML);
                }
                break;
            
            default:
                calculationNumber.innerHTML += btn.innerHTML;

        }
    }
});

let closeBtn = document.querySelector(".close")
let minimizeBtn = document.querySelector(".minimize")

closeBtn.onclick = ()=>{
    closeBtn.parentElement.parentElement.parentElement.remove()
}
minimizeBtn.onclick = function(){
    minimizeBtn.children[0].classList.toggle("fa-minus");
    minimizeBtn.children[0].classList.toggle("fa-window-maximize");
    if(minimizeBtn.children[0].classList.contains("fa-minus")){
        calculatorContainer.style.borderRadius = "4px";
        calculatorContainer.style.width = "500px";
        calculatorContainer.style.minHeight = "500px";
        calculatorContainer.children[2].style.display = "block"
    }else{
        calculatorContainer.style.borderRadius = "50%";
        calculatorContainer.style.width = "111px";
        calculatorContainer.style.minHeight = "55px";
        calculatorContainer.children[2].style.display = "none"
    }
}