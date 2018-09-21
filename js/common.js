$(function() {
  Common.init();
});

var Common = {
  init: function() {
    this.formInput();
    this.setTimeDown();
  },
  formInput: function() {
    $('.form-input').on('change', function() {
      if ($(this).val() !== '') {
        $(this).parent('.form-item').addClass('has-content');
      } else {
        $(this).parent('.form-item').removeClass('has-content');
      }
    })
  },
  setTimeDown: function() {
    var time = 60;
    var msgCode = $('#j-msgCode');
    var msgTimeDown = $('#j-msgTimeDown');
    msgCode.on('click', function() {
      msgCode.hide();
      msgTimeDown.show().html('60s');
      var timer = setInterval(function() {
        if (time <= 1) {
          clearInterval(timer);
          time = 60;
          msgTimeDown.html('');
          msgCode.show();
          msgTimeDown.hide();
        } else {
          time--;
          msgTimeDown.html(time + 's');
        }
      }, 1000);
    });
  }
};
