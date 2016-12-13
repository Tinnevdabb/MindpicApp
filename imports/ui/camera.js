
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './camera.html';

import {Images} from '../lib/image.collection.js';
import {Reflections} from '../lib/reflection.collection.js';
import { FilesCollection } from 'meteor/ostrio:files';

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

Template.takePhoto.events({
  'submit .reflection'(event) {
    console.log('submit');
    event.preventDefault();

    const ref = event.target.ref.value;
    console.log(ref);


     Reflections.insert({
        text: ref,
        createdAt: new Date(), // current time
        image_id: Session.get('img_id'),
      });

  },
});


Template.uploadForm.onCreated(function () {
  this.currentUpload = new ReactiveVar(false);
});

Template.uploadedFiles.helpers({
  uploadedFiles: function () {
    return Images.find(); // Where Images is an FS.Collection instance
  }
});


Template.uploadForm.helpers({
  currentUpload: function () {
    return Template.instance().currentUpload.get();
  }
});



/*Template.uploadedFiles.events({
  'click .delete': function(event){
    event.preventDefault();
    var documentId =this._id;
      if(bootbox.alert("Are you sure you want to delete this image?")){
      Images.remove({ _id: documentId});


    }
      return false;
    }
});*/


Template.uploadForm.events({
  'change #fileInput': function (e, template) {
    console.log("upload");
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      // We upload only one file, in case
      // there was multiple files selected
      var file = e.currentTarget.files[0];
      if (file) {

        if (Images.find().count()>1) {
         Images.remove({});
         console.log("REMOVE");
       }
        var uploadInstance = Images.insert({
          file: file,
          streams: 'dynamic',
          chunkSize: 'dynamic'
        }, false);

        uploadInstance.on('start', function() {
          template.currentUpload.set(this);
        });

        uploadInstance.on('end', function(error, fileObj) {
          if (error) {
            bootbox.alert('Error during upload: ' + error.reason);
          } else {
            bootbox.alert("File has been successfully uploaded!");
            Session.set('img_id',fileObj._id);
            console.log(fileObj);
            //store image id and turn into picture
            //var image = Session.get('img_id');
            //console.log(image);

}


          template.currentUpload.set(false);
        });

        uploadInstance.start();
      }
    }
  }
});Template.uploadedFiles.events({
 'click .btn-danger'(e) {
    console.log($(e.target).data('id'));



    //var id = $(e.target).data("id");
    //console.log(id);
    //Images.remove(id);
  }
});
