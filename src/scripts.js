export default function Scripts( block ) {
	let blockElements =
		block !== undefined
			? document.querySelectorAll( block )
			: document.querySelectorAll( '.wp-block-tt-test-block' );
	if ( blockElements.length ) {
		blockElements.forEach( ( el ) => {
			new Swiper( el.querySelector( '.swiper' ), {
				slidesPerView: '2',
				spaceBetween: 20,
				speed: 700,
				loop: true,
			} );
		} );
	}
}
