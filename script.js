fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
.then(res =>res.json())
.then(res => books(res))
.catch(erro => console.log("erro"))


let author1 = document.getElementById('author1') ; 
let title1 = document.getElementById('title1') ; 
let img1 = document.getElementById("img-dad1") ; 


let author2 = document.getElementById('author2') ; 
let title2 = document.getElementById('title2') ; 
let img2 = document.getElementById("img2") ; 

let author3 = document.getElementById('author3') ; 
let title3 = document.getElementById('title3') ;
let img3 = document.getElementById("img3") ; 


let author4 = document.getElementById('author4') ; 
let title4 = document.getElementById('title4') ; 
let img4 = document.getElementById("img4") ;

let author6 = document.getElementById('author6') ; 
let title6 = document.getElementById('title6') ; 
let img6 = document.getElementById("img6") ; 

let author7 = document.getElementById('author7') ; 
let title7 = document.getElementById('title7') ;  
let img7 = document.getElementById("img7") ;

let author8 = document.getElementById('author8') ; 
let title8 = document.getElementById('title8') ;
let img8 = document.getElementById("img8") ;

let author9 = document.getElementById('author9') ; 
let title9 = document.getElementById('title9') ;  
let img9 = document.getElementById("img9") ;

let author10 = document.getElementById('author10') ; 
let title10 = document.getElementById('title10') ; 
let img10 = document.getElementById("img10") ;

let author11 = document.getElementById('author11') ; 
let title11 = document.getElementById('title11') ; 
let img11 = document.getElementById("img11") ;

let author12 = document.getElementById('author12') ; 
let title12 = document.getElementById('title12') ; 
let img12 = document.getElementById("img12") ;

let author13 = document.getElementById('author13') ; 
let title13 = document.getElementById('title13') ; 
let img13 = document.getElementById("img13") ;

function books(res){
console.log(res) ; 
author1.innerHTML = res[45].author ; 
title1.innerHTML = res[45].title ; 
img1.innerHTML = `<img src=${res[45].simple_thumb} alt="" class="img-fluid "
id="img1">`
// img11.innerHTML = `<img src=${res[45].cover_thumb} alt="" class="img-fluid "
// id="img1">`

author2.innerHTML = res[44].author ; 
title2.innerHTML = res[44].title ; 
img2.innerHTML =`<img src=${res[44].simple_thumb} alt="" class="img-fluid "
id="img2">`

author3.innerHTML = res[43].author ; 
title3.innerHTML = res[43].title ; 
img3.innerHTML =`<img src=${res[43].simple_thumb} alt="" class="img-fluid "
id="img3">`

author4.innerHTML = res[42].author ; 
title4.innerHTML = res[42].title ; 
img4.innerHTML =`<img src=${res[42].simple_thumb} alt="" class="img-fluid "
id="img4">`
////////////

author6.innerHTML = res[41].author ; 
title6.innerHTML = res[41].title ; 
img6.innerHTML = `<img src=${res[41].simple_thumb} alt="book picture" class="img-fluid ">`

author7.innerHTML = res[40].author ; 
title7.innerHTML = res[40].title ; 
img7.innerHTML = `<img src=${res[40].simple_thumb} alt="book picture" class="img-fluid ">`

author8.innerHTML = res[39].author ; 
title8.innerHTML = res[39].title ; 
img8.innerHTML = `<img src=${res[39].simple_thumb} alt="book picture" class="img-fluid ">`

author9.innerHTML = res[38].author ; 
title9.innerHTML = res[38].title ; 
img9.innerHTML = `<img src=${res[38].simple_thumb} alt="book picture" class="img-fluid ">`

author10.innerHTML = res[37].author ; 
title10.innerHTML = res[37].title ; 
img10.innerHTML = `<img src=${res[37].simple_thumb} alt="book picture" class="img-fluid ">`

author11.innerHTML = res[36].author ; 
title11.innerHTML = res[36].title ; 
img11.innerHTML = `<img src=${res[36].simple_thumb} alt="book picture" class="img-fluid ">`

author12.innerHTML = res[35].author ; 
title12.innerHTML = res[35].title ; 
img12.innerHTML = `<img src=${res[35].simple_thumb} alt="book picture" class="img-fluid ">`

author13.innerHTML = res[34].author ; 
title13.innerHTML = res[34].title ; 
img13.innerHTML = `<img src=${res[34].simple_thumb} alt="book picture" class="img-fluid ">`
}

fetch('https://wolnelektury.pl/api/books/studnia-i-wahadlo/')
.then(res1 =>res1.json())
.then(res1 => best(res1))
.catch(erro => console.log("erro"))

let author5 = document.getElementById("author5") ; 
let title5 = document.getElementById("title5") ; 
let img5 = document.getElementById("img5") ; 
let bestP =  document.getElementById("bestP") ; 


function best (res1){
console.log(res1 ) ; 
author5.innerHTML  = `By ${res1.authors[0].name}`
title5.innerHTML = res1.title
img5.innerHTML = `<img src=${res1.cover} alt="best book picture" class="img-fluid ">`
bestP.innerHTML = res1.fragment_data.html
}

