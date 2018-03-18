"use strict"

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('dist'))


let people = [];
let id = 5;
let current = 0;

people.push({
  bio: "Family Man! Although divorced, I love my son and take care of him. I love hobbit hunting on the weekends and try really hard to stay out of debt to dark lords.",
  pic: "https://static.giantbomb.com/uploads/scale_small/0/6172/1548061-1.jpg",
  name: "Bob",
  removable: false,
  id: 0
});

people.push({
  bio: "I am really dedicated in my work. I am really good at giving orders and having thousands fearing me at all times. I love jedi hunting, learning new force skills, and kittens.",
  pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4a/Kylo_Ren_TLJ.png/revision/latest?cb=20171223080435",
  name: "Kylo",
  removable: false,
  id: 1
});

people.push({
  bio: "I only did this because my mom told me to. If you like my profile I'll find you and kill you.",
  pic: "https://vwartclub.com/media/projects/trocinski-kamil-saruman-the-white/4.jpg",
  name: "Saruman",
  removable: false,
  id: 2
});

people.push({
  bio: "I took this photo at a conference for humanitarian service. I presented on the negative effects that Star Destroyer engine factories have on the environment, and proposed solutions to reduce waste output while still maintaining high functionality.",
  pic: "https://vignette.wikia.nocookie.net/aliens/images/a/ae/EmperorPalpatine.png/revision/latest?cb=20160804021436",
  name: "Emperor Palpatine",
  removable: false,
  id: 3
});

people.push({
  bio: "I love animals and reconnecting with family. I believe that everyone should live in peace and harmony under my rule. They will fear me.",
  pic: "https://i.pinimg.com/originals/ac/18/f6/ac18f62d4680743f7c677c692e19699e.png",
  name: "Hela -Goddess of Death",
  removable: false,
  id: 4
});


people.push({
  bio: "I kill muggles. I'm Pureblooded, are you?",
  pic: "https://image.afcdn.com/story/20150526/-673574_w767h767c1cx526cy249.jpg",
  name: "Bellatrix",
  removable: false,
  id: 5
});

app.get('/api/person', (req, res) => {
  current++;
  if(current === people.length){
    current = 0;
  }
  let currentPerson = people[current];
  res.send(currentPerson);
});

app.put('/api/person/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let peopleMap = people.map(person => { return person.id; });
  let index = peopleMap.indexOf(id);
  let person = people[index];

  person.name = req.body.name;
  person.bio = req.body.bio;
  person.pic = req.body.pic;

  res.send(person);
});

app.post('/api/person', (req, res) => {
  id = id + 1;
  let person = {id:id, bio: req.body.bio, name: req.body.name, pic: req.body.pic, removable: req.body.removable};
  people.push(person);
  res.send(person);
});

app.delete('/api/person/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let removeIndex = people.map(person => { return person.id; }).indexOf(id);
  if (removeIndex === -1) {
    res.status(404).send("Sorry, that person doesn't exist");
    return;
  }
  people.splice(removeIndex, 1);
  current = 0;
  res.sendStatus(200);
});

app.listen(3000, () => console.log('Server listening on port 3000!'))
