<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BaseContentSection',
    props: {
        header: {
            type: String,
            requred: true,
        },
    },
});
</script>

<template>
    <section class="base-content-section">
        <header>
            <slot name="header" />
            <h3>{{ header }}</h3>
        </header>
        <slot />
    </section>
</template>

<style lang="scss">
    .base-content-section {
        position: relative;
        margin-top: 0.5rem;
        padding: 1.5rem 3rem;
        background-color: white;

        @media print {
            margin: 0;
            padding: 1.5rem;
        }

        @media (min-width: 900px) {
            padding: 1.5rem 5rem;
        }

        &:hover {
            button {
                opacity: 0.5;
            }
        }

        p {
            margin-top: 0.5rem;
            margin-bottom: 0;
        }

        h3 {
            color: #d08268;
            text-transform: uppercase;
            font-family: 'ubuntubold';
            letter-spacing: 3px;
            font-size: 1.3rem;
            margin: 0;
            margin-bottom: 1.5rem;

            @media print {
                margin-bottom: 0.5rem;
            }
        }

        button {
            display: none;
            position: absolute;
            top: 0.6rem;
            right: 1.5rem;
            font-size: 2rem;
            opacity: 0;
            transition: all 1s cubic-bezier(.25, .8, .25, 1);

            &:hover {
                opacity: 1;

                div {
                    transform: scaleY(1) scaleX(1);
                    transition: all 0.5s cubic-bezier(.25, .8, .25, 1);
                }
            }

            div {
                font-size: 0.6rem;
                text-transform: uppercase;
                font-weight: bold;
                transform: scaleY(0) scaleX(0);
            }
        }

        section {
            position: relative;

            &:hover {
                a {
                    opacity: 0.5;
                    transform: scaleY(1) scaleX(1);
                }
            }

            &:not(:last-of-type) {
                margin-bottom: 0.4rem;
                border-bottom: 0.5rem solid #ffe9db;
            }

            header {
                margin: 1.5rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            h4 {
                text-transform: uppercase;
                font-size: 1rem;
                margin: 0 1rem 0.3rem 0;
            }

            small {
                font-size: 0.7rem;
            }

            i {
                display: inline-block;
            }

            a {
                flex-basis: 0;
                flex-grow: 1;
                max-width: 150px;
                max-height: 150px;
                opacity: 0;
                transform: scaleY(0.3) scaleX(0.3);
                transition: all 1s cubic-bezier(.25, .8, .25, 1);

                &:hover {
                    opacity: 1;
                }

                img {
                    max-width: 100%;
                }
            }
        }
    }
</style>
