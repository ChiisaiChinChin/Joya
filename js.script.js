document.getElementById("Search").addEventListener('keyup', function() {
    let filter = this.value.toUpperCase();
    let listItems = document.querySelectorAll('#ItemsList li');

    listItems.forEach((item) => {
        let text = item.textContent;

        if(text.toUpperCase().indexOf(filter) > -1) {
            item.classList.remove('hidden');
        }
        else {
            item.classList.add('hidden');
        }
    })
    if (HomeUl.children.length > 10) {
        for (let i = 12; i < HomeUl.children.length; i++) {
            HomeUl.children[i].classList.add('hidden');
        }
    }
})

document.getElementById("PishtanCheck").addEventListener("input", function() {
    let filter = "פשתן".toUpperCase();
    let listItems = document.querySelectorAll('#ItemsList li');
    let CheckPishtan = document.getElementById("PishtanCheck");

    listItems.forEach((item) => {
        let text = item.textContent;

        if (text.toUpperCase().indexOf(filter) > -1) {
            item.classList.remove('hidden');
        } else {
            if (CheckPishtan.checked) {
                item.classList.add('hidden');
            }
        }
        if (CheckPishtan.checked === false) {
            item.classList.remove('hidden');
        }
    })
    if (HomeUl.children.length > 10 && !CheckPishtan.checked) {
        for (let i = 12; i < HomeUl.children.length; i++) {
            HomeUl.children[i].classList.add('hidden');
        }
    }
})

document.getElementById("MoroccanCheck").addEventListener("input", function() {
    let filter = "MOROCCAN".toUpperCase();
    let listItems = document.querySelectorAll('#ItemsList li');
    let CheckMoroccan = document.getElementById("MoroccanCheck");

    listItems.forEach((item) => {
        let text = item.textContent;

        if (text.toUpperCase().indexOf(filter) > -1) {
            item.classList.remove('hidden');
        } else {
            if (CheckMoroccan.checked) {
                item.classList.add('hidden');
            }
        }
        if (CheckMoroccan.checked === false) {
            item.classList.remove('hidden');
        }
    })
    if (HomeUl.children.length > 10 && !CheckMoroccan.checked) {
        for (let i = 12; i < HomeUl.children.length; i++) {
            HomeUl.children[i].classList.add('hidden');
        }
    }
})

document.getElementById("OblipichaCheck").addEventListener("input", function() {
    let filter = "אובליפיחה".toUpperCase();
    let listItems = document.querySelectorAll('#ItemsList li');
    let CheckOblipicha = document.getElementById("OblipichaCheck");

    listItems.forEach((item) => {
        let text = item.textContent;

        if (text.toUpperCase().indexOf(filter) > -1) {
            item.classList.remove('hidden');
        } else {
            if (CheckOblipicha.checked) {
                item.classList.add('hidden');
            }
        }
        if (CheckOblipicha.checked === false) {
            item.classList.remove('hidden');
        }
    })
    if (HomeUl.children.length > 10 && !CheckOblipicha.checked) {
        for (let i = 12; i < HomeUl.children.length; i++) {
            HomeUl.children[i].classList.add('hidden');
        }
    }
})

document.getElementById("KeratinCheck").addEventListener("input", function() {
    let filter = "קרטין".toUpperCase();
    let listItems = document.querySelectorAll('#ItemsList li');
    let CheckKeratin = document.getElementById("KeratinCheck");

    listItems.forEach((item) => {
        let text = item.textContent;

        if (text.toUpperCase().indexOf(filter) > -1) {
            item.classList.remove('hidden');
        } else {
            if (CheckKeratin.checked) {
                item.classList.add('hidden');
            }
        }
        if (CheckKeratin.checked === false) {
            item.classList.remove('hidden');
        }
    })
    if (HomeUl.children.length > 10 && !CheckKeratin.checked) {
        for (let i = 12; i < HomeUl.children.length; i++) {
            HomeUl.children[i].classList.add('hidden');
        }
    }
})

//check boxes code============================================================================================>
// Assuming your checkboxes have the class 'single-choice' and same name attribute
const checkboxes = document.querySelectorAll(".Collection");

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', function() {
        // Uncheck all checkboxes in the same group
        checkboxes.forEach(cb => {
            if (cb !== this) { // Don't uncheck the one just clicked
                cb.checked = false;
            }
        });
    });
});

//Product Pages
let ul = document.getElementById("ItemsList");

for (let i = ul.children.length; i >= 0; i--) { ul.appendChild(ul.children[Math.random() * i | 0]); }

