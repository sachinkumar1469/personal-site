let navbar = document.querySelector('#navbar');
let ul = navbar.querySelector('ul');
let list = ul.querySelectorAll('li');

list.forEach((li)=>{

    let a = li.querySelector('a');
    a.addEventListener('click',(e)=>{
        clearAll(list);
        let currA = e.target;
        currA.style.color = "bisque";
        let currList=currA.parentElement;
        currList.style.borderBottom="1px solid bisque";
    })

    
})

function clearAll(list){
    list.forEach((li)=>{
        li.style.borderBottom="";
        li.querySelector('a').style.color='white';
    })
}