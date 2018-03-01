var app = new Vue({
  el: '#app',
  data: {
    ideas: []
  },
  methods: {
    removeIdea: function(idea){
      console.log(idea);
      var index = this.ideas.indexOf(idea);
      console.log(index);
      this.ideas.splice(index, 1);
      console.log(this.ideas);
    },
    newIdea: function() {
      this.getWord('adjective', (adj) => {
        console.log(adj);
        this.getWord('noun', (noun) => {
          console.log(noun);
          this.getImage(noun.word,(image) => {
            let idea = {
              img: image.items[0].link,
              adj: adj.word,
              adjDef: adj.results[0].definition,
              noun: noun.word,
              nounDef: noun.results[0].definition
            }
            this.ideas.unshift(idea)
          });
        });
      });
    },
    getImage: function(word, callback){
      let url = `https://www.googleapis.com/customsearch/v1?q=${word}&cx=010548783614037141903%3Ahdf4ddxx1te&searchType=image&key=AIzaSyAbdOEe7mYFI6WaH5OhAK0gRows3N2o9gQ`;
      fetch(url).then(response =>{
        return response.json();
      }).then(callback).catch(err => {
        console.error(err);
      })
    },
    getWord: function(type, callback) {
      var request = new Request('https://wordsapiv1.p.mashape.com/words/?random=true&partOfSpeech=' + type, {
        headers: new Headers({
          'X-Mashape-Key': '77yWeQAGnkmshkalv20vVEFDxA2mp1ZLnoOjsnwyNmfg9dZFR0',
          'X-Mashape-Host': 'wordsapiv1.p.mashape.com'
        })
      });
      fetch(request).then(response =>{
        return response.json()
      }).then(callback).catch(err => {
        console.error(err);
      })
    },
    deleteIdea: function(index) {

    }
  }
});
