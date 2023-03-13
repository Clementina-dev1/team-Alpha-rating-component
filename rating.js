const rate= document.querySelector('#rate')
const rateContainer = document.querySelector('#card_rating')
const selectedContainer = document.querySelector('#selected_card_hidden')
const rating = document.querySelector('.rating')
const rates = document.querySelectorAll('.round_rate')
const btn = document.querySelector('.btn')



/* select rate */
rates.forEach(round_rate => {
    round_rate.addEventListener('click', () =>{
        rates.forEach((round_rate)=>{
            round_rate.classList.remove('orange')
        })
        round_rate.classList.add('orange')
        current_rate=parseInt(round_rate.innerHTML)
    })
});


/* show thank you */
btn.addEventListener('click', () =>{
   rate.innerHTML=`${current_rate}`
    rateContainer.classList.add('hidden')
    selectedContainer.classList.remove('hidden')
    
});
