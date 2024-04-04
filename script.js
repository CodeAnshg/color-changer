let display=document.querySelector('.color_display');
let colors=document.querySelectorAll('button')

colors.forEach((button)=>{
    button.addEventListener('click',(event)=>{
        let color = button.textContent
        if (color === 'green' || color === 'orange' || color === 'purple'){
            display.style.color = 'white'
            display.style.backgroundColor =`${color}`
        }else{
            display.style.color ='black'
            display.style.backgroundColor =`${color}`
        } 

        
    });
})


