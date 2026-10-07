const $=s=>document.querySelector(s);
function show(id){document.querySelectorAll('.screen').forEach(e=>e.classList.toggle('on',e.id===id));window.scrollTo(0,0)}
const bg=$('#bg');let playing=false;
function startMusic(){try{const p=bg.play();if(p)p.catch(()=>{});playing=true}catch(e){}}
function stopMusic(){bg.pause();playing=false}
$('#go1').onclick=()=>{startMusic();$('#mu').hidden=false;show('s2')};
$('#go2').onclick=()=>show('s3');
$('#mu').onclick=e=>{
  if(playing){stopMusic();e.currentTarget.classList.add('off');e.currentTarget.setAttribute('aria-label','تشغيل الموسيقى')}
  else{startMusic();e.currentTarget.classList.remove('off');e.currentTarget.setAttribute('aria-label','إيقاف الموسيقى')}
};
