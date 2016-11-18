import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';


import '../ui/latestupdates.js';
import '../ui/login.js';

FlowRouter.route('/',{
	name: 'login',
  	action() {
    	BlazeLayout.render('login');
  	},
});

FlowRouter.route('/latestupdates',{
	name: 'latestupdates',
  	action() {
    	BlazeLayout.render('latestupdates',{main:'login'});
  	},
});

FlowRouter.route('/camera',{
	name: 'camera',
  	action() {
    	BlazeLayout.render('camera',{main:'login'});
  	},
});
