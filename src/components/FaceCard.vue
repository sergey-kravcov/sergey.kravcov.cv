<template>
    <div class="face-card">
        <img src="@/assets/photo.jpg" alt="Sergey Kravcov's photo" title="Sergey Kravcov's photo">
        <h1>Sergey Kravcov</h1>
        <p>Full Stack Developer</p>
    </div>
</template>

<style lang="scss">
.face-card {
    padding: 1.5rem 5rem;
    background-color: #35879a;
    color: white;
    text-align: center;

    h1 {
        margin: 1rem;
    }

    p {
        margin: 0;
        color: #8bd0df;
    }

    img {
        width: 100px;
        border-radius: 50%;
    }
}
</style>
