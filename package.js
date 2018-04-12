Package.describe({
  name: 'igoandsee:dashboard-main-admin',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1.1');
  api.use('blaze-html-templates@1.0.4');
  api.use('ecmascript');
  api.use('templating');
  api.mainModule('dashboard-main-admin.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('dashboard-main-admin');
  api.mainModule('dashboard-main-admin-tests.js');
});
