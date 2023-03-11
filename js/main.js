let products = document.querySelector(".products");
let orderburgers = document.querySelector(".orderburgers");
let subtotal = document.getElementById('subtotal');
let total = document.getElementById('total');
let tax = document.getElementById('tax');
let search = document.getElementById("search")
let sear = document.getElementById("sear")



let burger1 = [] // <<<  وهي فارغة Array  هذه ال 

let burger = [ { // <<< هنا ممتلئه ببيانات المنتج الذي نريد عرضه في الصفحة 

    name: 'poached',   //<  بأسم المنتج
    img: 'img/br-1.jpg',//< صورة المنتج
    price: 40,         //<< سعر المنتج
},{                     // {} وعلى هذا النحو نضيف كل منتج وبياناتة في هذه الاقواس 
                        // واحدة Array داخل 
    name: 'kubi',
    img: 'img/br-2.jpg',
    price: 55,
},{
    name: 'nut',
    img: 'img/br-3.jpg',
    price: 20,
},{
    name: 'burger',
    img: 'img/br-2.jpg',
    price: 60,
},{
    name: 'poached',
    img: 'img/br-1.jpg',
    price: 40,
},{
    name: 'steamed',
    img: 'img/br-3.jpg',
    price: 77,
},{
    name: 'cheese',
    img: 'img/br-2.jpg',
    price: 33,
}
]



burger.forEach((ele,i) => {
    let newEle = `
    <div class="box">
        <img class="img" src="${ele.img}" alt="">
        <h3 class="title-img">${ele.name}</h3>
        <div class="price">
            <span class="price">$${ele.price}</span>
            <i id="${i}" onclick="order(this.id)" class="fa-solid fa-cart-shopping shopp"></i>
        </div>
    </div>`
    products.innerHTML += newEle;
});
let or;
if (localStorage.pro != null){
    or = JSON.parse(localStorage.pro)
}else {
     or = []
}
function order(i){
    or.push(burger[i]);
    localStorage.setItem('pro', JSON.stringify(or));
    showData()
}










function showData() {
    let tabl = '';
    for(i = 0; i < or.length; i++){
        tabl += `
        <div class="burger">
              <div class="content">
              <img src="${or[i].img}" alt="">
              <h4>${or[i].name} <div>$${or[i].price}</div></h4>
              </div>
              <div class="icons"><i onclick="del(${i})" class="fa-solid fa-xmark"></i></div>
             </div>
        `
    }
    orderburgers.innerHTML = tabl;







    document.querySelector('.items').textContent = i;
    cashCalc()
}
showData()
function del(i) {
    or.splice(i,1)
    localStorage.pro = JSON.stringify(or)
    showData()
    cashCalc()
}
function cashCalc(){
    let totalCash = 0;
    or.forEach(ele => {
        totalCash = totalCash + ele.price;
    })
    subtotal.innerHTML = `$` + totalCash
    tax.innerHTML = `$` + (totalCash * 10 / 100)
    total.innerHTML = `$` + (totalCash + (totalCash * 10 / 100))
}