/*
 * All the credit for this code goes to the authors of the sphinx13 theme used
 * on the sphinx-doc.org website.
 */

// intelligent scrolling of the sidebar content
$(window).scroll(function() {
  var sb = $('.sphinxsidebarwrapper');
  var win = $(window);
  var sbh = sb.height();
  var offset = $('.sphinxsidebar').offset()['top'];
  var wintop = win.scrollTop();
  var winbot = wintop + win.innerHeight();
  var curtop = sb.offset()['top'];
  var curbot = curtop + sbh;

  console.log(winbot + ' ' + curbot);
  // does sidebar fit in window?
  if (sbh < win.innerHeight()) {
    // yes: easy case -- always keep at the top
    sb.css('top', $u.min([$u.max([0, wintop - offset - 10]),
                          $(document).height() - sbh - 200]));
  } else {
    // no: only scroll if top/bottom edge of sidebar is at
    // top/bottom edge of window
    if (curtop > wintop && curbot > winbot) {
      sb.css('top', $u.max([wintop - offset - 10, 0]));
    } else if (curtop < wintop && curbot < winbot) {
      sb.css('top', $u.min([winbot - sbh - offset - 20,
                            $(document).height() - sbh - 200]));
    }
  }
});
