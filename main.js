
document.addEventListener('DOMContentLoaded', function(){
  window.openLightbox = function(src){ var lb=document.getElementById('lightbox'), img=document.getElementById('lbimg'); img.src=src; lb.style.display='flex'; document.body.style.overflow='hidden'; };
  window.closeLightbox = function(){ var lb=document.getElementById('lightbox'); lb.style.display='none'; document.body.style.overflow=''; };
  window.copyUPI = function(upi){ if(navigator.clipboard) navigator.clipboard.writeText(upi).then(function(){ alert('UPI copied to clipboard'); }).catch(function(){ prompt('Copy UPI', upi); }); };
  window.orderCombo = function(){ var t=encodeURIComponent("Hi! I want to order the \u20b9299 Piggy Bank + DreamDrop T-shirt."); window.open("https://wa.me/918838535558?text="+t, "_blank"); };
  window.submitSavings = function(){ var msg=encodeURIComponent("Hi DreamDrop!\nI want to submit my Piggy Bank savings.\nName:\nAmount saved:\nScreenshot attached:\nMonth:"); window.open("https://wa.me/918838535558?text="+msg, "_blank"); };
});
// Reveal gallery images on scroll
document.addEventListener("DOMContentLoaded", () => {
  const imgs = document.querySelectorAll(".gallery img");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  imgs.forEach(img => observer.observe(img));
});
