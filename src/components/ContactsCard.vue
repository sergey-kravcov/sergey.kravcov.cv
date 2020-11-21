<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ContactsCard',
});
</script>

<template>
    <nav class="contacts-card" aria-label="Ways to contact me">
        <ul>
            <li>
                <i class="icon socicon-linkedin" title="LinkedIn" aria-hidden="true" role="presentation"></i>
                <a href="https://www.linkedin.com/in/sergey-kravcov/" target="_blank">linkedin.com/in/sergey-kravcov</a>
            </li>
            <li>
                <i class="icon socicon-mail" title="E-mail" aria-hidden="true" role="presentation"></i>
                <a href="mailto:sergey.kravcov.job@gmail.com" target="_blank">sergey.kravcov.job@gmail.com</a>
            </li>
            <li>
                <i class="icon socicon-skype" title="Skype" aria-hidden="true" role="presentation"></i>
                <a href="https://join.skype.com/invite/s1HCBNfw02bT" target="_blank">seryogakrv</a>
            </li>
            <li>
                <i class="icon socicon-github" title="Github" aria-hidden="true" role="presentation"></i>
                <a href="https://github.com/sergey-kravcov" target="_blank">github.com/sergey-kravcov</a>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
.contacts-card {
    padding: .5rem 3rem;
    background-color: #42a8c0;
    color: white;

    ul {
        margin: 0;
        padding: 0;
        list-style: none;

        li {
            display: flex;
            margin: 1.5rem 0;

            .icon {
                padding-right: .4rem;
            }
        }
    }

    a {
        color: white;
    }
}
</style>
