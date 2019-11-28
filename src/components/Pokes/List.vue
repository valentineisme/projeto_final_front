<template>
  <v-container>
      <div v-for="poke in pokes" v-bind:key="poke.id">
        <p>Nome: {{poke.nome}}</p>
        <p>Tipo: {{poke.tipo1}} {{poke.tipo2}}</p>

        <v-btn class="ma-2" text icon color="red lighten-2">
          <v-icon class="delete" @click=""></v-icon>Capturar
        </v-btn>

        <v-divider></v-divider>
      </div>
  </v-container>
</template>


<script>
import axios from "axios";
// import router from "@/router/"
// import CreateBooks from "./Create";

export default {
  name: "ListPokes",
  data() {
    return {
      pokes: [],
      times: [],
    };
  },
  // components: {
  //   CreateBooks: CreateBooks,
  // },
  created() {
    this.all();
  },
  methods: {
    all() {
      axios
        .request({
          baseURL: "http://localhost:8000",
          method: "get",
          url: "/api/pokes/"
        })
        .then(response => {
          this.pokes = response.data
          console.log(response)
        });
    },
      // capPoke(poke) {
      // // if (confirm("Capturar " + poke.nome + "?")) {
      //     axios
      //       .post("http://localhost:8000/api/time/add/",
      //       this.poke,
      //        {
      //         headers: {
      //             Authorization: `Token ${this.$session.get("token")}`
      //          }
      //         }
      //    )
      //    .then(response => {
      //        this.times = response.data
      //        this.log.console(response)
      //    });
      // //   axios
      // //     .delete(`http://localhost:8000/api/books/${book.id}`, {
      // //       headers: {
      // //         Authorization: `Token ${this.$session.get("token")}`
      // //       }
      // //     })
      // //     .then(response => {
      // //       this.all()
      // //       console.log(response)
      // //     });
      // // }
    // },

  }
};
</script>
