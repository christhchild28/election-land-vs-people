/* Briefing: lives in a shadow root so its styles cannot touch the map page. General layer only. */
(function () {
  /* ?map (from the Māori page's General tab): land on the map, not the briefing */
  /* Switching layers must not carry the old scroll position over (Safari kept the General page's offset and opened the Māori page at its foot). */
  try { history.scrollRestoration = 'manual'; } catch (e) {}
  if (!/[?&]map\b/.test(location.search)) { var top0 = function () { window.scrollTo(0, 0); }; top0(); setTimeout(top0, 0); window.addEventListener('load', top0); window.addEventListener('pageshow', top0); }
  if (/[?&]map\b/.test(location.search) && META.layer === 'general') { var goMap = function () { var m = document.getElementById('mapstart'); if (m) m.scrollIntoView(); }; setTimeout(goMap, 0); window.addEventListener('load', goMap); }
  var host = document.getElementById('intro-host'), tpl = document.getElementById('intro-tpl');
  if (host && META.layer === 'maori') { var ln = document.getElementById('layernav'); if (ln) { var bp = document.createElement('p'); bp.style.cssText = 'margin:-4px 0 14px;font:500 14px var(--f-body)'; bp.innerHTML = '<a href="../#intro-host" style="color:var(--ink);text-underline-offset:3px;display:inline-block;padding:10px 0">New to NZ politics? Read the briefing \u2191</a>'; ln.insertAdjacentElement('afterend', bp); } }
  if (!host || !tpl || META.layer !== 'general') { if (host) host.remove(); return; }
  var R = host.attachShadow({ mode: 'open' }); R.appendChild(tpl.content.cloneNode(true)); host.style.display = 'block';
  var sk = R.getElementById('skip'); if (sk) sk.addEventListener('click', function (e) { e.preventDefault(); var m = document.getElementById('mapstart'); if (m) m.scrollIntoView({ behavior: 'smooth' }); });

(function(){
var rail=R.getElementById('rail'),cards=[].slice.call(rail.children),dots=R.getElementById('dots'),pv=R.getElementById('pv'),nx=R.getElementById('nx'),cur=0;
cards.forEach(function(c,i){var b=document.createElement('button');b.className='dot';b.setAttribute('aria-label','Card '+(i+1));b.onclick=function(){go(i)};dots.appendChild(b)});
function go(i){i=Math.max(0,Math.min(cards.length-1,i));var c=cards[i];rail.scrollTo({left:c.offsetLeft-(rail.clientWidth-c.offsetWidth)/2,behavior:'smooth'})}
function upd(){var m=rail.scrollLeft+rail.clientWidth/2,b=0,d=1e9;cards.forEach(function(c,i){var x=Math.abs(c.offsetLeft+c.offsetWidth/2-m);if(x<d){d=x;b=i}});cur=b;[].forEach.call(dots.children,function(e,i){e.setAttribute('aria-current',i===b)});pv.disabled=b===0;nx.disabled=b===cards.length-1}
rail.addEventListener('scroll',function(){clearTimeout(rail._t);rail._t=setTimeout(upd,40)},{passive:true});
pv.onclick=function(){go(cur-1)};nx.onclick=function(){go(cur+1)};
rail.addEventListener('keydown',function(e){if(e.key==='ArrowRight'){e.preventDefault();go(cur+1)}if(e.key==='ArrowLeft'){e.preventDefault();go(cur-1)}});
upd();
var hw=R.getElementById('hw'),seats=[].slice.call(hw.querySelectorAll('.s')),cn=R.getElementById('cn'),cl=R.getElementById('cl'),lgs=[].slice.call(R.querySelectorAll('.lg')),sel=-1;
lgs.forEach(function(b,i){b.setAttribute('aria-pressed','false');b.onclick=function(){sel=sel===i?-1:i;lgs.forEach(function(x,j){x.setAttribute('aria-pressed',j===sel)});hw.classList.toggle('f',sel>-1);var n=0;seats.forEach(function(s){var on=+s.dataset.p===sel;s.classList.toggle('on',on);if(on)n++});if(sel>-1){cn.textContent=n;cl.textContent=b.textContent.replace(/\s*\d+$/,'')+' seats'}else{cn.textContent=131;cl.textContent='seats'}}});
})();

})();
