if(document.querySelector('nav.woocommerce-breadcrumb')){
// Убрать надпись "Главная" со ссылки на главную в хлебных крошках, для компактности
	document.querySelector('nav.woocommerce-breadcrumb a').textContent = "";
//привернуть к заголовку страницы новинок ссылку на главную
	let cupPage = document.location.pathname;
	if(cupPage.indexOf("mmotw-alt") > -1){
		var curH1 = jQuery('h1.entry-title').html();
		//console.log(curH1);
		curH1 += ' <span style="font-size:11pt">[<a href="/">&#9668;&nbsp;на главную</a>]</span>';
		jQuery('h1.entry-title').html(curH1); 
		jQuery('div#custom_html-2').hide();
	}else jQuery('div#custom_html-2').show();
}
//поместить хлебные крошки в шапку сайта, чтобы всегда висели вверху экрана
jQuery('.woocommerce-breadcrumb').appendTo('div.storefront-primary-navigation');
//подогнать высоту элементов верхнего меню под их контейнер
var menuH = jQuery("div.storefront-primary-navigation").height();
jQuery("div.primary-navigation").height(menuH);
jQuery("#menu-osnovnoe-menju").height(menuH);
// прокрутить страницу до заголовка
jQuery("html, body").animate({
        //scrollTop: jQuery("h1.page-title").offset().top
		scrollTop: 20
    }, {
        duration: 370,   // по умолчанию «400»
        easing: "linear" // по умолчанию «swing»
    });
// изменить текст описания сайта в шапке
function changeSiteDescr(descr){
	jQuery("p.site-description").html(descr);
}
//определение типа устройства, с которого смотрят сайт (смартфон или комп)
function isMobile(){
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
        return true;
      }
      return false;
}
// выровнять высоту блоков товаров на главной
function adjustGoodSize(){
	let $ = jQuery;
	$.fn.limitHeight = function(max){
	  var limit = (max) ? 'max' : 'min';
	  return this.height( Math[limit].apply(this, $(this).map(function(i,e){
	   return $(e).height();
	  }).get() ) );
	};
	$('div.woocommerce li.product').limitHeight(true);
}

function adjustHeaderCart(){
	let siteHeaderCart = jQuery('#site-header-cart');
	//спрятать корзину в шапке, если мобила - портрет
	//if(screen.orientation.type == 'portrait-primary') {
	if(screen.orientation.type.indexOf('portrait') > -1) {
		siteHeaderCart.css("border","0");
		siteHeaderCart.css("display","none");
		changeSiteDescr("Исторические миниатюры");
		return;
	}
	// иначе подогнать по высоте под контейнер
	let navH = jQuery('div.primary-navigation').css("height");
	siteHeaderCart.css("display",'inline-block');
	siteHeaderCart.css("height", navH);
	siteHeaderCart.css("border", "2px solid white");
	changeSiteDescr("Исторические миниатюры из пьютера");
}
adjustHeaderCart();
if(!isMobile()){
	adjustGoodSize();
}

