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
 */

// ABS PATH
if (!defined('ABSPATH')) {
	exit;
}

// Constant
define('RASCL_VERSION', isset($_SERVER['HTTP_HOST']) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0');
define('RASCL_DIR_URL', plugin_dir_url(__FILE__));
define('RASCL_DIR_PATH', plugin_dir_path(__FILE__));

if (!class_exists('RASCLPlugin')) {
	class RASCLPlugin
	{
		function __construct()
		{
			add_action('init', [$this, 'onInit']);
			add_action('admin_menu', [$this, 'register_custom_menu']);

			add_filter('manage_service_card_layout_posts_columns', [$this, 'manageColumns']);
			add_action('manage_service_card_layout_posts_custom_column', [$this, 'manageCustomColumns'], 10, 2);
			add_shortcode('service_card_layout', [$this, 'service_card_layout_shortcode']);
			add_action('admin_enqueue_scripts', [$this, 'rascl_admin_enqueue_script']);

			// Plugin activation hook
			register_activation_hook(__FILE__, [$this, 'rascl_plugin_activation']);

			// Admin init hook to handle redirect
			add_action('admin_init', [$this, 'rascl_plugin_redirect']);
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


		function register_custom_menu()
		{

			add_submenu_page(
				'edit.php?post_type=service_card_layout',                 // Parent slug
				'About Service Card',             // Page title
				'About Service Card',             // Menu title
				'manage_options',              // Capability
				'about-service-card',             // Menu slug
				array($this, 'about_page') // Callback function
			);
		}




		function about_page()
		{
			echo '<div class="wrap">';
			echo '<h2>About Service Card Layout</h2>
			<p>Service Card Layout is a custom Gutenberg block plugin that allows you to showcase your services, features, or products in a modern and responsive card-based grid design. With easy customization options, you can create visually appealing sections that perfectly fit your website style.</p>
			<h2>👉 With this plugin, you can:</h2>
			<ul>
				<li>Add icon, title, and description for each service.</li>
				<li>Control responsive layouts (Desktop, Tablet, Mobile) with adjustable column settings.</li>
				<li>Customize each card with padding, border, radius, background, and shadow options.</li>
				<li>Use Wide and Full Width alignment for seamless integration into your page layout.</li>
				<li>Enjoy a lightweight and performance-friendly block that works with any WordPress theme.</li>
			</ul>

			<h2>🔹 Best Use Cases:</h2>
			<ul>
				<li>Service sections</li>
				<li>Feature highlights</li>
				<li>Product listings</li>
				<li>Team member showcases</li>
				<li>Any type of structured content you want to present in a stylish way.</li>
			</ul>';

			echo '</div>';
		}



		// Plugin activation function
		function rascl_plugin_activation()
		{
			// Set a transient to trigger redirect
			set_transient('rascl_activation_redirect', true, 30);
		}

		// Handle redirect after activation
		function rascl_plugin_redirect()
		{
			// Check if we should redirect
			if (get_transient('rascl_activation_redirect')) {
				// Delete the transient
				delete_transient('rascl_activation_redirect');

				// Don't redirect if activating from network, or bulk
				// phpcs:ignore WordPress.Security.NonceVerification.Recommended -- WP core adds this param on bulk activation
				if (isset($_GET['activate-multi'])) {
					return;
				}

				// Redirect to service card layout post type
				wp_safe_redirect(
					admin_url('edit.php?post_type=service_card_layout&page=about-service-card')
				);
				exit;
			}
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
				wp_enqueue_style('shortcode-css', RASCL_DIR_URL . './build/shortcode.css',[], RASCL_VERSION);
			}
		}
	}
	new RASCLPlugin();
}
