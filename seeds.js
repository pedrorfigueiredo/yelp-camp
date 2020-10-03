var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Night Elves",
        image: "https://images-na.ssl-images-amazon.com/images/I/71lamwcnkYL.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi voluptatem dolores sed perferendis tempora assumenda itaque obcaecati aliquid saepe laboriosam atque quo maiores, tempore nesciunt id porro. Earum id, laudantium sequi doloribus mollitia, corrupti et rem eligendi atque odio dolorem neque, a quam in. Sint impedit voluptatem aperiam animi consequuntur?"
    },
    {
        name: "Humans",
        image: "https://blznav.akamaized.net/img/games/cards/card-warcraft-3-reforged-e4051122f0f4fa12.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi voluptatem dolores sed perferendis tempora assumenda itaque obcaecati aliquid saepe laboriosam atque quo maiores, tempore nesciunt id porro. Earum id, laudantium sequi doloribus mollitia, corrupti et rem eligendi atque odio dolorem neque, a quam in. Sint impedit voluptatem aperiam animi consequuntur?"
    },
    {
        name: "Orcs",
        image: "https://upload.wikimedia.org/wikipedia/pt/thumb/6/66/WarcraftIII.jpg/250px-WarcraftIII.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi voluptatem dolores sed perferendis tempora assumenda itaque obcaecati aliquid saepe laboriosam atque quo maiores, tempore nesciunt id porro. Earum id, laudantium sequi doloribus mollitia, corrupti et rem eligendi atque odio dolorem neque, a quam in. Sint impedit voluptatem aperiam animi consequuntur?"
    },
    {
        name: "Illidan",
        image: "https://image.redbull.com/rbcom/010/2016-11-28/1331831771177_2/0100/0/1/as-screenshot-from-the-newest-world-of-warcraft-game-legion.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi voluptatem dolores sed perferendis tempora assumenda itaque obcaecati aliquid saepe laboriosam atque quo maiores, tempore nesciunt id porro. Earum id, laudantium sequi doloribus mollitia, corrupti et rem eligendi atque odio dolorem neque, a quam in. Sint impedit voluptatem aperiam animi consequuntur?"
    }
]

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else{
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "this place is great but i Wish there was internet",
                            author: "Hommer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else{
                                campground.comments.push(comment);
                                campground.save(); 
                            }
                        });
                }
            })
        });
    });
}

module.exports = seedDB;

