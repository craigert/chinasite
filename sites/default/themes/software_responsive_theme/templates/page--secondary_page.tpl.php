<?php
/**
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * Available variables:
 *
 * General utility variables:
 * - $base_path: The base URL path of the Drupal installation. At the very
 *   least, this will always default to /.
 * - $directory: The directory the template is located in, e.g. modules/system
 *   or themes/garland.
 * - $is_front: TRUE if the current page is the front page.
 * - $logged_in: TRUE if the user is registered and signed in.
 * - $is_admin: TRUE if the user has permission to main-menu administration pages.
 *
 * Site identity:
 * - $front_page: The URL of the front page. Use this instead of $base_path,
 *   when linking to the front page. This includes the language domain or
 *   prefix.
 * - $logo: The path to the logo image, as defined in theme configuration.
 * - $site_name: The name of the site, empty when display has been disabled
 *   in theme settings.
 * - $site_slogan: The slogan of the site, empty when display has been disabled
 *   in theme settings.
 *
 * Navigation:
 * - $main_menu (array): An array containing the Main menu links for the
 *   site, if they have been configured.
 * - $secondary_menu (array): An array containing the Secondary menu links for
 *   the site, if they have been configured.
 * - $breadcrumb: The breadcrumb trail for the current page.
 *
 * Page content (in order of occurrence in the default page.tpl.php):
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title: The page title, for use in the actual HTML content.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 * - $messages: HTML for status and error messages. Should be displayed
 *   prominently.
 * - $tabs (array): Tabs linking to any sub-pages beneath the current page
 *   (e.g., the view and edit tabs when displaying a node).
 * - $action_links (array): Actions local to the page, such as 'Add menu' on the
 *   menu administration interface.
 * - $feed_icons: A string of all feed icons for the current page.
 * - $node: The node object, if there is an automatically-loaded node
 *   associated with the page, and the node ID is the second argument
 *   in the page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - $page['help']: Dynamic help text, mostly for admin pages.
 * - $page['content']: The main content of the current page.
 * - $page['sidebar_first']: Items for the first sidebar.
 * - $page['sidebar_second']: Items for the second sidebar.
 * - $page['header']: Items for the header region.
 * - $page['footer']: Items for the footer region.
 *
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see template_process()
 */
?>
<?php
  if($is_front){
    $title = ''; // This is optional ... it removes the default Welcome to @site-name
    $page['content']['system_main']['default_message'] = array(); // This will remove the 'No front page content has been created yet.'
  }
?>

<?php print render($page['header_top_section']); ?>

  <div id="inner_header_wrapper">

    <header id="header" role="banner">

      <!-- <div class="top_left"> -->
		<div>

        <?php if ($logo): ?>
          <div id="logo">
            <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>">
              <img src="<?php print $logo; ?>"/>
            </a>
          </div>
        <?php endif; ?>
		  
		<nav id="main-menu"  role="navigation">
			<a class="nav-toggle" href="#">Navigation</a>
			  <div class="menu-navigation-container">

			  	<?php if ($page['top_first']): ?>
					<div id="top-area" class="clearfix">
					  <?php if ($page['top_first']): ?>
						<?php print render($page['top_first']); ?>
					  <?php endif; ?>
					</div>
				<?php endif; ?>

				<?php
				  /* $main_menu_tree = menu_tree(variable_get('menu_main_links_source', 'main-menu'));
				  print drupal_render($main_menu_tree); */
				?>
			  </div>
			<div class="clear"></div>
		</nav><!-- end main-menu -->

        <h1 id="site-title">
          <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>"><?php print $site_name; ?></a>
          <div id="site-description"><?php print $site_slogan; ?></div>
        </h1>
      </div>

    <div class="clear"></div>
    </header>

  </div>

  <div class="menu_wrapper">
   
  </div>

</div>

<?php if ($is_front): ?>
  
  <?php print render($page['slideshow']); ?>

  <?php print render($page['front_welcome']); ?>
         
  <?php if ($page['top_first']): ?>
    <div id="top-area" class="clearfix">
      <?php if ($page['top_first']): ?>
      <div class="column"><?php print render($page['top_first']); ?></div>
      <?php endif; ?>
    </div>
  <?php endif; ?>
   
<?php endif; ?>

<div class="content">
	
    <section id="post-content" role="main">
		<?php print $messages; ?>
		<?php print render($title_prefix); ?>
		<?php if (!empty($tabs['#primary'])): ?><div class="tabs-wrapper"><?php print render($tabs); ?></div><?php endif; ?>
		<?php print render($page['help']); ?>
		<?php if ($action_links): ?><ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?>
		<?php print render($page['content']); ?>
    </section> <!-- /#main -->

</div>

<?php print render($page['footer_section']); ?>

<script type="text/javascript">
  jQuery(document).ready(function($) {
    jQuery("#block-superfish-1 ul.menu").superfish({ 
            delay: 0,
			animation: { height:'show' },
			speed: 0,
			autoArrows: false,
			dropShadows: false,
			disableHI: true // true disables hoverIntent detection              
        });
  });
</script>