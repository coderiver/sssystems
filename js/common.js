$(document).ready(function() {

	$(document).click(function() {
		$(".js-popup-field").hide();
		$(".js-btn-sbm").parent().addClass("is-active");
	});
		$(".js-popup").on("click", function(event){
			event.stopPropagation();
		});
		$(".js-popup-close").on("click", function(event){
				$(".js-popup-field").hide();
				event.stopPropagation();
		});
		$('.js-btn').click(function() {
				$(".js-popup-field").show();
				return false;
		});

	// $('.js-shop').click(function() {
 //        $(".js-services").slideToggle();
 //        return false;
 //    });

	$('.js-services__oll').click(function() {
        $(".js-attendance").slideToggle();
        return false;
    });
	
	$(".fancybox-effects").fancybox({
			wrapCSS    : 'fancybox-custom',
			closeClick : true,

			openEffect : 'none',

			helpers : {
				title : {
					type : 'inside'
				},
				overlay : {
					css : {
						'background' : 'rgba(238,238,238,0.85)'
					}
				}
			}
		});

	$('.js_loginform').each(function() {

    $(this).validate({
	 
			rules:{

				name:{
						required: true,
				},
				
			  phone:{
			      required: true,
			  },

			  mail:{
			      required: true,
			  },

			},

    });

	});

});



$('.fancybox').fancybox();

function js_numbers(input) { 
  var value = input.value; 
  var rep = /[-\.;":'a-zA-Zа-яА-Я]/; 
  if (rep.test(value)) { 
      value = value.replace(rep, ''); 
      input.value = value; 
  } 
}

function js_mail(input) { 
    var value = input.value; 
    var rep = /[а-яА-Я]/; 
    if (rep.test(value)) { 
        value = value.replace(rep, ''); 
        input.value = value; 
    } 
	}
