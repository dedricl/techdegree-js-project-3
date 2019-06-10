
//When documment loads up or user refresh the window the Name text field is selected first by default.
$('#name').focus();

//Hide job role text field if other is not selected
$('#other-title').hide();


//Show job role text field when other is selected
 $('#title').on('change',function(){
   if($(this).val() === 'other'){
     $('#other-title').show();
   }else{
     $('#other-title').hide();
   }

});

//To hide the Select Theme option iDesign drop-down
$('#design option').eq(0).text("");

 $('#color').prepend("<option selected = 'selected'>Please select a T-shirt theme</option>");

 $('#color option').hide();



//  //event listner for T-shirt section
$('#design').on('change', function(){
  if($(this).val() === 'js puns') {
      $('#color option:contains("JS shirt")').hide();
      $('#color option:contains("Puns")').show();
      $('#color option:contains("Please")').removeAttr('selected');
      $('#color option[value="tomato"]').removeAttr("selected");
      $('#color option[value="cornflowerblue"]').attr("selected", "selected");



  }
  if($(this).val() === 'heart js') {
      $('#color option:contains("Puns")').hide();
      $('#color option:contains("JS shirt")').show();
      $('#color option:contains("Please")').removeAttr('selected');
      $('#color option[value="cornflowerblue"]').removeAttr("selected");
      $('#color option[value="tomato"]').attr("selected", "true");






  }




});
