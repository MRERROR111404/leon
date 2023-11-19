window.addEventListener("blur", () => {

    document.title = "Come Back";
})

window.addEventListener("focus", () => {
    document.title = "MRERROR";
})




// ابدأ بالتأكد من أن الصفحة قد تم تحميلها بالكامل
window.addEventListener('load', function() {

    // احصل على زر التمرير
    var scrollBtn = document.getElementById('scroll-btn');
  
    // عند التمرير في الصفحة، قم بإظهار زر التمرير
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 100) { // يمكنك تغيير الرقم 100 بما يناسبك
        scrollBtn.style.display = 'block';
      } else {
        scrollBtn.style.display = 'none';
      }
    });
  
    // عند النقر فوق زر التمرير، تمرير الصفحة إلى الأعلى
    scrollBtn.addEventListener('click', function() {
      window.scrollTo(0, 0);
    });
  
  });

  


  

function myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
  }
  
  
  
  
  
  
  const bodyEl =document.body;
  const barEl =document.querySelector('.bar');
  const updateBar = () => {
    let scrollPos =(window.scrollY / 
    (bodyEl.scrollHeight - window.innerHeight))*100;
    barEl.style.width=`${scrollPos}%`;
    requestAnimationFrame(updateBar);
  };
  updateBar();
  