if(tracks.length!==0){
  let html;
tracks.forEach((track)=>{
html=`<p class="view-order">
<a href="https://ram-srinivaschandran.github.io/Orders/orders.html">View all orders</a></p>
<div class="arriving">Arriving on Monday, June 13</div>
<div class="product-name">${track.productName}</div>
<div class="quantity">Quantity: ${track.productQuantity}</div>
<div class="product-image-section"><img class="product-image" src="${track.productImage}"></div>
<div class="delivery">
<div>Preparing</div>
<div class="ship">Shipping</div>
<div>Delivered</div>
</div>
<div class="delivery-status">
<div class="processing"></div>
</div>`
});
document.querySelector('.js-track').innerHTML=html;
localStorage.removeItem("tracks");
}