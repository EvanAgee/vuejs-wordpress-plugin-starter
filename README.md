![image](https://res.cloudinary.com/evanagee/image/upload/v1580244758/VueWP/VWP-hero.png)

# vuejs-wordpress-plugin-starter

- Browsersync for auto refreshing during local development
- webpack to handle all of the assets

## Getting Started

- Clone the repo inside of your `wp-content/plugins` directory
- Rename the cloned plugin directory, `vwp-plugin.php` and the files inside of the `inc/` directory to suite your needs.
- Review the contents of vwp-plugin.php making sure to replace any occurances of `vwp-plugin`, `vwp_plugin` and `VwpPlugin` with your own namespacing.
- Navigate to the plugin's directory and run
  `npm install`
  `npm run watch` for development
  `npm run build` when you're ready to deploy the plugin.
- Note `templates/admin/index.php` is the base PHP template for the plugin settings UI. It has an element `<div id="vwp-plugin"></div>` where the Vue app is getting mounted.
- The provided Vue template can be found in `src/vue/App.vue`.
- Activate the plugin in WordPress
- Get to work!
