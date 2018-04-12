import { Template } from 'meteor/templating';

import './mainDashboard.html';
import './statistics/companies/statisticsCompanies.js';
import './statistics/map/statisticsMap.js';
import './statistics/serverStatistics/statisticsServer.js';
import './statistics/newUsers/statisticsUsers.js';

Template.mainDashboard.rendered = function(){
  $('.sparkbar').each(function () {
    var $this = $(this);
    $this.sparkline('html', {
      type: 'bar',
      height: $this.data('height') ? $this.data('height') : '30',
      barColor: $this.data('color')
    });
  });
};

Template.mainDashboard.helpers({
  // MOBILE REQUEST
  getMobileRequest() {
    return 60 +' / ' + 120;
  },
  getMobilePercentage() {
    return 20;
  },
  // EMAIL REQUEST
  getEmailRequest() {
    return 500 +' / ' + 520;
  },
  getEmailPercentage() {
    return 90;
  },
  // REPORTS REQUEST
  getReportsRequest() {
    return 50 +' / ' + 100;
  },
  getReportsPercentage() {
    return 50;
  },
  // DETAILS
  getTotalCompanies() {
    return 200;
  },
  getTotalHours() {
    return 83 + ' : ' + 14;
  },
  getIncidenceAnswered() {
    return 466;
  },
  getIncidenceNoAnswered() {
    return 66;
  },
  //STADISTICS MAP
  //VISITS TOTALES
  getVisitsGraphics() {
    return 90 + ',' + 70 + ',' + 90 + ',' + 70+ ',' + 75 + ',' + 80 + ',' + 70;
  },
  getVisitsTotal() {
    return 890;
  },
  //ONLINE
  getOnlineGraphics() {
    return 10 + ',' + 60 + ',' + 9 + ',' + 43 + ',' + 56 + ',' + 18 + ',' + 32;
  },
  getOnlineTotal() {
    return 234;
  },
  //EXISTENTS
  getExistsGraphics() {
    return 35 + ',' + 30 + ',' + 20 + ',' + 43 + ',' + 40 + ',' + 28 + ',' + 32;
  },
  getExistsTotal() {
    return 34;
  },
});
