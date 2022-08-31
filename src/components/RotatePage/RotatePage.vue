<template>
  <div scroll="no">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
      integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
      crossorigin="anonymous"
    />
    <body>
      <div class="container">
        <div class="circle-container" @click="clc">
          <div class="circle">
            <button id="close">
              <i class="fas fa-times"></i>
            </button>
            <button id="open">
              <i class="fas fa-bars"></i>
            </button>
          </div>
        </div>
        <div class="content">
          <img src="@/assets/srcs/portrait.jpg" alt="portrait" />
          <div><small><br>LuciaZ<br><br></small></div>
          <span class="contact">
            微博：@LuciaZzzz <br />
            Github：里面没东西就不放上来丢人了 <br />
            邮箱：luciazhang2333@gmail.com (经常忘记邮箱名)
            <br />
            <br />
          </span>
          <p>
            干啥啥不行，摸鱼第一名<br />
            是个二次元，喜欢的ACG还挺多<br />
            会画点儿童画，但现在没啥时间画图<br />
            写代码本当下手です，但写bug本当上手哦<br />
          </p>

          <h3>正在摸鱼中......</h3>
          <p>
            What kind of rubbish am I?
            <br />
            <br />
            <br />
          </p>
          <h4>鼠标放到头像上有惊喜（x</h4>
        </div>
      </div>

      <nav>
        <ul>
          <li><i></i><a href="#" @click="home"> HOME</a></li>
          <li><i></i><a href="#" @click="works"> ARTWORKS</a></li>
          <li><i></i><a href="#" @click="blog"> BLOGS</a></li>
          <li><i></i><a href="#" @click="about"> &nbsp; ABOUT</a></li>
        </ul>
      </nav>
    </body>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { defineComponent } from "vue";

export default defineComponent({
  name: "RotatePage",
  setup() {
    let router = useRouter();
    let home = () => {
      router.push("/home");
    };
    let works = () => {
      router.push("/works");
    };
    let about = () => {
      router.push("/about");
    };
    let blog = () => {
      router.push("/blog");
    };
    return {
      home,
      works,
      about,
      blog,
    };
  },
  methods: {
    clc() {
      const open = document.getElementById("open");
      const close = document.getElementById("close");
      const container = document.querySelector(".container");

      open.addEventListener("click", () => container.classList.add("show-nav"));

      close.addEventListener("click", () =>
        container.classList.remove("show-nav")
      );
    },
  },
});
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

body {
  font-family: "Lato", sans-serif;
  background-color: #333;
  color: #222;
  overflow-x: hidden;
  margin: 0;
}

.container {
  background-color: #fafafa;
  background-image: linear-gradient(
    to bottom,
    #eef5f4 0%,
    #eef5f4 50%,
    #838d8c 50%,
    #838d8c 100%
  );
  transform-origin: top left;
  transition: transform 0.5s linear;
  width: 100vw;
  min-height: 100vh;
  padding: 50px;
}

.container.show-nav {
  transform: rotate(-18deg);
}

.circle-container {
  position: relative;
  top: -150px;
  left: -150px;
}

.circle {
  background-color: #1bd1c2;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  position: relative;
  transition: transform 0.5s linear;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.container.show-nav .circle {
  transform: rotate(-70deg);
}

.circle button {
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100px;
  background: transparent;
  border: 0;
  font-size: 26px;
  color: #fff;
}

.circle button:focus {
  outline: none;
}

.circle button#open {
  left: 60%;
}

.circle button#close {
  top: 60%;
  transform: rotate(90deg);
  transform-origin: top left;
}

.container.show-nav + nav li {
  transform: translateX(0);
  transition-delay: 0.3s;
}

nav {
  position: fixed;
  bottom: 40px;
  left: 0;
  z-index: 100;
}

nav ul {
  list-style-type: none;
  padding-left: 30px;
}

nav ul li {
  color: #fff;
  margin: 40px 0;
  transform: translateX(-100%);
  transition: transform 0.4s ease-in;
}

nav ul li i {
  font-size: 20px;
  margin-right: 10px;
}

nav ul li + li {
  margin-left: 15px;
  transform: translateX(-150%);
}

nav ul li + li + li {
  margin-left: 30px;
  transform: translateX(-200%);
}

nav a {
  color: #fafafa;
  text-decoration: none;
  transition: all 0.5s;
}

nav a:hover {
  color: #1bd1c2;
  font-weight: bold;
}

.content img {
  max-width: 25%;
  border-radius: 200px;
  // box-shadow:0 2px 5px rgba(0, 0, 0, 0.3);
  position: relative;
  text-align: center;
  vertical-align: middle;
  border: 8px solid #57bbb3;
}

.content img:hover {
  transform: rotate(666turn);
  transition: all 59s cubic-bezier(0.34, 0, 0.84, 1) 1s;
}

.content {
  background-color: #fff;
  position: absolute;
  max-width: 800px;
  text-align: center;
  top: 8vh;
  left: 20vw;
  right: 20vw;
  margin: auto;
  // border:  1px solid #929292;
  padding-top: 30px;
  padding-bottom: 30px;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.contact {
  font-size: 17px;
  line-height: 1.5;
}

.content small {
  text-align: center;
  margin-top: 50px;
  color: rgb(67, 68, 68);
  font-weight: 600;
  font-size: 30px;
}

.content p {
  margin: 10px;
  color: #333;
  line-height: 1.5;
}

.content h4 {
  font-size: 8px;
  font-weight: 100;
}
</style>
