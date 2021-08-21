// <!-- Designed by - Ashutosh Kumar
//      Website name - MultiLeo. 
//      school code - Octans

//     contact me :
//        youtube   -   https://youtube.com/channel/UCi8qZoUNt6h_-VmrLtzr3Dg
//        instagram -   https://www.instagram.com/multileo.official/
//        discord   -   https://discord.gg/quuK4yDh
//        codepen   -   https://codepen.io/Multileo-Ash
//        github    -   https://github.com/MultiLeo-official
//        facebook  -   https://www.facebook.com/MultiLeo.official

// -->


$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Photographer", "Logo Designer", "SEO Expert", "Freelancer", "photo editer" ,"video editer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

}); 
      
// <!-- Designed by - Ashutosh Kumar
//      Website name - MultiLeo. 
//      school code - Octans

//     contact me :
//        youtube   -   https://youtube.com/channel/UCi8qZoUNt6h_-VmrLtzr3Dg
//        instagram -   https://www.instagram.com/multileo.official/
//        discord   -   https://discord.gg/quuK4yDh
//        codepen   -   https://codepen.io/Multileo-Ash
//        github    -   https://github.com/MultiLeo-official
//        facebook  -   https://www.facebook.com/MultiLeo.official

// --> 