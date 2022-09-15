<template>
<div class="bkg">
  <div>
    <nav-tab></nav-tab>
    <vocaloid-album></vocaloid-album>
  </div>
  <div class="bottom">
    <div class="title">Vocaloid</div>
    <div class="btn" @click="back"> BACK</div>
  </div>
</div>

</template>

<script>
import NavTab from '@/components/NavTab/NavTab.vue'
import VocaloidAlbum from '@/components/AlbumSlider/VocaloidAlbum.vue';
import { useRouter } from "vue-router";
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  name: "VocaloidView",
  components: { 
    NavTab,
    VocaloidAlbum,
  },
  setup () {
    const router = useRouter()
    let back = () => {
      router.push('/works')
    }

    return {
      back
    }
  }
})
</script>

<style lang="scss" scoped>

.bkg {
  font-family: "Lato", sans-serif;
    height: 100vh;
}

.bottom {
  position:absolute;
  top: 90vh;
  width: 100vw;
  height: 10vh;
  background-color: rgb(114, 235, 225);
}
.title {
  font-size: 60px;
  position: absolute;
  left: 120px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
}
.btn {
  position:absolute;
  right: 120px;
  cursor: pointer;
  font-size: 30px;
  top: 30px;
  border: 3px solid #000;
  width: 150px;
  height:40px;
  text-align: center;
  border-radius: 20px;
  background: none;
  letter-spacing: 3px;;
  font-weight: 600;

}

.btn:hover{
  background: rgb(114, 235, 225);
  text-align: center;
  border: 3px solid #fff;
  vertical-align: middle;
  color:#fff;
}

</style>