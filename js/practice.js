console.log('JavaScript')

let child = document.querySelectorAll('li.child a')
let ustext = 'facebook';
child.forEach(function(element){
   let href= element.href 
   var nameo = element.innerText
   if (ustext !== nameo.toLowerCase()){
      console.log(`${nameo}:${href}`);
   }
});

// create element
let cretae= document.createElement('li')
cretae.className='child'
cretae.id='child5'
//create element text and append
let text = document.createTextNode('This is all link')
cretae.appendChild(text)
console.log(cretae)

// get parrent div and append in child 
let ol = document.querySelector('.parent')
ol.appendChild(cretae)
console.log(ol)

// Replace child 
// let pol = document.querySelector('#myparent')
// // pol.replaceChild(cretae,document.querySelector('#child1'))
// console.log()


//create div as a parent and h,ul,li as child  
let div = document.createElement('div')
div.className='container'
let ul = document.createElement('ul')
ul.className='ulchild'
let hea = document.createElement('h3')
hea.innerHTML='<b>Made by JS</b>'
hea.id='hd'
hea.onclick="mufunc()";
div.appendChild(hea)
div.appendChild(ul)
// console.log(div)

//append on body(html)
let body = document.body
body.append(div)


//acess link text to html and append in li 
let par = document.querySelectorAll('li.child a')
par.forEach(function(element,indexof){
   if (ustext!==element.innerText.toLowerCase()){
      
      let data=element.innerText
      let li = document.createElement('li')
      li.innerText=data
      li.id=`chilo${indexof}`
      let getul=document.querySelector('.ulchild')
      getul.appendChild(li)
      // console.log(li)
     
   }
   
})



// get all childerns and setattribut
let divcon=document.querySelector('div.container')
let chilo = divcon.children
Array.from(chilo).forEach(function(element,indexof) {
   if (1!==indexof){
      element.setAttribute('onclick','myfunk(this)')
          
      
   }
   else{
      let ulchilo= element.children
      Array.from(ulchilo).forEach(function(elemento) {
         elemento.setAttribute('onclick','myfunk(this)')
         // console.log(elemento)
      });
     
   };
   
   console.log(element)
});
//click fuction = click par replace kar rha hai input se
function myfunk(obj) {
 
   let text=obj.innerText
   // console.log(text)
   let inp=document.createElement('input')
   inp.setAttribute('onchange','changein(this)')  
   inp.setAttribute('onfocus','focin(this)')
   inp.type='text'
   inp.value=text 
   let tagnam = obj.tagName
   sessionStorage.setItem(tagnam,tagnam)
   //   let tagname=document. .tagname
   console.log(tagnam)
   localStorage.setItem('oldname',text)  
   obj.replaceWith(inp)
   console.log(inp)
   
}
//onchange fuction = ye input se left krte hai to input se h1 main conver hota hai
//When you leave the input field, a function is triggered which transforms the input text to upper case.
function changein(ob) {
  let val=ob.value
  let tagnamh3 = sessionStorage.getItem('H3')
  let tagnamli = sessionStorage.getItem('LI')
  
  let name='H3';
  let name2='LI';
  
   if(tagnamli == name2)

   {
      
      let li=document.createElement('li');
      let hdtext=li.innerText=val;
      //add to localstoge in webbrowers
      localStorage.setItem('newname',hdtext);
      sessionStorage.clear()
      ob.replaceWith(li);
   } 
   else if(tagnamh3 === name)
   {      
      let h=document.createElement('H3');
      let hdtext=h.innerText=val.toUpperCase();
      //add to localstoge in webbrowers
      localStorage.setItem('newname',hdtext)
      sessionStorage.clear()
      ob.replaceWith(h);
   };
  
};
//onfocus function = isse input ka background focus hota hai
function focin(x) {
   x.style.background='lightgreen';
   
   
   
}