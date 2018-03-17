<template>
  <nav>
    <h1>Welcome to VillainsDate.com</h1>
    <p>
      Get started with all your mischievous adventures here!
    </p>
    <ul id="menu">
      <li class="leftNav"><router-link to="/">Peruse The Hotties</router-link></li>
      <li><router-link to="/register">Sign up so others can see YOU</router-link></li>
    </ul>
  </nav>
</template>

<script>
 export default {
   name: 'AppHeader'
 }
</script>

<style scoped>
 /*Strip the ul of padding and list styling*/
 .clear {
     float: clear;
 }

 h1{
   text-align: center;
   color: #58D68D;
   margin-bottom: 5px;
 }

 p{
   margin-top: 0;
   text-align: center;
   font-style: italic;
 }
 nav {
     display: grid;
 }
 ul {
     list-style-type:none;
     margin:auto;
     padding:0;
     text-align: center;
 }

 /*Create a horizontal list with spacing*/
 li {
     display:inline-block;
     float: left;
     margin-right: 1px;
 }
 /*Style for menu links*/
 li a {
     display:block;
     height: 50px;
     text-align: center;
     line-height: 50px;
     color: #666;
 }
 .leftNav{
   margin-right: 20px;
 }
 /*Active color*/
 li a.active {
 }
 /*Hover state for top level links*/
 li:hover a {
 }
</style>
