var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment.js");
 
var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor nisl egestas nisi semper, non pharetra dui semper. Curabitur mauris orci, egestas at blandit et, euismod blandit magna. Sed in felis quis tortor ultricies feugiat. Curabitur facilisis, est in gravida finibus, orci libero blandit enim, congue porttitor quam diam eu mi. Aenean rutrum, est vitae scelerisque lacinia, urna mauris semper arcu, vitae blandit nisl mi quis nisl. Duis porttitor vel enim id bibendum. Mauris eget nulla ac elit commodo aliquet. Integer scelerisque erat vel cursus fringilla. Nulla et odio id orci consequat tempor ut ac sapien. Pellentesque lobortis nisl feugiat, viverra diam ac, placerat metus. Nunc lacinia, nibh varius cursus fringilla, eros ex pharetra tortor, vitae pretium dolor augue finibus eros. Quisque maximus tempor auctor."
    },
    {
        name: "Desert Mesa", 
        image: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
        description: "Nunc fringilla ex in efficitur mollis. Donec ornare nec neque vel semper. Sed sapien leo, ultricies sit amet justo sit amet, fermentum elementum ex. Curabitur rhoncus tellus fringilla, dapibus turpis a, vulputate orci. Sed augue nibh, posuere vitae lorem quis, auctor rutrum velit. Proin fermentum augue sed elit maximus, vel egestas turpis tempor. Sed est nunc, vestibulum vitae suscipit sit amet, lacinia ut nibh. Sed quis libero massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut et viverra tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam feugiat quam sed tortor tristique porta. Cras tincidunt interdum vestibulum."
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Sed aliquet neque mauris, a tincidunt nisi convallis vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et neque et turpis congue scelerisque id id justo. Pellentesque sed tellus auctor purus convallis pellentesque rhoncus a est. Nunc vel lorem aliquet, mattis magna eget, rhoncus quam. In hac habitasse platea dictumst. Quisque venenatis arcu eget nisi ultricies, et tempor sapien ultrices. Proin a ex magna. Duis ut lectus vitae lectus vulputate pellentesque."
    }
]
 
function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        // if(err){
        //     console.log(err);
        // }
        // console.log("removed campgrounds!");
        // Comment.remove({}, function(err) {
        //     if(err){
        //         console.log(err);
        //     }
        //     console.log("removed comments!");
        //      //add a few campgrounds
        //     data.forEach(function(seed){
        //         Campground.create(seed, function(err, campground){
        //             if(err){
        //                 console.log(err)
        //             } else {
        //                 console.log("added a campground");
        //                 //create a comment
        //                 Comment.create(
        //                     {
        //                         text: "This place is great, but I wish there was internet",
        //                         author: "Homer"
        //                     }, function(err, comment){
        //                         if(err){
        //                             console.log(err);
        //                         } else {
        //                             campground.comments.push(comment);
        //                             campground.save();
        //                             console.log("Created new comment");
        //                         }
        //                     });
        //             }
        //         });
        //     });
        // });
    }); 
    //add a few comments
}
 
module.exports = seedDB;