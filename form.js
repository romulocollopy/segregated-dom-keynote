
$form.validate = function () {
  var requiredFields = $form.getRequiredFields();

  // o !! é para forçar a reavaliação como booleana
  if ( !!requiredFields ) {
    for (var i = requiredFields.length - 1; i >= 0; i--) {
      var field = requiredFields[i];

      if ( !!field.value ) {
        $inputHasSuccess(field);
      } else {
        $inputHasError(field);
      };

    };
  };
}

$inputHasSuccess = function (elm) {
  $getFormGroup(elm).addClass('has-success');
}

$inputHasError = function (elm) {
  $getFormGroup(elm).addClass('has-error');
}

$getFormGroup = function (elm) {
  return elm.parents('.form-group');
}