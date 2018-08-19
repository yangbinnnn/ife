<template>
    <div class="about">
        <h1> {{msg}} </h1>
    </div>
</template>

<script>
export default {
    name: "about",
    data () {
        return {
            msg: "About me!"
        }
    }
}
</script>

<style scoped>
    .about {
        background-color: coral;
    }
</style>
