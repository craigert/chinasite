<!DOCTYPE html>
<head>
<?php print $head; ?>
<title><?php print $head_title; ?></title>
<?php print $styles; ?>
<script type="text/javascript" src="https://code.jquery.com/jquery-1.7.0.js?v=1.7.0"></script>
<!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
</head>
<body class="<?php print $classes; ?>"<?php print $attributes; ?>>
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>
  <?php print $scripts; ?>
  <script type="text/javascript" src="/sites/all/modules/flexslider/assets/js/flexslider.load.js"></script>
</body>
</html>