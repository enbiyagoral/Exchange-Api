// Get a document
const current1 = document.querySelector("#current1");
const current2 = document.querySelector("#current2");
const listOne = document.querySelector("#list-one");
const listTwo = document.querySelector("#list-two");
const amount = document.querySelector("#amount");
const calculator = document.querySelector("#calculator");
const result = document.querySelector("#result");

const api_key = "9b1b693920989671478c9ba4"
const url = "https://v6.exchangerate-api.com/v6/" + api_key;


// Request API

fetch(url+"/codes")
    .then(response=>response.json())
    .then(data=>{
        const items = data.supported_codes;
        let options;
        for(let item of items){
            options += `<option value=${item[0]}> ${item[1]} </option>`
            listOne.innerHTML=options;
            listTwo.innerHTML=options;
        }
    });

// Event     
calculator.addEventListener("click",()=>{
    const doviz1 = current1.value;
    const doviz2 = current2.value;
    const miktar = amount.value;

    // Request API
    
    fetch(url+"/latest/"+doviz1)
        .then(response=>response.json())
        .then(data=>{
            data.conversion_rates[doviz2];
            result.innerHTML=
            `${miktar} ${doviz1} =  ${Math.floor(data.conversion_rates[doviz2]*miktar)} ${doviz2}`
        })
    
})
