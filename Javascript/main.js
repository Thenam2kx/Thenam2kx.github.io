window.onload = function(){

    function changeBannerHeader(){
        var i = 1;
        var imgs = [
            "../image/banner/img_1.png",
            "../image/banner/img_2.jpg",
            "../image/banner/img_3.png",
            "../image/banner/img_4.jpg",
            "../image/banner/img_5.jfif",
            "../image/banner/img_6.png",
            "../image/banner/img_7.jfif",
            "../image/banner/img_8.jpg"
        ];
        function change_banner(){
    
            document.getElementById("image_banner").src = imgs[i];
            i++;
    
            if(i >= imgs.length){
                i = 0;
            };
        };

        document.getElementById("convert-right").onclick = function(){
            i+= 1;
            document.getElementById("image_banner").src = imgs[i];
        }; 
        document.getElementById("convert-left").onclick = function(){
            i-= 2;
            document.getElementById("image_banner").src = imgs[i];
        };  

        if(i > imgs.length){
            i = 0;
        };

        setInterval(change_banner, 2000);
    }
    changeBannerHeader();


    // ===============================================================================================================
    
    function addProductInCart(){
        var numberCart_start = 1;
        var numberCart = document.getElementById("numberProduct");

        var addcart = document.querySelectorAll(".buyNow");
        console.log(addcart);
        addcart.forEach(add_cart_product);

        function add_cart_product(iteam, index){
            iteam.addEventListener("click", function(){
                // document.getElementById("cart__content").style.backgroundColor = "red"
                numberCart.innerHTML = numberCart_start++;
            })
        }
    }
    addProductInCart();
    


    
    

}
