
(function(){
  var menu = document.getElementById('menuPanel');
  var overlay = document.getElementById('menuOverlay');
  if(!menu){
    menu = document.createElement('div'); menu.id='menuPanel'; menu.className='menu-panel';
    menu.innerHTML = '<a class="btn" href="index.html">Home</a><br><br><a class="btn" href="donate.html">Donate</a><br><br><a class="btn" href="volunteer.html">Volunteer</a><br><br><a class="btn" href="gallery.html">Gallery</a><br><br><a class="btn" href="leaderboard.html">Leaderboard</a><br><br><a class="btn" href="piggybank.html">Piggy Bank</a><br><br><a class="btn" href="about.html">About</a>';
    document.body.appendChild(menu);
  }
  if(!overlay){ overlay = document.createElement('div'); overlay.id='menuOverlay'; document.body.appendChild(overlay); }

  window.openMenu = function(){ menu.classList.add('open'); overlay.style.display='block'; document.documentElement.style.overflow='hidden'; document.body.style.overflow='hidden'; };
  window.closeMenu = function(){ menu.classList.remove('open'); overlay.style.display='none'; document.documentElement.style.overflow=''; document.body.style.overflow=''; };
  window.toggleMenu = function(){ if(menu.classList.contains('open')) closeMenu(); else openMenu(); };

  overlay.addEventListener('click', closeMenu);
  var startX=0;
  menu.addEventListener('touchstart', function(e){ startX=e.touches[0].clientX; }, {passive:true});
  menu.addEventListener('touchmove', function(e){ var curX=e.touches[0].clientX; if(startX - curX > 60) closeMenu(); }, {passive:true});
  document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeMenu(); });
})();
