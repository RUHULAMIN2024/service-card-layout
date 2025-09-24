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
	register_activation_hook(__FILE__, function () {
		if (is_plugin_active('services-card-layout/services-card-layout.php')) {
			deactivate_plugins('services-card-layout/services-card-layout.php');
		}
		if (is_plugin_active('service-card-layout-premium/services-card-layout.php')) {
			deactivate_plugins('service-card-layout-premium/services-card-layout.php');
		}
	});
} else {


	// Constant
	define('RASCL_VERSION', isset($_SERVER['HTTP_HOST']) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0');
	define('RASCL_DIR_URL', plugin_dir_url(__FILE__));
	define('RASCL_DIR_PATH', plugin_dir_path(__FILE__));
	define('RASCL_HAS_PRO', file_exists(dirname(__FILE__) . '/freemius/start.php'));





	if (! function_exists('scl_fs')) {
		// Create a helper function for easy SDK access.
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
						'slug'           => 'edit.php?post_type=service_card_layout',
						'first-path'     => 'edit.php?post_type=service_card_layout&page=service-card-layout',
						'support'        => false,
					),
				);

				$scl_fs = RASCL_HAS_PRO ? fs_dynamic_init($rasclConfig) : fs_lite_dynamic_init($rasclConfig);
			}

			return $scl_fs;
		}

		// Init Freemius.
		scl_fs();
		// Signal that SDK was initiated.
		do_action('scl_fs_loaded');
	}




	function rasclIsPremium()
	{
		return RASCL_HAS_PRO ? scl_fs()->can_use_premium_code() : false;
	}

	require_once(RASCL_DIR_PATH . 'includes/admin/Menu.php');



	if (!class_exists('RASCLPlugin')) {
		class RASCLPlugin
		{
			function __construct()
			{
				add_action('init', [$this, 'onInit']);

				add_filter('manage_service_card_layout_posts_columns', [$this, 'manageColumns']);
				add_action('manage_service_card_layout_posts_custom_column', [$this, 'manageCustomColumns'], 10, 2);
				add_shortcode('service_card_layout', [$this, 'service_card_layout_shortcode']);
				add_action('admin_enqueue_scripts', [$this, 'rascl_admin_enqueue_script']);


				add_action('wp_ajax_rasclPremiumChecker', [$this, 'rasclPremiumChecker']);
				add_action('wp_ajax_nopriv_rasclPremiumChecker', [$this, 'rasclPremiumChecker']);
				add_action('admin_init', [$this, 'registerSettings']);
				add_action('rest_api_init', [$this, 'registerSettings']);
			}


			function rasclPremiumChecker()
			{
				$nonce = sanitize_text_field($_POST['_wpnonce'] ?? null);

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
				register_post_type('service_card_layout', [
					'labels' => [
						'name'                  => _x('Service Card Layouts', 'Post type general name', 'service-card-layout'),
						'singular_name'         => _x('Service Card Layout', 'Post type singular name', 'service-card-layout'),
						'add_new'               => __('Add New', 'service-card-layout'),
						'add_new_item'          => __('Add New Service Card Layout', 'service-card-layout'),
						'new_item'              => __('New Service Card Layout', 'service-card-layout'),
						'edit_item'             => __('Edit Service Card Layout', 'service-card-layout'),
						'view_item'             => __('View Service Card Layout', 'service-card-layout'),
						'item_published'        => __('Service Card Layout published.', 'service-card-layout'),
						'item_updated'          => __('Service Card Layout updated.', 'service-card-layout'),
						'search_items'          => __('Search Service Card Layouts', 'service-card-layout'),
						'not_found'             => __('No Service Card Layouts found.', 'service-card-layout'),
					],
					'public' => true,
					'show_in_rest' => true,
					// "publicly_queryable" => false,
					'menu_position' => 2,
					'menu_icon' => 'dashicons-layout',
					'supports' => ['title', 'editor', 'author', 'thumbnail'],
					'template' => [["rascl/service-card-layout"]],
					// 'template_lock' => 'all',

				]);
			}


			function manageColumns($defaults)
			{
				unset($defaults['date']);
				$defaults['shortcode'] = 'ShortCode';
				$defaults['date'] = 'Date';
				return $defaults;
			}

			function manageCustomColumns($column_name, $post_id)
			{
				if ($column_name == 'shortcode') {
					echo '<div class="bPlAdminShortcode" id="bPlAdminShortcode-' . esc_attr($post_id) . '">
						<input value="[service_card_layout id=' . esc_attr($post_id) . ']" onclick="copyBPlAdminShortcode(\'' . esc_attr($post_id) . '\')" readonly>
						<span class="tooltip">Copy To Clipboard</span>
					  </div>';
				}
			}

			function service_card_layout_shortcode($atts)
			{
				$post_id = $atts['id'];
				$post = get_post($post_id);

				if (!$post) {
					return '';
				}

				if (post_password_required($post)) {
					return get_the_password_form($post);
				}

				switch ($post->post_status) {
					case 'publish':
						return $this->displayContent($post);

					case 'private':
						if (current_user_can('read_private_posts')) {
							return $this->displayContent($post);
						}
						return '';

					case 'draft':
					case 'pending':
					case 'future':
						if (current_user_can('edit_post', $post_id)) {
							return $this->displayContent($post);
						}
						return '';

					default:
						return '';
				}
			}

			function displayContent($post)
			{
				$blocks = parse_blocks($post->post_content);
				return render_block($blocks[0]);
			}

			function rascl_admin_enqueue_script()
			{
				global $typenow;

				if ('service_card_layout' === $typenow) {
					wp_enqueue_script('shortcode-js', RASCL_DIR_URL . './build/shortcode.js', [], RASCL_VERSION, true);
					wp_enqueue_style('shortcode-css', RASCL_DIR_URL . './build/shortcode.css', [], RASCL_VERSION);
				}
			}
		}
		new RASCLPlugin();
	}
}
