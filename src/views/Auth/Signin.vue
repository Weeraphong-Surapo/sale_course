<template lang="">
    <section>
        <div>
            <h3 class="text-center alert alert-primary ">Authentication</h3>
        </div>
        <div class="container">
            <h1>เข้าสู่ระบบ</h1>
            <form @submit.prevent="submit">
                <div class="form-group mb-4">
                    <h5>อีเมล</h5>
                    <input class="form-control" type="text" v-model="form.email" placeholder="อีเมล">
                </div>
                <div class="form-group mb-4">
                    <h5>รหัสผ่าน</h5>
                    <input class="form-control" type="text" v-model="form.password" placeholder="รหัสผ่าน">
                </div>

              <button class="btn btn-primary w-100 mb-3">เข้าสู่ระบบ</button>
              <h5 class="text-center mb-4 mt-2">ยังไม่มีบัญชีผู้ใช้ใช่ไหม? <router-link to="signup">Signup</router-link> </h5>
            </form>
            <div id="select-login">
                ------------- Or -------------
            </div>
            <button class="btn btn-info w-100 mb-3 mt-3">Login with Facebook</button>
            <button class="btn btn-secondary w-100">Login with Google</button>
        </div>
    </section>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    data(){
        return{
            form:{
                email:"",
                password:""
            }
        }
    },
    methods:{
        ...mapActions({
            SignIn:'auth/SignIn'
        }),
        submit(){
            this.SignIn(this.form).then(()=>{
                this.$router.replace({
                    name:"home"
                })
            }).catch(e=>{
                console.log(e);
            })
        }
    }

}
</script>
<style scoped>
#select-login{
    display: flex;
    justify-content: center;
    align-items: center;
}
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