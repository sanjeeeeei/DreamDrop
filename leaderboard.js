
fetch('donors.json').then(r=>r.json()).then(data=>{
  data.sort((a,b)=>b.amount - a.amount);
  var list=document.getElementById('leaders');
  if(!list) return;
  data.forEach(function(item,idx){ var div=document.createElement('div'); div.className='leader'; div.innerHTML='<div class="num">'+(idx+1)+'</div><div class="info"><strong>'+item.name+'</strong><div>₹'+item.amount+'</div></div>'; list.appendChild(div); });
});
fetch('donors.json')
  .then(r => r.json())
  .then(data => {
    // Sort highest → lowest
    data.sort((a, b) => b.amount - a.amount);

    const list = document.getElementById('leaders');
    if (!list) return;

    list.innerHTML = ""; // reset

    data.forEach((item, index) => {
      const div = document.createElement("div");
      div.className = "leader";
      div.style.padding = "10px 0";
      div.style.borderBottom = "1px solid #ddd";

      div.innerHTML = `
        <strong>${index + 1}. ${item.name}</strong> – ₹${item.amount}
      `;

      list.appendChild(div);
    });
  });
