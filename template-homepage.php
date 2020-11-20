<?php
/**
 * Template Name: Homepage
 */

$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;

$posts_args = array(
    'numberposts' => 3,
    'post_type'   => 'post',
    'order'       => 'ASC'
);
$context['posts'] = Timber::get_posts( $posts_args );

Timber::render(array('template-homepage.twig'), $context);
