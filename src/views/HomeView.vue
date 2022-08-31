<template>
  <body>
    <div class="bkg">
      <div>
        <nav-tab></nav-tab>
        <div class="text001">
          <div class="title">This is My WebSite.</div>
        <h2>  &nbsp; Which seems a little bit ugly, 以及敷衍。</h2>
        <div class="text002">
            <p><br><br>&nbsp;&nbsp;就这? 不如PPT</p>
        </div>
        
        
      </div>
      
        <div class="text003">
          &nbsp;Just for fun.
        </div>
      </div>
    </div>
    <div class="back" @click="loadPage">Click to back.</div>
  </body>
</template>

<script>
import NavTab from "@/components/NavTab/NavTab.vue";
import { useRouter } from "vue-router";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "HomePage",
  components: {
    NavTab,

  },
  setup() {
    const router = useRouter();
    let loadPage = () => {
      router.push("/load");
    };

    return {
      loadPage,
    };
  },
});
</script>

<style lang="scss" scoped>

body {
  font-family: "Lato", sans-serif;
  height: 100vh;
  background-color: #fff;
}

.text001 {
  position: absolute;;
  left:100px;
  top: 300px;
  bottom: 200px;
  margin: auto;
  line-height: 1.2;
}

.title {
  font-size: 100px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

h2 {
  font-weight: 300;
}

.text002 {
    font-size: 30px;
    font-weight: bold;
    line-height: 1;
    position: absolute;
}
.text003 {
  font-size: 25px;
  font-weight: bold;
  right:5vw;
  top: 85vh;
  bottom:100px;
  font-family: Righteous;
    color: white;
    text-transform: uppercase;
    line-height: 1;
    animation: letterspacing 5s infinite alternate ease-in-out;
    display: block;
    position: absolute;
    left: 1500px;
    top: 800px;
    transform: translate3d(-50%, -50%, 0);
    letter-spacing: -2.2rem;
}
.back {
  position:absolute;
  right: 200px;
  top: 850px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 100;
}

.back:hover {
  color:rgb(61, 199, 204);
  font-weight: 300;
}

@keyframes letterspacing {
    0% {
        letter-spacing: -2.2rem;
        filter: blur(.3rem);
    }

    50% {
        filter: blur(.5rem);
    }

    100% {
        letter-spacing: .5rem;
        filter: blur(0rem);
        color: rgb(10, 10, 10);
    }
}

</style>
