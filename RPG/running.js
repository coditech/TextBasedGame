let options = {

    start: {
        imgSrc: "images/Dragon%20attack%20the%20city.png",
        text: 'A long time ago in a village called Nintendo there was a fierce warrior ' +
        'called Mario, and this brave warrior loved the princes of the village `Peach`' +
        'they lived a very happy life together until one day a bad dragon called `Maynak`' +
        'came to the village and abducted Marios love `Peach` Mario was very upset so he decided to: ',
        options: [{
            id: "option_1",
            text: "Fight to get his love"
        }, {
            id: "option_2",
            text: "Flyaway because he was afraid"
        }]
    },
    option_1: {
        imgSrc: "images/mario choosing how to attack.png",
        text: ". So Mario took his Mushroom which is known to give him immense power and agility." +
        " After that he calculated the situation and deduced that his best two options to fight are " +
        "either from the sea or from the sky, but he had to chose one of these choices because the dragon" +
        " was getting away so Mario quickly:",
        options: [{
            id: "option_1_1",
            text: "Wore his diving suit and continued on his way to attack ‘Maynak’ through the sea"
        }, {
            id: "option_1_2",
            text: "Wore his Jetpack and flew up in the sky to attack ‘Maynak’"
        }]
    },
    option_2: {
        imgSrc: "images/mario%20choose%20how%20to%20run%20away.png",
        text: "Mario failed to run away from the dragon because the dragon was after him, " +
        "so Mario had to run away from the dragon in order to survive so he decided to",
        options: [{
            id: "option_2_1",
            text: "Go to the sea and swim away from the dragon"
        }, {
            id: "option_2_2",
            text: "Go to his house inside the village and hide in his bedroom"
        }]
    },
    option_1_1: {
        imgSrc: "images/mario%20choose%20to%20attack%20from%20sea.png",
        text: "While Mario was swimming in the sea desperately trying to get to the dragon he stumbled upon two " +
        "items that might help him kill the dragon and save the love of his life, he had to chose one of them, so" +
        " he though thoroughly and took the:",
        options: [{
            id: "option_1_1_1",
            text: "A cool looking ancient weapon"
        }, {
            id: "option_1_1_2",
            text: "Time Machine"
        }]
    },
    option_1_2: {
        imgSrc: "images/mario%20going%20to%20attack%20from%20sky.png",
        text: "While Mario was flying towards the dragon he decided to plan for his attack move." +
        " After thinking about it he decided that he has to:",
        options: [{
            id: "option_1_2_1",
            text: "Face the dragon and fight him with honor and bravery"
        }, {
            id: "option_1_2_2",
            text: "Launch a sneaky attack"
        }]
    },

    option_1_1_1: {

        imgSrc: "images/mario%20choose%20the%20ancient%20weapon%20that%20killed%20the%20dragon%20in%20lord%20of%20the%20rings%20but%20he%20missed%20the%20dragon%20and%20the%20dragon%20killed%20him.png",
        text: "After taking the cool looking ancient weapon he bravely marched towards the " +
        "dragon and stroke him right on his head, but unfortunately the cool looking ancient " +
        "weapon broke since it’s ancient, and after that the dragon ‘Maynak’ laughed at Mario" +
        " and then after he finished laughing he burned the shit out of him. Mario then woke up" +
        " from his weird nightmare",
        options: [
            {
                id: 'finish',
                text: 'Wake up from the dream'
            }
        ]
    },
    option_1_1_2: {

        imgSrc: "images/mario%20choose%20to%20attack%20from%20sea%20and%20choose%20time%20machine.png",
        text: "After taking the time machine, Mario went back in time where when the Dragon " +
        "‘Maynak’  was still a embryo in an eggshell, and he obliterated that eggshell. After that " +
        "he woke up from his dream traumatized from his action."
        , options: [
            {
                id: 'finish',
                text: 'Wake up from the dream'
            }
        ]
    },

    option_1_2_1: {

        imgSrc: "images/mario%20attack%20from%20sky%20straight%20to%20dragon.png",
        text: "So Mario launched with full force toward the dragon, but the dragon anticipated " +
        "his attack so he spitted fire on Mario, after that Mario screamed in agony and he woke " +
        "up from his nightmare screaming and waking princes ‘Peach’ who was sleeping next to him",

        options: [
            {
                id: 'finish',
                text: 'Wake up from the dream'
            }
        ]

    },
    option_1_2_2: {
        imgSrc: "images/mario%20attack%20from%20sky%20from%20above.png",
        text: "So Mario decided to take his time in his fight and get behind the dragon after that " +
        "he launched his sneaky attack and stroke the dragon from behind killing him instantly " +
        "and saving his princes. After doing that Mario woke up from his dream and his lovely " +
        "princes was already next to him.",
        options: [
            {
                id: 'finish',
                text: 'Wake up from the dream'
            }
        ]
    },
    option_2_1: {
        imgSrc: "images/Mario%20Runaway%20from%20sea.png",
        text: "Mario started to swim relentlessly trying to run away from the fierce dragon" +
        " but ‘Maynak’ launched a huge fire attack on Mario which let the sea water boil and" +
        " killed Mario. After that Mario woke up and he was relieved that he is alive and it" +
        " was all just a bad dream.",
        options: [
            {
                id: 'finish',
                text: 'Wake up from the dream'
            }
        ]
    },
    option_2_2: {
        imgSrc: "images/mario%20run%20away%20from%20building%20and%20dragon%20attacking%20the%20building.png",
        text: "While Mario was hiding inside his bedroom, he heard the sound of the dragon desperately searching " +
        "for him. But after a while ‘Maynak’ found Mario’s house and started to burn the house. " +
        "So Mario decided to flee from his house and went:",
        options: [
            {
                id: 'option_2_1',
                text: 'Go to The sea'
            },
            {
                id: 'option_1_2',
                text: 'Flying to finally have some courage and fight the dragon'
            }
        ]
    },
    finish: {
        imgSrc: "images/mario%20wake%20up.png",
        text: "Mario wake up from the dream and he learned whatever happen don't stop dreaming.",
        options: [
            {
                id: 'start',
                text: 'Re Start',
            }
        ]
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