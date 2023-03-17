let eventBus = new Vue();

Vue.component('board', {
    template:`
        <div class="tabs">
            <newBoard></newBoard>
            <div class="tabs-wrap">
                <table_1 :column_1="column_1"></table_1>
                <table_2 :column_2="column_2"></table_2>
                <table_3 :column_3="column_3"></table_3>
                <table_4 :column_4="column_4"></table_4>
            </div>   
        </div>
    `,
    data(){
        return{
            column_1:[],
            column_2:[],
            column_3:[],
            column_4:[],
        }
    },
    mounted(){
        this.column_1 = JSON.parse(localStorage.getItem("column_1")) || [];
        this.column_2 = JSON.parse(localStorage.getItem("column_2")) || [];
        this.column_3 = JSON.parse(localStorage.getItem("column_3")) || [];
        this.column_4 = JSON.parse(localStorage.getItem("column_4")) || [];
        eventBus.$on('addColumn_1', tab => {
            this.column_1.push(tab);
            this.saveTab_1();
        });
        eventBus.$on('addColumn_2', tab => {
            this.column_2.push(tab);
            this.saveTab_2();
        });
        eventBus.$on('addColumn_3', tab => {
            this.column_3.push(tab);
            this.saveTab_3();
        });
        eventBus.$on('addColumn_4', tab => {
            this.column_4.push(tab);
            if (tab.date > tab.deadline){
                tab.term = false;
            }
            this.saveTab_4();
        });
    },
    watch: {
        column_1(newValue) {
            localStorage.setItem("column_1", JSON.stringify(newValue));
        },
        column_2(newValue) {
            localStorage.setItem("column_2", JSON.stringify(newValue));
        },
        column_3(newValue) {
            localStorage.setItem("column_3", JSON.stringify(newValue));
        },
        column_4(newValue) {
            localStorage.setItem("column_4", JSON.stringify(newValue));
        }
    },
    methods:{
        saveTab_1(){
            localStorage.setItem('column_1', JSON.stringify(this.column_1));
        },
        saveTab_2(){
            localStorage.setItem('column_2', JSON.stringify(this.column_2));
        },
        saveTab_3(){
            localStorage.setItem('column_3', JSON.stringify(this.column_3));
        },
        saveTab_4(){
            localStorage.setItem('column_4', JSON.stringify(this.column_4));
        },
    }
})