<script lang="ts">
import { defineComponent } from 'vue';
import BaseContentSection from './BaseContentSection.vue';

export default defineComponent({
    name: 'WorkExperience',
    components: {
        BaseContentSection,
    },
});
</script>

<template>
    <BaseContentSection header="Work Experience">
        <button type="button">
            <i class="fas fa-road" aria-hidden="true" role="presentation"></i>
            <div>Timeline</div>
        </button>
        <section>
            <header>
                <div>
                    <h4>Web Software Developer</h4>
                    <strong>Selerix</strong> | <i>Nov 2018 - Present</i>
                </div>
                <a href="https://www.selerix.com/" target="_blank" class="selerix-link">
                    <img src="@/assets/selerix_logo.png" alt="Selerix Logo">
                </a>
            </header>
            <p>Development of a benefits administration system with broad capabilities.</p>
            <ul>
                <li>Project with service-oriented and microservice architecture. Library of tools to simplify the work of HR department. Development of command dashboard empowering Employers to send and analyze communications with their employees.</li>
                <li>.NET Core, Restful API, Vue,js, TypeScript, Webpack, Jest, Bootstrap, Kendo UI</li>
            </ul>
        </section>
        <section>
            <header>
                <div>
                    <h4>.NET FULL STACK DEVELOPER</h4>
                    <strong>Itbelcom</strong> | <i>Apr 2018 - Present</i>
                </div>
                <a href="https://www.itbel.com/" target="_blank">
                    <img src="@/assets/itbelcom_logo.png" alt="Itbelcom Logo">
                </a>
            </header>
            <p>Development of banking software for financial markets.</p>
            <ul>
                <li>Providing remote participation of organizations in operations on financial markets and remote placement of funds by organizations in bank deposits.</li>
                <li>.NET Core, SQL, Entity Framework, Vue,js, TypeScript, Webpack, Bootstrap, WPF</li>
            </ul>
        </section>
        <section>
            <header>
                <div>
                    <h4>Junior .NET Developer</h4>
                    <strong>Information Center of the Ministry of Economy</strong> | <i>Nov 2016 - Oct 2017</i>
                </div>
            </header>
            <p>Development of portal for storing, monitoring and managing bankruptcy company information.</p>
            <ul>
                <li>Development of new portal functionality. Web Portal Support. Portal testing.</li>
                <li>C#, SQL, Java Script, jQuery, HTML, CSS, Razor</li>
            </ul>
        </section>
    </BaseContentSection>
</template>

<style lang="scss">
    .selerix-link {
        padding: 0.2rem 0.5rem;
        border: 1px solid #6998dd;
        background-color: #2666c4;
        box-shadow: 10px 13px 7px #2666c444;
    }
</style>
