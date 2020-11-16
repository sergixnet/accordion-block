( function () {
	'use strict';

	var $items = document.querySelectorAll( '.wp-block-snet-accordion' );
	var $icons = document.querySelectorAll( '.accordion__icon' );
	var $contents = document.querySelectorAll( '.accordion__content' );
	var $links = document.querySelectorAll( '.accordion__title a' );

	function toggleIcon( el ) {
		var text = el.innerText;
		if ( text === '+' ) {
			el.innerText = '-';
		} else {
			el.innerText = '+';
		}
	}

	function disableAll() {
		$contents.forEach( function ( el ) {
			el.classList.remove( 'is-active' );
		} );

		$icons.forEach( function ( el ) {
			el.innerText = '+';
		} );
	}

	$links.forEach( function ( el ) {
		el.addEventListener( 'click', function ( ev ) {
			ev.preventDefault();
			var icon = el.querySelector( '.accordion__icon' );
			var content = icon.parentElement.parentElement.nextElementSibling;

			if (content.classList.contains('is-active')) {
				disableAll();
				return;
			}

			disableAll();
			toggleIcon( icon );
			content.classList.add( 'is-active' );
		} );
	} );
	// 'use strict';
	//   var $items = $('.acordion__item');
	//   var $contents = $items.find('.acordion__item__content');
	//   var $links = $items.find('.acordion__item__title a');
	//   function toggleIcon($el) {
	//       var text = $el.text();
	//       if (text === '+') {
	//           $el.text('-')
	//       } else if (text === '-') {
	//           $el.text('+')
	//       }
	//   }
	//   function disableAll() {
	//       $links.parent().removeClass('is-active');
	//       $contents.removeClass('is-active');
	//       var $icons = $links.find('.acordion__item__title__icon');
	//       $icons.text('+')
	//   }
	//   $links.on('click', function(e) {
	//       e.preventDefault();
	//       var $this = $(this);
	//       var $icon = $this.find('.acordion__item__title__icon');
	//       var $title = $this.parent();
	//       var $content = $this.parent().parent().find('.acordion__item__content');
	//       if ($content.hasClass('is-active')) {
	//           disableAll();
	//           return
	//       }
	//       disableAll();
	//       toggleIcon($icon);
	//       $content.toggleClass('is-active')
	//   })
} )();
