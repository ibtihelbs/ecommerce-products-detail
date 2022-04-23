//import "modal.js";

let menu=document.querySelector(".menu ul");
let hamberger=document.querySelector("#menu");
let close=document.getElementById("close");
/**hundle menu */
hamberger.addEventListener("click",(e)=>{
    menu.classList.toggle("active");
    
})
close.addEventListener("click",(e)=>{
    menu.classList.remove("active");  
})


//Moving the images 
let images=document.querySelector(".carousel-track");
let _images=Array.from(images.children);
let img_slide=document.querySelectorAll(".img-slide");
let img=document.querySelectorAll(".carousel-img");
let img_thumbnail=document.querySelector(".item-scroll");
let img_thumbnails=Array.from(img_thumbnail.children);

//console.log(img,img_thumbnail);
let slideWidth= img[0].getBoundingClientRect().width+200;
console.log(slideWidth);
img_slide.forEach((item,keys)=>{
  item.style.left = slideWidth * keys+ "px";
})


let previous=document.getElementById("previous");
let next=document.getElementById("next");
let slide_icons=document.querySelector(".slide-icon");

let slideMoving=(current_slide,next_slide)=>{
    const amount_toMove=next_slide.style.left;
    images.style.transform = `translateX(-${amount_toMove})`;
    current_slide.classList.remove("current-slide");
    next_slide.classList.add("current-slide");
}

next.addEventListener("click",(e)=>{
    const current_slide=images.querySelector(".current-slide");
    const next_slide=current_slide.nextElementSibling;
    slideMoving(current_slide,next_slide);
})
previous.addEventListener("click",(e)=>{
    const current_slide=images.querySelector(".current-slide");
    const next_slide=current_slide.previousElementSibling;
    slideMoving(current_slide,next_slide);
})




img_thumbnail.addEventListener("click",(e)=>{
    const currentThumbnail= e.target.closest('img');
    if(!currentThumbnail)return;
    const thum=img_thumbnail.querySelector(".current-slide");
    const current_slide=images.querySelector(".current-slide");
    thum.classList.remove("current-slide");
    currentThumbnail.classList.add("current-slide");
    const get_index=img_thumbnails.findIndex(it=>it===currentThumbnail);
    images.style.transform = `translateX(-${slideWidth*get_index}px)`;
    //current_slide.classList.remove("current-slide");
    //next_slide.classList.add("current-slide");
})
images.addEventListener("click",(e)=>{
    let modal=document.querySelector(".modal");
    let img=e.target.closest("img");
    let _attribute=img.getAttribute("src");
    const get_index=(_images.findIndex(it=>it.innerHTML.includes(_attribute)==true))+1;
    console.log(get_index+"indx");

    modal.querySelector(".carousel-img").setAttribute("src", _attribute);
    modal.style.display = "flex";
    modal.querySelector("#next").addEventListener("click",(f)=>{
          _attribute=_attribute.replace(get_index,get_index+1);
          modal.querySelector(".carousel-img").setAttribute("src", _attribute);
    })
    
    modal.querySelector("#previous").addEventListener("click",(f)=>{
        console.log(_images);
        const get_index=(_images.findIndex(it=>it.innerHTML.includes(_attribute)==true))+1;
        //console.log(get_index);
        _attribute=_attribute.replace(get_index,get_index-1);
        if(get_index==0){
            console.log(get_index);
            modal.querySelector("#previous").display="none";
        }
        modal.querySelector(".carousel-img").setAttribute("src", _attribute);
  })
  let item_img_thumbnails=modal.querySelectorAll(".item-scroll img");
   item_img_thumbnails.forEach((item,index)=>{
       item.addEventListener("click",(f)=>{
        const get_index=(_images.findIndex(it=>it.innerHTML.includes(_attribute)==true))+1;
        _attribute=_attribute.replace(get_index,index+1);
        //console.log(_attribute);
        modal.querySelector(".carousel-img").setAttribute("src", _attribute);
       })
   })

})















/*counting elements*/
let span=document.querySelector("#item-count span");
let Card_count=document.querySelector("#Card-count");

let cardItem=document.querySelector(".card-item");
let item_count=document.getElementById("item-counts");
let card_state=document.querySelector('.card-state');
let Discount=document.querySelectorAll(".Discount");

let _Discount = parseInt(Discount[0].innerHTML.replace("$",""));
let _span=parseInt(span.innerHTML);

let full_card_fn=()=>{
    if(cardItem.innerHTML.includes('$')==true)return; 
    card_state.innerHTML=`
    <p>Fall Limited Edition Sneakers</p>
    <span class="Discount">$125.00</span>x<span id="item-counts">0</span><span id="total-price">$125.00</span>
    <button class="Add-to-cart">Check out</button>
   `
}


let empty_card_fn=()=>{
    card_state.innerHTML=`<h3>Your card is empty!</h3>`;
}

let card_hundler = ()=>{
    Card_count.setAttribute("value",span.innerHTML);
    
    document.getElementById("item-counts").innerHTML=span.innerHTML;
    document.getElementById("total-price").innerHTML=" $"+span.innerHTML*_Discount+".00";
}
Card_count.addEventListener("click",(e)=>{
    e.preventDefault();
    
    cardItem.classList.toggle("active-card");
    
    if(span.innerHTML==0){
       empty_card_fn();
    }else{
       
       full_card_fn(); 
    }
})
span_innerHtml=0;
document.getElementById("Plus").addEventListener("click",(e)=>{
    
    full_card_fn();
    span.innerHTML=parseInt(span.innerHTML)+1;
    let value=span.innerHTML;
    card_hundler();
})
document.getElementById("minus").addEventListener("click",(e)=>{
    console.log(span.innerHTML);
    if(span.innerHTML==0){
        return;
    };
    span.innerHTML=span.innerHTML-1;
    if(span.innerHTML==0){
        empty_card_fn(); 
        return; 
    }
    card_hundler();
})



//card-item

