console.log('here')
let history=[]

allNumberBtn=document.querySelectorAll('.numbersBtn')
let question=''
allNumberBtn.forEach(element => {
    element.addEventListener('click',()=>{
        inputBox=document.querySelector('#display')
        let number=element.innerText
        if(question.length===11){
            alert('max length')
        }else{
            question+=number
            inputBox.innerText=question
        }
        
    })
});


allSigns=document.querySelectorAll('.signs')
allSigns.forEach(element => {
    element.addEventListener('click',()=>{
        inputBox=document.querySelector('#display')
        if (question.includes('+') || question.includes('-') ||question.includes('÷') ||question.includes('×')){
            alert('one sign only')
        }else{
            let sign=element.innerText
            question+=sign
            inputBox.innerText=question    
        }
    
        
    })
});


document.querySelector('#delBtn').addEventListener('click',()=>{
    inputBox=document.querySelector('#display')
    question=question.substring(0,question.length-1)
    inputBox.innerText=question 
})


document.querySelector('#clearBtn').addEventListener('click',()=>{
    inputBox=document.querySelector('#display')
    question=''
    inputBox.innerText=question 
})

document.querySelector('#equalBtn').addEventListener('click',()=>{
    let valid=false
    let result
    if (question.includes('+')){
        let seperationPoint=question.indexOf('+')
        if(seperationPoint===0 || seperationPoint===question.length){
            alert('invalid equation')
        }else{
            let num1 = question.substring(0,seperationPoint)
            let num2 = question.substring(seperationPoint+1,question.length)
             result=Number(num1)+Number(num2)
            inputBox=document.querySelector('#display')
            
            inputBox.innerText=result.toString() 
            valid=true

        }
        
        
    }
    else if (question.includes('-')){
        let seperationPoint=question.indexOf('-')
        if(seperationPoint===0 || seperationPoint===question.length){
            alert('invalid equation')
        }else{
            let num1 = question.substring(0,seperationPoint)
            let num2 = question.substring(seperationPoint+1,question.length)
             result=Number(num1)+Number(num2)
            inputBox=document.querySelector('#display')
            
            inputBox.innerText=result.toString()
            valid=true 

        }

    }
    else if (question.includes('÷')){
        let seperationPoint=question.indexOf('÷')
        if(seperationPoint===0 || seperationPoint===question.length){
            alert('invalid equation')
        }else{
            if(question.indexOf('0')===question.length-1){
                alert('undefined')
            }else{
                let num1 = question.substring(0,seperationPoint)
                let num2 = question.substring(seperationPoint+1,question.length)
                 result=Math.floor(Number(num1)/Number(num2))
                inputBox=document.querySelector('#display')
                
                inputBox.innerText=result.toString()
                valid=true

            }

        }

    }
    else if (question.includes('×')){
        let seperationPoint=question.indexOf('×')
        if(seperationPoint===0 || seperationPoint===question.length){
            alert('invalid equation')
        }else{
            let num1 = question.substring(0,seperationPoint)
            let num2 = question.substring(seperationPoint+1,question.length)
             result=Number(num1)*Number(num2)
            inputBox=document.querySelector('#display')
            
            inputBox.innerText=result.toString()
            valid=true


        }

    }
    else{
        alert('invalid equation')
    }

    if(valid){
        document.querySelector('.historyMain').innerHTML=''
        question+=`=${result.toString()}`
        if(history.length===7){
            history=history.slice(1,history.length)
            history.push(question)
            
        }else{
            history.push(question)
            // alert(history)
        }
        historyReversed=[...history].reverse()
        // alert(historyReversed)
        historyReversed.forEach((element)=>{
            let par = document.createElement('p')
            par.innerText=element
            
            document.querySelector('.historyMain').appendChild(par)
        })
        question=result.toString()
    }
    
})






