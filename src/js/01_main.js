$('.owl-carousel').owlCarousel({
  // stagePadding: 15,
  loop: false,
  margin: 10,
  nav: true,
  items: 1,
  navText: ['<i class="ico ico-arrow"></i>','<i class="ico ico-arrow"></i>'],
});

$('.input-group--choice').on('change', '[type="radio"]', function() {
  const index = $(this).closest('label').index();
  $('.input-group--choice').find('label').each((i, n) => $(n).toggleClass('active', i === index));
});

// el = $('.item_info-amount');
// if (el.find('input').val() == '1') {
//   el.find('.minus').addClass('inactive');
//   el.find('.minus').attr('disabled', true);
// } else {
//   el.find('.minus').removeClass('inactive');
//   el.find('.minus').attr('disabled', false);
// }

// $('.item_info-amount .plus').on('click', function() {
//   this.parent('.item_info-amount').find('.minus').removeClass('inactive');
//   this.parent('.item_info-amount').find('.minus').attr('disabled', false);
// });


$(document).click(function(e) {
  if (e.target.classList.contains("plus")) {
    ++e.target.parentElement.querySelector("input").value;
  } else if (e.target.classList.contains("minus")) {
    --e.target.parentElement.querySelector("input").value;
  }
});