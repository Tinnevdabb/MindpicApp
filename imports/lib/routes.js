import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../ui/latestupdates.js';


FlowRouter.route('/',{
	name: 'latestupdates',
  	action() {
    	BlazeLayout.render('latestupdates');
  	},
});
