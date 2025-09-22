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
            echo $hook;
                if ('service_card_layout_page_service-card-layout' === $hook) {

                wp_enqueue_style('rascl-admin-style', RASCL_DIR_URL . 'build/dashboard.css', false, RASCL_VERSION);
                wp_enqueue_script('rascl-admin-script', RASCL_DIR_URL . 'build/dashboard.js', ['react', 'react-dom', 'wp-data', "wp-api", "wp-util", "wp-i18n"], RASCL_VERSION, true);
            }
        }

        public function adminMenu()
        {

            add_submenu_page(
                "edit.php?post_type=service_card_layout",
                __('Dashboard - Service Card Layout', 'service-card-layout'),
                __('Dashboard', 'service-card-layout'),
                'manage_options',
                'service-card-layout',
                [$this, 'renderDashboardPage']
            );
        }




        public function renderDashboardPage()
        {
        ?>
            <div
                id='rasclDashboard'
                data-info='<?php echo esc_attr(wp_json_encode([
                                'version' => RASCL_VERSION,
                                // 'isPremium' => apbIsPremium(),
                                // 'hasPro' => APB_HAS_PRO
                            ])); ?>'></div>
        <?php
        }
    }
    new rasclAdminMenu();
}
