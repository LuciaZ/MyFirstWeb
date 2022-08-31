<template>
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
        integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
        crossorigin="anonymous"
      />
      <body>
        <div class="slider-container">
        <div
          class="slide active"
          id="img1"
          href="http://localhost:8080/works/arknights"
        ><h3>Arknights</h3>
        </div>
          <div
            class="slide"
            id="img2"
            href="http://localhost:8080/works/vocaloid"
          ></div>
  
          <div
            class="slide"
            id="img3"
            href="http://localhost:8080/works/fatego"
          ></div>
  
          <div
            class="slide"
            id="img4"
            href="http://localhost:8080/works/others"
          ></div>
  
          <div
            class="slide"
            id="img5"
            href="http://localhost:8080/works/character"
          ></div>
  
          <button class="arrow left-arrow" id="left" @click="clc">
          &lt;  
            <i class="fas fa-arrow-left"></i>
          </button>
  
          <button class="arrow right-arrow" id="right" @click="clc">
          >  
            <i class="fas fa-arrow-right"></i>
          </button>
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
      const body = document.body;
      const slides = document.querySelectorAll(".slide");
      const leftBtn = document.getElementById("left");
      const rightBtn = document.getElementById("right");
  
      let activeSlide = 0;
  
      let router = useRouter();
      let arknights = () => {
        router.push("/works/arknights");
      };
      let vocaloid = () => {
        router.push("/works/vocaloid");
      };
      let fate = () => {
        router.push("/works/fate");
      };
      let others = () => {
        router.push("/works/others");
      };
      let character= () => {
        router.push("/works/character");
      };
  
  
      return {
        body,
        slides,
        leftBtn,
        rightBtn,
        activeSlide,
        arknights,
        vocaloid,
        fate,
        others,
        character
      };
    },
    mounted() {
      const body = document.body
  const slides = document.querySelectorAll('.slide')
  const leftBtn = document.getElementById('left')
  const rightBtn = document.getElementById('right')
  
  let activeSlide = 0
  
  rightBtn.addEventListener('click', () => {
    activeSlide++
  
    if (activeSlide > slides.length - 1) {
      activeSlide = 0
    }
  
    setBgToBody()
    setActiveSlide()
  })
  
  leftBtn.addEventListener('click', () => {
    activeSlide--
  
    if (activeSlide < 0) {
      activeSlide = slides.length - 1
    }
  
    setBgToBody()
    setActiveSlide()
  })
  
  setBgToBody()
  
  function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
  }
  
  function setActiveSlide() {
    slides.forEach((slide) => slide.classList.remove('active'))
  
    slides[activeSlide].classList.add('active')
  }
  
  
    },
  });
  </script>
  
  <style lang="scss" scoped>
  
  body {
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    overflow: hidden;
    margin: 0;
    background-position: center center;
    background-size:cover;
    transition: 0.4s;
  }
  
  body::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0.9;
    z-index: -1;
  }
  
  .slider-container {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    height: 70vh;
    width: 68vw;
    position: fixed;
    top: 13%;
    overflow: hidden;
    cursor: pointer;
    // background-size:cover;
  }
  
  .slider-container h3 {
    font-size: 24px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    margin: 0;
    opacity: 1;
  }
  .slider-container.active h3 {
    opacity: 1;
    transition: opacity 0.3s ease-in 0.4s;
  }
  
  .slide {
    opacity: 0;
    height: 100vh;
    width: 100vw;
    background-position: center center;
    background-size: 75%;
    position: absolute;
    top: -15vh;
    left: -15vw;
    transition: 0.4s ease;
    z-index: 1;
  }
  
  .slide.active {
    opacity: 1;
  }
  
  .arrow {
    position:fixed;
    background-color: #fff;
    color: rgb(2, 194, 184);
    border-radius: 100px;
    border: 0px;
    padding: 10px;
    font-size: 30px;
    font-weight: bolder;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    top: 50%;
    width: 60px;
    height: 60px;
    transform: translateY(-50%);
    cursor: pointer;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  
  // .arrow:focus {
  //   outline: 0;
  // }
  
  .left-arrow {
    left: calc(15vw - 100px);
  }
  
  .right-arrow {
    right: calc(15vw - 100px);
  }
  
  #img1 {
    background-image: url("../../assets/arknights/ceobe.jpeg");
  }
  
  #img2 {
    background-image: url("../../assets/vocaloid/miku2018.jpg");
  }
  
  #img3 {
    background-image: url("../../assets/fatego/2.1.jpg");
  }
  
  #img4 {
    background-image: url("../../assets/others/2b9s.jpg");
  }
  
  #img5 {
    background-image: url("../../assets/characters/yumi.jpg");
  }
  
  
  </style>
  