
// carousel
$('.carousel__inner').slick({
	// dots: true,
	speed: 1500,
	adaptiveHeight: true,
	// autoplay: true,
	slidesToShow: 1,
	dots: true,
	autoplaySpeed: 2000,
	arrows: false,
	// prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
	// nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>',
	responsive: [
		{
			breakpoint: 992,
			settings: {
			  dots: true,
			  arrows: false
			}
		  },
	]
});
// const burger = document.getElementById('burger');
// const ul = document.querySelector('nav ul');

// burger.addEventListener('click', () => {
// 	burger.classList.toggle('show-x');
// 	ul.classList.toggle('show');
// });


