<template>
    <div class="bread bg-gradient p-80">
            <div class="bread__info container">
                <div class="rectangle rectangle_left"></div>
                <div class="rectangle rectangle_left"></div>
                <h1 class="heading" v-if="this.bread">{{ bread }}</h1>
                <div class="filter" v-else>
                        notthing here
                </div>
                
                <div class="rectangle rectangle_right one"></div>
                <div class="rectangle rectangle_right"></div>
            </div>
        </div>
</template>
<script>
export default {
    props: ['bread'],
    created() {
       
    },
}
</script>