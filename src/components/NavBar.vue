<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" data-navbar-on-scroll="light">
        <div class="container">
            <a class="navbar-brand" href="index.html">
                <img src="assets/img/icons/Logo.png" height="35" alt="logo" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto pt-2 pt-lg-0 font-base align-items-center">
                    <li class="nav-item"><router-link to="/" class="nav-link px-3">หน้าหลัก</router-link></li>
                    <li class="nav-item"><router-link to="courses" class="nav-link px-3">หลักสูตรอบรม</router-link></li>
                   <template v-if="!authenticated">
                    <li class="nav-item"><router-link to="news" class="nav-link px-3">ข่าวสาร</router-link></li>
                    <li class="nav-item"><router-link to="about" class="nav-link pl-3 me-3">เกี่ยวกับเรา</router-link></li>
                    <li class="nav-item"><router-link to="events" class="nav-link pl-3 me-3">งานกิจกรรม</router-link></li>
                   </template>
                   <template v-else>
                    <li class="nav-item"><router-link to="events" class="nav-link pl-3 me-3">ตะกร้าสินค้า</router-link></li>
                   </template>
                </ul>
                <div v-if="authenticated">
                    <button class="btn btn-info rounded-4 btn-detail">{{ user.name }}</button>
                    <!-- <a href="#" @click="SignAction()" class="btn btn-danger rounded-4">ออกจากระบบ</a> -->
                </div>
                <div v-else>
                    <button @click="$router.replace({ path: 'authentication' })" class="btn btn-primary rounded-4">ล็อคอิน /
                        สมัคร</button>
                </div>
            </div>
        </div>

    </nav>
</template>
  
<script>
import auth from '@/store/auth';
import { mapActions, mapGetters } from 'vuex'
export default {
    name: "NavBar",
    computed: {
        ...mapGetters({
            authenticated: "auth/authenticated",
            user: "auth/user",
        }),

    },
    methods: {
        ...mapActions({
            SignOutAction: 'auth/SignOut',
        }),
        SignAction() {
            this.SignOutAction().then(() => {
                this.$router.replace({
                    name: 'home'
                })
            }).cath(e => {
                console.log(e);
            })
        }
    }
};
</script>
  
<style scoped>
/* Add your CSS styling for the component here */
</style>
  