<?php
$classes = array();
$classes[] = '-section-element';

$block_attributes = array();

if (!empty($attributes)) {
	if (!empty($attributes['anchor']) || !empty($attributes['id'])) {
		$block_attributes['id'] = !empty($attributes['anchor']) ? $attributes['anchor'] : $attributes['id'];
	}
}

$block_attributes['class'] = trim(implode(' ', $classes));

print_r($attributes);
?>
<section <?php echo get_block_wrapper_attributes($block_attributes); ?>>
    <div class="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
        </div>
    </div>
</section>

<div class="st-item">
    <div class="st-item__drag-handle"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8 7h2V5H8v2zm0 6h2v-2H8v2zm0 6h2v-2H8v2zm6-14v2h2V5h-2zm0 8h2v-2h-2v2zm0 6h2v-2h-2v2z"></path></svg></div>
    <div class="st-item__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at aut blanditiis dolorem doloremque molestias quasi quibusdam ratione tempore tenetur! Ab atque culpa dicta harum hic odit porro sit unde!</div>
</div>
