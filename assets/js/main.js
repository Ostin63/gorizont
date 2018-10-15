$('.promo-item .cart').each(function(){
  var $text = $(this).find('.text'),
    textArr = $text.text().split('');

  $text.html('');

  $.each(textArr, function (i, v) {
    if (v == ' ') {
      $text.append('<span class="space"></span>');
    }
    $text.append('<span>' + v + '</span>');
  });
});

$(".form-phone").mask("+7(999)999-99-99");