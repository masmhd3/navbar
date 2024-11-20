let btn = document.getElementById('btn');
let ul = document.getElementById('ul');

btn.onclick = function(){
    ul.classList.toggle('active')
    btn.classList.toggle('fa-x')
}