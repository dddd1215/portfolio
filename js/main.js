let contactbtn = document.querySelector('.contactbtn');

contactbtn.addEventListener("click",function(){
    window.scrollTo({
        top: 18500
    });
});



var s = skrollr.init();

let text = document.querySelector('.text');
let profile = document.querySelector('.profile');
let history = document.querySelector('.history');
let skill = document.querySelector('.skill');
let airplanscroll = document.querySelector('.airplan');
let website = document.querySelector('.Website');
let contact = document.querySelector('.contact');
// let websitein = document.querySelector('.in');

window.addEventListener("scroll",function(){
    let wScroll=window.pageYOffset;
   /*  console.log(parseInt(wScroll)) */
    text.innerHTML=parseInt(wScroll)
    if(wScroll>=700){
        profile.classList.add('active');
    }else{
        profile.classList.remove('active');
    }

    if(wScroll>=1200){
        history.classList.add('active');
    }else{
        history.classList.remove('active');
    }

    if(wScroll>=2300){
        skill.classList.add('active');
    }else{
        skill.classList.remove('active');
    }

    if(wScroll>=4100){
        airplanscroll.classList.add('active');
    }else{
        airplanscroll.classList.remove('active');
    }

    if(wScroll>=10500 && wScroll<=17000){
        website.classList.add('active');
    }else{
        website.classList.remove('active');
    }

    if(wScroll>=18450){
        contact.classList.add('active');
    }else{
        contact.classList.remove('active');
    }
})

let websiteinList = document.querySelectorAll('.in');

window.addEventListener('scroll', () => {
    let wScroll = window.scrollY;

    websiteinList.forEach(websitein => {
        if (wScroll >= 10500 && wScroll <= 13000) {
            websitein.classList.add('desk');
            websitein.classList.remove('teb', 'phone');
        } else if (wScroll >= 13000 && wScroll <= 14950) {
            websitein.classList.add('teb');
            websitein.classList.remove('desk', 'phone');
        } else if (wScroll >= 15000 && wScroll <= 17000) {
            websitein.classList.add('phone');
            websitein.classList.remove('desk', 'teb');
        } else {
            websitein.classList.add('desk');
        }
    });
});
/* 스크롤 애니메이션 ------------*/

$('.animate').scrolla({
    // default
    mobile: false, // disable animation on mobiles
    once: false, // only once animation play on scroll
    animateCssVersion: 4 // used animate.css version (3 or 4)
});



/* skillcircle */

let counterDate=$('.box h3');
let executed=false;

$(window).scroll(function(){
    let $scroll=$(this).scrollTop() + 200;
    let $offset=$('.easypiechart').offset().top;

    if($scroll>$offset){
        pieChart()

        if(!executed){
            counterDate.each(function(){
                let currrent=$(this);
                let target=currrent.attr('data-rate');// 90 85
                //A.animte({width:100%},시간,이징,끝나는할일)
                // $({변수:초기값}).animate({변수:종료값},{
                //     옵션
                // })
                 $({rate:0}).animate({rate:target},{
                    duration:2500,
                    progress:function(){//중간중간에 할일
                        let now=this.rate;
                        
                        currrent.text(Math.ceil(now)+"%")
                    }
                })
            })
            executed=true
        }
       
    }
})


function pieChart(){
    $('.chart').easyPieChart({
        //your options goes here
        barColor:'#ffffff',
        scaleColor:false,
        trackColor:'#6D6D6D',
        lineWidth:16,
        size:180,
        animate:2000,
        lineCap:"butt"
    });
    $('.chart2').easyPieChart({
        //your options goes here
        barColor:'#ffffff',
        scaleColor:false,
        trackColor:'#6D6D6D',
        lineWidth:20,
        size:250,
        animate:2000,
        lineCap:"butt"
    });

}




/* -------------------skill circle------------------------- */

let codingbtn = document.querySelector('.codebtn');
let desingbtn = document.querySelector('.designbtn');
let coding = document.querySelector('.coding');
let desing = document.querySelector('.desing');

codingbtn.addEventListener("click",function(){
    desing.style.display="none"
    coding.style.display="block"
    codingbtn.classList.add('style');
    desingbtn.classList.remove('style');
});

desingbtn.addEventListener("click",function(){
    desing.style.display="block"
    coding.style.display="none"
    desingbtn.classList.add('style');
    codingbtn.classList.remove('style');
});


