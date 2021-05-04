$('[data-checkboxes]').each(function () {
  const me = $(this);
  const group = me.data('checkboxes');
  const role = me.data('checkbox-role');

  me.change(() => {
    const all = $(`[data-checkboxes="${group}"]:not([data-checkbox-role="dad"])`);
    const checked = $(`[data-checkboxes="${group}"]:not([data-checkbox-role="dad"]):checked`);
    const dad = $(`[data-checkboxes="${group}"][data-checkbox-role="dad"]`);
    const total = all.length;
    const checked_length = checked.length;

    if (role == 'dad') {
      if (me.is(':checked')) {
        all.prop('checked', true);
      } else {
        all.prop('checked', false);
      }
    } else if (checked_length >= total) {
      dad.prop('checked', true);
    } else {
      dad.prop('checked', false);
    }
  });
});
