// toggleMenu.js

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('menu-toggle-btn');
    const navMenu = document.getElementById('nav-menu');
  
    function isMobile() {
      return window.innerWidth < 768;
    }
  
    toggleButton.addEventListener('click', () => {
      if (!isMobile()) return; // لا تفعل شيئًا في الشاشات الكبيرة
  
      if (navMenu.classList.contains('hide-nav-menu')) {
        navMenu.classList.remove('hide-nav-menu');
        navMenu.classList.add('show-nav-menu');
      } else {
        navMenu.classList.remove('show-nav-menu');
        navMenu.classList.add('hide-nav-menu');
      }
    });
  
    // لإعادة ضبط الكلاسات عند التبديل بين الشاشات
    window.addEventListener('resize', () => {
      if (!isMobile()) {
        navMenu.classList.remove('hide-nav-menu', 'show-nav-menu');
      } else {
        navMenu.classList.add('hide-nav-menu');
      }
    });
  });
  
  // dark Mod
  const themeToggleBtns = document.querySelectorAll('.toggle-btn');

  const theme = localStorage.getItem('theme');

  theme && document.documentElement.classList.add(theme);
  //function to add && remove (toggle) dark class
  const handleThemeToggle = ()=>{
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
      localStorage.setItem('theme','dark')
    }else{
      localStorage.removeItem('theme')
    }
  }

  themeToggleBtns.forEach(btn=>{
    btn.addEventListener('click',handleThemeToggle);
  })

  document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop-80,
          behavior: 'smooth'
        });
      }
    });
  });

