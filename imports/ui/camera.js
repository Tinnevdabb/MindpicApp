
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './camera.html';

reflection= new Mongo.Collection('reflection');



Template.takePhoto.helpers({
    'photos': function () {
        return Pictures.find();
    },
    'photo': function() {
      return Session.get('photo');
    }
});


Template.takePhoto.events({
    'click .capture': function () {
      console.log("take pic");
        var cameraoptions = {
            width: 640,
            height: 480
        };

        MeteorCamera.getPicture(cameraoptions, function (error, data) {
        Session.set('photo', data);
        Meteor.call('saveImage', (data));
    });
}
});
