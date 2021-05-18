const app=Vue.createApp({
    data(){
        return {
            fullname:'Devrishi Sherawat',
            age: 25,
            imageUrl: 'https://i.pinimg.com/originals/42/bc/f8/42bcf8561b8aefe0a162b4c10f094379.webp',
            inputValue: 'my text'
        };
    },
    methods:{
        futureAge(){
            return this.age+5;
        },
        randomNumber(){
            return Math.random();
        }
    }

});

app.mount('#assignment');