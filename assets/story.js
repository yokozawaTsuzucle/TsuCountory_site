//画面リサイズ処理時の自動リロード
if (window.matchMedia('(min-width: 769px)').matches) {
  var device = 0 //0：pc 1：sp 
}
else{
  var device = 1 //0：pc 1：sp  
}
window.addEventListener('resize',function(e){
  if (window.matchMedia('(min-width: 769px)').matches) {
    if(device == 1){
      setTimeout(() => {
        location.reload();
      }, 1000);
    }
  }
  else{
    if(device == 0){
      setTimeout(() => {
        location.reload();
      }, 1000);
    }
  }
})


//locomotiveScroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  multiplier:.5,
  touchMultiplier:3,
  smartphone: {
    smooth: false,
  },
  tablet: {
    smooth: false,
  },
  firefoxMultiplier:90,
  // reloadOnContextChange:true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.refresh();
ScrollTrigger.scrollerProxy(".site__main__contents", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },

  pinType: document.querySelector(".site__main__contents").style.transform
    ? "transform"
    : "fixed",
});


// スクロールに合わせて画像を表示させる
gsap.registerPlugin(ScrollTrigger);

//固定してテキストと画像がスクロールに合わせて入れ替わっていく

if (window.matchMedia('(min-width: 769px)').matches) {
  const BgImagList01 = document.getElementById('top-bg__images__list1');
  const BgImagList02 = document.getElementById('top-bg__images__list2');
  const BgImagList03 = document.getElementById('top-bg__images__list3');

  ScrollTrigger.create({
    trigger: '#top-bg__item__01',
    start: 'top 51%',
    endTrigger:'#top-bg__item__02',
    end:'bottom center',
    scroller: ".site__main__contents",
    toggleClass:{
      targets: BgImagList01,
      className: 'js-active',
    }
  })
  ScrollTrigger.create({
    trigger: '#top-bg__item__03',
    start: 'top 51%',
    end:'bottom center',
    scroller: ".site__main__contents",
    toggleClass:{
      targets: BgImagList02,
      className: 'js-active',
    }
  })
  ScrollTrigger.create({
    trigger: '#top-bg__item__04',
    start: 'top 51%',
    scroller: ".site__main__contents",
    toggleClass:{
      targets: BgImagList03,
      className: 'js-active',
    }
  })
}else{
  const BgImagSpList01 = document.getElementById('top-bg__images__list1--sp');
  const BgImagSpList02 = document.getElementById('top-bg__images__list2--sp');
  const BgImagSpList03 = document.getElementById('top-bg__images__list3--sp');

  ScrollTrigger.create({
    trigger: '#top-bg__item__01',
    start: 'top 51%',
    endTrigger:'#top-bg__item__02',
    end:'bottom center',
    toggleClass:{
      targets: BgImagSpList01,
      className: 'js-active',
    }
  })
  ScrollTrigger.create({
    trigger: '#top-bg__item__03',
    start: 'top 51%',
    end:'bottom center',
    toggleClass:{
      targets: BgImagSpList02,
      className: 'js-active',
    }
  })
  ScrollTrigger.create({
    trigger: '#top-bg__item__04',
    start: 'top 51%',
    toggleClass:{
      targets: BgImagSpList03,
      className: 'js-active',
    }
  })
}

//スクロールに合わせて縦に線が伸びていく
const scrollBar = document.querySelectorAll('.top-scroll-bar');
var windowHeight = window.innerHeight;
if (window.matchMedia('(min-width: 769px)').matches) {
  var lineLength = document.querySelector('#top-bg__item__02').clientHeight + document.querySelector('#top-bg__item__03').clientHeight/2.6;
  gsap.fromTo(
    scrollBar, {
      height: '0vh',
    },
    {
      height: lineLength,
      scrollTrigger: {
        trigger: '.top-story',
        start: 'top 40%',
        endTrigger:'.line-stopper',
        end:'bottom center',
        scrub: 1,
        scroller: ".site__main__contents",
        ease:'none',
      }
    }
  )
}else{
  var lineLength = document.querySelector('#top-bg__item__02').clientHeight + document.querySelector('#top-bg__item__03').clientHeight/1.8;
  gsap.fromTo(
    scrollBar, {
      height: '0vh',
    },
    {
      height: lineLength,
      scrollTrigger: {
        trigger: '#top-bg__item__02 .top-bg-heading-lv2',
        start: 'top 30%',
        endTrigger:'.line-stopper',
        end:'bottom center',
        scrub: 1,
        ease:'none',
      }
    }
  )
}

