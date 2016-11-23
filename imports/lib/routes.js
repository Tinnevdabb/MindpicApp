import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';


import '../ui/latestupdates.js';
import '../ui/login.js';
import '../ui/reflectiontextarea.js';
import '../ui/camera.js';
import '../ui/uploadimage.js';

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
FlowRouter.route('/reflectiontextarea',{
	name: 'reflectiontextarea',
  	action() {
    	BlazeLayout.render('reflectiontextarea',{main:'reflectiontextarea'});
  	},
});


FlowRouter.route('/camera',{
	name: 'camera',
  	action() {
    	BlazeLayout.render('camera',{main:'camera'});
  	},
});

FlowRouter.route('/uploadimage',{
	name: 'camera',
  	action() {
    	BlazeLayout.render('uploadimage',{main:'uploadimage'});
  	},
});
