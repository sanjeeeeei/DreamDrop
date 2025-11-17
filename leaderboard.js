
fetch('donors.json').then(r=>r.json()).then(data=>{
  data.sort((a,b)=>b.amount - a.amount);
  var list=document.getElementById('leaders');
  if(!list) return;
  data.forEach(function(item,idx){ var div=document.createElement('div'); div.className='leader'; div.innerHTML='<div class="num">'+(idx+1)+'</div><div class="info"><strong>'+item.name+'</strong><div>₹'+item.amount+'</div></div>'; list.appendChild(div); });
});
