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
            <div class="swiper-slide"><?php echo $attributes['startingText'] ?></div>
            <div class="swiper-slide"><?php echo $attributes['startingText'] ?></div>
            <div class="swiper-slide"><?php echo $attributes['startingText'] ?></div>
            <div class="swiper-slide"><?php echo $attributes['startingText'] ?></div>
            <div class="swiper-slide"><?php echo $attributes['startingText'] ?></div>
            <div class="swiper-slide"><?php echo $attributes['startingText'] ?></div>
            <div class="swiper-slide"><?php echo $attributes['startingText'] ?></div>
        </div>
    </div>

    <div class="h4">
	    <?php echo $attributes['title'] ?>
    </div>
    <p>
	    <?php echo $attributes['content'] ?>
    </p>
</section>

