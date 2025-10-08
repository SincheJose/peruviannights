// Year stamp
document.getElementById('year').textContent = new Date().getFullYear();

// Sparkle particles over hero
const c = document.getElementById('sparkles');
const ctx = c.getContext('2d');
function size(){c.width = c.clientWidth; c.height = c.clientHeight}
window.addEventListener('resize', size); size();
const P = Array.from({length: 90}).map(()=>({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*1.8+.4,v:(Math.random()*.3+.05)}));
function draw(){
  ctx.clearRect(0,0,c.width,c.height);
  for (const p of P){
    ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle='rgba(255,255,255,.9)'; ctx.fill();
    p.y += p.v; if (p.y > c.height) { p.y = -2; p.x = Math.random()*c.width; }
  }
  requestAnimationFrame(draw);
}
draw();
