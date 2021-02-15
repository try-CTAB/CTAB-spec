<template>
    <span class="highlight-box">
        <slot></slot>
    </span>
</template>

<script>
    export default {
        name: "Highlight"
    }
</script>

<style scoped>
    .highlight-box {
        padding: 3px 6px;
        background-color: #42b983;
        border-radius: 6px;
        font-weight: bold;
        color: white;
        white-space:nowrap;
    }
</style>
