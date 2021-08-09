//create element
let divP = document.createElement('div')
divP.setAttribute('class','containerP')

let h1 = document.createElement('h1')

divP.appendChild(h1)

let h1text = document.createTextNode('Welcome to Magic show')
h1.appendChild(h1text)

let divC = document.createElement('div')
divC.setAttribute('class','containerC')
divC.style.border='2px solid black'
divC.style.borderRadius='5px'

divP.appendChild(divC)

let h4 = document.createElement('h4')
let h4txt = document.createTextNode('Add a Note')
h4.appendChild(h4txt)

divC.appendChild(h4)

let txtarea= document.createElement('textarea')
txtarea.setAttribute('id','area')


divC.appendChild(txtarea) 

let btn = document.createElement('input')
btn.type='button'; 
btn.setAttribute('id','btn')
btn.value='Add Note'
divC.appendChild(btn) 









//all element append in the body
let boady = document.body.append(divP)
// let body = document.body
// body.append(divp1) 








var click=0;
var areaval
let getbtn=document.querySelector('#btn')
getbtn.addEventListener('click',counter)
getbtn.addEventListener('mousedown',getval)
getbtn.addEventListener('mouseup',clrval)

function getval() {
    let areaget=document.querySelector('#area')
    areaval=areaget.value
    console.log(areaval) 
}
function clrval() {
    let areageto=document.querySelector('#area')
    areageto.value=''
    // console.log(areaval) 
}
//ye function notes ki div create karta hai jo value hmne di hai
function counter() {
    
    //create div added note 
    let divp1 = document.createElement('div')
    divp1.setAttribute('class','containernote')
    divp1.style.border='2px solid black'
    divp1.style.borderRadius='5px'
    let h4n = document.createElement('h4')
    divp1.appendChild(h4n)
    let par = document.createElement('p')
    par.setAttribute('id','paranote')
    
    let delbtn = document.createElement('input')
    delbtn.setAttribute('onclick','delfun(this)')
    delbtn.type='button'
    delbtn.value='Delete Note'

    if (areaval!==""){
        click +=1
        divp1.setAttribute('id',`note${click}`)
        let h4ntxt = document.createTextNode(`Note ${click}`)
        h4n.appendChild(h4ntxt)
        par.innerText=areaval
        divp1.appendChild(par)
        divp1.appendChild(delbtn)
        let body = document.body
        body.append(divp1) 
        console.log(divp1)
    }

}
function delfun(obj) {

    // let del = document.querySelector('#paranote').parentNode
    let getid=obj.parentElement.getAttribute('id')
    console.log(getid)
    console.log(typeof getid)
    let del=document.querySelector(`#${getid}`)
    del.remove()
    
}




console.log(divP) 

