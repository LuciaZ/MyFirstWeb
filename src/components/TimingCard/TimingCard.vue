<template>
  <div>
    <!-- <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
      integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
      crossorigin="anonymous"
    /> -->
    <title>Testimonial Box</title>
    <body>
      <div class="testimonial-container">
        <div class="progress-bar"></div>
        <div class="fas fa-quote-right fa-quote"></div>
        <div class="fas fa-quote-left fa-quote"></div>
        <p class="testimonial">
          不会写网站，问就是Ctrl-CV大法。
        </p>
        <div class="user">
          </div>
        </div>
        <div class="text"></div>
    </body>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TimingCard",
  mounted() {
    // const testimonialsContainer = document.querySelector('.testimonials-container')
    const testimonial = document.querySelector(".testimonial");

    const testimonials = [
      {
        text: "网站写的很渣，但是懒得维护，问就是不会。",
      },
      {
        text: "这个网站的诞生也得感谢大佬的指点。（以及Github和百度的帮助）",
      },
      {
        text: "为什么Vue这么好用的框架在我手里做出来的就这么惨不忍睹，我还是太菜了。",
      },
      {
        text: "bug很多，界面很丑，求轻喷。",
      },
      {
        text: "其实主要就是想做个网站放放自己的儿童画作品。",
      },
      {
        text: "为什么这个网站是这个配色？因为是初音的配色啊（老二次元了），不过和是用Vue做的也有关系吧。",
      },
      {
        text: "不想写网站了，有空还不如多画画（x",
      },
      {
        text: "早知道写网站这么麻烦就套模板了，因为技术力太差所以自己写很多功能都实现不了。"
      },
      {
        text: "想出来的和做出来的完全不是一个东西2333333"
      }
    ];

    let idx = 1;

    function updateTestimonial() {
      const {text } = testimonials[idx];

      testimonial.innerHTML = text;

      idx++;

      if (idx > testimonials.length - 1) {
        idx = 0;
      }
    }

    setInterval(updateTestimonial, 3000);
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat");

* {
  font-family: "Lato", sans-serif;
  box-sizing: border-box;
}

body {

  background-color: #f4f4f4;

  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 10px;
  position:absolute;
  top:20vh;
}

.testimonial-container {
  background-color: #25c3c9;
  background-image: linear-gradient(
    to bottom,
    #25c3c9 0%,
    #25c3c9 75%,
    #099ca7 75%,
    #099ca7 100%
  );
  text-align: left;
  vertical-align: middle;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  border-radius: 15px;
  padding: 50px 80px;
  width: 600px;
  height: 225px;
  position:absolute;
  top:40%;
  left:30%;
  right:30%;
  bottom:40%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  letter-spacing: 4px;
}

.fa-quote {
  color: rgba(255, 255, 255, 0.3);
  font-size: 28px;
  position: fixed;
  top: 70px;
}

.fa-quote-right {
  left: 40px;
}

.fa-quote-left {
  right: 40px;
}

.testimonial {
  line-height: 28px;
  text-align: justify;
  top: 10px;
}


.progress-bar {
  background-color: #fff;
  height: 4px;
  width: 80%;
  position:absolute;
  animation: grow 25s linear infinite;
  transform-origin: left;
  bottom: 10%;
  left: 10%;
}

.text {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 30px;
  position:absolute;
  margin-left:0;
  margin-bottom:0;
}

@keyframes grow {
  0% {
    transform: scaleX(0);
  }
}

@media (max-width: 768px) {
  .testimonial-container {
    padding: 20px 30px;
  }

  .fa-quote {
    display: none;
  }
}
</style>
