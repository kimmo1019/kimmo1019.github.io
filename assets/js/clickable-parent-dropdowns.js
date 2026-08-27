// Hugo Blox hardcodes dropdown parents to href="#". Infer the section URL
// from the first child (e.g. /research/foo/ → /research/) and navigate on click.
// Hover still opens the menu via the theme's existing mouseenter handler.
(function () {
  function sectionURL(href) {
    try {
      var path = new URL(href, window.location.origin).pathname;
      var segment = path.split('/').filter(Boolean)[0];
      return segment ? '/' + segment + '/' : '';
    } catch (err) {
      return '';
    }
  }

  function enable() {
    document.querySelectorAll('#navbar-main li.nav-item.dropdown > a.nav-link.dropdown-toggle').forEach(function (link) {
      var menu = link.nextElementSibling;
      if (!menu) return;
      var child = menu.querySelector('a.dropdown-item[href]');
      if (!child) return;
      var url = sectionURL(child.getAttribute('href'));
      if (!url) return;

      link.setAttribute('href', url);
      link.addEventListener(
        'click',
        function (event) {
          event.preventDefault();
          event.stopImmediatePropagation();
          window.location.assign(url);
        },
        true,
      );
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enable);
  } else {
    enable();
  }
})();
