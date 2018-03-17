<template>
<div class="register">
  <p>
    Add a new person to the dating pool!
  </p>
  <img class="profilePic" v-bind:src="pic" alt="Enter a URL!"/>
  <p>
    Name to add: {{name}}
  </p>
  <p>
    Bio to add: {{bio}}
  </p>

  <form v-on:submit.prevent="createPerson">
    <input type="text" v-model="name" placeholder="New Name">
    <br />
    <input type="text" v-model="bio" placeholder="New Bio"/>
    <br />
    <input type="text" v-model="pic" placeholder="New Pic URL">
    <br />
    <button type="submit">Add Person</button>
  </form>
</div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      name: "",
      bio: "",
      pic: ""
    }
  },
  methods: {
    createPerson: function(){
      if(this.name == "" || this.bio == "" || this.pic == ""){
        alert("You must first provide all three pieces of information!");
      }else{
        this.$store.dispatch('addPerson', {
          removable: true,
          bio: this.bio,
          pic: this.pic,
          name: this.name
        });
      }
      this.name = "";
      this.bio = "";
      this.pic = "";
    }
  }
}
</script>

<style scoped>
.register {
  text-align: center;
  width: 70%;
  margin: auto;
  margin-top: 50px;
}

.profilePic {
   max-width: 300px;
   max-height: 500px;
}

</style>
