<script lang="ts">
import { defineComponent } from 'vue';
import FaceCard from '@/components/FaceCard.vue';
import ContactsCard from '@/components/ContactsCard.vue';
import CVCard from '@/components/CVCard.vue';

export default defineComponent({
    name: 'Home',
    components: {
        FaceCard,
        ContactsCard,
        CVCard,
    },
});
</script>

<template>
    <div class="home">
        <FaceCard />
        <ContactsCard />
        <CVCard />
    </div>
</template>

<style lang="scss">
.home {
    width: 500px;
    margin: 1rem;
    box-shadow: 0 0 5px rgba(0,0,0,0.5);
}
</style>
