let app = new Vue({
    // CSS id
    el: '#app',

    data: {
        category: 'planets',
        index: '1',
        loading_planets: true,

        planet_index: 0,
        planet_name: "Alderaan",
        planet_list: [], //, climate: "", terrain: ""},
    },

    created() {
        //this.starwars();
        //console.log('planets');
        this.planets();

    },

    methods: {
        async starwars() {
            try {
                url = "https://swapi.co/api/";
                this.loading = true;
                const response =
                    await axios.get(url + this.category + '/')
                    .catch(error => {
                        this.number = this.max;
                    });
                //console.log("response\t", response);
                //console.log("response.name\t",response.data.name);
                //console.log("json\t\t", response.json[0]);
                //console.log("body\t", response.body);
            }
            catch (error) {
                console.log(error);
            }
        },

        async planets() {
            //console.log('planets')
            try {
                url = "https://swapi.co/api/" + this.category;
                this.loading_planets = true;

                let response = await axios.get(url); //+ '/' + this.index);
                //const numPlanets = response.data.count;

                do {
                    response = await axios.get(url);

                    for (let i = 0; i < response.data.results.length; i++) {
                        //console.log(response.data.results[i]);//.name);
                        //console.log(response.data.results[i].name,' - ', response.data.results[i].terrain);
                        //console.log(response.data.results[i]);
                        //this.planet_list[i].push({name: response.data.results[i].name});
                        this.planet_list.push(response.data.results[i]);
                        // console.log("planets ", i, this.planet_list[i].name)
                    }
                    url = response.data.next;

                }
                while (response.data.next !== null);

                this.removeStandard();
                this.chgPopulation();
                this.loading_planets = false;
            }
            catch (error) {
                console.log(error);
            }

        },
        removeStandard() {
            for (let i = 0; i < this.planet_list.length; i++) {
                this.planet_list[i].gravity = this.planet_list[i].gravity.replace("standard", "");
                //console.log("here");
                //console.log(this.planet_list[i].name, this.planet_list[i].gravity);
            }
        },

        chgPopulation() {
            for (let i = 0; i < this.planet_list.length; i++) {
                this.planet_list[i].population = parseInt(this.planet_list[i].population).toExponential();
            }
        }

    },

});
