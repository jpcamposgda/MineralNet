<template>
   
   
<nav>
    <v-app-bar
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>MineralNet</v-toolbar-title>

<v-spacer></v-spacer>

  <span class="cursor-pointer no-underline hover:underline" @click.prevent="efetuarLogout">Logout</span>
<v-icon dense>mdi-logout</v-icon>     
      
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
          v-for="link in links" :key="link.text"
        >
          <v-list-item :to="link.route" > 
            
            <v-list-item-icon>
              <v-icon> {{link.icon}} </v-icon>
            </v-list-item-icon>
            <v-list-item-title> {{link.text}} </v-list-item-title>
            
          </v-list-item>
      
      </v-list-item-group>
      </v-list>
      </v-navigation-drawer>
  
  </nav>

   
</template>
    

    
 
 
 
 

<script>

import { useUserStore } from "@/store/users";

  export default {
    name: 'HelloWorld',

    setup(){

const user = useUserStore();

user.token

    },
     
     methods: {
        efetuarLogout () {

          const user = useUserStore();



        // user.removeItem('token') 
        user.token = null
        user.tokenrefresh = null
        user.user = null
        
        this.$router.push({name: 'login'})
      console.log('Logout')  
     }
  },
     
     data: () => ({
    drawer: false,
    group: null,
    links: [
      {icon: 'mdi-home', text: 'Home', route: '/'},
      {icon: 'mdi-account', text: 'Login', route: '/login'},
      {icon: 'mdi-account-multiple-plus-outline', text: 'Novo Usuário', route: '/novousuario'},
      ]
  }),
};

  
</script>
