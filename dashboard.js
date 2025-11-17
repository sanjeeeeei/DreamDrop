
fetch('data.json').then(r=>r.json()).then(data=>{
  var ctx=document.getElementById('chart')?.getContext('2d');
  if(!ctx) return;
  new Chart(ctx,{ type:'line', data:{ labels:data.months, datasets:[{label:'Meals Donated', data:data.meals, borderColor:'#5A8DEE', fill:false, tension:0.25}] }, options:{responsive:true, plugins:{legend:{display:false}}} });
});
