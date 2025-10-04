<?php

if (!defined('ABSPATH')) {
    exit;
}



if (!class_exists('rasclAdminMenu')) {

    class rasclAdminMenu
    {

        public function __construct()
        {
            add_action('admin_enqueue_scripts', [$this, 'adminEnqueueScripts']);
            add_action('admin_menu', [$this, 'adminMenu']);
        }

        public function adminEnqueueScripts($hook)
        {
            if ('rascl_page_service-card-layout-help' === $hook) {

                wp_enqueue_style('rascl-admin-style', RASCL_DIR_URL . 'build/admin-dashboard.css', false, RASCL_VERSION);
                wp_enqueue_script('rascl-admin-script', RASCL_DIR_URL . 'build/admin-dashboard.js', ['react', 'react-dom', 'wp-data', "wp-api", "wp-util", "wp-i18n"], RASCL_VERSION, true);
            }
        }

        public function adminMenu()
        {


            add_submenu_page(
                "edit.php?post_type=rascl",
                __('Help & Demo - Service Card Layout', 'service-card-layout'),
                __('Help & Demo', 'service-card-layout'),
                'manage_options',
                'service-card-layout-help',
                [$this, 'renderHelpAndDemoPage'],

            );
        }




        public function renderHelpAndDemoPage()
        {
?>
            <div
                id='rasclHelpAndDemo'
                data-info='<?php echo esc_attr(wp_json_encode([
                                'version' => RASCL_VERSION,
                                'isPremium' => rasclIsPremium(),
                                'hasPro' => RASCL_HAS_PRO
                            ])); ?>'></div>
<?php
        }
    }
    new rasclAdminMenu();
}
