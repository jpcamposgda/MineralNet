<script>

import HelloWorld from './components/HelloWorld';




export default {
  name: 'App',

  components: {HelloWorld},


};
</script>

<template>
<v-main>
<v-app>

<HelloWorld/>

<router-view/> 



</v-app>

</v-main>

</template>


