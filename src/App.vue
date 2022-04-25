<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<template>
  <v-app>
   
<nav>
    <v-app-bar
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>MineralNet</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-main>
      <HelloWorld/>
    </v-main>
    </v-navigation-drawer>
  </nav>

    
  </v-app>
</template>


