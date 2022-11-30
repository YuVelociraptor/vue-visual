<template>
  <div>
    <div id="canvas"></div>
  </div>
</template>

<script>

import { onMounted, ref } from 'vue';
import p5 from 'p5';
import { p5Setup } from '../p5/First';


export default {

  setup() {
    const P5 = ref();

    // マウント時に canvas を生成
    onMounted(() => {
      P5.value = new p5(p5Setup);
    });

    return {
      P5
    };
  }

};
</script>