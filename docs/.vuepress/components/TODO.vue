<template>
    <div class="md-todo">

        <div class="header"> todo</div>
        <div class="content">
        <slot class="tonk"></slot>
        </div>
    </div>
</template>

<script>

</script>
<style>
    .md-todo {
        background-color: #7FFFD4;
        border-left: 7px #00d18b solid;
        filter: drop-shadow(3px 3px 4px gray);
    }

    .md-todo .header{
        font-size: 1.3rem;
        padding: 0.5rem 1rem 0.2rem 1rem;
        color: rgba(0,0,0,0.7);
        font-weight: bold;
    }

    .md-todo .content{
        padding: 0.3rem 1rem;
    }


</style>
