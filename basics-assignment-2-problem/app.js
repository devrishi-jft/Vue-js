const app = Vue.createApp({
    data() {
        return {
            output: '',
            output2: ''
        };
    },
    methods: {
        alertSub() {
            alert('alert!');
        },
        outputKeydown(event){
            this.output = event.target.value;
        },
        outputEnter(event){
            this.output2=event.target.value;
        }

    }
});

app.mount('#assignment');