// скрыть / отобразить виджет Storefront "предыдущий-следующий товар"
function showSFnav(){
	let storeFrontPaginator = jQuery('nav.storefront-product-pagination');
	let siteWelcome = jQuery('div#custom_siteWelcome');
	let bodyW = parseInt(jQuery('body').css('width'));
	if(bodyW < 975){
		storeFrontPaginator.hide();
		siteWelcome.css("height","14vw");
		siteWelcome.css("overflow-y","auto");
	}else storeFrontPaginator.show();
	return bodyW;
}
showSFnav();
//вернуть отступ слева для виджета категорий
function catLeft(){
	var pageW = parseInt(jQuery('body').css('width'));
	var siteW = parseInt(jQuery('#primary').css("width")); 
	var catW = parseInt(jQuery('#secondary').css("width")); 
	var catL = (pageW + siteW - catW)/2 + 16 + "px";
	return catL;
}
//поместить виджет категорий под шапкой, в правой части страницы
function fixNav_custom(){
	var $masthead = jQuery('#masthead'); // шапка сайта
	var $secondary = jQuery('#secondary'); // виджет категорий
	var $content = jQuery('#primary'); // контейнер всего сайта
	var $window = jQuery(window);
	//console.log("orientation = " + $window.orientation);
	var $scrollTop = $window.scrollTop();
	var $body = jQuery('body');
	var pageW = parseInt($body.css('width'));
	var pageH = parseInt(screen.height);
	var catTadjust = 45.0;
	if (pageW < 1000) catTadjust = 32.0;
	if (pageW > 1399){
		jQuery('#headerReplace').css("height","195px");
		//console.log(pageW);
		if(jQuery("nav.woocommerce-breadcrumb").length){
			//console.log(jQuery("nav.woocommerce-breadcrumb").height());
			catTadjust += (jQuery("nav.woocommerce-breadcrumb").height() + 11);
		}
	}
	if ($scrollTop > 7){
		if(pageW > pageH){
			var siteW = parseInt($content.css("width"));
			var catW = parseInt($secondary.css("width"));
			var catT = (parseFloat($masthead.css('height'))) + catTadjust + 'px';
			var catL = (pageW + siteW - catW)/2 + 16 + "px";
			$secondary.addClass('customCatFixed');
			$secondary.css({
				width: catW,
				top: catT,
				left: catL
			});
		}else{
			$secondary.removeClass('customCatFixed');
			//console.log(pageW + '<' + pageH);
		}
	}
	else{
		//window.scrollBy(0, -15);
		/*jQuery("html, body").animate({
			//scrollTop: jQuery("h1.page-title").offset().top
			scrollTop: 20
		}, {
			duration: 370,   // по умолчанию «400»
			easing: "linear" // по умолчанию «swing»
		});*/
	}
}
//jQuery(window).on("scroll", fixNav_custom);
if(!isMobile()){jQuery(window).on("scroll", fixNav_custom);}
//выравнивать / подгонять верхнее меню и т.п. при изменении размера окна
jQuery(window).resize(function(){
	let menuH = jQuery("div.storefront-primary-navigation").height();
	jQuery("div.primary-navigation").height(menuH);
	jQuery("#menu-osnovnoe-menju").height(menuH);
	//console.log(jQuery(this).width());
	adjustHeaderCart();
	var bodyW = showSFnav(); // + show/hide Storefront paginator
	if(!isMobile()){
		var catL = catLeft();
		jQuery('#secondary').css({left: catL});
	}
	let storeFrontPaginator = jQuery('nav.storefront-product-pagination');
	
	if(bodyW < 975){
		storeFrontPaginator.hide();
	}else storeFrontPaginator.show();
	if(bodyW > 1099 && bodyW < 1400){
		jQuery('nav.woocommerce-breadcrumb').css("top", "-5px");
	}else if(bodyW > 974 && bodyW < 1100){
		jQuery('nav.woocommerce-breadcrumb').css("top", "-10px");
	}else if(bodyW > 752 && bodyW < 975){
		//jQuery('.storefront-primary-navigation').addClass('primaryNavSmall');
		//jQuery('#site-header-cart').addClass('cartNavSmall');
		//jQuery('nav.woocommerce-breadcrumb').css("margin-top", breadCrumbMarg -5 + "px");
		jQuery('nav.woocommerce-breadcrumb').addClass('breadcrumbUp');
		//jQuery('nav.woocommerce-breadcrumb').css("margin-top", "-15px");
	}else{
		//jQuery('.storefront-primary-navigation').removeClass('primaryNavSmall');
		//jQuery('#site-header-cart').removeClass('cartNavSmall');
		//jQuery('nav.woocommerce-breadcrumb').css("margin-top", breadCrumbMarg +5 + "px");
		jQuery('nav.woocommerce-breadcrumb').removeClass('breadcrumbUp');
		if(bodyW > 1399) jQuery('nav.woocommerce-breadcrumb').css("margin-top", "0px");
	}
	/*if(bodyW < 753){
		jQuery('.storefront-primary-navigation').addClass('hiddenPrimaryNav');
	}else jQuery('.storefront-primary-navigation').removeClass('hiddenPrimaryNav');*/
	
});
//jQuery(window).resize(fixNav_custom);

// добавление сообщения о цветах покраски в краткое описание товара
var $ = jQuery;
var artikul = $('div.woocommerce-product-details__short-description').find(':last-child').text();
artikul = artikul.substr( -3 );
var curShortDescr = $('div.woocommerce-product-details__short-description').find(':first-child').text();
var PriceMsg = " ВНИМАНИЕ! На сайте указаны розничные цены. Для оптовых покупателей цена обговаривается.";
if(artikul == 'clr') {
	curShortDescr += " Цвета покраски могут отличаться от видимых на фотографии. По предзаказу изготовление в росписи от 7 дней.";
}else{
	curShortDescr += " По предзаказу возможно изготовление в сувенирной и полуколлекционной росписи. Срок изготовления - от 7 дней.";
}
$('div.woocommerce-product-details__short-description').find(':first-child').text(curShortDescr + PriceMsg);

// изменить ссылки на соцсети в плагине Sassi Social Share
	var $sss_telega = jQuery('a.heateor_sss_button_telegram');
	var $sss_vk = jQuery('a.heateor_sss_button_vkontakte');
	$sss_telega.attr("href","https://t.me/mmotw");
	$sss_vk.attr("href","https://vk.com/mmotw_site");

// Изменить текст кнопки вариативного товара
	jQuery('a.product_type_variable').text("Выбрать");
	jQuery('.wc-variation-selection-needed').text("Купить");

// Убрать слово "Отображение" из счетчика в пагинации товаров
	jQuery('p.woocommerce-result-count').each(function(){
		let curTxt = jQuery(this).html();
		jQuery(this).html(curTxt.replace("Отображение ",""));
	});
// Поместить виджет Вакансий над подвалом
	jQuery('div#custom_html-3').appendTo('main#main');
	
// задать всплывающие подсказки для ссылок главного меню
	jQuery("ul#menu-osnovnoe-menju li a").each(function(){
		let capt = jQuery(this).text();
		jQuery(this).attr("title", capt);
	});