
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './camera.html';


pic = new Mongo.Collection('pictures');

Template.takePhoto.helpers({
    'photos': function () {
        return Pictures.find();
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
