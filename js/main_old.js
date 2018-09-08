$(function() {
  $("[type=submit]").on("click", function() {
    if ('parentIFrame' in window) {
      parentIFrame.scrollTo(0,0);
    }
  });

  $('[id*=linked-person]').each(function() {
    copyFromField($(this).find('[data-copy-from]'));
    console.log("copyFromField");
  });
});

$(document).on('click', '.add-linked-guest', function(){
  copyFromField($(this).prev('[id*=linked-person]').find('[data-copy-from]'));
});

function copyFromField($datas_copy_from) {
  $datas_copy_from.each(function() {
    var field_to_copy = $(this).attr("data-copy-from");
    var value_to_copy = $('.main-guest-field [name*='+field_to_copy+']').val();
    $(this).attr('value', value_to_copy);
  });
}

// A $( document ).ready() block.
$( document ).ready(function() {
    var current_step = $(".tab-content div").first().attr('id');
    $("body").addClass(current_step);
    // console.log(current_step);
    if (current_step == "planning_pilote_principal") {
      // console.log( $(".check-in-point-price").text() );
    }

    $('[data] label.checkbox [type="checkbox"][checked="checked"]').closest('label.checkbox').each( function() {
      $(this).addClass('checked');
    });

});

// Required CheckBox Group Behaviour//
$(function(){
  console.log("required");
    var requiredCheckboxes = $('.required_group_fields :checkbox');
    if(!requiredCheckboxes.is( ':checked' )){requiredCheckboxes.attr('required', 'required');}
    requiredCheckboxes.change(function(){
        if(requiredCheckboxes.is(':checked')) {
            requiredCheckboxes.removeAttr('required');
        } else {
            requiredCheckboxes.attr('required', 'required');
        }
    });
});
// Required CheckBox Group //

$(document).on('click', '[data] .checkbox input[type="checkbox"]', function(){
  $(this).parent().toggleClass('checked');
  if ($(this).attr('checked')) {
        $(this).removeAttr('checked');
    } else {
        $(this).attr('checked', 'checked');
    }
});
