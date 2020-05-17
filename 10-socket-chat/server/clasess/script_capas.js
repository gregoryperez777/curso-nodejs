
//	<script>
		function layout_1_2 () {
			let countLayout = 0;
			let opacityImgL = 0;
			let opacityImgR = 0.2;
			let opacityImgL3 = 0.2;
			let opacityImgL5 = 0.2;
			let scaleImgR = 0.7;
			let scaleImgL3 = 0.3;
			let scaleImgL5 = 0.7
			let currentScrollTop = 0;
			let previousScrollTop = 0;
			let countScroll = 0;
			let upDownBar = 0;
			let L2stopTop = 0;
			let L3stopTop = 0;
			let L4stopTop = 0;
			let L5stopTop = 0;
			const addScrollImgL = 1/30; 
			const addScrollImgR = 1/20;
			const addScrollBar = 1/0.3;
			const addScaleImgR = 1/45;
			let wait = false;

			/******************************************************************/
	
			// Layout 1 y 2
	
			jQuery('.image-right').css('transform', `scale(${scaleImgR})`);
			jQuery('.image-right').css('opacity', `0`);

			jQuery('.header_bar').css('height', `50px`); 
			jQuery('.header_bar').css('position', `fixed`);
			jQuery('.header_bar').css('width', `100%`);
			jQuery('.header_bar').css('margin-top', `-82px`);
			jQuery('.header_bar').css('opacity', `0`);

			jQuery('.image_bar').css('margin-top', `-99px`);
			jQuery('.image_bar').css('opacity', `0`);

			jQuery('.first-layout-description').css('font-weight', '700');
			jQuery('.first-layout-description').css('letter-spacing', '-0.02em');
			jQuery('.first-layout-description').css('line-height', '1.2');
			jQuery('.first-layout-description').css('-webkit-font-smoothing', 'antialiased');

			jQuery('.second-layout-description').css('font-weight', '700');
			jQuery('.second-layout-description').css('letter-spacing', '-0.02em');
			jQuery('.second-layout-description').css('line-height', '1.2');
			jQuery('.second-layout-description').css('-webkit-font-smoothing', 'antialiased');

			jQuery('.text-box').css('font-weight', '700');
			jQuery('.text-box').css('letter-spacing', '-0.02em');
			jQuery('.text-box').css('line-height', '1.2');
			jQuery('.text-box').css('-webkit-font-smoothing', 'antialiased');

			jQuery('.layout_1_2').css('min-height', '3000px');
			/******************************************************************/

			/******************************************************************/
			// Layout 3
	
			jQuery('.L3ImgLeft').css('transform', `scale(${scaleImgL3})`);
			jQuery('.L3ImgLeft').css('opacity', `0`);
			/******************************************************************/
	
			/******************************************************************/
			// Layout 4
	
			jQuery('.slider').css('transform', `scale(${scaleImgL5})`);
			jQuery('.slider').css('opacity', `0`);
			/******************************************************************/
	
			jQuery(document).ready(function(){
						jQuery(window).scroll(function(){

						//layoutInViewPort = isScrolledIntoView('#Logo') ? 1 : 2;
						//console.log('hola');


						// console.log('Logo', isScrolledIntoView('#Logo'));
						if (isScrolledIntoView('#Logo')) {
							layoutInViewPort = 1
						}

						currentScrollTop = jQuery(this).scrollTop();
						/*console.log('!Logo', !isScrolledIntoView('#Logo'));
						console.log('Layout2', isScrolledIntoView('#image-right'));
						console.log('currentScrollTop', currentScrollTop);
						console.log('previousScrollTop', previousScrollTop);
						console.log('Up o Down', currentScrollTop > previousScrollTop);
						console.log('L3stopTop',L3stopTop);*/

						/*console.log('**************************************************************');
						console.log('bool', !isScrolledIntoView('#L3ImgLeft') && isScrolledIntoView('#slider') && scaleImgL3 >= 1 && currentScrollTop > previousScrollTop);
						console.log('L3ImgLeft', isScrolledIntoView('#L3ImgLeft'));
						console.log('#slider', isScrolledIntoView('#slider'));
						console.log('scaleImg', scaleImgL3);
						console.log('opacityImgR', opacityImgL3);
						console.log('currentScrollTop < previousScrollTop', currentScrollTop > previousScrollTop);*/

						/*console.log('isScrolledIntoView(#L3ImgLeft)', !isScrolledIntoView('#L3ImgLeft'));
						console.log('isScrolledIntoView(#slider)',isScrolledIntoView('#slider'));
						console.log('scaleImgL3', scaleImgL3 );
						console.log('currentScrollTop < previousScrollTop', currentScrollTop < previousScrollTop);*/

						if (isScrolledIntoView('#Logo') && countLayout === 0) {
							layoutInViewPort = 1
							countLayout += 1;	
						} else if (!isScrolledIntoView('#Logo') && isScrolledIntoView('#image-right') && scaleImgR >= 1 && currentScrollTop > previousScrollTop && countLayout === 1) {
							layoutInViewPort = 2;
							countLayout += 1;
						} else if (!isScrolledIntoView('#Logo') && isScrolledIntoView('#image-right') && scaleImgR < 1.1 && currentScrollTop < previousScrollTop && countLayout === 2) {
							layoutInViewPort = 1;
							countLayout -= 1;
						} else if (!isScrolledIntoView('#image-right') && scaleImgR > 1 && opacityImgR < 0 && currentScrollTop > previousScrollTop && countLayout === 2) {
							layoutInViewPort = 3;
							countLayout += 1;
						} else if (!isScrolledIntoView('#L3ImgLeft') && scaleImgL3 < 0.4 && opacityImgL3 <= 0 && currentScrollTop < previousScrollTop && countLayout === 3){
							layoutInViewPort = 2;
							countLayout -= 1;
						} else if (!isScrolledIntoView('#L3ImgLeft') && scaleImgL3 >= 1 && currentScrollTop > previousScrollTop && countLayout === 3) {
							layoutInViewPort = 4;
							countLayout += 1;
						} else if (!isScrolledIntoView('#slider') && !isScrolledIntoView('#L3ImgLeft') && scaleImgL3 <= 1 && opacityImgL3 <= 1  && currentScrollTop < previousScrollTop && countLayout === 4) {
							layoutInViewPort = 3;
							countLayout -= 1;
						} else if (!isScrolledIntoView('#L3ImgLeft') && scaleImgL3 >= 1 && opacityImgL3 <= 0 && currentScrollTop > previousScrollTop && countLayout === 4) {
							layoutInViewPort = 5;
							countLayout += 1;
						} else if (!isScrolledIntoView('#slider') && scaleImgL5 <= 0.3 && opacityImgL5 <= 0 && currentScrollTop < previousScrollTop && countLayout === 5) {
							layoutInViewPort = 4;
							countLayout -= 1;
						}


						switch(layoutInViewPort) {
							case 1:
								console.log('case 1');						
								// baja el scroll
								if (currentScrollTop > previousScrollTop) {
									//console.log('baja');
									countScroll = countScroll + 1;
									opacityImgL = opacityImgL + addScrollImgL;
									opacityImgR = opacityImgL > 0.6 ? opacityImgR + addScrollImgR : 0.2;
									scaleImgR = opacityImgL > 0.6 ? scaleImgR + addScaleImgR : 0.7;
									upDownBar = opacityImgL > 0.4 ? upDownBar + addScrollBar : 0;
									//console.log('opacityImgL', opacityImgL);
									//console.log('opacityImgR', opacityImgR);
									//console.log('upDownBar', upDownBar);					
								} else {		
									//console.log('sube');
									countScroll = countScroll - 1;
									if (jQuery(this).scrollTop() !== 0) {

										console.log('IF jQuery(this).scrollTop() !== 0');

										opacityImgL = opacityImgL - addScrollImgL;
										opacityImgR = opacityImgR - addScrollImgR;
										upDownBar = upDownBar - addScrollBar;
										scaleImgR = scaleImgR - addScaleImgR;

										//console.log('upDownBar', upDownBar);
									} else {
										opacityImgL = 0;
										opacityImgR = 0;
										scaleImgR = 0.7;
										currentScrollTop = 0;
										previousScrollTop = 0;
										countScroll = 0;

										// Image left
										jQuery('.image-left').css('transform', `scale(1)`); // aumenta
										jQuery('.image-left').css('opacity', `1`); // desaparece

										// Image right
										jQuery('.image-right').css('transform', `scale(0.7)`);
										jQuery('.image-right').css('opacity', `0`);  

										// Image logo
										jQuery('.logo').css('transform', `scale(1)`);
										jQuery('.logo').css('opacity', `1`);

										// Image header
										jQuery('.image-header').css('transform', `scale(1)`);
										jQuery('.image-header').css('opacity', `1`);

										//Bar
										jQuery('.header_bar').css('margin-top', `-82px`);
										jQuery('.header_bar').css('transform', `translateY(0px)`);
										jQuery('.image_bar').css('margin-top', `-82px`);
										jQuery('.image_bar').css('transform', `translateY(0px)`);
										jQuery('.image_bar').css('opacity', `${opacityImgR}`);
									}
								}

								previousScrollTop = currentScrollTop;

								if (opacityImgL > 0.4 && opacityImgL <= 1) {
									
									console.log('upDownBar', upDownBar, 'opacityImgR', opacityImgR);
									jQuery('.header_bar').css('transform', `translateY(${upDownBar}px)`);
									jQuery('.header_bar').css('opacity', `${opacityImgR}`);
									jQuery('.image_bar').css('transform', `translateY(${upDownBar}px)`);
									jQuery('.image_bar').css('opacity', `${opacityImgR}`);
									//console.log('upDownBar', upDownBar);
								}

								if (opacityImgL > 0.6) {

									//console.log('reduce imagen derecha')
									// Image left
									jQuery('.image-left').css('transform', `scale(${opacityImgL + 0.4})`); // aumenta
									jQuery('.image-left').css('opacity', `${1 - opacityImgL}`); // desaparece

									// Image logo
									jQuery('.logo').css('transform', `scale(${opacityImgL + 0.4})`);
									jQuery('.logo').css('opacity', `${1 - opacityImgL}`);

									// Image header
									jQuery('.image-header').css('transform', `scale(${opacityImgL + 0.4})`);
									jQuery('.image-header').css('opacity', `${1 - opacityImgL}`);
								}

								if (opacityImgL > 0.6 && opacityImgL <= 1) {
									/* cambia tamaño de la imagen de la derecha */
									jQuery('.image-right').css('transform', `scale(${scaleImgR})`);
									jQuery('.image-right').css('opacity', `${opacityImgR}`);
								} else if (opacityImgR > 1) {
									jQuery('.image-right').css('transform', `scale(1)`);
									jQuery('.image-right').css('opacity', `1`);

									jQuery('.header_bar').css('transform', `translateY(81px)`);
									jQuery('.header_bar').css('opacity', `${opacityImgR}`);

									jQuery('.image_bar').css('transform', `translateY(81px)`);
									jQuery('.image_bar').css('opacity', `${opacityImgR}`);

									L2stopTop = jQuery(this).scrollTop();

									console.log('stopTop', L2stopTop);

									scaleImgR = 1;
									opacityImgR = 1;

									wait = true;
								}
								
								if(opacityImgL > 1 && jQuery(document).width() < 768) {
									jQuery('.header_bar').css('transform', `translateY(81px)`);
									jQuery('.header_bar').css('opacity', `${1}`);

									jQuery('.image_bar').css('transform', `translateY(81px)`);
									jQuery('.image_bar').css('opacity', `${1}`);
								}
								
							break;

							case 2:
								console.log('case 2');						
								// baja el scroll
								if (currentScrollTop > previousScrollTop) {
									//console.log('baja');
									opacityImgR = opacityImgR - addScrollImgR;
									scaleImgR = scaleImgR + addScaleImgR;
									//console.log('opacityImgR', opacityImgR);
									//console.log('scaleImgR', scaleImgR);
								} else {		
									//console.log('sube');
									if (jQuery(this).scrollTop() > L2stopTop) {
										opacityImgR = opacityImgR + addScrollImgR;
										scaleImgR = scaleImgR - addScaleImgR;

										//console.log('opacityImgR', opacityImgR);
										//console.log('scaleImgR', scaleImgR);
									} else {

										/*console.log('subiendo');
										console.log('scaleImgR', scaleImgR);
										console.log('opacityImgR', opacityImgR);*/

										scaleImgR = 0.3;
										opacityImgR = 0;
										// jQuery('.image-right').css('transform', `scale(1)`);
										// jQuery('.image-right').css('opacity', `1`);
										//layoutInViewPort--;
									}
								}

								previousScrollTop = currentScrollTop;


								jQuery('.image-right').css('transform', `scale(${scaleImgR})`);
								jQuery('.image-right').css('opacity', `${opacityImgR}`);

								L3stopTop = jQuery(this).scrollTop();
								// console.log('L3stopTop', L3stopTop);

							break;

							case 3:
								console.log('case 3');
								// baja el scroll
								if (currentScrollTop > previousScrollTop) {
									//console.log('baja');
									opacityImgL3 = opacityImgL3 + addScrollImgR;
									scaleImgL3 = scaleImgL3 + addScaleImgR;


									/*console.log('opacityImgL3', opacityImgL3);
									console.log('scaleImgL3', scaleImgL3);*/
								} else {		
									//console.log('sube');
									if (jQuery(this).scrollTop() > L3stopTop) {
										opacityImgL3 = opacityImgL3 - addScrollImgR;
										scaleImgL3 = scaleImgL3 - addScaleImgR;

										/*console.log('DISMINUYE');
										console.log('opacityImgL3', opacityImgL3);
										console.log('scaleImgL3', scaleImgL3);*/
									} else {

										console.log('subiendo');
										scaleImgL3 = 0.3;
										opacityImgL3 = 0;
										/*console.log('scaleImgL3', scaleImgL3);
										console.log('opacityImgR', opacityImgL3);*/


										// jQuery('.image-right').css('transform', `scale(1)`);
										// jQuery('.image-right').css('opacity', `1`);
										//layoutInViewPort--;
									}
								}

								previousScrollTop = currentScrollTop;


								jQuery('.L3ImgLeft').css('transform', `scale(${scaleImgL3})`);
								jQuery('.L3ImgLeft').css('opacity', `${opacityImgL3}`);
								L4stopTop = jQuery(this).scrollTop();
							break;

							case 4:
								console.log('case 4');						
								// baja el scroll
								if (currentScrollTop > previousScrollTop) {
									//console.log('baja');
									opacityImgL3 = opacityImgL3 - addScrollImgR;
									scaleImgL3 = scaleImgL3 + addScaleImgR;

									/*console.log('opacityImgR', opacityImgL3);
									console.log('scaleImgR', scaleImgL3);*/
								} else {		
									//console.log('sube');
									if (jQuery(this).scrollTop() > L4stopTop) {
										opacityImgL3 = opacityImgL3 + addScrollImgR;
										scaleImgL3 = scaleImgL3 - addScaleImgR;

										/*console.log('opacityImgR', opacityImgL3);
										console.log('scaleImgR', scaleImgL3);*/
									} else {

										scaleImgL3 = 1;
										opacityImgL3 = 1;

										/*console.log('subiendo');
										console.log('scaleImgR', scaleImgL3);
										console.log('opacityImgR', opacityImgL3);*/


										// jQuery('.image-right').css('transform', `scale(1)`);
										// jQuery('.image-right').css('opacity', `1`);
										//layoutInViewPort--;
									}
								}

								previousScrollTop = currentScrollTop;


								jQuery('.L3ImgLeft').css('transform', `scale(${scaleImgL3})`);
								jQuery('.L3ImgLeft').css('opacity', `${opacityImgL3}`);

								L5stopTop = jQuery(this).scrollTop();
								//console.log('L3stopTop', L3stopTop);
							break;

							case 5:
								console.log('case 5');
								// baja el scroll
								if (currentScrollTop > previousScrollTop) {
									//console.log('baja');

									opacityImgL5 = opacityImgL5 + addScrollImgR;
									scaleImgL5 = scaleImgL5 + addScaleImgR;


									/*console.log('opacityImgL5', opacityImgL5);
									console.log('scaleImgL5', scaleImgL5);*/
								} else {		
									//console.log('sube');
									if (jQuery(this).scrollTop() > L5stopTop) {									
										opacityImgL5 = opacityImgL5 - addScrollImgR;
										scaleImgL5 = scaleImgL5 - addScaleImgR;

										/*console.log('DISMINUYE');
										console.log('opacityImgL5', opacityImgL5);
										console.log('scaleImgL5', scaleImgL5);*/
									} else {

										/*console.log('subiendo L5');
										console.log('scaleImgL3', scaleImgL5);
										console.log('opacityImgR', opacityImgL5);*/

										scaleImgL5 = 0.3;
										opacityImgL5 = 0;
										// jQuery('.image-right').css('transform', `scale(1)`);
										// jQuery('.image-right').css('opacity', `1`);
										// layoutInViewPort--;
									}
								}

								previousScrollTop = currentScrollTop;

								jQuery('.slider').css('transform', `scale(${scaleImgL5})`);
								jQuery('.slider').css('opacity', `${opacityImgL5}`);
							break;

							default:
								console.log('case default');
							break;
						}
					}).scroll();
				
			});
		}
//	</script>