//Home Page
let HomeUl = document.querySelector('[title="HomePageUl"]')
    if (HomeUl.children.length > 10) {
        for (let i = 12; i < HomeUl.children.length; i++) {
            HomeUl.children[i].classList.add('hidden');
        }
    }

//COLORS
//var mainDark = "#24201D";
//var mainAbsent =  "#ABA38F";
//var seconderyAbsent = "#D9D4C8";
//var mainPop = "#565538";
//var seconderyPop = "#792E29";

//Cart
function AddQuantity() {
    const opCartQuiantity = document.getElementById("OpQuantity");
    if (typeof(Storage) !== "undefined") {
        if (localStorage.OpCartQ) {
            localStorage.setItem("OpCartQ", Number(localStorage.OpCartQ) + 1);
        } else if (!localStorage.OpCartQ){
            localStorage.setItem("OpCartQ", 1);
        }
        opCartQuiantity.innerText = localStorage.OpCartQ;
    } else {
        console.log("Doesnt Support Local Storage :(")
    }
}
function AddCartItem(name, id, price, src) {
    const CartUl = document.getElementById("CartItems");
    const OverAll = document.getElementById("Cost");
    const  Cart = document.getElementById("Cart");
    Cart.style.display = "block";
    Cart.style.overflow = "show";
    OverAll.name = 0;
    for (let i = 0; i < CartUl.children.length; i++) {
        OverAll.name += parseFloat(CartUl.children[i].name);
        if (OverAll.name < 200) {
            OverAll.innerHTML = "סך הכל: " + "₪" + OverAll.name + "<p style='scale: 0.75; position: relative; top: 40px; left: -100px;  margin: -42px 0 10px 0;'>בקניה מעל ₪200 משלוח חינם</p><br>";
        }else {
            OverAll.innerHTML = "סך הכל: " + "₪" + OverAll.name + "<p style='scale: 0.75; margin: -5px 0 -5px 0; position: relative; left: -220px'>* משלוח חינם</p>";
        }
    }
    if (document.getElementById(id + "c") == null) {
        const li = document.createElement("li");
        const img = document.createElement("img");
        const Amount = document.createElement("p");
        const Minus = document.createElement("button");
        const Plus = document.createElement("button");
        Minus.textContent = "-";
        Minus.style.padding = "0 0 30px 0";
        Minus.style.width = "20px";
        Minus.style.height = "30px";
        Minus.style.transition = "0.4s ease-in-out";
        Minus.style.position = "relative";
        Minus.style.bottom = "115px";
        Minus.style.right = "-55px";
        Minus.style.background = "#565538";
        Minus.style.border = "none";
        Minus.style.borderRadius = "5px";
        Minus.style.color = "#D9D4C8";
        Minus.style.fontWeight = "bold";
        Minus.style.fontSize = "30px";
        Minus.onmouseover = function() {
            Minus.style.scale = "1.15";
            Minus.style.backgroundColor = "#D9D4C8";
            Minus.style.color = "#565538";
        };
        Minus.onmouseout = function() {
            Minus.style.scale = "1";
            Minus.style.backgroundColor = "#565538";
            Minus.style.color = "#D9D4C8";
        }
        Minus.onclick = function() {
            Minus.style.scale = "0.8";
            setTimeout(() => {
               Minus.style.scale = "1.15";}, 100);
            if (Amount.name <= 1){
                const opCartQuiantity = document.getElementById("OpQuantity");
                localStorage.setItem("OpCartQ", Number(localStorage.OpCartQ) - 1);
                opCartQuiantity.innerText = localStorage.OpCartQ;
            }
        }
        Minus.id = id + "-";
        Minus.addEventListener("click", function () {
            OverAll.name = 0;
            if (typeof(Storage) !== "undefined") {
                if (localStorage.getItem("ClickCount" + id) && localStorage.getItem("ClickCount" + id) > 0) {
                    localStorage.setItem("ClickCount" + id, Number(localStorage.getItem("ClickCount" + id)) - 1);
                } else if (!localStorage.getItem("ClickCount" + id)){
                    localStorage.setItem("ClickCount" + id, 1);
                }
                Amount.name = localStorage.getItem("ClickCount" + id);
                Pprice.textContent = "₪" + price + " x " +  Amount.name  + " = " + "₪" + (price *  Amount.name);
                li.name = price * Amount.name;
                Quantity.textContent =  Amount.name;
                if (Amount.name < 1){
                    li.style.opacity = "0";
                    setTimeout(() => {li.remove();}, 1000);
                }
            } else {
                Amount.name = "Sorry, no Web storage support!";
            }
            if (Amount.name < 1){
                OverAll.name = 0;
                if (OverAll.name < 200) {
                    OverAll.innerHTML = "סך הכל: " + "₪" + OverAll.name + "<p style='scale: 0.75; position: relative; top: 40px; left: -100px;  margin: -42px 0 10px 0;'>בקניה מעל ₪200 משלוח חינם</p><br>";
                }else {
                    OverAll.innerHTML = "סך הכל: " + "₪" + OverAll.name + "<p style='scale: 0.75; margin: -5px 0 -5px 0; position: relative; left: -220px'>* משלוח חינם</p>";
                }
            }
            for (let i = 0; i <= CartUl.children.length; i++) {
                OverAll.name += CartUl.children[i].name;
                if (OverAll.name < 200) {
                    OverAll.innerHTML = "סך הכל: " + "₪" + OverAll.name + "<p style='scale: 0.75; position: relative; top: 40px; left: -100px;  margin: -42px 0 10px 0;'>בקניה מעל ₪200 משלוח חינם</p><br>";
                } else {
                    OverAll.innerHTML = "סך הכל: " + "₪" + OverAll.name + "<p style='scale: 0.75; margin: -5px 0 -5px 0; position: relative; left: -220px'>* משלוח חינם</p>";
                }
            }
        });

        Plus.textContent = "+";
        Plus.style.transition = "0.4s ease-in-out";
        Plus.style.width = "20px";
        Plus.style.height = "30px";
        Plus.style.padding = "0 2px 0 2px";
        Plus.style.position = "relative";
        Plus.style.bottom = "155px"
        Plus.style.right = "-75px";
        Plus.style.background = "#565538";
        Plus.style.border = "none";
        Plus.style.borderRadius = "5px";
        Plus.style.color = "#D9D4C8";
        Plus.style.fontWeight = "bold";
        Plus.style.fontSize = "25px";
        Plus.onmouseover = function() {
            Plus.style.scale = "1.15";
            Plus.style.backgroundColor = "#D9D4C8";
            Plus.style.color = "#565538";
        };
        Plus.onmouseout = function() {
            Plus.style.scale = "1";
            Plus.style.backgroundColor = "#565538";
            Plus.style.color = "#D9D4C8";
        }
        Plus.onclick = function() {
            Plus.style.scale = "0.8";
            setTimeout(() => {
                Plus.style.scale = "1.15";}, 100);
        }
        Plus.id = id + "+";
        Plus.addEventListener("click", function () {
            OverAll.name = 0;
                if (localStorage.getItem("ClickCount" + id)) {
                    localStorage.setItem("ClickCount" + id, Number(localStorage.getItem("ClickCount" + id)) + 1);
                } else {
                    localStorage.setItem("ClickCount" + id, 1);
                }
                Amount.name =  Number(localStorage.getItem("ClickCount" + id));
            Pprice.textContent = "₪" + price + " x " +  Amount.name  + " = " + "₪" + (price *  Amount.name);
            li.name = price * Amount.name;
            Quantity.textContent =  Amount.name;
            if (CartUl.children.length < 1){
                OverAll.name = 0;
            }else{
                for (let i = 0; i <= CartUl.children.length; i++) {
                    OverAll.name += CartUl.children[i].name;
                    if (OverAll.name < 200) {
                        OverAll.innerHTML = "סך הכל: " + "₪" + OverAll.name + "<p style='scale: 0.75; position: relative; top: 40px; left: -100px;  margin: -42px 0 10px 0;'>בקניה מעל ₪200 משלוח חינם</p><br>";
                    }else {
                        OverAll.innerHTML = "סך הכל: " + "₪" + OverAll.name + "<p style='scale: 0.75; margin: -5px 0 -5px 0; position: relative; left: -220px'>* משלוח חינם</p>";
                    }
                }
            }
        });


        const div = document.createElement("div");
        const Quantity = document.createElement("p");
        const Pname = document.createElement("p");
        const Pprice = document.createElement("p");
        const Psku = document.createElement("p");
        if (localStorage.getItem("ClickCount" + id)) {
            localStorage.setItem("ClickCount" + id, Number(localStorage.getItem("ClickCount" + id)) + 1);
            Amount.name =  Number(localStorage.getItem("ClickCount" + id));
            Pprice.textContent = "₪" + price + " x " +  Amount.name  + " = " + "₪" + (price *  Amount.name);
            li.name = price * Amount.name;
            Quantity.textContent =  Amount.name;
        }else{
            localStorage.setItem("ClickCount" + id, 1);
            Amount.name =  Number(localStorage.getItem("ClickCount" + id));
            Pprice.textContent = "₪" + price + " x " +  Amount.name  + " = " + "₪" + (price *  Amount.name);
            li.name = price * Amount.name;
            Quantity.textContent =  Amount.name;
        }
        Amount.id = id + "Q";
        img.src = src;
        img.style.borderRadius = "15px";
        img.style.width = "80px";
        img.style.height = "95px";
        img.style.display = "inline-block";
        img.style.margin = "10px"
        img.style.float = "left";
        img.style.position = "relative";
        img.style.left = "-120px";
        img.style.top = "-175px";
        img.style.transition = "0.4s ease-in-out";

        li.id= id + "c";
        li.style.opacity = "0";
        li.style.transition = "0.4s ease-in-out";
        setTimeout(() => {li.style.opacity = "1";}, 100);
        li.name = price * Amount.name;
        li.style.textAlign = "left";
        li.style.padding = "15px";
        li.style.position = "relative";
        li.style.right = "-50px";
        li.style.backgroundColor = "#24201D";
        li.style.color = "#D9D4C8";
        li.style.width = "250px";
        li.style.height = "65px";
        li.style.borderRadius = "15px";
        li.style.margin = "20px";
        li.style.display = "inline-block";

        div.style.display = "inline-block";
        div.style.transition = "0.4s ease-in-out";
        div.style.padding = "0 10px 0 10px";
        div.style.textAlign = "center";
        div.style.width = "40px";
        div.style.height = "70px";
        div.style.backgroundColor = "#D9D4C8";
        div.style.position = "relative";
        div.style.top = "-150px";
        div.style.right = "-60px";
        div.style.borderRadius = "5px";

        Quantity.id = id + "d";
        Quantity.style.transition = "0.4s ease-in-out";
        Quantity.textContent =  Amount.name;
        Quantity.style.position = "relative";
        Quantity.style.top = "10px";
        Quantity.style.fontWeight = "bold";
        Quantity.style.scale = "1.6";
        Quantity.style.color =  "#24201D";


        Pname.style.position = "relative";
        Pname.style.transition = "0.4s ease-in-out";
        Pname.style.top = "-15px";
        Pname.style.right = "-40px";
        Pname.textContent = name;
        Pname.style.fontWeight = "bold";

        Pprice.id = id + "p";
        Pprice.style.transition = "0.4s ease-in-out";
        Pprice.style.position = "relative";
        Pprice.style.top = "-15px";
        Pprice.style.right = "-10px";
        Pprice.style.direction = "ltr";
        Pprice.textContent = "₪" + price + " x " +  Amount.name  + " = " + "₪" + (price *  Amount.name);
        Pprice.style.fontWeight = "bold";
        Pprice.style.scale = "1.125";
        Pprice.style.display = "inline-block";

        Psku.textContent = 'מק"ט: ' + id;
        Psku.style.transition = "0.4s ease-in-out";
        Psku.style.fontWeight = "bold";
        Psku.style.position = "relative";
        Psku.style.top = "-95px";
        Psku.style.right = "-65px";
        Psku.style.scale = "0.6";

        div.appendChild(Quantity);
        li.appendChild(Amount);
        li.appendChild(div);
        li.appendChild(Pname);
        li.appendChild(Pprice);
        li.appendChild(Psku);
        li.appendChild(div);
        li.appendChild(img);
        li.appendChild(Minus);
        li.appendChild(Plus);
        document.getElementById("CartItems").appendChild(li);
    }else{
        if (typeof(Storage) !== "undefined") {
            if (localStorage.getItem("ClickCount" + id)) {
                localStorage.setItem("ClickCount" + id, Number(localStorage.getItem("ClickCount" + id)) + 1);
            } else {
                localStorage.setItem("ClickCount" + id, 1);
            }
            document.getElementById(id + "Q").name = localStorage.getItem("ClickCount" + id);
            document.getElementById(id + "Q").name =  Number(localStorage.getItem("ClickCount" + id));
            document.getElementById(id + "p").textContent = "₪" + price + " x " + document.getElementById(id + "Q").name  + " = " + "₪" + (price * document.getElementById(id + "Q").name);
            document.getElementById(id + "c").name = price * document.getElementById(id + "Q").name;
            document.getElementById(id + "d").textContent =   document.getElementById(id + "Q").name;
            if ( CartUl.children.length < 1){
                OverAll.name = 0;
            }else{
                for (let i = 0; i <= CartUl.children.length; i++) {
                    OverAll.name += CartUl.children[i].name;
                    if (OverAll.name < 200) {
                        OverAll.innerHTML = "סך הכל: " + "₪" + OverAll.name + "<p style='scale: 0.75; position: relative; top: 40px; left: -100px;  margin: -42px 0 10px 0;'>בקניה מעל ₪200 משלוח חינם</p><br>";
                    }else {
                        OverAll.innerHTML = "סך הכל: " + "₪" + OverAll.name + "<p style='scale: 0.75; margin: -5px 0 -5px 0; position: relative; left: -220px'>* משלוח חינם</p>";
                    }
                }
            }
        } else {
            document.getElementById(id + "Q").name = "Sorry, no Web storage support!";
        }
        document.getElementById(id + "c").name = price * document.getElementById(id + "Q").name;
        document.getElementById(id + "p").textContent = "₪" + price +  " x " +  document.getElementById(id + "Q").name + " = " + "₪" + (price * parseInt( document.getElementById(id + "Q").name));
        document.getElementById(id + "d").textContent =  document.getElementById(id + "Q").name;
        if (document.getElementById(id + "Q").name < 1){
            OverAll.name = 0;
            if (OverAll.name < 200) {
                OverAll.innerHTML = "סך הכל: " + "₪" + OverAll.name + "<p style='scale: 0.75; position: relative; top: 40px; left: -100px;  margin: -42px 0 10px 0;'>בקניה מעל ₪200 משלוח חינם</p><br>";
            }else {
                OverAll.innerHTML = "סך הכל: " + "₪" + OverAll.name + "<p style='scale: 0.75; margin: -5px 0 -5px 0; position: relative; left: -220px'>* משלוח חינם</p>";
            }
            document.getElementById(id+ "c").style.opacity = "0";
            setTimeout(() => {document.getElementById(id+ "c").remove();}, 1000);
        }
        const opCartQuantity = document.getElementById("OpQuantity");
    }
}

