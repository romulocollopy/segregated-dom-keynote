
describe("contact-form presentation layer", function() {

  it("should return form required fields correctly", function() {
    var fixture = '';
    fixture += '<form id="contact-form">';
    fixture += '<input id="id_name">';
    fixture += '<textarea id="id_message"></textarea>';
    fixture += '</form>';
    jasmine.getFixtures().set(fixture);

    expect($form.getRequiredFields()).toBeDefined(); // a função existe
    expect($form.getRequiredFields()[0]).toEqual($('#id_name')); // ela tem o elemento #id_name
    expect($form.getRequiredFields()[1]).toEqual($('#id_message')); // e o #id_message
    expect($form.getRequiredFields().length).toEqual(2); // e temos somente dois campos
  });

});
