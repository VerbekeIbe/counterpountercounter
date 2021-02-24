    //DOM Elements
    let htmlBudget, htmlSubmit, htmlRaw, htmlCounterPounters

    showOutput = (budget) => {
    let result;
    if(budget == 69){
        result = 420
    } else if(budget == 420){
        result = 69
    } else {
        result = Math.floor(budget / 3.75);
    }
    


        if(budget < 0){
            console.log("rot op met je teringzooi");
        }else {
            htmlRaw.innerHTML = `${budget} kluiten`;
            htmlCounterPounters.innerHTML = result;
        }

    }


    EnableListeners = () => {
        htmlSubmit.addEventListener("click", function(){
            if(htmlBudget.value){
                showOutput(htmlBudget.value)
            } else {
                console.log("De input is empty")
            }
        })
    console.log("Listeners enabled");
    };


    document.addEventListener('DOMContentLoaded', function() {
        
        htmlBudget = document.querySelector('.js-budget');
        htmlSubmit = document.querySelector('.js-submit-input');
        htmlRaw = document.querySelector('.js-raw');
        htmlCounterPounters = document.querySelector('.js-counterpounters')

        console.log(htmlRaw, htmlCounterPounters)

        EnableListeners();

        console.log("DOM LOAD COMPLETE")
    });
