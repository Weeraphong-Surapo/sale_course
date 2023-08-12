<template>
    <section >
        <div>
            <h3 class="text-center alert alert-primary">หลักสูตรอบรม</h3>
        </div>
        <div class="container">
            <Product/>
        </div>
    </section>
</template>
<script>
import Product from '@/components/Product.vue';
export default {
    name:"CouresView",
    components:{
        Product
    }
}
</script>
<style scoped>
    h3{
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top:-35px;
        z-index: 100;
    }
</style>