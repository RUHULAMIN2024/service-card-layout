<?php

/**
 * Plugin Name: Service Card Layout 
 * Description: Short description of the plugin
 * Version: 1.0.0
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: service-card-layout
 * @fs_premium_only /freemius
 * @fs_free_only /freemius-lite
 */

// ABS PATH
if (!defined('ABSPATH')) {
	exit;
}



if (function_exists('scl_fs')) {
	scl_fs()->set_basename(true, __FILE__);
} else {


	// Constant
	define('RASCL_VERSION', isset($_SERVER['HTTP_HOST']) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0');
	define('RASCL_DIR_URL', plugin_dir_url(__FILE__));
	define('RASCL_DIR_PATH', plugin_dir_path(__FILE__));
	define('RASCL_HAS_PRO', file_exists(dirname(__FILE__) . '/freemius/start.php'));



	if (! function_exists('scl_fs')) {
		function scl_fs()
		{
			global $scl_fs;

			if (! isset($scl_fs)) {
				// Include Freemius SDK.
				if (RASCL_HAS_PRO) {
					require_once dirname(__FILE__) . '/freemius/start.php';
				} else {
					require_once dirname(__FILE__) . '/freemius-lite/start.php';
				}

				$rasclConfig =	array(
					'id'                  => '20851',
					'slug'                => 'service-card-layout',
					'type'                => 'plugin',
					'public_key'          => 'pk_4fbd049b3187ec723341e81b89a80',
					'is_premium'          => true,
					'premium_suffix'      => 'SCL Pro',
					// If your plugin is a serviceware, set this option to false.
					'has_premium_version' => true,
					'has_addons'          => false,
					'has_paid_plans'      => true,
					// Automatically removed in the free version. If you're not using the
					// auto-generated free version, delete this line before uploading to wp.org.
					'wp_org_gatekeeper'   => 'OA7#BoRiBNqdf52FvzEf!!074aRLPs8fspif$7K1#4u4Csys1fQlCecVcUTOs2mcpeVHi#C2j9d09fOTvbC0HloPT7fFee5WdS3G',
					'trial'               => array(
						'days'               => 7,
						'is_require_payment' => false,
					),
					'menu'                => array(
						'slug'           => 'edit.php?post_type=rascl',
						'first-path'     => 'edit.php?post_type=rascl',
						'support'        => false,
					),
				);

				$scl_fs = RASCL_HAS_PRO ? fs_dynamic_init($rasclConfig) : fs_lite_dynamic_init($rasclConfig);
			}

			return $scl_fs;
		}

		scl_fs();
		do_action('scl_fs_loaded');
	}




	function rasclIsPremium()
	{
		return RASCL_HAS_PRO ? scl_fs()->can_use_premium_code() : false;
	}


	require_once RASCL_DIR_PATH . 'includes/admin/CPT.php';
	require_once(RASCL_DIR_PATH . 'includes/admin/Menu.php');


	if (!class_exists('RASCLPlugin')) {
		class RASCLPlugin
		{
			function __construct()
			{
				add_action('init', [$this, 'onInit']);



				add_action('wp_ajax_rasclPremiumChecker', [$this, 'rasclPremiumChecker']);
				add_action('wp_ajax_nopriv_rasclPremiumChecker', [$this, 'rasclPremiumChecker']);
				add_action('admin_init', [$this, 'registerSettings']);
				add_action('rest_api_init', [$this, 'registerSettings']);
			}


			function rasclPremiumChecker()
			{
				$nonce = sanitize_text_field(wp_unslash($_POST['_wpnonce'] ?? ''));

				if (!wp_verify_nonce($nonce, 'wp_ajax')) {
					wp_send_json_error('Invalid Request');
				}

				wp_send_json_success([
					'isPipe' => rasclIsPremium()
				]);
			}

			function registerSettings()
			{
				register_setting('rasclUtils', 'rasclUtils', [
					'show_in_rest' => [
						'name' => 'rasclUtils',
						'schema' => ['type' => 'string']
					],
					'type' => 'string',
					'default' => wp_json_encode(['nonce' => wp_create_nonce('wp_ajax')]),
					'sanitize_callback' => 'sanitize_text_field'
				]);
			}




			function onInit()
			{
				register_block_type(__DIR__ . '/build');
			}
		}
		new RASCLPlugin();
	}
}
