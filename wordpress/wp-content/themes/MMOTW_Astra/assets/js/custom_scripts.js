const $ = jQuery;
var cupPage = document.location.pathname;
//console.log("cupPage = " + cupPage);
var curMenuColor = $("li#menu-item-9935 a").css("color");
var mainMenuItem = $("ul#ast-hf-menu-1 li a");
var mainMenuHover = "rgb(255,177,0) !important";
//var curMenuColorHov = $("li#menu-item-9935 a:hover").css("color");
//console.log("curMenuColor=" + curMenuColorHov);
$("li.astm-search-menu a").css({"color":curMenuColor});
$("li#menu-item-9706 a").css({"color":curMenuColor});
$("ul#ast-hf-menu-1 li:hover").css({"color":mainMenuHover});

function isPortrait(){//проверка положения экрана
	if(screen.orientation.type.indexOf('portrait') == -1) return false;
	return true;
}

if(cupPage == "/"){
	var promoVideo = $("div#html5_video_custom");
	if(promoVideo.length){
		promoVideo.css({"width":"60%"});
	}
	//$("li#menu-item-9935").hide();
	mainMenuItem.mouseover(function(){$(this).css({"background":"gray"})});
	mainMenuItem.mouseout(function(){$(this).css({"background":"none"})});
}else{
	mainMenuItem.mouseover(function(){$(this).css({"color":mainMenuHover})});
	mainMenuItem.mouseout(function(){$(this).css({"color":curMenuColor})});
}
/*поместить форму поиска внизу шапки, чтобы не перекрывала элементы, когда экран портретный*/
/*function arrangeSearch(){
	if(isPortrait()){
		//$("div.uagb-ifb-title-wrap").append($("<h4>" + $("form.is-search-form").css("top") + "</h4>"));
		if(cupPage == "/"){
			$("div.uagb-ifb-title-wrap").append($("form.is-search-form"));
			$("form.is-search-form").css({"margin-bottom":"15px","width":"70%","margin-left":"auto","margin-right":"auto"});
			$("ul#ast-hf-menu-1").remove("li:first");
		}
	}	
}*/
//arrangeSearch();
/*сдвинуть шапку вниз, если просмотр сайта из админки*/
let $wpadmin = $("div#wpadminbar");
if(!isMobile()){
	if($wpadmin.length) {
		$("header#masthead").css("top","-6px");
		$("form.is-search-form").css("top","30px");
	}else{
		$("header#masthead").css("top","0px");
		$("form.is-search-form").css("top","0px");
	}
}
/*Исправлять Search Results for*/
if(location.href !== "https://mmotw.ru/"){
	let $searchHdr = $("h1.ast-archive-title");
	if($searchHdr.length){
	   	var curTtl = $searchHdr.html();
		//console.log(curTtl);
		if (curTtl.indexOf("Search Results") > -1){
			var searchWrd = '"' + $("h1.ast-archive-title span").html() + '"';
			$searchHdr.html("Результаты поиска по: " + searchWrd);
		} 
	}
	//$("div#ast-desktop-header").css("background-image","url('https://mmotw.ru/wp-content/uploads/2024/01/panno2_30_1850x150_.jpg') !important");
	//$("div#ast-desktop-header").css("background-color","lightyellow !important");
	$("div#ast-desktop-header").css("border-bottom","2px solid lightgray");
}
/*исправить мобильное меню*/
var mobMenu = '<ul class="main-header-menu ast-nav-menu ast-flex  submenu-with-border astra-menu-animation-fade  stack-on-mobile">';
if(location.href !== "https://mmotw.ru/"){
	mobMenu += '<li class="menu-item"><a href="/" class="menu-link">Главная</a></li>';
}
mobMenu += '<li class="page_item page-item-3621 menu-item"><a href="/mmotw-alt/" class="menu-link">Новые, популярные, лидеры продаж</a></li>';
mobMenu += '<li class="page_item page-item-4729 menu-item"><a href="/kategorii-tovarov/" class="menu-link">Категории товаров</a></li>';
mobMenu += '<li class="page_item page-item-17 menu-item"><a href="/mmotw.ru/contact/" class="menu-link">Контакты</a></li>'; 
//mobMenu += '<li class="page_item page-item-6 menu-item"><a href="/mmotw.ru/cart/" class="menu-link">Корзина</a></li>'; 
mobMenu += '<li class="page_item page-item-18 menu-item"><a href="/mmotw.ru/blog/" class="menu-link">Новости</a></li>'; 
mobMenu += '<li class="page_item page-item-9701 menu-item"><a href="/mmotw.ru/about/" class="menu-link">О нас</a></li>'; 
mobMenu += '<li class="page_item page-item-2172 menu-item"><a href="/mmotw.ru/dogovor-oferta-internet-magazina/" class="menu-link">Договор-оферта</a></li>'; 
mobMenu += '<li class="page_item page-item-3507 menu-item"><a href="/mmotw.ru/oplata-dostavka/" class="menu-link">Оплата Доставка</a></li>'; 
mobMenu += '<li class="page_item page-item-37 menu-item"><a href="/mmotw.ru/refund_returns/" class="menu-link">Политика возврата</a></li>'; 
mobMenu += '<li class="page_item page-item-3 menu-item"><a href="/mmotw.ru/privacy-policy/" class="menu-link">Политика конфиденциальности</a></li>';
mobMenu += '</ul>';
$("div#ast-hf-mobile-menu").html(mobMenu);
/*добавить подсказки для иконок в гл. меню*/
$("div#ast-site-header-cart").attr("title","в корзину");
$("div.ast-header-account-wrap").attr("title","вход/регистрация");
/**/
if($("nav.woocommerce-breadcrumb").length){
	//убрать текст из ссылки на главную в хлебных крошках
	//document.querySelector('nav.woocommerce-breadcrumb a').textContent = "";
	//привернуть к заголовку страницы новинок ссылку на главную
	if(cupPage.indexOf("mmotw-alt") > -1){
		var curH1 = $('h1.entry-title').html();
		//console.log(curH1);
		curH1 += ' <span style="font-size:11pt">[<a href="/">&#9668;&nbsp;на главную</a>]</span>';
		$('h1.entry-title').html(curH1); 
	};
}
/*скрыть секцию товаров со скидкой, если таких товаров нет*/
if(!$("div#on_sale_custom div.woocommerce").html()) $("div#on_sale_custom").hide();
/*поместить артикул и вариации товара под его заголовок в ячейке товара*/
$("li.ast-article-single").each(function(){
	$(this).find("div.astra-shop-thumbnail-wrap").append($(this).find("a.ast-loop-product__link"));
	$(this).find("div.astra-shop-thumbnail-wrap").append($(this).find("div.cfvsw_variations_form"));
	$(this).find("div.astra-shop-summary-wrap").prepend($(this).find("div.customArt"));
	
	let enabledelems = $(this).find('div.cfvsw-swatches-container>div:not(".cfvsw-swatches-blur-disable")');
	if(enabledelems.length == 1) $(this).find("div.cfvsw_variations_form").hide();
	//$(this).find("div.customArt").html(enabledelems.length);
	//$(this).find("div.cfvsw-swatches-blur-disable").remove();
});
/*добавить пагинацию в начало секции рекомендуемых товаров*/
function paginationToTop(){
	if(!isPortrait()){
		// не выполнять, если уже есть
		var curClone = $("nav#pagination_clone");
		if(curClone.length) return;
		// выполнение
		var navWcPagination = $("nav.woocommerce-pagination");
		if(navWcPagination.length){
			var wc_pagination_clone = navWcPagination.clone();
			wc_pagination_clone.attr("id","pagination_clone");
			var wc_resCount = $("p.woocommerce-result-count");
			wc_resCount.before(wc_pagination_clone);
			let wc_resCountTxt = wc_resCount.html().replace("Отображение","");
			wc_resCount.html(wc_resCountTxt);
			wc_pagination_clone.append("<span>&nbsp;&nbsp;</span>");
			wc_pagination_clone.append(wc_resCount);
			wc_pagination_clone.append("<span>&nbsp;&nbsp;</span>");
			wc_pagination_clone.append($("form.woocommerce-ordering"));
		}
	}	
}
$( window ).on('load resize orientationchange', paginationToTop());
/*paginationToTop();
window.addEventListener("resize", paginationToTop());
window.addEventListener("orientationchange", paginationToTop());*/
/*Добавить слово "Категория" к названию категории на single-стр. товара*/
if(cupPage.indexOf("product/") > -1){
	$("span.single-product-category").prepend("<span>Категория:&nbsp;</span>");
	$("h1.product_title").after($("span.single-product-category"));
}

