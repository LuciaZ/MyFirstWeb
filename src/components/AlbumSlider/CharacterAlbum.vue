<template>
  <div>
        <div class="container" @click="clc">
      <div class="panel active" id="img1" >
        <h3>Lancer</h3>
      </div>
      <div class="panel" id="img2">
        <h3>Samurai</h3>
      </div>
      <div class="panel" id="img3">
        <h3>Insector</h3>
      </div>
      <div class="panel" id="img4">
        <h3>Yumi</h3>
      </div>
      <div class="panel" id="img5">
        <h3>Dragon Warriors</h3>
      </div>
      <!-- <div class="panel" id="img6">
        <h3>Silvia</h3>
      </div> -->
      <div class="panel" id="img7">
        <h3>Wenzi</h3>
      </div>
  </div>

    <span class="title">Character Design</span>
  
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CharacterAlbum",

  setup() {
    return {};
  },
  methods: {
    clc() {
      const panels = document.querySelectorAll(".panel");

      panels.forEach((panel) => {
        panel.addEventListener("click", () => {
          removeActiveClasses();
          panel.classList.add("active");
        });
      });

      function removeActiveClasses() {
        panels.forEach((panel) => {
          panel.classList.remove("active");
        });
      }
    },
  },
});
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}



.container {
  margin-left: 100px;
  margin-top: 10px;
  display: flex;
  width: 90vw;
}

#img1 {
  background-image: url("../../assets/characters/lancer.jpg");
}

#img2 {
  background-image: url("../../assets/characters/samurai.jpg");
}

#img3 {
  background-image: url("../../assets/characters/insector.jpg");
}

#img4 {
  background-image: url("../../assets/characters/yumi.jpg");
}

#img5 {
  background-image: url("../../assets/characters/Dragon\ Warriors.jpg");
}

// #img6 {
//   background-image: url("../../assets/characters/silvia.jpg");
// }

#img7 {
  background-image: url("../../assets/characters/wenzi.jpg");
}


.panel {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 70vh;
    border-radius: 50px;
    color: rgb(0, 0, 0);
    cursor: pointer;
    flex: 0.4;
    margin: 15px;
    margin-top: 5vh;
    position: relative;
    -webkit-transition: all 700ms ease-in;
    opacity: 0.8;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
   
}

.panel h3 {
  font-size: 24px;
  position: absolute;
  bottom: 20px;
  left: 0px;
  margin: 0;
  opacity: 0;
}

  .panel.active {
    flex: 4;
    background-size: contain;
    border-radius: 0px;
    width:initial;
    opacity: 1;
    height:auto;
    box-shadow: None;
  }

.panel.active h3 {
  opacity: 0;
  
  transition: opacity 0.3s ease-in 0.4s;
}


@media (max-width: 480px) {
  .container {
    width: 100vw;
  }

  .panel:nth-of-type(4),
  .panel:nth-of-type(5) {
    display: none;
  }
}

.title {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 5vh;
  font-weight: bolder;
  left: 0px;
  bottom: 10px;
  margin-bottom: 0px;
  margin-left: 5vw;
  position: fixed;
}


</style>
