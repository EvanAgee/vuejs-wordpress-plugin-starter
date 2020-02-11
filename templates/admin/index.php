<h1>Vue WordPress</h1>
<div id="vwp-plugin"></div>

<?php if ( preg_match("/(.*.loc|localhost:.*|.*.local)/i", $_SERVER['HTTP_HOST']) ) : ?>
  <!-- BrowserSync for local development -->
<script id="__bs_script__">//<![CDATA[
document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.26.7'><\/script>".replace("HOST", location.hostname));
//]]></script>
<?php endif; ?>
