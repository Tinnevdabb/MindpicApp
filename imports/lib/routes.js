import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';


import '../ui/latestupdates.js';
import '../ui/login.js';
import '../ui/camera.js';
//import '../ui/uploadimage.js';
import '../ui/profile.js';
import '../ui/register.js';
import '../ui/forgotpassword.js';
import '../ui/contactinfo.js';
import '../ui/notifications.js';
import '../ui/settings.js';
import '../ui/menu.js';
import '../ui/personalinfo.js';
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



FlowRouter.route('/camera',{
	name: 'camera',
  	action() {
    	BlazeLayout.render('takePhoto',{main:'takePhoto'});
  	},
});


FlowRouter.route('/profile',{
	name: 'profile',
  	action() {
    	BlazeLayout.render('profile',{main:'profile'});
  	},
});

FlowRouter.route('/register',{
	name: 'register',
  	action() {
    	BlazeLayout.render('register',{main:'register'});
  	},
});

FlowRouter.route('/forgotpassword',{
	name: 'forgotpassword',
  	action() {
    	BlazeLayout.render('forgotpassword',{main:'forgotpassword'});
  	},
});

FlowRouter.route('/contactinfo',{
	name: 'contactinfo',
  	action() {
    	BlazeLayout.render('contactinfo',{main:'contactinfo'});
  	},
});

FlowRouter.route('/notifications',{
	name: 'notifications',
  	action() {
    	BlazeLayout.render('notifications',{main:'notifications'});
  	},
});

FlowRouter.route('/menu',{
	name: 'menu',
  	action() {
    	BlazeLayout.render('menu',{main:'menu'});
  	},
});

FlowRouter.route('/settings',{
	name: 'settings',
  	action() {
    	BlazeLayout.render('settings',{main:'settings'});
  	},
});

FlowRouter.route('/personalinfo',{
	name: 'personalinfo',
  	action() {
    	BlazeLayout.render('personalinfo',{main:'personalinfo'});
  	},
});

FlowRouter.route('/test',{
	name: 'test',
  	action() {
    	BlazeLayout.render('test',{main:'test'});
  	},
});