/* top-info */
const conceptTL = gsap.timeline();
if (window.matchMedia('(min-width: 769px)').matches) {
  conceptTL
  .from('.top-info__concept .partition',{height:0,duration:1.7,ease:'power1.out'})
  .from('.top-info__concept h2',{scale:1.1,autoAlpha:0,duration:1.4,ease:'power1.out'},'<+.1')
  .from('.top-info__concept h3',{scale:1.1,autoAlpha:0,duration:1.4,ease:'power1.out'},'<+.1')
  .from('.top-info__concept p ',{scale:1.1,autoAlpha:0,duration:1.4,ease:'power1.out'},'<+.1')
}else{
  conceptTL
  .from('.top-info__concept .partition',{width:0,duration:1.7,ease:'power1.out'},'<')
  .from('.top-info__concept h2',{scale:1.1,autoAlpha:0,duration:1.4,ease:'power1.out'},'<+.1')
  .from('.top-info__concept h3',{scale:1.1,autoAlpha:0,duration:1.4,ease:'power1.out'},'<+.1')
  .from('.top-info__concept p ',{scale:1.1,autoAlpha:0,duration:1.4,ease:'power1.out'},'<+.1')
}

ScrollTrigger.create({
  trigger:'.top-info',
  start:'top 70%',
  animation:conceptTL,
  scroller: ".site__main__contents",
})

const locationTL = gsap.timeline();
if (window.matchMedia('(min-width: 769px)').matches) {
  locationTL
  .from('.top-info__location .partition',{height:0,duration:1.7,ease:'power1.out'})
  .from('.top-info__location h2',{scale:1.1,autoAlpha:0,duration:1.4,ease:'power1.out'},'<+.1')
  .from('.top-info__location h3',{scale:1.1,autoAlpha:0,duration:1.4,ease:'power1.out'},'<+.1')
  .from('.top-info__location p ',{scale:1.1,autoAlpha:0,duration:1.4,ease:'power1.out'},'<+.1')
}else{
  locationTL
  .from('.top-info__location .partition',{width:0,duration:1.7,ease:'power1.out'},'<')
  .from('.top-info__location h2',{scale:1.1,autoAlpha:0,duration:1.4,ease:'power1.out'},'<+.1')
  .from('.top-info__location h3',{scale:1.1,autoAlpha:0,duration:1.4,ease:'power1.out'},'<+.1')
  .from('.top-info__location p ',{scale:1.1,autoAlpha:0,duration:1.4,ease:'power1.out'},'<+.1')
}

ScrollTrigger.create({
  trigger:'.top-info__location',
  start:'top 70%',
  animation:locationTL,
  scroller: ".site__main__contents",
})

const environmentTL = gsap.timeline();
if (window.matchMedia('(min-width: 769px)').matches) {
  environmentTL
  .from('.top-info__environment .partition',{height:0,duration:1.6,ease:'power1.out'})
  .from('.top-info__environment h2',{scale:1.1,autoAlpha:0,duration:1.4,ease:'power1.out'},'<+.1')
  .from('.top-info__environment h3',{scale:1.1,autoAlpha:0,duration:1.4,ease:'power1.out'},'<+.1')
}else{
  environmentTL
  .from('.top-info__environment .partition',{width:0,duration:1.6,ease:'power1.out'},'<')
  .from('.top-info__environment h2',{scale:1.1,autoAlpha:0,duration:1.4,ease:'power1.out'},'<+.1')
  .from('.top-info__environment h3',{scale:1.1,autoAlpha:0,duration:1.4,ease:'power1.out'},'<+.1')
}

ScrollTrigger.create({
  trigger:'.top-info__environment',
  start:'top 70%',
  animation:environmentTL,
  scroller: ".site__main__contents",
})

/* tab*/
var tabBtns = document.querySelectorAll('.js-tab-trigger');

if (window.matchMedia('(min-width: 769px)').matches) {
  flag=0;
  var arraypanels = document.querySelectorAll('.js-tab-target');
  if(flag==0){
    gsap.set(arraypanels[0],{autoAlpha:1,display:'flex'})
    flag=1
  }
  function tabSwitch(){
    document.addEventListener('click', handle, { passive: false });
    
    document.getElementsByClassName('is-active')[0].classList.remove('is-active');
    this.classList.add('is-active');
    var arrayTabs = Array.prototype.slice.call(tabBtns);
    var index = arrayTabs.indexOf(this);
    var tabContent = document.getElementsByClassName('js-tab-target')[index]
    
    arraypanels.forEach(tab => {
      gsap.set(tab, {autoAlpha:0,display:'none'})
    });
  
    /*連続クリック阻止*/
    for (let i = 0; i < tabBtns.length; i++) {
      tabBtns[i].style.pointerEvents = 'none'
    }
    setTimeout(() => {
      for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].style.pointerEvents = 'auto'
      }
    }, 500);
  
    var tl = gsap.timeline();
    tl
    .fromTo(tabContent,{autoAlpha:0},{autoAlpha:1,display:'flex',ease:'power2.in'})
  }

}

for(let i = 0; i < tabBtns.length; i++) {
  tabBtns[i].addEventListener('click', tabSwitch, false);
}


function handle(event) {
  event.preventDefault();
}