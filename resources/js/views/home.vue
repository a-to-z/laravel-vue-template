<template>
    <div class="home">
        <h1>
            {{count}}
        </h1>
<!--        <button class="btn" @click="$store.commit('INCREMENT')">INCREMENT</button>-->
        <el-button type="primary" @click="$store.commit('INCREMENT')">Increment</el-button>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: "home",
    computed: {
        ...mapState({
            count: state => state.count
        })
    }
}
</script>

<style scoped>

</style>
