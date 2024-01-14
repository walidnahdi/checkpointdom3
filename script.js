let list1 = Array.from(document.getElementsByClassName('list1'));
let lists = Array.from(document.getElementsByClassName('lists'));
let mylist = Array.from(document.getElementsByClassName('mylist'));
let price = Array.from(document.getElementsByClassName('price'));
let counter = Array.from(document.getElementsByClassName('counter'));
let totalfin = document.getElementById('totalfin');


// function change color for heart
function changecolor(col) {
    if (col.target.style.color !== 'red') {
        col.target.style.color = 'red'
    }
    else {
        col.target.style.color = 'black'

    }
}


// function plus

let plus = Array.from(document.getElementsByClassName('add'));
for (let i = 0; i <mylist.length; i++) {
    plus[i].addEventListener('click', function () {
        counter[i].innerHTML++
        calculatesum()
    })

// function moins

let moins = Array.from(document.getElementsByClassName('minus'));

    moins[i].addEventListener('click', function (){
        if (counter[i].innerHTML > 0)
        counter[i].innerHTML--;
        calculatesum()
    })


// we call our function here for heart change

let heart = Array.from(document.getElementsByClassName('heart'))
 heart[i].addEventListener('click', changecolor)


 // fuction remove

let buttonremove = remove [i]
buttonremove.addEventListener('click', function (remove) {
   let buttononclick = event.target
   buttononclick.parentElement.remove()
   price[i].innerHTML = 0;
   calculatesum()
    
})

let total = Array.from(document.getElementsByClassName('total'));

  function calculatesum() {
    let somme = 0;
    for (let i = 0; i < mylist.length; i++) {
        total[i].value = Number(price[i].innertext) * Number(counter[i].innertext);
        somme += Number(price[i].innertext) * Number(counter[i].innertext)
        totalfin.value = somme;
  }

}
}















 

