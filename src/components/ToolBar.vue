<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ToolBar',
    methods: {
        print(): void {
            window.print();
        },
    },
});
</script>

<template>
    <div class="tool-bar">
        <a href="https://drive.google.com/file/d/1RmoSQTOi7VL2UdZWzMAIjgSI7-S1pPZ4/view"
           target="_blank"
           aria-label="Download resume">
            <i class="fas fa-id-badge" aria-hidden="true" role="presentation"></i>
            <div>CV</div>
        </a>
        <button type="button" @click="print" class="print">
            <i class="fas fa-print" aria-hidden="true" role="presentation"></i>
            <div>Print</div>
        </button>
        <div class="tab"></div>
    </div>
</template>

<style lang="scss">
    .tool-bar {
        position: fixed;
        top: -58px;
        right: 100px;
        display: flex;
        min-width: 65px;
        flex-wrap: wrap;
        flex-direction: column;
        padding: 0.2rem 0.5rem;
        border-bottom-right-radius: 0.4rem;
        border-bottom-left-radius: 0.4rem;
        background-color: #3b4358;
        transition: all 0.5s cubic-bezier(.25, .8, .25, 1);
        box-shadow: 0.3rem 0.3rem 1rem #666666;
        border: 2px outset #888888;
        border-top: none;
        z-index: 2;

        @media (min-width: 770px) {
            top: -114px;
        }

        @media print {
            display: none;
        }

        &:hover {
            top: 0;
        }

        .print {
            display: none;

            @media (min-width: 770px) {
                display: block;
            }
        }

        button, a {
            color: aliceblue;
            padding: 0.3rem;
            margin: 0.2rem 0;
            font-weight: 700;
            border: 2px inset transparent;
            text-transform: uppercase;
            text-decoration: none;
            text-align: center;

            &:hover {
                background-color: paleturquoise;
                color: #3b4358;
                border-radius: 4px;
                border: 2px inset #ccc;
            }

            i {
                font-size: 1.2rem;
            }

            div {
                margin-top: 0.1rem;
                font-size: 0.7rem;
            }
        }

        .tab {
            margin: 0.1rem 0;
            padding: 0.1rem;
            border-top: 1px solid paleturquoise;
            border-bottom: 1px solid paleturquoise;
            box-shadow: 3px 2px 10px rgba(0,0,0,0.9);
        }
    }
</style>
