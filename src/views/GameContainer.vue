<style>

</style>

<template>
    <div class="game">
        <canvas id="canvas" width="960" height="480"></canvas>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({})
    export default class GameContainer extends Vue {
        mounted(): void {

        }

        private init(): void {
            const width = 960;
            const height = 480;
        }
    }

</script>
