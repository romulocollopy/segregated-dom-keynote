
$form = $('#contact-form');

$form.getRequiredFields = function () {
  return [
    $form.find('#id_name'),
    $form.find('#id_message'),
  ]
}
