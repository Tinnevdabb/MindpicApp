import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './camera.html';


if (Meteor.isClient) {
  Template.camera.helpers({
    photo: function () {
      return Session.get("photo");
    }
  });

  Template.camera.events({
    'click button': function () {
      var cameraOptions = {
        width: 800,
        height: 600
      };

      MeteorCamera.getPicture(cameraOptions, function (error, data) {
        Session.set("photo", data);
      });
    }
  });
}
