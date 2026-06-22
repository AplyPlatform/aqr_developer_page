document.getElementById('yr').textContent = new Date().getFullYear();

// Code tabs
document.querySelectorAll('.code-tabs').forEach(function(nav) {
  nav.querySelectorAll('.code-tab').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var target = btn.dataset.pane;
      nav.querySelectorAll('.code-tab').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var wrap = nav.closest('.code-wrap');
      wrap.querySelectorAll('.code-pane').forEach(function(p) { p.classList.remove('active'); });
      document.getElementById(target).classList.add('active');
    });
  });
});

// Sidebar highlight on scroll
var anchors = ['intro', 'token', 'account-section', 'create', 'delete', 'errors'];
var navLinks = document.querySelectorAll('.sidebar-nav a');
window.addEventListener('scroll', function() {
  var scrollY = window.scrollY + 80;
  var current = anchors[0];
  anchors.forEach(function(id) {
    var el = document.getElementById(id);
    if (el && el.offsetTop <= scrollY) current = id;
  });
  navLinks.forEach(function(a) {
    var href = a.getAttribute('href').replace('#', '');
    a.classList.toggle('active', href === current);
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(function(a) {
  a.addEventListener('click', function(e) {
    var target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 72, behavior: 'smooth' });
    }
  });
});
