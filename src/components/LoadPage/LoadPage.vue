<template>
  <div>
    <body>
      <div class="bg"></div>

      <!-- <div class="mybutton">
        <button class="btn" @click="enter" v-if="appear">ENTER</button>
      </div> -->

      <div class="loading-text">0%</div>
      <div class="anniu" @click="enter" v-if="appear">ENTER</div>
    </body>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "LoadPage",
  components: {},
  mounted() {
    this.blur();
  },
  data() {
    return {
      appear: false,
      load: 0,
      // loadText: null,
      // bg: null,
      // int: null,
    };
  },
  setup() {
    let router = useRouter();
    let enter = () => {
      router.push("/home");
    };
    return {
      enter,
    };
  },
  methods: {
    blur() {
      this.loadText = document.querySelector(".loading-text");
      this.bg = document.querySelector(".bg");
      this.int = setInterval(this.blurring, 20);
    },

    blurring() {
      this.load++;
      if (this.load > 99) {
        this.appear = true;
        clearInterval(this.int);
      }

      this.loadText.innerText = `${this.load}%`;
      this.loadText.style.opacity = this.scale(this.load, 0, 100, 1, 0);
      this.bg.style.filter = `blur(${this.scale(this.load, 0, 100, 30, 0)}px)`;
    },

    // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
    scale(num, in_min, in_max, out_min, out_max) {
      return (
        ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
      );
    },
  },
});
</script>

<style lang="scss" scoped>
body {
  font-family: "Ubuntu", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.bg {
  background: url("../../assets/oae.jpg") no-repeat center center/cover;
  position: absolute;
  top: -30px;
  left: -30px;
  width: calc(100vw + 60px);
  height: calc(100vh + 60px);
  z-index: -1;
  filter: blur(0px);
}

.loading-text {
  font-size: 80px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: bold;
  color: #fff;
  margin: auto;
  position: absolute;
}

.btn {
  background: #000;
  height: 120px;
  width: 300px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: bold;
  vertical-align: middle;
  font-size: 75px;
  color: aquamarine;
  border: 5px dashed aquamarine;
  border-radius: 50px;
  cursor: pointer;
  position: absolute;
  margin-left: 5vh;
  margin-right: 30vw;
  margin-top: -10vh;
  text-align: center;
}

.btn:hover {
  color: rgb(0, 0, 0);
  background: aquamarine;
  transition: color 0s ease 0.3s, background 0s ease 0.3s;
}

.anniu,
.anniu::after {
  font-family: "Do Hyeon", sans-serif;
  width: 260px;
  height: 80px;
  text-align: center;
  font-weight: bold;
  font-size: 50px;
  line-height: 80px;
  color: rgb(29, 29, 29);
  background: linear-gradient(
    30deg,
    transparent 10%,
    rgb(61, 238, 238) 10% 95%,
    rgb(0, 255, 149) 95%
  );
  box-shadow: 5px 0 0 rgb(0, 204, 255);
  cursor: pointer;
  position: relative;
}
.anniu::after {
  content: "Aurora Borealis night";
  position: absolute;
  top: 0;
  left: 0;
  text-shadow: -5px -2px 0 rgb(0, 183, 255), 5px 2px 0 rgb(0, 255, 115);
  visibility: hidden;
}
.anniu:hover::after {
  animation: san 1s;
  animation-timing-function: steps(1, end);
}

/* 
       
       clip-path: inset(20% -5px  60%  0);
       clip-path: inset(50% -5px  30%  0);
       clip-path: inset(80% -5px  5%  0);
       clip-path: inset(0 -5px  80%  0);
       
       
        */
@keyframes san {
  0% {
    clip-path: inset(20% -5px 60% 0);
    transform: translate(-6px, 5px);
    visibility: visible;
  }
  10% {
    clip-path: inset(50% -5px 30% 0);
    transform: translate(6px, -5px);
  }
  20% {
    clip-path: inset(20% -5px 60% 0);
    transform: translate(5px, 0px);
  }
  30% {
    clip-path: inset(80% -5px 5% 0);
    transform: translate(-8px, 5px);
  }
  40% {
    clip-path: inset(0 -5px 80% 0);
    transform: translate(-4px, -3px);
  }
  50% {
    clip-path: inset(50% -5px 30% 0);
    transform: translate(-6px, -5px);
  }
  60% {
    clip-path: inset(80% -5px 5% 0);
    transform: translate(-7px, 5px);
  }
  70% {
    clip-path: inset(0 -5px 80% 0);
    transform: translate(3px, 6px);
  }
  80% {
    clip-path: inset(50% -5px 30% 0);
    transform: translate(5px, 5px);
  }
  90% {
    clip-path: inset(20% -5px 60% 0);
    transform: translate(6px, -5px);
  }
  100% {
    clip-path: inset(0 -5px 80% 0);
    transform: translate(1px, 5px);
  }
}
</style>
