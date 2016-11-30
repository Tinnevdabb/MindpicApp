import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './test.html';

Template.test.events({
    "click .glyphicon": function(event){
         $(event.currentTarget).toggleClass('glyphicon-star-empty glyphicon-star');
       }
});
