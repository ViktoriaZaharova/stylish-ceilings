// slider
$('.main-slider').slick({
	slidesToShow: 1,
	dots: true,
	arrows: false,
	fade: true
});


$('.best-offers__slider').slick({
	slidesToShow: 1,
	arrows: false,
	dots: true,
	fade: true
});

$('.product-slider').slick({
	slidesToShow: 1,
	fade: true,
	prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
		'\t viewBox="0 0 443.52 443.52" style="enable-background:new 0 0 443.52 443.52;" xml:space="preserve">\n' +
		'<g>\n' +
		'\t<g>\n' +
		'\t\t<path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8\n' +
		'\t\t\tc-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712\n' +
		'\t\t\tL143.492,221.863z"/>\n' +
		'\t</g>\n' +
		'</g>\n' +
		'</svg>\n</button>',
	nextArrow: '<button type="button" class="slick-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
		'\t viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve">\n' +
		'<g>\n' +
		'\t<g>\n' +
		'\t\t<path d="M388.425,241.951L151.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28.067l222.72,222.105\n' +
		'\t\t\tL123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883,3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795\n' +
		'\t\t\tl236.817-236.155c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z"/>\n' +
		'\t</g>\n' +
		'</g>\n' +
		'</svg>\n</button>',
});

$('.gallery-slider').slick({
	slidesToShow: 1,
	prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
		'\t viewBox="0 0 443.52 443.52" style="enable-background:new 0 0 443.52 443.52;" xml:space="preserve">\n' +
		'<g>\n' +
		'\t<g>\n' +
		'\t\t<path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8\n' +
		'\t\t\tc-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712\n' +
		'\t\t\tL143.492,221.863z"/>\n' +
		'\t</g>\n' +
		'</g>\n' +
		'</svg>\n</button>',
	nextArrow: '<button type="button" class="slick-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
		'\t viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve">\n' +
		'<g>\n' +
		'\t<g>\n' +
		'\t\t<path d="M388.425,241.951L151.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28.067l222.72,222.105\n' +
		'\t\t\tL123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883,3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795\n' +
		'\t\t\tl236.817-236.155c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z"/>\n' +
		'\t</g>\n' +
		'</g>\n' +
		'</svg>\n</button>',
	dots: true,
	draggable: false,
	appendArrows: '.gallery-slider__nav',
	fade: true
});

$('.company-slider').slick({
	slidesToShow: 3,
	prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
		'\t viewBox="0 0 443.52 443.52" style="enable-background:new 0 0 443.52 443.52;" xml:space="preserve">\n' +
		'<g>\n' +
		'\t<g>\n' +
		'\t\t<path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8\n' +
		'\t\t\tc-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712\n' +
		'\t\t\tL143.492,221.863z"/>\n' +
		'\t</g>\n' +
		'</g>\n' +
		'</svg>\n</button>',
	nextArrow: '<button type="button" class="slick-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
		'\t viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve">\n' +
		'<g>\n' +
		'\t<g>\n' +
		'\t\t<path d="M388.425,241.951L151.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28.067l222.72,222.105\n' +
		'\t\t\tL123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883,3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795\n' +
		'\t\t\tl236.817-236.155c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z"/>\n' +
		'\t</g>\n' +
		'</g>\n' +
		'</svg>\n</button>',
});

$('.reviews-slider').slick({
	slidesToShow: 1,
	prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
		'\t viewBox="0 0 443.52 443.52" style="enable-background:new 0 0 443.52 443.52;" xml:space="preserve">\n' +
		'<g>\n' +
		'\t<g>\n' +
		'\t\t<path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8\n' +
		'\t\t\tc-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712\n' +
		'\t\t\tL143.492,221.863z"/>\n' +
		'\t</g>\n' +
		'</g>\n' +
		'</svg>\n</button>',
	nextArrow: '<button type="button" class="slick-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
		'\t viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve">\n' +
		'<g>\n' +
		'\t<g>\n' +
		'\t\t<path d="M388.425,241.951L151.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28.067l222.72,222.105\n' +
		'\t\t\tL123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883,3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795\n' +
		'\t\t\tl236.817-236.155c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z"/>\n' +
		'\t</g>\n' +
		'</g>\n' +
		'</svg>\n</button>',
	fade: true
});

$('.form-quiz__content').slick({
	slidesToShow: 1,
	nextArrow: '<button type="button" class="slick-next btn btn-accent"><span class="btn-blick"></span>\n' +
		'        СЛЕДУЮЩИЙ ВОПРОС</button>',
	prevArrow: '<button type="button" class="slick-prev btn btn-accent"><span class="btn-blick"></span>\n' +
		'        предыдущий ВОПРОС</button>',
	appendArrows: '.form-quiz__nav',
	infinite: false,
	fade: true
});

function setProgress(index) {
	const calc = ((index) / ($slider.slick('getSlick').slideCount)) * 100;

	$progressBar
		.css('width', calc + '%')
		.attr('aria-valuenow', calc);

	$progressBarLabel.text(`${calc.toFixed()}`);
}

const $slider = $('.form-quiz__content');
const $progressBar = $('.progress-bg');
const $progressBarLabel = $('.timeline__val');

$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
	setProgress(nextSlide);
});


setProgress(0);

$(".form-quiz__content").on("afterChange", function (event) {
	if ($(this).find('.slick-slide').last().hasClass('slick-active')) {
		$('.form-quiz__nav').hide();
	}
});

// twentytwenty
$(function(){
	$(".twentytwenty-container").twentytwenty();
});


// tabs
$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
	$(this)
		.addClass('active').siblings().removeClass('active')
		.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');

	$('.product-slider').slick('setPosition');
});


// phone mask
$('[name="phone"]').mask('+7(999) 999-99-99');

// animate scroll id block
$('.go_to').on("clisk", function () {
	var scroll_el = $(this).attr('href');
	if ($(scroll_el).length != 0) {
		$('html, body').animate({
			scrollTop: $(scroll_el).offset().top
		}, 500);
	}
	return false;
});

// toggle content block
$('.btn-toggle').on('click', function(e){
	e.preventDefault();

	var
		$this = $(this),
		content = $(this).parents('.seo-content').find('.box-text');


	if(!$this.hasClass('trigger')){
		$this.addClass('trigger');
		content.addClass('box-open');

	} else {
		$this.removeClass('trigger');

		content.slice(3).slideUp();
	}
});


$('.btn-load').on('click', function (e) {
	e.preventDefault();
	$('.articles .row .col-3:hidden').slice(0, 3).slideDown();

	var onBlock = $('.articles .row .col-3:hidden').length;
	if(onBlock <= 0) {
		$('.btn-load').hide();
	}
});


// mail ajax
$(".form").submit(function () {

	$.ajax({
		type: "POST",
		url: "mail.php",
		data: $(this).serialize(),
		async: true,
		success: function (data) {
			$(this).find("input").val("");

			$('.modal__div').css('display', 'none').animate({
				opacity: 0,
				top: '45%'
			});

			$('#thanks__modal').css('display', 'flex')
				.animate({
					opacity: 1,
					top: '50%'
				}, 200);

			setTimeout(function () {
				$("#thanks__modal").css('display', 'none').animate({
					opacity: 0,
					top: '45%'
				});
				$('.overlay').fadeOut(400);
			}, 1000);
			$(".form").trigger("reset");
		}
	});
	return false;
});