//определение типа устройства, с которого смотрят сайт (смартфон или комп)
function isMobile(){
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
        return true;
      }
      return false;
}

// добавление сообщения о цветах покраски в краткое описание товара
var artikul = $('div.woocommerce-product-details__short-description').find(':last-child').text();
artikul = artikul.substr( -3 );
var curShortDescr = $('div.woocommerce-product-details__short-description').find(':first-child').html();
var PriceMsg = "<br>ВНИМАНИЕ! На сайте указаны розничные цены. Для оптовых покупателей цена обговаривается.";
var curBreadCrumbs = $("nav.woocommerce-breadcrumb").html();
if (curBreadCrumbs && !curBreadCrumbs.includes("Акриловые краски")){
	if(artikul == 'clr') {
	curShortDescr += " Цвета покраски могут отличаться от видимых на фотографии. По предзаказу изготовление в росписи от 7 дней.";
	}else{
		curShortDescr += " По предзаказу возможно изготовление в сувенирной и полуколлекционной росписи. Срок изготовления - от 7 дней.";
	}
}
$('div.woocommerce-product-details__short-description').find(':first-child').html(curShortDescr + PriceMsg);
// опустить заголовок в шапке, если мобила,чтобы не перекрывать моб. меню
if(isMobile()){
	$("h1.uagb-ifb-title").css({"position":"relative","top":"25px"});
}
// Поместить виджет Вакансий над подвалом
//	jQuery('div#custom_html-3').appendTo('main#main');
	
// задать всплывающие подсказки для ссылок главного меню
	/*jQuery("ul#menu-osnovnoe-menju li a").each(function(){
		let capt = jQuery(this).text();
		jQuery(this).attr("title", capt);
	});*/