<template>
  <div class="first">first
    <h4>水波图动态绑定值</h4>
       <div class="boll">
          <div class="text">
            <p class="num">{{ waterNum }}%</p>
          </div>
          <div :style="water_style" class="water w1" />
          <div :style="water_style" class="water w2" />
          <div :style="water_style" class="water" />
        </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      water_style: {
        marginTop: '90%'
      },
      waterNum: 0
    }
  },
  mounted() {
    this.proportion()
    this.waterNum = this.proportion()
    this.water_style.marginTop = (100 - this.waterNum) + '%'
  },
  methods: {
    proportion() {
      const num1 = 52.2
      const num2 = 100
      const percent = (num1 % num2).toFixed(1)
      return percent
    }
  }
}
</script>

<style lang="">
body, div, h1, h2, h3, html, li, p, ul {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    @-webkit-keyframes move_wave {
        0% { background-position:0 0 }
        to { background-position:532px 0 }
    }
    @keyframes move_wave {
        0% { background-position:0 0 }
        to { background-position:532px 0 }
    }
    .boll {
      background-color: #fff;
        height: 80px;
        width: 80px;
        border-radius: 50%;
        border: 2px solid #fe810c;
        position: relative;
        font-size: 14px;
        overflow: hidden;
        margin-top: 10px;
    }
    .text {
        text-align: center;
        color: #000;
        position: absolute;
        top:30%;
        left:15%;
        z-index: 99;
    }
    .num {
        font-size: 20px;
    }
    .water {
        height: 100%;
        background: url("../../static/images/water.png") repeat-x;
        position: absolute;
        width: 100%;
        -webkit-animation: move_wave 4s linear infinite;
        animation: move_wave 4s linear infinite;
    }
    .w1 {
        opacity: .5;
        background-position: 20% 0;
        -webkit-animation: move_wave 10s linear infinite;
        animation: move_wave 10s linear infinite;
    }
    .w2 {
        opacity: .3;
        background-position: 20% 0;
        -webkit-animation: move_wave 8s linear infinite;
        animation: move_wave 8s linear infinite;
    }
</style>

