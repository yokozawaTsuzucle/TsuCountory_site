/**
 * ScreenLook
 */
 function screenLock(){
  var element = document.createElement('div');
  element.id = "screenLock";
 
  element.style.height = '100%';
  element.style.left = '0px';
  element.style.position = 'fixed';
  element.style.top = '0px';
  element.style.width = '100%';
  element.style.zIndex = '9999';
  element.style.opacity = '0';
  element.style.backgroundColor = '#000';
  element.style.touchAction = 'none';
 
  var objBody = document.getElementsByTagName("body").item(0);
  objBody.appendChild(element);
}
 
/**
 * ScreenUnLook
 */
function screenUnLock(){
  var screenLock = document.getElementById("screenLock");
  screenLock.parentNode.removeChild(screenLock);
}

document.addEventListener("DOMContentLoaded",function(e){

  screenLock();//オープニングアニメーション中はスクリーンロック
  
  const veil = document.querySelectorAll('.veil');
  const topLogo = document.getElementById('top-logo-wrapper');
  const openingTitle = document.getElementById('opening-title');
  const aniEnd = document.getElementById('opening-ani-end');
  const openingPartition = document.getElementById('opening-partition');
  var tl = gsap.timeline();
  tl
  .delay(.8)
  .to(veil,{display:'none',autoAlpha:0,duration:1,ease:'power1.out'})
  .from(topLogo,{scale:1.2,autoAlpha:0,duration:1.4,ease:'power1.out'})
  .from(topLogo,{y:'80%',duration:1.4,ease:'power1.inOut'},'+=1')
  .from(openingTitle,{y:'50vh',duration:1.6,ease:'power1.inOut'},'<')
  .from(openingPartition,{autoAlpha:0,duration:1.6,ease:'power1.out'},'>')
  .add(function(){openingPartition.classList.add('is-active-first')},'-=1.2')
  .from(aniEnd,{autoAlpha:0,duration:1.6,ease:'power1.out'},'>+1.25')
  .add(function(){openingPartition.classList.remove('is-active-first')},'>')
  .add(function(){openingPartition.classList.add('is-active-second')},'>')
  .add(function(){openingPartition.classList.remove('is-active-second')},'>+1.25')
  .add(function(){openingPartition.classList.add('is-scroll')},'>')
  .add(function(){screenUnLock();},'>')//スクリーンロック解除
});