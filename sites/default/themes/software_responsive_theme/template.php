<?php
/**
 * Implements hook_html_head_alter().
 * This will overwrite the default meta character type tag with HTML5 version.
 */
function software_html_head_alter(&$head_elements) {
  $head_elements['system_meta_content_type']['#attributes'] = array(
    'charset' => 'utf-8'
  );
}

/**
 * Overrides theme_field()
 * Remove the hard coded classes so we can add them in preprocess functions.
 */
 
function software_field($variables) {
  $output = '';
 
  // Render the label, if it's not hidden.
  if (!$variables['label_hidden']) {
    $output .= '<div ' . $variables['title_attributes'] . '>' . $variables['label'] . ':&nbsp;</div>';
  }
 
  // Render the items.
  $output .= '<div ' . $variables['content_attributes'] . '>';
  foreach ($variables['items'] as $delta => $item) {
    $output .= '<div ' . $variables['item_attributes'][$delta] . '>' . drupal_render($item) . '</div>';
  }
  $output .= '</div>';
 
  // Render the top-level DIV.
  $output = '<div class="' . $variables['classes'] . '"' . $variables['attributes'] . '>' . $output . '</div>';
 
  return $output;
}

/**
 * Implements hook_preprocess_field()
 */
 
function software_preprocess_field(&$vars) {
  /* Set shortcut variables. Hooray for less typing! */
  $name = $vars['element']['#field_name'];
  $bundle = $vars['element']['#bundle'];
  $mode = $vars['element']['#view_mode'];
  $classes = &$vars['classes_array'];
  $title_classes = &$vars['title_attributes_array']['class'];
  $content_classes = &$vars['content_attributes_array']['class'];
  $item_classes = array();
 
  /* Global field classes */
  $classes[] = 'field-wrapper';
  $title_classes[] = 'field-label';
  $content_classes[] = 'field-items';
  $item_classes[] = 'field-item';
 
  /* Uncomment the lines below to see variables you can use to target a field */
  // print '<strong>Name:</strong> ' . $name . '<br/>';
  // print '<strong>Bundle:</strong> ' . $bundle  . '<br/>';
  // print '<strong>Mode:</strong> ' . $mode .'<br/>';
 
  /* Add specific classes to targeted fields */
  switch ($mode) {
    /* All teasers */
    case 'teaser':
      switch ($name) {
        /* Teaser read more links */
        case 'node_link':
          $item_classes[] = 'more-link';
          break;
        /* Teaser descriptions */
        case 'body':
        case 'field_description':
          $item_classes[] = 'description';
          break;
      }
      break;
  }
 
  switch ($name) {
    case 'field_authors':
      $title_classes[] = 'inline';
      $content_classes[] = 'authors';
      $item_classes[] = 'author';
      break;
  }
 
  // Apply odd or even classes along with our custom classes to each item */
  foreach ($vars['items'] as $delta => $item) {
    $vars['item_attributes_array'][$delta]['class'] = $item_classes;
    $vars['item_attributes_array'][$delta]['class'][] = $delta % 2 ? 'even' : 'odd';
  }
}

/**
 * Insert themed breadcrumb page navigation at top of the node content.
 */
function software_breadcrumb($variables) {
  $breadcrumb = $variables['breadcrumb'];
  if (!empty($breadcrumb)) {
    // Use CSS to hide title .element-invisible.
    $output = '<h2 class="element-invisible">' . t('You are here') . '</h2>';
    // comment below line to hide current page to breadcrumb
	$breadcrumb[] = drupal_get_title();
	$breadcrumb[0] = '<a class="glyphicon glyphicon-home" href="/" title=""></a>';
    $output .= '<nav class="breadcrumb knockout-top-to-bottom">' . implode(' ', $breadcrumb) . '</nav>';
    return $output;
  }
}

/**
 * Override or insert variables into the page template.
 */
function software_preprocess_page(&$vars) {
  if (isset($vars['main_menu'])) {
    $vars['main_menu'] = theme('links__system_main_menu', array(
      'links' => $vars['main_menu'],
      'attributes' => array(
        'class' => array('links', 'main-menu', 'clearfix'),
      ),
      'heading' => array(
        'text' => t('Main menu'),
        'level' => 'h2',
        'class' => array('element-invisible'),
      )
    ));
  }
  else {
    $vars['main_menu'] = FALSE;
  }
  if (isset($vars['secondary_menu'])) {
    $vars['secondary_menu'] = theme('links__system_secondary_menu', array(
      'links' => $vars['secondary_menu'],
      'attributes' => array(
        'class' => array('links', 'secondary-menu', 'clearfix'),
      ),
      'heading' => array(
        'text' => t('Secondary menu'),
        'level' => 'h2',
        'class' => array('element-invisible'),
      )
    ));
  }
  else {
    $vars['secondary_menu'] = FALSE;
  }

  // To add Secondary Page template
  if (isset($vars['node'])) {  
    $vars['theme_hook_suggestions'][] = 'page__'. $vars['node']->type;
  }
}

/**
 * Duplicate of theme_menu_local_tasks() but adds clearfix to tabs.
 */
function software_menu_local_tasks(&$variables) {
  $output = '';

  if (!empty($variables['primary'])) {
    $variables['primary']['#prefix'] = '<h2 class="element-invisible">' . t('Primary tabs') . '</h2>';
    $variables['primary']['#prefix'] .= '<ul class="tabs primary clearfix">';
    $variables['primary']['#suffix'] = '</ul>';
    $output .= drupal_render($variables['primary']);
  }
  if (!empty($variables['secondary'])) {
    $variables['secondary']['#prefix'] = '<h2 class="element-invisible">' . t('Secondary tabs') . '</h2>';
    $variables['secondary']['#prefix'] .= '<ul class="tabs secondary clearfix">';
    $variables['secondary']['#suffix'] = '</ul>';
    $output .= drupal_render($variables['secondary']);
  }
  return $output;
}

/**
 * Override or insert variables into the node template.
 */
function software_preprocess_node(&$variables) {
  $node = $variables['node'];
  if ($variables['view_mode'] == 'full' && node_is_page($variables['node'])) {
    $variables['classes_array'][] = 'node-full';
  }
}

function software_preprocess_html(&$vars) {
  // Add font awesome cdn.
  drupal_add_css('//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.css', array(
      'type' => 'external'
  ));
}

function software_page_alter(&$page) {
  // <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
  $viewport = array(
    '#type' => 'html_tag',
    '#tag' => 'meta',
    '#attributes' => array(
    'name' =>  'viewport',
    'content' =>  'width=device-width'
    )
  );
  drupal_add_html_head($viewport, 'viewport');

  // Add breadcrumbs to content
 $page['content']['system_main']['nodes'][1]['body']['#object']['body']['und'][0] = array(
    '#markup' => '<div class="container breadcrumbs-wrap"><nav class="breadcrumb"></nav></div>',
    '#weight' => -1000
  );
}

function software_get_page_node(&$page) {
 	return (isset($page['content']['system_main']['nodes'])) ?  $page['content']['system_main']['nodes'][array_shift(array_keys($page['content']['system_main']['nodes']))]["#node"] : false;
}

function software_js_alter(&$javascript) {
    $javascript['misc/jquery.js']['data'] = 'https://code.jquery.com/jquery-1.7.0.js';
    $javascript['misc/jquery.js']['version'] = '1.7.0';
	$javascript['sites/all/modules/flexslider/assets/js/flexslider.load.js']['scope'] = 'header'; 
}

function software_form_alter(&$form, &$form_state, $form_id) {
  if($form_id == "search_form") {
     $form['#access'] = FALSE;
  }
}
?>