/*----------------------airplan---------------------------*/

let airplane=document.querySelector('.airplane');
let airplaneScrollTimeline=document.querySelector('.airplane-scroll-timeline');


airplane.animate([
    {offsetDistance:"0%"},
    {offsetDistance:"100%"}
],{
    fill: 'both',
    timeline: new ScrollTimeline({
        scrollOffsets: [
           {target:airplaneScrollTimeline,edge:"start",threshold:1},
           {target:airplaneScrollTimeline,edge:"end",threshold:1}
        ]
    })
})

/* 비행기 위 아래 방향전환 */

let preScollY=0;

window.addEventListener('scroll',function(){
    if(pageYOffset >=preScollY){
        airplane.classList.remove('up','down')
        airplane.classList.add('up')
    }else{
        airplane.classList.remove('up','down')
        airplane.classList.add('down') 
    }
    preScollY=pageYOffset;
})


/* hobby 이미지 */
type="text/javascript">
	VanillaTilt.init(document.querySelectorAll(".tiltEle"), {
		max: 15,
		speed: 200
	});


/* text ani */

let pTag1=document.querySelector(".first_parallel");
        let pTag2=document.querySelector(".second_parallel");
        let pTag3=document.querySelector(".third_parallel");
        let pTag4=document.querySelector(".fourth_parallel");

        let textArr1='Web_Publisher & Web_Designer Web_Publisher & Web_Designer'.split(' '); //띄워쓰기를 기준으로 잘라서 배열로 만든다.
        let textArr2='HTML CSS JavaScript HTML CSS JavaScript HTML CSS JavaScript'.split(' ');
        let textArr3='PhotoShop Illustrator Figma PhotoShop Illustrator Figma'.split(' ');
        let textArr4='React php Bootstrap React php Bootstrap React php Bootstrap'.split(' ');
        //console.log(textArr2)

        //let arr=[];
        //arr.push(...textArr1)
        //console.log(arr)

        let count1 = 0;
        let count2 = 0;
        let count3 = 0;
        let count4 = 0;

        initTexts(pTag1,textArr1)
        initTexts(pTag2,textArr2)
        initTexts(pTag3,textArr3)
        initTexts(pTag4,textArr4)

        function initTexts(element, textArr){
            textArr.push(...textArr) //8개의 배열에 동일한 배열을 복사하여 배열뒤에 넣음//16개
            //\u00A0 --> javascript에서의 공백을 나타냄
            //console.log(textArr)
            for(let i=0; i<textArr.length ; i++){
                element.innerHTML += `${textArr[i]}\u00A0\u00A0\u00A0`;
            }
        }
        //-----------------------------------------//글자입력

        function animate(){
        count1++;
        count2++;
        count3++;
        count4++;
           
        count1 = marqueeText(count1,pTag1,-1)
        count2 = marqueeText(count2,pTag2,1)
        count3 = marqueeText(count3,pTag3,-1)
        count4 = marqueeText(count4,pTag4,1)

       window.requestAnimationFrame(animate) 
      }

      function marqueeText(count, element, direction){

        if(count>element.scrollWidth /2){
            count=0;
            element.style.transform=`translate(0,0)`;
        }

        element.style.transform=`translate(${count * direction}px,0)`
        return  count;
      }
      function scrollHandler(){
        count1 += 25;
        count2 += 25;
        count3 += 25;
        count4 += 25;
      }

      animate();
      window.addEventListener("scroll",scrollHandler)

      

// website btn
const button = document.getElementById('btn');
let sitebtn = document.querySelector('.sitebtn');

function toggleClass() {
  if (button.classList.contains('active')) {
    button.classList.remove('active');
    sitebtn.classList.remove('on');
  } else {
    button.classList.add('active');
    sitebtn.classList.add('on');
  }
}

button.addEventListener('click', toggleClass);

/* 반응형o///////////////////////////////////// */
let btnresponsive = document.querySelector(".responbtn");
let btnmegabox = document.querySelector(".megabtn");
let btnmusign = document.querySelector(".musbtn");
let btnshshi = document.querySelector(".shbtn");

/* 반응형x///////////////////////////////////// */
let btncider = document.querySelector(".ciderbtn");
let btnhana = document.querySelector(".hanabtn");
let btnnaver = document.querySelector(".naverbtn");
let btnapple = document.querySelector(".applebtn");
let btnhm = document.querySelector(".hmbtn");


