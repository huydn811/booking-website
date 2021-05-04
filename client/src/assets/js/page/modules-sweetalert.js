$('#swal-1').click(() => {
  swal('Hello');
});

$('#swal-2').click(() => {
  swal('Good Job', 'You clicked the button!', 'success');
});

$('#swal-3').click(() => {
  swal('Good Job', 'You clicked the button!', 'warning');
});

$('#swal-4').click(() => {
  swal('Good Job', 'You clicked the button!', 'info');
});

$('#swal-5').click(() => {
  swal('Good Job', 'You clicked the button!', 'error');
});

$('#swal-6').click(() => {
  swal({
    title: 'Are you sure?',
    text: 'Once deleted, you will not be able to recover this imaginary file!',
    icon: 'warning',
    buttons: true,
    dangerMode: true,
  })
    .then((willDelete) => {
      if (willDelete) {
        swal('Poof! Your imaginary file has been deleted!', {
          icon: 'success',
        });
      } else {
        swal('Your imaginary file is safe!');
      }
    });
});

$('#swal-7').click(() => {
  swal({
    title: 'What is your name?',
    content: {
      element: 'input',
      attributes: {
        placeholder: 'Type your name',
        type: 'text',
      },
    },
  }).then((data) => {
    swal(`Hello, ${data}!`);
  });
});

$('#swal-8').click(() => {
  swal('This modal will disappear soon!', {
    buttons: false,
    timer: 3000,
  });
});
