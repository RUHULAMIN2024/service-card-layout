<?php

if (!defined('ABSPATH')) {
	exit;
}

class rasclCPT
{
	public $post_type = 'rascl';

	public function __construct()
	{
		add_action('admin_enqueue_scripts', [$this, 'adminEnqueueScripts']);
		add_action('init', [$this, 'onInit']);
		add_shortcode('rascl', [$this, 'onAddShortcode']);
		add_filter('manage_rascl_posts_columns', [$this, 'manageRASCLPostsColumns'], 10);
		add_action('manage_rascl_posts_custom_column', [$this, 'manageRASCLPostsCustomColumns'], 10, 2);
	}

	function adminEnqueueScripts($hook)
	{
		if ('edit.php' === $hook) {
			wp_enqueue_style('rascl-admin-post', RASCL_DIR_URL . 'build/admin-post.css', [], RASCL_VERSION);

			wp_enqueue_script('rascl-admin-post', RASCL_DIR_URL . 'build/admin-post.js', [], RASCL_VERSION, true);
		}
	}

	function onInit()
	{
		$menuIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 512 512' fill='#fff'><path d='m294.416 447.644 56.28-62.302-47.401-27.367-25.815 79.891c-3.315 10.257 9.71 17.777 16.936 9.778z' /><path d='m496.995 77.21c-14.349-8.284-32.696-3.368-40.981 10.981l-15 25.981 51.962 30 15-25.981c8.284-14.349 3.368-32.696-10.981-40.981z' /><path d='m301.995 246.396h160v60h-160z' transform='matrix(.5 -.866 .866 .5 -48.368 469.016)' /><path d='m429.495 138.143h30v60h-30z' transform='matrix(.5 -.866 .866 .5 76.632 469.016)' /><path d='m302 0h-247c-30.376 0-55 24.624-55 55v25h302z' /><path d='m131.607 225.393 19.199 19.199 28.194-37.592c6-8 18-8 24 0l33 44v-80h-160v88.787l34.393-34.394c5.858-5.858 15.356-5.858 21.214 0z' /><path d='m97.213 281h47.574l-23.787-23.787z' /><path d='m172.234 266.021 14.979 14.979h33.787l-30-40z' /><path d='m432 69.786v-14.786c0-30.376-24.624-55-55-55h-45v80h94.103z' /><path d='m380.317 397.305-63.64 70.449c-7.603 8.418-18.376 13.246-29.551 13.246-.001 0 0 0-.001 0-12.838 0-25.024-6.214-32.599-16.622-2.991-4.11-5.101-8.641-6.329-13.378h-187.197c-8.284 0-15-6.716-15-15s6.716-15 15-15h190.402l12.925-40h-203.327c-8.284 0-15-6.716-15-15s6.716-15 15-15h213.021l4.102-12.695c.974-3.015 2.264-5.919 3.849-8.663l126.81-219.642h-408.782v347c0 30.376 24.624 55 55 55h322c30.376 0 55-24.624 55-55v-147.215l-46.104 79.855c-1.585 2.744-3.455 5.314-5.579 7.665zm-334.317-241.305c0-8.284 6.716-15 15-15h190c8.284 0 15 6.716 15 15v140c0 8.284-6.716 15-15 15h-190c-8.284 0-15-6.716-15-15z' /></svg>";

		register_post_type('rascl', [
			'labels' => [
				'name'			=> __('Service Card Layouts', 'service-card-layout'),
				'singular_name'	=> __('Service Card Layout', 'service-card-layout'),
				'add_new'		=> __('Add New', 'service-card-layout'),
				'add_new_item'	=> __('Add New Service Card Layout', 'service-card-layout'),
				'edit_item'		=> __('Edit Service Card Layout', 'service-card-layout'),
				'new_item'		=> __('New Service Card Layout', 'service-card-layout'),
				'view_item'		=> __('View Service Card Layout', 'service-card-layout'),
				'search_items'	=> __('Search Service Card Layouts', 'service-card-layout'),
				'not_found'		=> __('Sorry, we couldn\'t find the Service Card Layout you are looking for.', 'service-card-layout')
			],
			'public' => true,
			'show_in_rest' => true,
			"publicly_queryable" => true,
			'capability_type'		=> 'page',
			'rewrite'				=> ['slug' => 'rascl'],
			'menu_position' => 2,
			'menu_icon' => 'dashicons-layout',
			'supports' => ['title', 'editor', 'author', 'thumbnail'],
			'template' => [["rascl/service-card-layout"]],
			// 'template_lock' => 'all',

		]);
	}

	function onAddShortcode($atts)
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

	function manageRASCLPostsColumns($defaults)
	{
		unset($defaults['date']);
		$defaults['shortcode'] = 'ShortCode';
		$defaults['date'] = 'Date';
		return $defaults;
	}

	function manageRASCLPostsCustomColumns($column_name, $post_ID)
	{
		if ($column_name == 'shortcode') {
			echo '<div class="bPlAdminShortcode" id="bPlAdminShortcode-' . esc_attr($post_ID) . '">
				<input value="[rascl id=' . esc_attr($post_ID) . ']" onclick="copyBPlAdminShortcode(\'' . esc_attr($post_ID) . '\')">
				<span class="tooltip">' . esc_html__('Copy To Clipboard', 'service-card-layout') . '</span>
			</div>';
		}
	}
}
new rasclCPT();
