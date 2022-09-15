<template>
  <div>
    <body>
      <div class="title">My Album</div>
      <div class="tips">Please click image to see more.</div>
      <div class="main">
        <input type="radio" name="choose" id="choose1" checked />
        <input type="radio" name="choose" id="choose2" />
        <input type="radio" name="choose" id="choose3" />
        <input type="radio" name="choose" id="choose4" />
        <input type="radio" name="choose" id="choose5" />
        <input type="radio" name="choose" id="choose6" />
        <div class="item item1" @click="arknights"></div>
        <div class="item item2" @click="fate"></div>
        <div class="item item3" @click="vocaloid"></div>
        <div class="item item4" @click="others"></div>
        <div class="item item5" @click="character"></div>
        <div class="item item6" @click="original"></div>
        <span class="select">
          <label for="choose1">Arknights</label>
          <label for="choose2">Fate/Grand Order</label>
          <label for="choose3">Vocaloid</label>
          <label for="choose4">Other ACG</label>
          <label for="choose5">Character Design</label>
          <label for="choose6">Original</label>
        </span>
      </div>
      <div>
      </div>
      
    </body>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "AlbumFolder",
  setup() {
    let router = useRouter();
    let arknights = () => {
      router.push("/works/arknights");
    };
    let vocaloid = () => {
      router.push("/works/vocaloid");
    };
    let fate = () => {
      router.push("/works/fatego");
    };
    let others = () => {
      router.push("/works/others");
    };
    let character = () => {
      router.push("/works/character");
    };
    let original = () => {
      router.push("/works/original")
    }

    return {
      arknights,
      vocaloid,
      fate,
      others,
      character,
      original
    };
  },
});
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Lato", sans-serif;
  height: 100vh;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.title{
  position:absolute;
  top:125px;
  font-size: 40px;
  font-weight:300;
}

.tips {
  position:absolute;
  top:175px;
  font-size: 20px;
  font-weight:200;
}
.main {
  text-align: center;
  position: absolute;
  width: 1050px;
  height: 600px;
  overflow: hidden;
  border-radius: 5px;
  left: 200px;
  right: 200px;
  top: 200px;
  bottom: 100px;
  margin:auto;
  margin-top:10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 30px;
}
.item {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  background-size: cover;
  cursor: pointer;
}
.item1 {
  background-image: url(../../assets/arknights/ceobe.jpeg);
}
.item2 {
  background-image: url(../../assets/fatego/2.1.jpg);
  left: 100%;
}
.item3 {
  background-image: url(../../assets/vocaloid/miku2018.jpg);
  left: 200%;
}
.item4 {
  background-image: url(../../assets/others/2b9s.jpg);
  left: 300%;
}
.item5 {
  background-image: url(../../assets/characters/Dragon\ Warriors.jpg);
  left: 400%;
}
.item6 {
  background-image: url(../../assets/original/castle\ of\ glass.jpg);
  left: 500%;
}
input {
  position: relative;
  z-index: 100;
  /* display: none; */
}
.select {
  position: absolute;
  margin:auto;
  bottom: 10px;
  left:50%;
  transform: translateX(-50%);
  width: 1050px;
  height: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-weight: 400;
}
.select > label {
  width: 200px;
  height: 30px;
  background-color: rgb(188, 235, 236);
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 20px 20px rgb(255, 255, 255);
  // border: 5px solid white;

}
.main input:nth-of-type(1):checked ~ .select label:nth-of-type(1) {
  background-color: rgb(150, 233, 233);
  color: white;
}
.main input:nth-of-type(2):checked ~ .select label:nth-of-type(2) {
  background-color: rgb(76, 221, 231);
  color: white;
}
.main input:nth-of-type(3):checked ~ .select label:nth-of-type(3) {
  background-color: rgb(0, 206, 233);
  color: white;
}
.main input:nth-of-type(4):checked ~ .select label:nth-of-type(4) {
  background-color: rgb(0, 177, 200);
  color: white;
}
.main input:nth-of-type(5):checked ~ .select label:nth-of-type(5) {
  background-color: rgb(3, 154, 180);
  color: white;
}
.main input:nth-of-type(6):checked ~ .select label:nth-of-type(6) {
  background-color: rgb(4, 126, 163);
  color: white;
}

.main input:nth-of-type(1):checked ~ .item {
  transform: translateX(0);
}
.main input:nth-of-type(2):checked ~ .item {
  transform: translateX(-100%);
}
.main input:nth-of-type(3):checked ~ .item {
  transform: translateX(-200%); 
}
.main input:nth-of-type(4):checked ~ .item {
  transform: translateX(-300%);
}
.main input:nth-of-type(5):checked ~ .item {
  transform: translateX(-400%);
}
.main input:nth-of-type(6):checked ~ .item {
  transform: translateX(-500%);
}
</style>
