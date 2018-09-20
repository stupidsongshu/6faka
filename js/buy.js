$(function() {
  Buy.init();
});

var Buy = {
  init: function() {
    this.selectCheckbox();
    this.goodsNo();
    this.ensureOrder();
  },
  selectCheckbox: function() {
    $('#j-assistList .assist-item').on('click', function() {
      $(this).addClass('active').siblings().removeClass('active');
    });
    $('#j-payList .pay-item').on('click', function() {
      $(this).addClass('active').siblings().removeClass('active');
    });
  },
  goodsNo: function() {
    var formNumber = $('#j-formNumber');
    var num;
    $('#j-decrease').on('click', function() {
      num = parseInt(formNumber.val());
      if (num > 0) {
        formNumber.val(--num);
      }
    });
    $('#j-increase').on('click', function() {
      num = parseInt(formNumber.val());
      formNumber.val(++num);
    });
  },
  ensureOrder: function() {
    $('#j-ensurePay').on('click', function() {
      $('.mask').fadeIn();
      $('.popup').fadeIn();
    });
    $('#j-modifyOrder').on('click', function() {
      $('.mask').fadeOut();
      $('.popup').fadeOut();
    });
  }
};
