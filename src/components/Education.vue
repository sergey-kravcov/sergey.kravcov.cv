<script lang="ts">
import { defineComponent } from 'vue';
import BaseContentSection from './BaseContentSection.vue';

export default defineComponent({
    name: 'Education',
    components: {
        BaseContentSection,
    },
});
</script>

<template>
    <BaseContentSection header="Education" class="education">
        <section>
            <header>
                <div>
                    <h4>Belarusian State University of Informatics and Radioelectronics</h4>
                    <small>Minsk, Belarus</small>
                </div>
                <a href="https://www.bsuir.by/" target="_blank" class="bsuir-link">
                    <img src="@/assets/bsuir.svg" alt="BSUIR Logo">
                </a>
            </header>
            <strong>Computer Networks and Systems</strong> | <i>2012- 2017</i>
            <div>Computing machines, complexes, systems and networks</div>
        </section>
    </BaseContentSection>
</template>

<style lang="scss">
    .education {
        section {
            header {
                margin-bottom: 0.5rem;

                @media (min-width: 900px) {
                    align-items: flex-start;
                }
            }

            h4 {
                margin-bottom: 0;
            }
        }

        .bsuir-link {
            width: 64px;
            padding: 0.2rem 0.5rem;
            border: 1px solid #6998dd;
            flex-basis: 64px;
            flex-grow: 0;
            background-color: #111d43;
            box-shadow: 10px 13px 7px #2666c444;
        }
    }
</style>
