var app = new Vue({
  el: '#app',
  data: {
    ideas: []
  },
  methods: {
    newIdea: function() {
      this.getWord('adjective', (adj) => {
        console.log(adj);
        this.getWord('noun', (noun) => {
          console.log(noun);
          let idea = {
            adj: adj.word,
            adjDef: adj.results[0].definition,
            noun: noun.word,
            nounDef: noun.results[0].definition
          }
          this.ideas.unshift(idea)
        });
      });
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
