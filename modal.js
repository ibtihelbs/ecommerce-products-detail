document.querySelector('body').insertAdjacentHTML('beforeend', `
<div class="modal">
<div id="carousel">
<div class="carousel">
  <div class="slide-icon">
    <button id="previous"><img src="images/icon-previous.svg" alt=""></button>
    <button id="next"><img src="images/icon-next.svg" alt=""></button>
  </div>
    <div class="carousel_track-container">
       <ul class="carousel-track">
           <li class="img-slide current-slide"><img  src="images/image-product-1.jpg" alt=""></li>
           <li class="img-slide"><img class="carousel-img" src="images/image-product-2.jpg" alt=""></li>
           <li class="img-slide"><img class="carousel-img" src="images/image-product-3.jpg" alt=""></li>
           <li class="img-slide"><img class="carousel-img" src="images/image-product-4.jpg" alt=""></li>
       </ul>
    </div>
</div>


<div class="item-scroll">
<img class="current-slide" src="images/image-product-1-thumbnail.jpg" alt="">
<img src="images/image-product-2-thumbnail.jpg" alt="">
<img src="images/image-product-3-thumbnail.jpg" alt="">
<img src="images/image-product-4-thumbnail.jpg" alt="">
</div>
</div>
</div>
`);