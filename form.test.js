
describe("contact-form domain functions", function() {

  it("should not raise exception if there are no required fields", function() {
    expect($form.validate).not.toThrow();
  });

  it("should call $form.getRequiredFields when $form.validate is called", function() {
    spyOn($form, 'getRequiredFields');

    $form.validate();

    expect($form.getRequiredFields).toHaveBeenCalled();
  });

  it("should call $inputHasSuccess if $form.validate is called with valid input", function() {
    spyOn($form, 'getRequiredFields').and.returnValue($('<input value="lalala">'))
    spyOn(window, '$inputHasSuccess');

    $form.validate()

    expect($inputHasSuccess).toHaveBeenCalled();
  });

  it("should call $inputHasError if $form.validate is called with invalid input", function() {
    spyOn($form, 'getRequiredFields').and.returnValue($('<input>'))
    spyOn(window, '$inputHasError');

    $form.validate()

    expect($inputHasError).toHaveBeenCalled();
  });

  it("should return parent form-group when $getFormGroup", function() {
    var fixture = '';
    fixture += '<div class="form-group">';
    fixture += '<input>';
    fixture += '</div>';
    jasmine.getFixtures().set(fixture);

    expect($getFormGroup($('input'))).toEqual($('input').parents('.form-group'));
  });

  it("should call $getFormGroup when $inputHasError is called", function() {
    spyOn(window, '$getFormGroup').and.returnValue($(document));
    spyOn($.fn, 'addClass');

    $inputHasError();

    expect($getFormGroup).toHaveBeenCalled();
  });

  it("should call $.fn.addClass with 'has-error' when $inputHasError is called", function() {
    spyOn(window, '$getFormGroup').and.returnValue($(document));
    spyOn($.fn, 'addClass');

    $inputHasError();

    expect($.fn.addClass).toHaveBeenCalledWith('has-error');
  });

  it("should call $getFormGroup when $inputHasSuccess is called", function() {
    spyOn(window, '$getFormGroup').and.returnValue($(document));
    spyOn($.fn, 'addClass');

    $inputHasSuccess();

    expect($getFormGroup).toHaveBeenCalled();
  });

  it("should call $.fn.addClass with 'has-success' when $inputHasSuccess is called", function() {
    spyOn(window, '$getFormGroup').and.returnValue($(document));
    spyOn($.fn, 'addClass');

    $inputHasSuccess();

    expect($.fn.addClass).toHaveBeenCalledWith('has-success');
  });

});
