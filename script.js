let app = new Vue({
    // CSS id
    el: '#app',
    
    data: {
        number: '',
        max: '',
        current: {
            title: '',
            img: '',
            alt: ''
        },
        category: 'planets',
        index: '1',
        loading: true,
        
        addedName: '',
        addedComment: '',
        comments: {},
        
        planet_list: [],//, climate: "", terrain: ""},
    },
    
    created() {
        this.starwars();
        console.log('planets');
        this.planets();
        
    },
    
    methods: {
            async starwars() {
                try{
                    url = "https://swapi.co/api/";
                    this.loading = true;
                    const response = 
                        await axios.get(url + this.category +'/')
                            .catch(error => {this.number = this.max; 
                            });
                    console.log("response\t", response);
                    console.log("response.name\t",response.data.name);
                    //console.log("json\t\t", response.json[0]);
                    console.log("body\t", response.body);
                } catch (error){
                    console.log(error);
                }
            },
           
            async planets() {
                console.log('planets')
                try{
                    url = "https://swapi.co/api/";
                    this.loading_planets = true;
                    let response = await axios.get(url + this.category) //+ '/' + this.index);
                    //const numPlanets = response.data.count;
                    while(response.data.next !== null){
                        console.log('planets response = ')//, response.data.results);
                        console.log(response.data.next);
                        response = await axios.get(response.data.next);
                        console.log(response.data.results.length)
                        for(let i = 0; i < response.data.results.length; i++){
                            //console.log(response.data.results[i]);//.name);
                            console.log(response.data.results[i].name,' - ', response.data.results[i].terrain);
                            console.log(response.data.results[i]);
                            //this.planet_list[i].push({name: response.data.results[i].name});
                            this.planet_list.push(response.data.results[i]);
                            //console.log("h1",this.planet_list.name, "here")
                        }
                        
                    }
                    
                }
                catch (error){
                    console.log(error);
                }

            }
            

        },
        
        
        computed: {
            month() {
            }
        },
        // watch the element/variable called...number
        // action if it changes
        //      Is this similar to creating a 
        //          setter in a class?
        /*
        watch: {
            },
        },
        */
});