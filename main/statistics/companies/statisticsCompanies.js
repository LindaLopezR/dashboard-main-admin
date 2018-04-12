import { Template } from 'meteor/templating';

import './statisticsCompanies.html';

Template.statisticsCompanies.rendered = function() {
  $('#statistics').DataTable({
    "paging": true,
    "ordering": true,
    "info": false,
    "autoWidth": false
  });
};

Template.statisticsCompanies.helpers({
  showStatisticsCompanies() {
    return true;
  },
  getStatisticsCompanies() {
    return [{}, {}];
  }
});

Template.statisticsCompanies.events({
	'click .btn-info' : function(e) {
		e.preventDefault();
    Router.go('companyDashboard', {id:Meteor.userId()});
    //Boton redirecciona a: /companyDashboard - Es el dashboard de la empresa seleccionada
	}

});
