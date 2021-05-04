$('#setting-form').submit(function () {
  const save_button = $(this).find('#save-btn');
  const output_status = $('#output-status');
  const card = $('#settings-card');

  const card_progress = $.cardProgress(card, {
    spinner: false,
  });
  save_button.addClass('btn-progress');
  output_status.html('');

  // Do AJAX here
  // Here's fake AJAX
  setTimeout(() => {
    card_progress.dismiss(() => {
      $('html, body').animate({
        scrollTop: 0,
      });

      output_status.prepend('<div class="alert alert-success">Setting saved Successfully.</div>');
      save_button.removeClass('btn-progress');
    });
  }, 3000);
  return false;
});
