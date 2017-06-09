$( _ => {

	const $valInput = $('input:text').addClass("gray-dark");
	const $containerBotones = $('.container-botones');
	const $botones = $('input:button').addClass("gray-dark");
		  $botones.eq(12).nextAll().addBack().addClass("gray-green");		 

		$containerBotones.on('click','input',function(e){
		 
		 $valEachNumber = $(this).val();
		 $valInputCurrent = $valInput.val();
		 $valInputCurrent += $valEachNumber;
		 $valInput.val($valInputCurrent);

			if($(this).val() === "C"){
				  $valInput.val(" ");
				}

			if($(this).is('#result')){
				const a = $valInput.val().substring(0,($valInput.val().indexOf("=")));
				$valInput.val(eval(a));
				}

			$(this).addClass('active');
			$(this).siblings().removeClass('active');		

		})

});