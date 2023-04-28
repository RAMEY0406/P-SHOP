const Img = ["img/slide3.webp","img/slide1.webp","img/slide2.jpg"];
    var i=0;
    document.querySelector(".greater").onclick=()=>{
        document.querySelector(".img-content").src=Img[i++];
        (i==Img.length ? i=0 : i=i)
    }
    document.querySelector(".less").onclick=()=>{
        document.querySelector(".img-content").src=Img[i++];
        (i==0 ? i=3 : i=i)
        i--;
    }

    // dark mode

    const body = document.body;
    const a = document.getElementsByTagName("a");
    const array_nav = document.getElementsByTagName("nav");
    function changeMode(){
        body.classList.toggle("blackMode");
        for(let i = 0; i<array_nav.length; i++){
            array_nav[i].classList.toggle("nav-darkMode");
        }
        for(let i = 0; i<a.length; i++){
            a[i].classList.toggle("amode");
        }
    }