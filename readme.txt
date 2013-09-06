=== Plugin Name ===
Contributors: karzin
Tags: woocommerce, mask, input, format, admin
Requires at least: 3.0.1
Tested up to: 3.5
Donate link: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=U3MFXJRKLYDMC
Stable tag: 1.1.1
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

It masks some woocommerce inputs on the admin side. For the moment, only the price.

== Description ==

Woocommerce simply doesn't use any type of mask on the admin side. So while you are registering your products, you can mistype your price by accident, for example typing a letter instead of a number, or using a wrong decimal separator.

Whenever it's possible, this plugin creates masks using native Woocommerce configurations that are already in use on the front end, so it can work on the admin side too.

[WooCommerce](http://wordpress.org/extend/plugins/woocommerce/) must be installed and active.

Please [help me and my company with some bucks](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=U3MFXJRKLYDMC) and i'll gladly keep developing this plugin.

### Description in portuguese: ###

O plugin do Woocommerce simplesmente n&atilde;o usa nenhuma m&aacute;scara para os campos que estao no admin. Ent&atilde;o as vezes sem querer, voc&ecirc; pode acabar digitando o pre&ccedil;o de um produto errado, colocando uma letra no lugar de um n&uacute;mero ou usando uma v&iacute;rgula no lugar de um ponto.

Sempre que poss&iacute;vel, esse plugin cria m&aacute;scaras usando as pr&oacute;prias configura&ccedil;&otilde;es do Woocommerce que j&aacute; funcionam no front end, de maneira que funcionem tamb&eacute;m no admin

#### Credits: ####
[Autonumeric jQuery plugin](http://www.decorplanit.com/plugin/)

== Installation ==

1. Upload `plugin-name.php` to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress

== Frequently Asked Questions ==

= What type of inputs are supported? =

It works only for prices, for now

= Why does my price input get red some times? =

Woocommerce only accepts numbers and dots as characters for price inputs, even if you have set you want commas or other characters. And that is how woocommerce says you typed wrong. Painting it red.
But don't worry about it. This plugin accepts these characters the way you want. I'll try to override this Woocommerce's feature someday

== Screenshots ==

1. Type comfortably on the admin side using masks in your favor
2. Whenever it's possible, this plugin creates masks using native Woocommerce configurations that are already in use on the front end, so they can work on the admin side too.

== Changelog ==

= 1.1.1 =
* Added support to simple products

= 1.1 =
* Added support to number of decimals
* Adjusted bug where newer versions of woocommerce could break the plugin. Now, cloned inputs are converted to text inputs

= 1.0 =
* Plugin's creation. 