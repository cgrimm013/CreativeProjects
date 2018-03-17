<template>
<div class="home">
  <img class="profilePic" v-bind:src="currentPerson.pic" alt="Loading!"/>
  <button class="deleteButton" v-on:click="deletePerson">Remove User</button>
  <br />
  <button v-on:click="nextPerson">NEXT</button>
  <p>
    {{currentPerson.name}}
  </p>
  <p>
    {{currentPerson.bio}}
  </p>

  <form v-on:submit.prevent="alterData">
    <input type="text" v-model="name" placeholder="Change Name">
    <br />
    <input type="text" v-model="bio" placeholder="Change Bio"/>
    <br />
    <input type="text" v-model="pic" placeholder="Change Pic URL">
    <br />
    <button type="submit">Change info</button>
  </form>
</div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      name: "",
      bio: "",
      pic: ""
    }
  },
  created: function(){
    this.getPerson();
  },
  computed: {
    currentPerson: function() {
      return this.$store.getters.currentPerson
    }
  },
  methods: {
    alterData: function(){
      if(!this.currentPerson.removable){
        alert("You are not allowed to alter the default profiles! Sorry! Try making your own.");
        return;
      }
      let newPerson = Object.assign({}, this.currentPerson)
      if(this.name != ""){
        newPerson.name = this.name;
      }
      if(this.bio != ""){
        newPerson.bio = this.bio;
      }
      if(this.pic != ""){
        newPerson.pic = this.pic;
      }
      this.$store.dispatch('updatePerson', newPerson);
      this.name = "";
      this.bio = "";
      this.pic = "";
    },
    getPerson: function(){
      this.$store.dispatch('getPerson');
    },
    deletePerson: function(){
      if(!this.currentPerson.removable){
        alert("You are not allowed to alter the default profiles! Sorry! Try making your own.");
        return;
      }
      this.$store.dispatch('deletePerson', this.currentPerson);
    },
    nextPerson: function(){
      this.$store.dispatch('getPerson');
    }
  }
}
</script>

<style scoped>
.home {
  text-align: center;
  width: 70%;
  margin: auto;
  margin-top: 50px;
}

.profilePic {
   max-width: 300px;
   max-height: 500px;
}

.deleteButton{
  float: right;
}

</style>
