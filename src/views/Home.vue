<script lang="ts">
import { defineComponent } from 'vue';
import LeftPanel from '@/components/LeftPanel.vue';
import AboutMe from '@/components/AboutMe.vue';
import WorkExperience from '@/components/WorkExperience.vue';
import Education from '@/components/Education.vue';
import ToolBar from '@/components/ToolBar.vue';

export default defineComponent({
    name: 'Home',
    components: {
        LeftPanel,
        AboutMe,
        WorkExperience,
        Education,
        ToolBar,
    },
});
</script>

<template>
    <div class="home">
        <LeftPanel />
        <div class="content">
            <AboutMe />
            <WorkExperience />
            <Education />
        </div>
        <div class="left-triangle"></div>
        <div class="right-triangle"></div>
        <ToolBar />
    </div>
</template>

<style lang="scss">
    .home {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        color: #263547;

        @media print {
            display: block;
        }

        .content {
            flex-basis: 0;
            flex-grow: 1;
        }

        .left-triangle {
            position: absolute;
            top: 0;
            width: 0;
            height: 0;
            border-top: 430px solid #3b4358;
            border-right: 90vw solid transparent;

            @media (min-width: 610px) {
                border-right-width: 600px;
            }
        }

        .right-triangle {
            position: absolute;
            top: 0;
            right: 0;
            width: 0;
            height: 0;
            border-top: 350px solid #d08268;
            border-left: 140vw solid transparent;

            @media (min-width: 770px) {
                border-top-width: 30vw;
            }

            @media (min-width: 900px) {
                border-top-width: 25vw;
            }

            @media (min-width: 1300px) {
                border-top-width: 350px;
            }
        }
    }
</style>
