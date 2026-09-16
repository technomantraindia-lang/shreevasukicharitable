<?php
/**
 * Shortcode to display current year dynamically.
 * Usage: [year]
 */
function current_year() { 
    $year = date('Y'); 
    return $year; 
} 
add_shortcode('year', 'current_year');
