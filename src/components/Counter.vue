<!-- HTML -->
<template>
    <div>
        <p>Count : {{ value }}</p>
        <p>Square : {{ countSquared }}</p>
        <p>Updates : {{ updates }} </p>
        <button @click="removeOne">-</button>
        <button @click="addOne">+</button>
    </div>
</template>

<!-- JS -->
<script>
export default {
    props: {
        value: {
            type: Number,
            required: true,
        },
        onlyPositive: {
            type: Boolean,
            required: false,
            default: () => false
        },
    },
    data: () => ({
        updates: 0,
    }),
    computed: {
        countSquared() {
            return this.value * this.value;
        },
    },
    methods: {
        addOne() {
            this.$emit("input", this.value++);
            this.$emit("update", this.value++);
        },

        removeOne() {
            if(this.onlyPositive){
                if(this.value - 1 >= 0){
                    this.$emit("input", this.value--);
                }
            } else {
                this.$emit("input", this.value--);
            }
            this.$emit("update", this.value);
        } 
    },
    watch: {
        value() {
            this.updates++;
        }
    }
}
</script>

<!-- SCSS -->
<style lang="scss">
</style>