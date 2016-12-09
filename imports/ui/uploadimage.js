import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './uploadimage.html';

import {Images} from '../lib/image.collection.js';
import { FilesCollection } from 'meteor/ostrio:files';












Template.uploadedFiles.events({
 'click .btn-danger'(e) {
    console.log($(e.target).data('id'));



    //var id = $(e.target).data("id");
    //console.log(id);
    //Images.remove(id);
  }
});



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
      if(bootbox.alert("Are you sure you want to delete this image?")){
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

        if (Images.find().count()===1) {
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
            var image = Session.get('img_id');
            console.log(image);

}


          template.currentUpload.set(false);
        });

        uploadInstance.start();
      }
    }
  }
});
