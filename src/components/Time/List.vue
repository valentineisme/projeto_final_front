<template>
    <v-container>
        Pokemons Capturados
        <div v-for="time in times" v-bind:key="time.id" >
            <p>pokemon: {{time.pokemon}} </p>


            <v-btn class="ma-2" text icon color="red lighten-2">
                <!--          <v-icon class="delete" @click="deleteBook(book)"></v-icon>-->
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
        name: "ListTime",
        data() {
            return {
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
                        url: "/api/time/"
                    })
                    .then(response => {
                        this.times = response.data
                        console.log(response)
                    });
            },
        }
    };
</script>
