import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './uploadimage.html';

import {Images} from '../lib/image.collection.js';
import { FilesCollection } from 'meteor/ostrio:files';


Template.uploadedFiles.helpers({
  uploadedFiles: function () {
    return Images.find();
  }
});

Template.uploadForm.onCreated(function () {
  this.currentUpload = new ReactiveVar(false);
});



Template.uploadedFiles.helpers({
  images: function () {
    return Images.find(); // Where Images is an FS.Collection instance
  }
});


Template.uploadForm.helpers({
  currentUpload: function () {
    return Template.instance().currentUpload.get();
  }
});

Template.uploadedFiles.events({
  'click .delete': function(event){
    event.preventDefault();
    var documentId =this._id;
      if(confirm("Delete this image?")){
      Images.remove({ _id: documentId});

    }
      return false;
    }
});







Template.uploadForm.events({
  'change #fileInput': function (e, template) {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      // We upload only one file, in case
      // there was multiple files selected
      var file = e.currentTarget.files[0];
      if (file) {
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
            alert('Error during upload: ' + error.reason);
          } else {
            alert('File "' + fileObj.name + '" successfully uploaded');
          }
          template.currentUpload.set(false);
        });

        uploadInstance.start();
      }
    }
  }
});
