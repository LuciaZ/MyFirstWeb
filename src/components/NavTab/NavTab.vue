<template>
    <nav class="active" id="nav">
      <ul>
        <li><a href="#" @click="home">Home</a></li>
        <li><a href="#" @click="works">ArtWorks</a></li>
        <li><a href="#" @click="blog">Blogs</a></li>
        <li><a href="#" @click="about">About</a></li>
        <li><a href="#" @click="contact">Contact</a></li>
      </ul>
      <button class="icon" @click="clc" id="toggle" >
        <div class="line line1"></div>
        <div class="line line2"></div>
      </button>
    </nav>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "NavTab",
  components: {},

  setup() {
    let router = useRouter();
    let home = () => {
      router.push('/home')
    }
    let works = () => {
      router.push("/works");
    };
    let about = () => {
      router.push("/about")
    };
    let blog = () => {
      router.push("/blog")
    }
    let contact = () => {
      router.push("/contact")
    }
    return {
      home,
      works,
      about,
      blog,
      contact
    }
  },
  methods: {
    clc() {
      const toggle = document.getElementById("toggle");
      const nav = document.getElementById("nav");

      toggle.addEventListener("click", () => nav.classList.toggle("active"));
    },
  },
});
</script>

<style lang="scss" scoped>
nav {
  font-family: "Lato", sans-serif;
  background-color: #00d3b7;
  background-image: linear-gradient(
        to right,
        #87dfdf 0%,
        #56e0e0 35%,
        #43e7e7 50%,
        #56e0e0 65%,
        #87dfdf 100%);
  margin-left: 5px;
  position: flex;
  left: 10px;
  padding: 15px;
  width: 30px;
  display: flex;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: width 0.8s linear;
  overflow: hidden;
}

nav.active {
  width: 98%;
}

nav ul {
  display: flex;
  margin-left: 5vw;
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 0;
  transition: width 1s linear;
}

nav.active ul {
  width: 100%;
}

nav ul li {
  font-size: 20px;
  font-weight: 400;
  margin-left: 225px;
  margin-right: 20px;
  transform: rotateY(0deg);
  opacity: 0;
  transition: transform 1s linear, opacity 1s linear;
}

nav.active ul li {
  opacity: 1;
  transform: rotateY(360deg);
}

nav ul a {
  position: relative;
  color: #000;
  text-decoration: none;
  margin: 0 10px;
}

nav ul a:hover {
  color: #077cdb;
}

li::before {
    content: "";
    position: absolute;
    top: 0;
    left: 100%;
    width: 0;
    height: 100%;
    border-bottom: 2px solid #077cdb;
    transition: 0.2s all linear;
}

li:hover::before {
    width: 80%;
    left: 10%;
    right:0;
}

li:hover ~ li::before {
    left: 0;
}


// nav ul a::after {
//   content: '';
//       position: absolute;
//       left: 0;
//       right: 0;
//       top: 100%;
//       height: 2px;
//       background: #4c81c9;
//       -webkit-transform: scaleX(0);
//       transform: scaleX(0);
// }

// nav ul a:hover::after {
//  transition: 0.3s;
//       -webkit-transform: scaleX(1);
//       transform: scaleX(1);
// }

.icon {
  background-color:transparent;
  border: 0;
  cursor: pointer;
  padding: 0;
  position: relative;
  height: 30px;
  width: 30px;
}


.icon:focus {
  outline: 0;
}

.icon .line {
  background-color: #fff;
  height: 3px;
  width: 20px;
  position: absolute;
  top: 10px;
  left: 5px;
  transition: transform 1s linear;
}

.icon .line2 {
  top: auto;
  bottom: 10px;
}

nav.active .icon .line1 {
  transform: rotate(-765deg) translateY(5.5px);
}

nav.active .icon .line2 {
  transform: rotate(765deg) translateY(-5.5px);
}



</style>
