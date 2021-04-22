<template>
    <div class="cv-card">
        <h2>
            <i class="fas fa-id-badge" aria-hidden="true" role="presentation"></i>
            <span>My resume</span>
        </h2>
        <p>If you would like to learn more about my professional activities in more detail, you can download my resume below.</p>
        <div class="download">
            <a href="https://drive.google.com/file/d/1RmoSQTOi7VL2UdZWzMAIjgSI7-S1pPZ4/view"
               target="_blank"
               aria-label="Download resume">
                <i class="fas fa-download" title="Download resume" aria-hidden="true" role="presentation"></i>
            </a>
        </div>
    </div>
</template>

<style lang="scss">
.cv-card {
    background-color: white;
    padding: 2rem 3rem;
    color: #2d7788;
    font-size: 14px;

    h2 {
        display: flex;
        align-items: center;

        i {
            font-size: 2rem;
            padding-right: 0.3em;
        }
    }

    a {
        color: #35879a;
    }

    .download {
        margin-top: 2rem;
        text-align: center;
        font-size: 2.5rem;
    }
}
</style>
