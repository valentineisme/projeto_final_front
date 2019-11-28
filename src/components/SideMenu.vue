<template>
  <v-navigation-drawer app fixed
    class="app---drawer" 
    v-model="drawer"
    :mini-variant.sync="mini"
    :clipped="$vuetify.breakpoint.lgAndUp"
  >
    <v-list-item>
      <v-list-item-avatar>
<!--        <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>-->
      </v-list-item-avatar>

      <v-list-item-title>{{user.name}}</v-list-item-title>

      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>
    <v-divider></v-divider>

    <v-list dense>
      <v-list-item :to="item.endpoint" v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title >{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <template v-if="logged">
        <hr>
        <v-list-item :to="item.endpoint" v-for="item in items_logged" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title >{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "SideMenu",
  data() {
    return {
      drawer: true,
      mini: false,
      user: {},
      items: [

      ],
      items_logged: [
        { title: "Minha Conta", icon: "mdi-home-city", endpoint: '/' },
        { title: "Meu Time", icon: "mdi-group", endpoint: '/time' },
        { title: "Lista de Pokemon", icon: "mdi-library-books", endpoint: '/pokes'},
        { title: "Sair", icon: "mdi-logout", endpoint: '/logout'}
      ]
    };
  },
  created () {
    this.getUserDetails()
  },
  methods: {
    getUserDetails() {
      if (this.$session.has('token')){
        this.user.name = 'logado'
      }
      else {
        this.user.name = 'Faça Login'
      }
    },
  },
  computed: {
    logged() {
      return this.$session.has('token')
    }
  }
};
</script>