function CloseCart(){
   const  Cart = document.getElementById("Cart");
   Cart.style.opacity = "0";
    setTimeout(() => {   Cart.style.display = "none";
        Cart.style.overflow = "hidden";    Cart.style.opacity = "1";}, 500);
}

function OpenCart(){
    const  Cart = document.getElementById("Cart");
    Cart.style.opacity = "0";
    setTimeout(() => {Cart.style.opacity = "1";}, 100);
    Cart.style.display = "block";
    Cart.style.overflow = "auto";
}




function PageLoaded() {
    const opCartQuiantity = document.getElementById("OpQuantity");
    const PishtanId = ["271", "1074"];
    const PishtanP = ["59", "33"];
    const PishtanName = ["שמפו פשתן 1 ליטר", "שמפו פשתן 500 מל"];
    const PishtanSrc = ["תמונות מוצרים/Pishtan/Pishtan1lit.png", "תמונות מוצרים/Pishtan/Pishtan500ml.png"];
    let count = 0;
    for (let i = 0; i < PishtanId.length; i++) {
        if (localStorage.getItem("ClickCount" + PishtanId[i]) > 0){
            localStorage.setItem("ClickCount" + PishtanId[i], localStorage.getItem("ClickCount" + PishtanId[i]) - 1);
            AddCartItem(PishtanName[i], PishtanId[i],PishtanP[i], PishtanSrc[i]);
            count++;
        }
    }
    if (count < 1){
        localStorage.setItem("OpCartQ", 0);
    }
    opCartQuiantity.innerText = count.toString();
    CloseCart();
}

//Close Pop
function ClosePop(){
    const closePpop =event.currentTarget;
    const popUp = closePpop.parentElement;
    const overlay = document.getElementById("OverLay");
    popUp.style.opacity = "0";
    overlay.style.opacity = "0";
    setTimeout(()=>{
        popUp.style.display = "none";popUp.style.overflow = "hidden"; popUp.style.opacity = "1"; overlay.style.display = "none";    overlay.style.opacity = "1";
        }, 200)
}

function OpenPop(){
    const openPop = event.currentTarget;
    const ItemFieldset = openPop.parentElement;
    const li = ItemFieldset.parentElement
    const overlay = document.getElementById("OverLay");
    const popUp = li.querySelector(".ItemPopUp");
    popUp.style.opacity = "0";
    overlay.style.opacity = "0";
    setTimeout(()=>{
        popUp.style.opacity = "1";
        overlay.style.opacity = "0.5";
        overlay.style.display = "block";
        }, 200)
    popUp.transition = "0.4s ease-in-out;"
    popUp.style.display = "block";
    popUp.style.overflow = "auto";
}


