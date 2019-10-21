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
        category: 'people',
        index: '1',
        loading: true,
        
        addedName: '',
        addedComment: '',
        comments: {},
    },
    
    created() {
        this.starwars();
    },
    
    methods: {
            async starwars() {
                try{
                    url = "https://swapi.co/api/";
                    this.loading = true;
                    const response = 
                        await axios.get(url + this.category +'/'+ '1/')
                            .catch(error => {this.number = this.max; 
                            });
                    console.log("response\t", response);
                    console.log("response.name\t",response.name);
                    console.log("json\t\t", response.json[0]);
                    console.log("body\t", response.body);
                } catch (error){
                    console.log(error);
                }
            },
           
            addComment(){
            },
            
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