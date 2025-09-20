<?php
$id = wp_unique_id( 'bBlocksTestPurpose-' );
?>
<div <?php echo get_block_wrapper_attributes(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
     id="<?php echo esc_attr( $id ); ?>"
     data-attributes="<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>">
</div>