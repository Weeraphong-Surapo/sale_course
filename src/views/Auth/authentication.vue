<template lang="">
        <div >
            <Signin/>
        </div>
</template>
<script>
import Signin from './Signin.vue';
export default {
    name:"authentication",
    components:{
        Signin
    },
    data(){
        return{
            status:0
        }
    }
}
</script>
<style scoped>
.form-control {
    background: #f5f5f5;
}

.form-control:focus {
    background: #fff;
}

h3 {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -35px;
    z-index: 100;
}
</style>