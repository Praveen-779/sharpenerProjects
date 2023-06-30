// Examine the document object
// console.dir(document)

// to know the website url
// document.write(document.URL)
// document.title='praveen';
// console.log(document.title);
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10])

// will change the text content of h1 and  this method not recommended 
// document.all[10].textContent='hello'

// console.log(document.forms)
// console.log(document.links)
// console.log(document.forms[0])
// console.log(document.images)


// getElementById
// console.log(document.getElementById('header-title'))
// let getElement = document.getElementById('header-title')
// // console.log(getElement)
// // getElement.textContent = 'hello'
// // getElement.innerText = 'bye';
//  var header = document.getElementById('main-header')
//  header.style.border= "2px solid black"
let title = document.getElementById('header-title')
title.textContent = "item Lister (manipulated using javascript)"


// making title having a black border
title.style.border = "2px solid black";


//making add item bold and making color as green
let addItem = document.getElementsByClassName('title')
addItem[0].style.fontWeight = "bold";
addItem[0].style.color = "green";


