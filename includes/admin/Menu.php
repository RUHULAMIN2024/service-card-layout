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
            if ('toplevel_page_service-card-layout' === $hook) {

                wp_enqueue_style('rascl-admin-style', RASCL_DIR_URL . 'build/admin-dashboard.css', false, RASCL_VERSION);
                wp_enqueue_script('rascl-admin-script', RASCL_DIR_URL . 'build/admin-dashboard.js', ['react', 'react-dom', 'wp-data', "wp-api", "wp-util", "wp-i18n"], RASCL_VERSION, true);
            }
        }

        public function adminMenu()
        {
            add_menu_page(
                __('Service Card Layout', 'service-card-layout'),
                __('Service Card Layout', 'service-card-layout'),
                'manage_options',
                'service-card-layout',
                '',
                'dashicons-layout',
                2
            );

            add_submenu_page(
                "service-card-layout",
                __('Dashboard - Service Card Layout', 'service-card-layout'),
                __('Dashboard', 'service-card-layout'),
                'manage_options',
                'service-card-layout',
                [$this, 'renderDashboardPage'],
                0
            );
        }




        public function renderDashboardPage()
        {
?>
            <div
                id='rasclDashboard'
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