/* 반응형o///////////////////////////////////// */
let responsive = document.querySelector(".responsivesite");
let megabox = document.querySelector(".megaboxsite");
let musign = document.querySelector(".musignsite");
let shshi = document.querySelector(".shshisite");

/* 반응형x///////////////////////////////////// */
let cider = document.querySelector(".cidersite");
let hana = document.querySelector(".hanacardsite");
let naver = document.querySelector(".naversite");
let apple = document.querySelector(".applesite");
let hm = document.querySelector(".hmsite");


function toggleMenuClass(menu, target) {

/* 반응형o///////////////////////////////////// */
  responsive.classList.toggle('show', target === 'responsive');
  megabox.classList.toggle('show', target === 'megabox');
  musign.classList.toggle('show', target === 'musign');
  shshi.classList.toggle('show', target === 'shshi');

/* 반응형x///////////////////////////////////// */
  cider.classList.toggle('show', target === 'cider');
  hana.classList.toggle('show', target === 'hana');
  naver.classList.toggle('show', target === 'naver');
  apple.classList.toggle('show', target === 'apple');
  hm.classList.toggle('show', target === 'hm');
}
/* 반응형o---------------------------------- */
btnresponsive.addEventListener('click', function() {
    toggleMenuClass(responsive, 'responsive');
    // responsive.style.transition = 'dackground: 0s'
    window.scrollTo({
        top: 11500
    });
});

btnmegabox.addEventListener('click', function() {
    toggleMenuClass(megabox, 'megabox');
    window.scrollTo({
        top: 11500
    });

});

btnmusign.addEventListener('click', function() {
    toggleMenuClass(musign, 'musign');
    window.scrollTo({
        top: 11500
    });
});

btnshshi.addEventListener('click', function() {
    toggleMenuClass(shshi, 'shshi');
    window.scrollTo({
        top: 11500
    });
});

/* 반응형x-------------------------------- */
btncider.addEventListener('click', function() {
    toggleMenuClass(cider, 'cider');
    window.scrollTo({
        top: 16000
    });
});

btnhana.addEventListener('click', function() {
    toggleMenuClass(hana, 'hana');
    window.scrollTo({
        top: 16000
    });
});

btnnaver.addEventListener('click', function() {
    toggleMenuClass(naver, 'naver');
    window.scrollTo({
        top: 16000
    });
});

btnapple.addEventListener('click', function() {
    toggleMenuClass(apple, 'apple');
    window.scrollTo({
        top: 16000
    });
});

btnhm.addEventListener('click', function() {
    toggleMenuClass(hm, 'hm');
    window.scrollTo({
        top: 16000
    });
}); 

/* 각메뉴 */

$('.memo .tab').click(function(e){
    e.preventDefault();
})
$('.memo .mobile').click(function(e){
    e.preventDefault();
})
$('.contactbtn').click(function(e){
    e.preventDefault();
})


let contactbtn2 = document.querySelector('.table .contactbtn');

contactbtn2.addEventListener("click",function(){
    window.scrollTo({
        top: 18500
    });
});


// 시계
setInterval(function(){
    let today=new Date();

    let dayList=['일요일','월요일','화요일','수요일','목요일','금요일','토요일',]
    let dayListEn=['sunday','monday','tuesday','wednesday','thursday','friday','saturday',]

    console.log(dayList[2])

    let hh=addZero(today.getHours()); //시
    let mm=addZero(today.getMinutes()); //분
    let ss=addZero(today.getSeconds()); //초
    let YY=today.getFullYear();
    let MM=today.getMonth() + 1;
    let DD=today.getDate();
    let dd=dayListEn[today.getDay()]/* .toUpperCase - 대문자 */;


    document.querySelector("#hours").innerHTML=hh;
    document.querySelector("#min").innerHTML=mm;
    document.querySelector("#sec").innerHTML=ss;
    document.querySelector("#year").innerHTML=YY;
    document.querySelector("#month").innerHTML=MM;
    document.querySelector("#date").innerHTML=DD;
    document.querySelector("#day").innerHTML=dd;

    console.log(ss)
    function addZero(num){
        return(num<10?"0"+num:''+num)
    }

},1000)