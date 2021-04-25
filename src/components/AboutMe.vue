<script lang="ts">
import { defineComponent } from 'vue';
import BaseContentSection from './BaseContentSection.vue';

export default defineComponent({
    name: 'AboutMe',
    components: {
        BaseContentSection,
    },
});
</script>

<template>
    <BaseContentSection header="About" class="about-me">
        <template v-slot:header>
            <h1>Sergey <br>Kravcov</h1>
            <h2>Fullstack Developer</h2>
        </template>
        <p>I am working in information technology with a focus on web development and support started from the April 2018. I am a disciplined, responsible and purposeful person. I regularly study new technologies for myself and consolidate knowledge in those already studied. I follow the code guides of company. I plan my work and try to create a quality project.</p>
        <p>I like front-end development and I plan to develop in this direction in the near future.</p>
        <p>I'm currently working with <ins>Vue.js</ins> and I love it, but I don't mind getting started with <ins>React</ins> for a new experience and impressions.</p>
    </BaseContentSection>
</template>

<style lang="scss">
    .about-me {
        @media (min-width: 770px) {
            padding-top: 165px;
        }

        h1, h2 {
            color: #d08268;
            text-transform: uppercase;
        }

        h1 {
            font-size: 3rem;
            font-family: 'ubuntu';
            letter-spacing: 10px;

            @media print {
                margin-top: 0;
            }
        }

        h2 {
            font-size: 1.5rem;
            font-family: 'ubuntulight';
            letter-spacing: 5px;
        }
    }
</style>
