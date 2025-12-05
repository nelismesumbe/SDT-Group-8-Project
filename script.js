function addToCart(productName) {
    alert(productName + "has been added to your cart!");
}
function searchProduct(){
    let input=document.getElementById("searchBar").ariaValueMax.toLowerCase();
    let cards =document.querySelectoeAll(".card");
    cards.fprEach(card =>{
        let title=card.querySelector(".title").textContent.toLowerCase();
        if(title.includes(input)) {
            card.style.display= "block";
        } else {
            card.style.display="none";
        }
    });
}