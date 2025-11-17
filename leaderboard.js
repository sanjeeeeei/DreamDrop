
fetch('donors.json').then(r=>r.json()).then(data=>{
  data.sort((a,b)=>b.amount - a.amount);
  var list=document.getElementById('leaders');
  if(!list) return;
  data.forEach(function(item,idx){ var div=document.createElement('div'); div.className='leader'; div.innerHTML='<div class="num">'+(idx+1)+'</div><div class="info"><strong>'+item.name+'</strong><div>₹'+item.amount+'</div></div>'; list.appendChild(div); });
});
fetch('donors.json')
  .then(response => response.json())
  .then(data => {
    // Sort highest to lowest
    data.sort((a, b) => b.amount - a.amount);

    const list = document.getElementById('donorList');

    data.forEach((donor, index) => {
      const row = document.createElement('div');
      row.className = 'donor-row';

      row.innerHTML = `
        <span class="rank">${index + 1}</span>
        <span class="name">${donor.name}</span>
        <span class="amount">₹${donor.amount}</span>
      `;

      list.appendChild(row);
    });
  })
  .catch(error => console.error('Error loading donors.json:', error));
