import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import {Reflections} from '../lib/reflection.collection.js';

import './latestupdates.html';

Template.latestupdates.events({
    "click .glyphicon": function(event){
         $(event.currentTarget).toggleClass('glyphicon-star-empty glyphicon-star');
       }
});

Template.latestupdates.helpers({
  reflections(){
    console.log("reflection");
    return Reflections.find({});
  },
});
Template.latestupdates.helpers({
  getImage: function(){
    console.log(this.id);
    return this.id;
  },
});
