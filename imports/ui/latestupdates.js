import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './latestupdates.html';


$(document).ready(function () {
    $('.glyphicon').click(function () {
        $(this).toggleClass("glyphicon-star-empty").toggleClass("glyphicon-star");
    });
});
