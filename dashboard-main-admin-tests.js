// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by dashboard-main-admin.js.
import { name as packageName } from "meteor/dashboard-main-admin";

// Write your tests here!
// Here is an example.
Tinytest.add('dashboard-main-admin - example', function (test) {
  test.equal(packageName, "dashboard-main-admin");
});
