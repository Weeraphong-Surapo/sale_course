<template lang="">
    <section>
        <div>
            <h3 class="text-center alert alert-primary ">Authentication</h3>
        </div>
        <div class="container">
            <h1>สมัครสมาชิก</h1>
            <form >
                <div class="form-group mb-4">
                    <h5>ชื่อ</h5>
                    <input class="form-control" type="text" name="" placeholder="ชื่อ-นามสกุล">
                </div>
                <div class="form-group mb-4">
                    <h5>อีเมล</h5>
                    <input class="form-control" type="text" name="" placeholder="อีเมล">
                </div>
                <div class="form-group mb-4">
                    <h5>รหัสผ่าน</h5>
                    <input class="form-control" type="text" name="" placeholder="รหัสผ่าน">
                </div>
                <div class="form-group mb-4">
                    <h5>ยืนยันรหัสผ่าน</h5>
                    <input class="form-control" type="text" name="" placeholder="ยืนยันรหัสผ่าน">
                </div>
              <button class="btn btn-primary w-100 mb-3">สมัคร</button>
              <h5 class="text-center">มีบัญชีพร้อมแล้วใช่ไหม? <router-link to="signin">Signin</router-link> </h5>
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
export default {

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