;(function($){
	const WPFroms = {
		btn: $('.wp-forms__video-player'),
		iframe: $('.wp-forms__iframe'),

		play() {
			this.iframe[0].src += '&autoplay=1';
		},
		show() {
			this.iframe.show();
		},
		init() {
			this.btn.one('click', () => {
				this.show();
				this.play();
			});
		}
	};

	WPFroms.init();
})(jQuery);