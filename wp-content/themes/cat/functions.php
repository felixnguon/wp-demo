<?php
/**
 * Cat functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Cat
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function cat_setup() {
	/*
		* Make theme available for translation.
		* Translations can be filed in the /languages/ directory.
		* If you're building a theme based on Cat, use a find and replace
		* to change 'cat' to the name of your theme in all the template files.
		*/
	load_theme_textdomain( 'cat', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
		* Let WordPress manage the document title.
		* By adding theme support, we declare that this theme does not use a
		* hard-coded <title> tag in the document head, and expect WordPress to
		* provide it for us.
		*/
	add_theme_support( 'title-tag' );

	/*
		* Enable support for Post Thumbnails on posts and pages.
		*
		* @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		*/
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(
		array(
			'menu-1' => esc_html__( 'Primary', 'cat' ),
		)
	);

	/*
		* Switch default core markup for search form, comment form, and comments
		* to output valid HTML5.
		*/
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);

	// Set up the WordPress core custom background feature.
	add_theme_support(
		'custom-background',
		apply_filters(
			'cat_custom_background_args',
			array(
				'default-color' => 'ffffff',
				'default-image' => '',
			)
		)
	);

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

	/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		)
	);
}
add_action( 'after_setup_theme', 'cat_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function cat_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'cat_content_width', 640 );
}
add_action( 'after_setup_theme', 'cat_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function cat_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'cat' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'cat' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'cat_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function cat_scripts() {
	wp_enqueue_style( 'cat-style', get_stylesheet_uri(), array(), _S_VERSION );
	wp_enqueue_style( 'cat-block-style', get_stylesheet_directory_uri() . '/build/block/block.module.css', array(), _S_VERSION );

	wp_style_add_data( 'cat-style', 'rtl', 'replace' );

	wp_enqueue_script( 'cat-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'cat_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}




  if ( ! function_exists( 'cat_register_block_category' ) ) {

    // wordpress version check and load filter for block category

    if( version_compare( $GLOBALS['wp_version'], '5.7', '<' ) ) {
        add_filter( 'block_categories', 'cat_register_block_category', 10, 2 );
    } else {
        add_filter( 'block_categories_all', 'cat_register_block_category', 10, 2 );
    }

    /**
     * Register custom category for blocks
     */

    function cat_register_block_category( $categories, $post ) {
        return array_merge(
            array(
                array(
                    'slug'  => 'custom-blocks',
                    'title' => __( 'Custom Blocks', 'custom-blocks' ),
                ),
            ),
            $categories,
        );
    }

  }

// Load block assets for wp-admin when editor is active
function cat_gutenberg_assets() {
	$blockPath = '/build/block';

	wp_enqueue_script(
		'cat_editor_script',
		get_stylesheet_directory_uri() .$blockPath.'/editor.js',
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'  ),
		filemtime( get_template_directory() . $blockPath )
	);


	wp_enqueue_style(
		'cat_editor_style',
		get_stylesheet_directory_uri() .$blockPath.'/editor.module.css',
		array(),
		filemtime( get_template_directory() . $blockPath )
	);
}

add_action( 'enqueue_block_editor_assets', 'cat_gutenberg_assets' );

function cat_custom_block_block_init() {

	$blocks = [
		'cat/hero1'
	];

	foreach($blocks as $block) {
		register_block_type( $block, array(
			'editor_script' => 'cat-editor-script',
			'editor_style'  => 'cat-editor-style',
			'style'         => 'cat-custom-block-style',
    		)
		);
	};

	wp_register_style(
        'cat_block_style',
       	get_stylesheet_directory_uri() . '/build/block/style.css',
        array()
        // filemtime( get_stylesheet_directory_uri() . 'style.css' )
    );
}

add_action( 'init', 'cat_custom_block_block_init' );
