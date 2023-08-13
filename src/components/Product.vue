<template lang="">
    <router-link to="detail" >
    <div class="col-md-6">
        <div class="w-100 h-100 p-3 services-card rounded-4">
            <div class="row">
                <div class="col-6">
                    <img src="https://res.cloudinary.com/djqmcj6bo/image/upload/v1684310834/x9l9ny4l4dwrcdppmqck.webp"
                    alt="Comment" style="width:100%; height: 100%;" />
                </div>
                <div class="col-6">
                    <h3 class="mt-3 lh-base">ฟรี</h3>
                    <h4>Basic HTML</h4>
                    <div class="row">
                        <div class="col-6">
                            <p>13 บทเรียน</p>
                        </div>
                        <div class="col-6">
                            <p>6 ผู้เรียน</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</router-link>
</template>
<script>
export default {
    name: "Product"
}
</script>
<style scoped>
.services-card {
    transition: .3s ease;
}

.services-card:hover {
    -webkit-box-shadow: var(--gohub-box-shadow) !important;
    box-shadow: var(--gohub-box-shadow) !important;
    transition: .3s ease;
}
</style>