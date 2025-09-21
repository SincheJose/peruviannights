// Tiny starfield for the hero section; no frameworks.
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
function resize(){canvas.width = canvas.clientWidth; canvas.height = canvas.clientHeight;}
window.addEventListener('resize', resize); resize();

const stars = Array.from({length: 120}).map(()=>({
  x: Math.random()*canvas.width,
  y: Math.random()*canvas.height,
  r: Math.random()*1.6+0.3,
  v: Math.random()*0.3+0.1
}));

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for(const s of stars){
    ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
    ctx.fillStyle = 'white'; ctx.globalAlpha = 0.8; ctx.fill();
    s.y += s.v; if (s.y > canvas.height) s.y = -2;
  }
  requestAnimationFrame(draw);
}
draw();
