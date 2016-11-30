import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';


import '../ui/latestupdates.js';
import '../ui/login.js';
import '../ui/reflectiontextarea.js';
import '../ui/camera.js';
import '../ui/uploadimage.js';
import '../ui/contactmenu.js';
import '../ui/register.js';
import '../ui/test.js';

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
    	BlazeLayout.render('takePhoto',{main:'takePhoto'});
  	},
});

FlowRouter.route('/uploadimage',{
	name: 'uploadimage',
  	action() {
    	BlazeLayout.render('uploadimage',{main:'uploadimage'});
  	},
});
FlowRouter.route('/contactmenu',{
	name: 'contactmenu',
  	action() {
    	BlazeLayout.render('contactmenu',{main:'contactmenu'});
  	},
});

FlowRouter.route('/register',{
	name: 'register',
  	action() {
    	BlazeLayout.render('register',{main:'register'});
  	},
});

FlowRouter.route('/test',{
	name: 'test',
  	action() {
    	BlazeLayout.render('test',{main:'test'});
  	},
});
