$( document ).ready(function() {

  $("[type=submit]").on("click", function() {
    if ('parentIFrame' in window) {
      parentIFrame.scrollTo(0,0);
    }
  });

  $('.checkbox:visible').each(function() {
    if ($(this).attr('style')) {
      $(this).find('.remaining').hide();
    }
  });

  $('[id*=linked-person]').each(function() {
    copyFromField($(this).find('[data-copy-from]'));
    console.log("copyFromField");
  });

  var current_step = $(".tab-content div").first().attr('id');
  $("body").addClass(current_step);
  // console.log(current_step);
  if (current_step == "planning_pilote_principal") {
    // console.log( $(".check-in-point-price").text() );
  }

  $('[data] label.checkbox [type="checkbox"][checked="checked"]').closest('label.checkbox').each( function() {
    $(this).addClass('checked');
  });

  $('[id*=linked-person]').each(function() {
    copyFromField($(this).find('[data-copy-from]'));
  });

  // Pour ne pas pouvoir enlever d'accompagnants à l'étape 1
  if ($(document).find('#inscription').length > 0){
    $('.metadata_lg select').each(function (){
      var current_val = $(this).val();
      $(this).find('option').each(function() {
        if ($(this).val() < current_val || $(this).val() == undefined) {
          $(this).remove();
        }
      });
    });
  }
});

$(document).on('click', '.add-linked-guest', function(){
  copyFromField($(this).prev('[id*=linked-person]').find('[data-copy-from]'));
});

function copyFromField($datas_copy_from) {
  $datas_copy_from.each(function() {
    var field_to_copy = $(this).attr("data-copy-from");
    var value_to_copy = $('.main-guest-field-to-copy [name*='+field_to_copy+']').val();
    if ($(this).find('option').length > 0) {
      $(this).find('option[value="' + value_to_copy + '"]').attr('selected', true).change();
    } else {
      $(this).attr('value', value_to_copy);
    }
  });
}

// Required CheckBox Group //
$(document).on('click', '[data] .checkbox input[type="checkbox"]', function(){
  $(this).parent().toggleClass('checked');
  if ($(this).attr('checked')) {
    $(this).removeAttr('checked');
  } else {
    $(this).attr('checked', 'checked');
  }
});
