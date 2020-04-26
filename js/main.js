let screen = document.querySelector('.screen')
let btns = document.querySelectorAll('.btn')
let equal= document.querySelector('.equal')
let clear= document.querySelector('.clear')







for(let i =0;i<btns.length;i++){
    btns[i].addEventListener('click',function(){
        let number = btns[i].getAttribute('data');
        screen.value += number;
    })
}

equal.addEventListener('click',function(){
    if(screen.value === ''){
        alert('input is empty')
    }else{}
    let value = eval(screen.value);
        screen.value=value;

})
clear.addEventListener('click',function(){
    screen.value="";
})


