
$(function(){

// User Login
var modal = document.getElementById('reg-login');
window.onclick = function(event) 
{
    if (event.target == modal) 
    {
        modal.style.display = "none";
    }
}

// JAVASCRIPT    
// JS for Sticky Header  

    // When the user scrolls down 80px from the top of the document, slide down the navbar
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("sticky-header").style.top = "0";
        document.getElementById("sticky-header").style.opacity = "1";
        document.getElementById("scroll-top").style.top = "90%";
      } else {
        document.getElementById("sticky-header").style.top = "-100px";        
        document.getElementById("sticky-header").style.opacity = "0";
        document.getElementById("scroll-top").style.top = "-10%"; 
      }
    }

//  JS for Sticky Header End 

//  JS for Shop Accordion  

    $(".main-category > a").on("click", function(){
       if($(this).hasClass('active')){
         $(this).removeClass("active");
         $(this).siblings('.content').slideUp(500);
         $(".main-category > a i").removeClass("fa-minus").addClass("fa-plus");
       }else{
         $(".main-category > a i").removeClass("fa-minus").addClass("fa-plus");
       $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
       $(".main-category > a").removeClass("active");
       $(this).addClass("active");
       $('.content').slideUp(500);
       $(this).siblings('.content').slideDown(500);
       }
       
     });
// JS for Shop Accordion End 

// JS for Grid Filter   
        $('.view-button.grid').on('click', function(){
    	if($(this).hasClass('active')) return false;
    	$('.shop-grid').fadeOut(function(){
    		$('.shop-grid').removeClass('list-view').addClass('grid-view');
    		$(this).fadeIn();
    	});
    	$(this).parent().find('.active').removeClass('active');
    	$(this).addClass('active');
    });

    $('.view-button.list').on('click', function(){
    	if($(this).hasClass('active')) return false;
    	$('.shop-grid').fadeOut(function(){
    		$('.shop-grid').removeClass('grid-view').addClass('list-view');
    		$(this).fadeIn();
    	});
    	$(this).parent().find('.active').removeClass('active');
    	$(this).addClass('active');
    });
//JS for Grid Filter End   

// JS for Mobile Menu 

    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        } 
      });
    }

    var burgerBtn = document.getElementById("burgerBtn");
    var closeBtn = document.getElementById("closeBtn");
    var menuBkgrnd = document.getElementById("menuBkgrnd");
    var mobileMenu = document.getElementById("mobileMenu");

    mobileMenu.style.right = "-300px";
    menuBkgrnd.style.right = "-100%";
    burgerBtn.onclick = function(){
        if(mobileMenu.style.right == "-300px"){
            mobileMenu.style.right = "0";
        }
        if(menuBkgrnd.style.right == "-100%"){
                menuBkgrnd.style.right = "0";
        }
        else{
            mobileMenu.style.right = "-300px";
            mobileMenu.style.right = "-100%";
        }
    }
    mobileMenu.style.right = "-300px";
    menuBkgrnd.style.right = "-100%";
    menuBkgrnd.onclick = function(){
        if(mobileMenu.style.right == "-300px"){
            mobileMenu.style.right = "0";
        }
        if(menuBkgrnd.style.right == "-100%"){
                menuBkgrnd.style.right = "0";
        }
        else{
            mobileMenu.style.right = "-300px";
            menuBkgrnd.style.right = "-100%";
        }
    }
    mobileMenu.style.right = "-300px";
    menuBkgrnd.style.right = "-100%";
    closeBtn.onclick = function(){
        if(mobileMenu.style.right == "-300px"){
            mobileMenu.style.right = "0";
        }
        if(menuBkgrnd.style.right == "-100%"){
                menuBkgrnd.style.right = "0";
        }
        else{
            mobileMenu.style.right = "-300px";
            menuBkgrnd.style.right = "-100%";
        }
    }
//JS for Mobile Menu End
// JS for Product Gallery Start 

    var ProductImg = document.getElementById("ProductImg");
    var SmallImg = document.getElementsByClassName("small-img");
    
    SmallImg[0].onclick = function()
    {
        ProductImg.src = SmallImg[0].src;
    }
    SmallImg[1].onclick = function()
    {
        ProductImg.src = SmallImg[1].src;
    }
    SmallImg[2].onclick = function()
    {
        ProductImg.src = SmallImg[2].src;
    }
    SmallImg[3].onclick = function()
    {
        ProductImg.src = SmallImg[3].src;
    }

// JS for Product Gallery End 



// JAVASCRIPT End 

});