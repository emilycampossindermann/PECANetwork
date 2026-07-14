(function(){
function initNetworkHero(canvasId){
  const canvas = document.getElementById(canvasId);
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const colors = ['#3b5cf5','#8b85e8','#4fceac','#ff9d68','#4fc1d9'];
  let w, h, dpr;
  let nodes = [];
  const COUNT = 46;
  function resize(){
    dpr = Math.min(window.devicePixelRatio||1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w*dpr; canvas.height = h*dpr;
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  function seed(){
    nodes = [];
    for(let i=0;i<COUNT;i++){
      nodes.push({
        x: Math.random()*w,
        y: Math.random()*h,
        vx: (Math.random()-0.5)*0.12,
        vy: (Math.random()-0.5)*0.12,
        r: Math.random()*1.6+1.4,
        c: colors[i%colors.length],
      });
    }
  }
  function draw(){
    ctx.clearRect(0,0,w,h);
    for(let i=0;i<nodes.length;i++){
      for(let j=i+1;j<nodes.length;j++){
        const a=nodes[i], b=nodes[j];
        const dx=a.x-b.x, dy=a.y-b.y;
        const dist = Math.sqrt(dx*dx+dy*dy);
        const maxDist = 190;
        if(dist<maxDist){
          const op = (1-dist/maxDist)*0.16;
          ctx.strokeStyle = `rgba(10,14,30,${op})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y);
          ctx.stroke();
        }
      }
    }
    for(const n of nodes){
      ctx.beginPath();
      ctx.fillStyle = n.c;
      ctx.globalAlpha = 0.55;
      ctx.arc(n.x,n.y,n.r,0,Math.PI*2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }
  function step(){
    for(const n of nodes){
      n.x += n.vx; n.y += n.vy;
      if(n.x<0||n.x>w) n.vx*=-1;
      if(n.y<0||n.y>h) n.vy*=-1;
    }
    draw();
    requestAnimationFrame(step);
  }
  window.addEventListener('resize', ()=>{ resize(); seed(); draw(); });
  resize(); seed();
  draw();
  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    requestAnimationFrame(step);
  }
}
window.initNetworkHero = initNetworkHero;
})();
