const total = document.querySelector('.total')
const bill = document.querySelector('.bill')
const tip = document.querySelector('.tip')
const tpNew = document.querySelector('.tp') 
const people = document.querySelector('.people')
const calculateBtn = document.querySelector('.calculate')
const error = document.querySelector('.error')
const clearBtn = document.querySelector('.clear')

calculateBtn.addEventListener('click', function(){
    
    if(bill.value === '' || tip.value ==='' || people.value ===''){
        error.style.display = 'block'
        error.textContent = 'Please fill-in the field'
        setTimeout(function(){
            error.style.display = 'none'
        },5000)
    } else if (!Number(bill.value) || !Number(tip.value) || !Number(people.value)){
        error.style.display = 'block'
        error.textContent = 'Please all field should be numbers'
        setTimeout(function(){
            error.style.display = 'none'
        },5000)
    }else{
        const billAmount = Number(bill.value)
        const tipPercent = (Number(tip.value) / 100) * billAmount
        const peopleNum = Number(people.value)
        const tpValue = billAmount / peopleNum
        console.log(tpValue, tipPercent)
        const tpPercent = tipPercent / peopleNum
        const totalValue = tpValue + tpPercent
        // total.innerHTML = `$ ${totalValue.toFixed(2)}`
        total.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalValue)
        tpNew.textContent = `$ ${tpPercent}`
    }
  
})

clearBtn.addEventListener('click', function(){
    bill.value = ''
    tip.value = ''
    people.value = ''
    total.innerHTML = ''
    tpNew.textContent = ''
})