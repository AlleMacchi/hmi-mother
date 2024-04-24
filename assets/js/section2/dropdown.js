$("#dropdown_Section2").click(function(event) {
  event.stopPropagation(); // Prevent default event propagation
  $("#dropdown-menu_Section2").toggle();
});

// Close the dropdown menu if the user clicks outside of it
$(document).click(function(event) {
  var dropdownMenu = $("#dropdown-menu_Section2");
  if (dropdownMenu.is(":visible")) {
    dropdownMenu.hide();
  }
});

// Handle dropdown item click
$("#dropdown-menu_Section2").on("click", ".dropdown-item", function(event) {
  event.preventDefault();
  var value = $(this).attr("data-value");
  $("#setDirLogicalPosition_Section2").text(value); // Update button text with selected value
 // updateGoToPositionDirection();
});


function updateGoToPositionDirection(){
  var Row = $('input[id=setPositionLogical]').val();
  var Col = StatusCarrierActPositon_logicalCol;
  var Dir = '0';

  if ($('#setDirLogicalPosition_Section2').text() === 'B') {
      Dir = '1';
  }  else{
      Dir = '0';
  }

  LogicalPositionStringa = setLogicalString(Row,Col,Dir);

  if (Row ==null || Row==0 || Row >38) {
      $('#set-logical-position').text('');
  } else {
      $('#set-logical-position').text(LogicalPositionStringa);
  }

  if (Row ==0 || Row >38) {
      alert('Value must be between 1 and 38');
  } 
}


