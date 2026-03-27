<?php
add_action( 'woocommerce_after_shop_loop_item_title', 'ats_shop_sku' );
function ats_shop_sku() {
global $product;
echo '<div class="customArt">Артикул: ' . $product->sku . '</div>';
}

add_action( 'wp_enqueue_scripts', 'true_enqueue_js_and_css' );
function true_enqueue_js_and_css() {
 	// CSS
	wp_enqueue_style( 
		'custom_css', // идентификатор стиля
		get_stylesheet_directory_uri() . '/assets/css/custom_css.css',  // URL стиля
		array(), // без зависимостей
		'1.0' // версия, это например ".../custom_css.css?ver=1.0"
	);
	// JavaScript
	wp_enqueue_script( 
		'custom_scripts', // идентификатор скрипта
		get_stylesheet_directory_uri() . '/assets/js/custom_scripts.js', // URL скрипта
		array( 'jquery' ), // зависимости от других скриптов
		//time(),
		filemtime( get_stylesheet_directory() . '/assets/js/custom_scripts.js' ), // версия-дата изменения файла
		// dirname( __FILE__ )
		true // true - в футере, false – в хедере
	);
// echo get_stylesheet_directory_uri();
}