(function() {
  'use strict';
  var promoDate 	= new Date(),
		promoText	= "до ";

	promoDate.setDate(promoDate.getDate() + 2);

	switch(promoDate.getMonth()) {
    case 0:
        promoText += promoDate.getDate() + " января ";
        break;
    case 1:
        promoText += promoDate.getDate() + " февраля ";
        break;
     case 2:
        promoText += promoDate.getDate() + " марта ";
        break;
     case 3:
        promoText += promoDate.getDate() + " апреля ";
        break;
     case 4:
        promoText += promoDate.getDate() + " мая ";
        break;
     case 5:
        promoText += promoDate.getDate() + " июня ";
        break;
     case 6:
        promoText += promoDate.getDate() + " июля ";
        break;
     case 7:
        promoText += promoDate.getDate() + " августа ";
        break;
     case 8:
        promoText += promoDate.getDate() + " сентября ";
        break;
     case 9:
        promoText += promoDate.getDate() + " октября ";
        break;
     case 10:
        promoText += promoDate.getDate() + " ноября ";
        break;

     case 11:
        promoText += promoDate.getDate() + " декабря ";
        break;

     case 12:
        promoText += promoDate.getDate() + " января ";
        break;
    default:
        promoText += promoDate.getDate() + " января ";
}

	console.log(promoText);

	$(".disconte-date").html(promoText);


	var faq 		= $(".faq-list"),
		faqElement 	= $(".faq-list .faq-element"),
		faqHeaders	= $(".faq-list .ask-title");

	faqElement.removeClass('active');

	faqHeaders.click(function(event) {
		faqElement.removeClass('active');
		$(this).parent(".faq-element").addClass('active')
	});


	$.mask.definitions['#'] = '[0-9]';                        
	$('.mask-phone').mask('+7 (###) ###-##-##');


	var btn = $('.submit-btn');

	btn.click(function(event){


		var activeform = $(this).closest("form");

		activeform.validate({
    	validClass: "success",
        rules:{ 
            phone:{
                required: true
            }
       	},
	   
	   
		submitHandler: function(form) {
			var formphone = "";
			var formname = "";
			var formtext = "";
			var formid = "";
			//var formname = "";
			//var formphone = "";
			if (form.text) {
				formtext = form.text.value;
			}
			if (form.phone) {
				formphone = form.phone.value;
			}
			if (form.name) {
				formname = form.name.value;
			}
			if (form.formid) {
				formid = form.formid.value;
			}
			$.ajax({
        		type: "POST",
        		url: "/mailer.php",
        		cache: false,   
				data: ({
					phone: formphone,
					name: formname,
					text: formtext,
					formid: formid
        		}),
   
				success: function(html){
					if (html = 'ok') {
						$(location).attr('href','./thanks.html');
					} else {
						alert('Непредвиденная ошибка. Попробуйте отправить позже');
					}
        		}
   	 		});
        },
	   	errorPlacement: function(error, element) {} 
        
    });

});



	var toright = $('.to-right');
	var toleft = $('.to-left');

	toleft.click( function(event){ // обработчикклика в лево
		event.preventDefault();
		var ul = $(this).parent().find('.slider'); // Берем родителя
		ul.find('li:last-child').prependTo(ul);
	});

	toright.click( function(event){ // обработчикклика в лево
		event.preventDefault();
		var ul = $(this).parent().find('.slider'); // Берем родителя
		ul.find('li:first-child').appendTo(ul);
	});


    /* зaсунем срaзу все элементы в переменные, чтoбы скрипту не прихoдилoсь их кaждый рaз искaть при кликaх */
    var overlay = $('#overlay'); // пoдлoжкa, дoлжнa быть oднa нa стрaнице
    var open_modal = $('.open_modal'); // все ссылки, кoтoрые будут oткрывaть oкнa
    var close = $('.modal_close, #overlay'); // все, чтo зaкрывaет мoдaльнoе oкнo, т.е. крестик и oверлэй-пoдлoжкa
    var modal = $('.modal_div'); // все скрытые мoдaльные oкнa

     open_modal.click( function(event){ // лoвим клик пo ссылке с клaссoм open_modal
         event.preventDefault(); // вырубaем стaндaртнoе пoведение
         var div = $(this).attr('data-formname'); // вoзьмем стрoку с селектoрoм у кликнутoй ссылки
         overlay.fadeIn(400, //пoкaзывaем oверлэй
             function(){ // пoсле oкoнчaния пoкaзывaния oверлэя
                 $(div) // берем стрoку с селектoрoм и делaем из нее jquery oбъект
                     .css('display', 'block') 
                     .animate({opacity: 1, top: '50%'}, 200); // плaвнo пoкaзывaем
         });
     });

     close.click( function(){ // лoвим клик пo крестику или oверлэю
            modal // все мoдaльные oкнa
             .animate({opacity: 0, top: '45%'}, 200, // плaвнo прячем
                 function(){ // пoсле этoгo
                     $(this).css('display', 'none');
                     overlay.fadeOut(400); // прячем пoдлoжку
                 }
             );
     });

     $(".thanks").css('height', ($(window).height() - 100) + "px");
})();