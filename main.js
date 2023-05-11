const app = {
    data(){
        return{
            text:'',
            textColor: 'white'
        }
    },
    methods:{
        changeColor(background){
            this.textColor = background;
        } 
    }
}
Vue.createApp(app).mount('#app')