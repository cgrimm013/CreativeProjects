import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPerson: {},
  },
  getters: {
    currentPerson: state => state.currentPerson,
  },
  mutations: {
    setPerson(state, newPerson) {
      state.currentPerson = newPerson;
    },
  },
  actions: {
    getPerson(context) {
      console.log("getting person");
      axios.get("/api/person").then(response => {
        context.commit('setPerson', response.data);
        return true;
      }).catch(err => {});
    },
    addPerson(context, person) {
      axios.post("/api/person", person).then(response => {
        return context.dispatch('getPerson');
      }).catch(err => {});
    },
    updatePerson(context, person) {
      axios.put("/api/person/" + person.id, person).then(response => {
        context.commit('setPerson', response.data);
        return true;
      }).catch(err => {});
    },
    deletePerson(context, person) {
      axios.delete("/api/person/" + person.id).then(response => {
        return context.dispatch('getPerson');
      }).catch(err => {});
    }
  }
});
