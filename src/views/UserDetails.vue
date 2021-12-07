<template>
    <div>
        <h1>User details</h1>
    </div>
</template>

<script>
export default {
    props: {
        userId: {
            type: String,
            required: true,
        }
    },
    mounted() {
        console.log(this.$route.params.userId);
        //OR
        console.log(this.userId);
    },
}
</script>