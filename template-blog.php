<?php
/**
 * Template Name: Blog
 */

$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;

$posts_args = array(
    'numberposts' => -1,
    'post_type'   => 'post',
    'order'       => 'ASC'
);
$context['posts'] = Timber::get_posts( $posts_args );

Timber::render(array('template-blog.twig'), $context);
