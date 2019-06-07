
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

//To hide the options to select a T-shirt design
$('#design option').hide();

$('#color option:first').before('<option>Please select a T-shirt theme</option>');

$('#color option[value]').hide();
