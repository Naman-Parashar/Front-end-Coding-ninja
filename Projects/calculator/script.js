var str = "";
let btns = document.querySelectorAll('.btn');
Array.from(btns).forEach((button) =>{
    button.addEventListener("click", (e) =>{
        if(e.target.innerText === 'AC') str = "";
        else if(e.target.innerText === '=' && str.length != 0) str = eval(str);
        else if (e.target.innerText ==='+/-') str = str*-1;
        else str = str + e.target.innerText;
        document.querySelector('input').value = str;
    });
});