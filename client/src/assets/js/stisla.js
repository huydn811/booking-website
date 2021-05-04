(function ($, window, i) {
  // Bootstrap 4 Modal
  $.fn.fireModal = function (options) {
    var options = $.extend({
      size: 'modal-md',
      center: false,
      animation: true,
      title: 'Modal Title',
      closeButton: true,
      header: true,
      bodyClass: '',
      footerClass: '',
      body: '',
      buttons: [],
      autoFocus: true,
      removeOnDismiss: false,
      created() {},
      appended() {},
      onFormSubmit() {},
      modal: {},
    }, options);

    this.each(function () {
      i++;
      const id = `fire-modal-${i}`;
      const trigger_class = `trigger--${id}`;
      const trigger_button = $(`.${trigger_class}`);

      $(this).addClass(trigger_class);

      // Get modal body
      let { body } = options;

      if (typeof body === 'object') {
        if (body.length) {
          const part = body;
          body = body.removeAttr('id').clone().removeClass('modal-part');
          part.remove();
        } else {
          body = '<div className="text-danger">Modal part element not found!</div>';
        }
      }

      // Modal base template
      var modal_template = `   <div className="modal${options.animation == true ? ' fade' : ''}" tabIndex="-1" role="dialog" id="${id}">  `
                 + `     <div className="modal-dialog ${options.size}${options.center ? ' modal-dialog-centered' : ''}" role="document">  `
                 + `       <div className="modal-content">  ${
                   (options.header == true)
                     ? `${'         <div className="modal-header">  '
                 + '           <h5 className="modal-title">'}${options.title}</h5>  ${
                       (options.closeButton == true)
                         ? '           <button type="button" className="close" data-dismiss="modal" aria-label="Close">  '
                 + '             <span aria-hidden="true">&times;</span>  '
                 + '           </button>  '
                         : ''
                     }         </div>  `
                     : ''
                 }         <div className="modal-body">  `
                 + `         </div>  ${
                   options.buttons.length > 0
                     ? '         <div className="modal-footer">  '
                 + '         </div>  '
                     : ''
                 }       </div>  `
                 + '     </div>  '
                 + '  </div>  ';

      // Convert modal to object
      var modal_template = $(modal_template);

      // Start creating buttons from 'buttons' option
      let this_button;
      options.buttons.forEach((item) => {
        // get option 'id'
        const id = 'id' in item ? item.id : '';

        // Button template
        this_button = `<button type="${'submit' in item && item.submit == true ? 'submit' : 'button'}" className="${item.class}" id="${id}">${item.text}</button>`;

        // add click event to the button
        this_button = $(this_button).off('click').on('click', function () {
          // execute function from 'handler' option
          item.handler.call(this, modal_template);
        });
        // append generated buttons to the modal footer
        $(modal_template).find('.modal-footer').append(this_button);
      });

      // append a given body to the modal
      $(modal_template).find('.modal-body').append(body);

      // add additional body class
      if (options.bodyClass) $(modal_template).find('.modal-body').addClass(options.bodyClass);

      // add footer body class
      if (options.footerClass) $(modal_template).find('.modal-footer').addClass(options.footerClass);

      // execute 'created' callback
      options.created.call(this, modal_template, options);

      // modal form and submit form button
      const modal_form = $(modal_template).find('.modal-body form');
      const form_submit_btn = modal_template.find('button[type=submit]');

      // append generated modal to the body
      $('body').append(modal_template);

      // execute 'appended' callback
      options.appended.call(this, $(`#${id}`), modal_form, options);

      // if modal contains form elements
      if (modal_form.length) {
        // if `autoFocus` option is true
        if (options.autoFocus) {
          // when modal is shown
          $(modal_template).on('shown.bs.modal', () => {
            // if type of `autoFocus` option is `boolean`
            if (typeof options.autoFocus === 'boolean') modal_form.find('input:eq(0)').focus(); // the first input element will be focused
            // if type of `autoFocus` option is `string` and `autoFocus` option is an HTML element
            else if (typeof options.autoFocus === 'string' && modal_form.find(options.autoFocus).length) modal_form.find(options.autoFocus).focus(); // find elements and focus on that
          });
        }

        // form object
        const form_object = {
          startProgress() {
            modal_template.addClass('modal-progress');
          },
          stopProgress() {
            modal_template.removeClass('modal-progress');
          },
        };

        // if form is not contains button element
        if (!modal_form.find('button').length) $(modal_form).append(`<button className="d-none" id="${id}-submit"></button>`);

        // add click event
        form_submit_btn.click(() => {
          modal_form.submit();
        });

        // add submit event
        modal_form.submit(function (e) {
          // start form progress
          form_object.startProgress();

          // execute `onFormSubmit` callback
          options.onFormSubmit.call(this, modal_template, e, form_object);
        });
      }

      $(document).on('click', `.${trigger_class}`, () => {
        const modal = $(`#${id}`).modal(options.modal);

        if (options.removeOnDismiss) {
          modal.on('hidden.bs.modal', () => {
            modal.remove();
          });
        }

        return false;
      });
    });
  };

  // Bootstrap Modal Destroyer
  $.destroyModal = function (modal) {
    modal.modal('hide');
    modal.on('hidden.bs.modal', () => {
    });
  };

  // Card Progress Controller
  $.cardProgress = function (card, options) {
    var options = $.extend({
      dismiss: false,
      dismissText: 'Cancel',
      spinner: true,
      onDismiss() {},
    }, options);

    const me = $(card);

    me.addClass('card-progress');
    if (options.spinner == false) {
      me.addClass('remove-spinner');
    }

    if (options.dismiss == true) {
      let btn_dismiss = `<a className="btn btn-danger card-progress-dismiss">${options.dismissText}</a>`;
      btn_dismiss = $(btn_dismiss).off('click').on('click', function () {
        me.removeClass('card-progress');
        me.find('.card-progress-dismiss').remove();
        options.onDismiss.call(this, me);
      });
      me.append(btn_dismiss);
    }

    return {
      dismiss(dismissed) {
        $.cardProgressDismiss(me, dismissed);
      },
    };
  };

  $.cardProgressDismiss = function (card, dismissed) {
    const me = $(card);
    me.removeClass('card-progress');
    me.find('.card-progress-dismiss').remove();
    if (dismissed) dismissed.call(this, me);
  };

  $.chatCtrl = function (element, chat) {
    var chat = $.extend({
      position: 'chat-right',
      text: '',
      time: moment(new Date().toISOString()).format('hh:mm'),
      picture: '',
      type: 'text', // or typing
      timeout: 0,
      onShow() {},
    }, chat);

    const target = $(element);
    var element = `<div className="chat-item ${chat.position}" style="display:none">`
                  + `<img src="${chat.picture}">`
                  + '<div className="chat-details">'
                  + `<div className="chat-text">${chat.text}</div>`
                  + `<div className="chat-time">${chat.time}</div>`
                  + '</div>'
                  + '</div>';
    const typing_element = `${'<div className="chat-item chat-left chat-typing" style="display:none">'
                  + '<img src="'}${chat.picture}">`
                  + '<div className="chat-details">'
                  + '<div className="chat-text"></div>'
                  + '</div>'
                  + '</div>';

    let append_element = element;
    if (chat.type == 'typing') {
      append_element = typing_element;
    }

    if (chat.timeout > 0) {
      setTimeout(() => {
        target.find('.chat-content').append($(append_element).fadeIn());
      }, chat.timeout);
    } else {
      target.find('.chat-content').append($(append_element).fadeIn());
    }

    let target_height = 0;
    target.find('.chat-content .chat-item').each(function () {
      target_height += $(this).outerHeight();
    });
    setTimeout(() => {
      target.find('.chat-content').scrollTop(target_height, -1);
    }, 100);
    chat.onShow.call(this, append_element);
  };
}(jQuery, this, 0));
