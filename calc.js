function calc(){
    let w = document.getElementById('w')
    let h =  document.getElementById('h')
    let rez =  document.getElementById('rez')
    if (w == '' || h == ''){
        rez.innerHTML = "Заполните все поля формы"
    } else {}
    if (w>0 && h>0){

        w = parseFloat
        h = parseFloat
        let s = w * h
        let p = (w + h ) * 2 
        rez.style.color = "green"
        rez.innerHTML = "S =" + s + "<BR>P = " + p
        
        
    } else {
        rez.style.color = "red"
    rez.innerHTML = "Введите корректное значение"
    }

//event.preventDefault()
}