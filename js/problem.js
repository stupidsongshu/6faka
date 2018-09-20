$(function() {
  Problem.init();
});

var Problem = {
  init: function() {
    this.card();
  },
  card: function() {
    $('.problem-card').hover(function() {
      $(this).find('.problem-icon').hide().siblings('.problem-list-wrapper').show();
    }, function() {
      $(this).find('.problem-icon').show().siblings('.problem-list-wrapper').hide();
    });

    $('.problem-list .problem-item').on('click', function() {
      $(this).addClass('active').find('.item-desc').slideDown();
      $(this).siblings().removeClass('active').find('.item-desc').slideUp();;
    });
  }
};
