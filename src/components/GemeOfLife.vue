<template>
  <div>

    <button v-on:click="st">Start</button>

    <div id="canvas"></div>
  </div>
</template>

<script>

import { onMounted, ref } from 'vue';
import p5 from 'p5';
import { p5Setup, startP5 } from '../p5/gamelife';


export default {

  setup() {
    const P5 = ref();

    // マウント時に canvas を生成
    onMounted(() => {
      P5.value = new p5(p5Setup);
    });

    const st = () => {
      startP5();
    }

    return {
      P5,
      st
    };
  }

};
</script>