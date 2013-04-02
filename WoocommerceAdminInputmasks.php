<?php
/*
Plugin Name: Woocommerce admin input masks
Plugin URI: http://wordpress.org/extend/plugins/woocommerce-admin-input-masks/
Description: It masks some woocommerce inputs on the admin side. For the moment, only the price
Version: 1.1.1
Author: Origgami
Author URI: http://www.origgami.com.br
License: GPL2
*/



class WoocommerceAdminInputmasks {
//put your code here
    
    public function __construct() {
         if(!function_exists('_log')){
            function _log( $message ) {
                if( WP_DEBUG === true ){
                    if( is_array( $message ) || is_object( $message ) ){
                        error_log( print_r( $message, true ) );
                    } else {
                        error_log( $message );
                    }
                }
            }
        }
        
        
       
        //_log(MYPLUGINNAME_PATH);
        $this->addWPActions();
    }
    
   
    
    public function loadAdminJsAndCSS($hook){        
        /*wp_register_script( 'price-format_js', plugins_url('js/jquery.price_format.1.7.min.js', __FILE__),array('jquery') );
        wp_enqueue_script( 'price-format_js' );*/
        
       
        
        if(get_post_type()=='product'){
            //wp_localize_script('mylib', 'WPULRS', array( 'siteurl' => get_option('siteurl') ));
            
            
            wp_register_script( 'autonumeric_js', plugins_url('js/autonumeric.js', __FILE__),array('jquery') );
            wp_enqueue_script( 'autonumeric_js' );
			
			wp_register_script( 'priceformat_js', plugins_url('js/jquery.price_format.1.7.min.js', __FILE__),array('jquery') );
            wp_enqueue_script( 'priceformat_js' );

            wp_register_script( 'livequery_js', plugins_url('js/livequery.js', __FILE__),array('jquery') );
            wp_enqueue_script( 'livequery_js' );

            wp_register_script( 'woocommerce-admin-inputmasks_js', plugins_url('js/woocommerce-admin-inputmasks.js', __FILE__),array('jquery') );
            wp_enqueue_script( 'woocommerce-admin-inputmasks_js' );
            
            wp_localize_script('woocommerce-admin-inputmasks_js', 'admin_inputmasks_vars', array(
                    'woocommerce_price_thousand_sep' => get_option('woocommerce_price_thousand_sep'),
                    'woocommerce_price_decimal_sep' => get_option('woocommerce_price_decimal_sep'),
					'woocommerce_price_num_decimals' => get_option('woocommerce_price_num_decimals')
                )
            );
        }
        //_log('teste: '.  get_post_type());
        
        
        
    }
    
    protected function addWPActions(){  
        add_action('admin_enqueue_scripts', array($this,'loadAdminJsAndCSS'));   
        
        /*add_action('init', array($this, "init"));
        add_action('wp_enqueue_scripts', array($this,'loadFrontEndJsAndCSS'));
        add_action('admin_enqueue_scripts', array($this,'loadAdminJsAndCSS'));       
        add_action('admin_init', array($this,'admin_init'));
        add_action('admin_menu', array($this,'admin_menu'));
        add_action('save_post', array($this,"save_post"));
        add_action("manage_posts_custom_column",  array($this,"manage_posts_custom_column"));
        add_action('wp_login_failed', array($this,'my_front_end_login_fail') );  // hook failed login
        add_action('wp_print_scripts', array($this,'wpPrintScripts') );
        add_action('widgets_init', array($this,'widgetsInit') );     
        add_action('wp_head',array($this,'wpHead'));*/
    }
    
}

$wcAdminInputmasks = new WoocommerceAdminInputmasks();
?>
