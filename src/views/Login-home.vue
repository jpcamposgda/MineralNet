<template>
<div class="min-h-screen bg-gray-100 flex items-center">
  <div class="container rounded-md mx-auto max-w-md  shadow-md hover:shadow-lg transition duration-300" >
    <div class="py-12  p-10 bg-white rounded-md">
      <form @submit.prevent="efetuarLogin" >
      <div class="mb-5">
          <label class="mr-4 text-gray-700 font-bold inline-block  mb-2" for="name">Email</label>
          <input type="email" v-model="usuario.email" class="border bg-gray-100 py-2 px-4 w-80 outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Your name" />
      </div>
      <div>
        <label class="mr-4 text-gray-700 font-bold inline-block  mb-2" for="name">Password</label>
        <input type="password" v-model="usuario.password" class="border bg-gray-100 py-2 px-4 w-80 outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="" />
      </div>
      <span class="text-sm text-gray-700 inline-block mt-4 hover:text-indigo-600 hover:underline hover:cursor-pointer transition duration-200"><a>forget password</a> </span>
      <button type="submit" class="w-80 mt-6 text-indigo-50 font-bold bg-purple-700 py-3 rounded-md hover:bg-indigo-500 transition duration-300">LOGIN</button>
      <span ><a href="/novousuario" class="text-sm text-gray-700 inline-block mt-4 hover:text-indigo-600 hover:underline hover:cursor-pointer transition duration-200" >Não possui um cadastro, clique aqui!</a></span>
      </form>
    </div>
    
  </div>
</div>
</template>


<script>
import { useUserStore } from "@/store/users"


export default {
    data () {
        return {
            usuario: {}
        }
    },


methods: {
    efetuarLogin () {
      this.$http.post('auth/login', this.usuario)
             .then(response => {
                 
              const useStore = useUserStore()

              useStore.token = response.data.accessToken
              useStore.tokenrefresh = response.data.refreshToken
              useStore.user = response.data.user
                 
                 localStorage.setItem('token', response.data.access_token)
                 this.$router.push({ name: 'home' })

             })
             .catch(erro => console.log(erro))
    }
}
}
    
</script> 

