<template>
    <div class="documents">
        <BreadVue bread="Политика конфиденциальности" />

        <div class="documents__list p-80 container">
            <h2 class="heading text-center">Политика конфиденциальности</h2>
            <div class="body">
                <div class="pdf-container">
                    <!-- <embed src="/files/policy.pdf" type="application/pdf" width="100%" height="600px" /> -->
                    <!-- or -->
                    <iframe src="/files/policy.pdf" width="100%" height="600px"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BreadVue from "@/components/Bread.vue";
export default {
    components: {
        BreadVue,
    },
}
</script>