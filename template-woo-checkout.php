<?php
/*
Template Name: Checkout
*/

$context = Timber::get_context();
$context['post'] = new TimberPost();
$template = ['template-checkout.twig'];
Timber::render($template, $context);