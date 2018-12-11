window.onload=mangeInit;

function mangeInit() {
  $('.hamburger').on('click',function () {
   hamburger_cross();
  });

}

function hamburger_cross() {
  let trigger = $('.hamburgar');

  $('#wrapper').toggleClass('toggled');
  trigger.toggleClass('is-open');
  trigger.toggleClass('is-close');
}
