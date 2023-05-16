new Splide(".splide", {
    type: 'fade',
    rewind: true,
    autoplay: true,
    pauseOnHover: false,
    interval: 4000,
    speed: 2000,
    pagination: false,
    breakpoints: {
		1000: {
			arrows: false,
            speed: 1000,
		},
    },
}).mount();

