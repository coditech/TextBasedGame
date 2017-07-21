let options = {
    start: {
        imgSrc: "images/roads.png",
        text: "You have reached a crossroad, do you want to go to the right or to the left?",
        options: [{
            id: "left",
            text: "Go to the left"
        }, {
            id: "right",
            text: "Go to the right"
        }]
    },
    left: {
        imgSrc: "images/dragon.jpg",
        text: "You have found a dragon, do you want to run or face it and die?",
        options: [{
            id: "die",
            text: "Face it and die"
        }, {
            id: "run",
            text: "Run away like a baby"
        }]
    },
    right: {
        imgSrc: "images/village.jpg",
        text: "You have just reached the village do you want to go in or go back?",
        options: [{
            id: "village",
            text: "Go in"
        }, {
            id: "start",
            text: "Go back"
        }]
    }
};
let allItems = ["sword"];
let backpack = [];

const a = "blah"
const text = `blah blah ${a}`

function chooseOption(x) {
    document.getElementById("storyImg").src = x.imgSrc;
    document.getElementById("storyText").innerHTML += "<br />" + x.text;
    var listOptions = "";
    for (let i = 0; i < x.options.length; i++) {
        const href = `javascript:chooseOption(options['${x.options[i].id}'])`
        const text = x.options[i].text
        listOptions += `<li><a href="${href}">${text}</a></li>`;
    }
    document.getElementById("options").innerHTML = listOptions;
}
chooseOption(options.start);