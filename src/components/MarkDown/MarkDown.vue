<script>
import { marked } from "marked";
import { debounce } from "lodash";

export default {
  name: "MarkDown",
  data: () => ({
    input: "### 正在施工中...可能会变烂尾楼吧2333",
  }),
  computed: {
    output() {
      return marked(this.input);
    },
  },
  methods: {
    update: debounce(function (e) {
      this.input = e.target.value;
    }, 100),
  },
};
</script>

<template>
  <div id="container">
    <h1>This is a Markdown editor.</h1>
    <div class="editor">
      <textarea class="input" :value="input" @input="update"></textarea>
      <div class="output" v-html="output"></div>
    </div>
  </div>
</template>

<style>
.container {
  text-align: center;

}
h1 {
  position: absolute;
  width: 600px;
  font-weight:300;
  top: 800px;
  right:0;
  left: 1400px;
  font-size: 30px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}
.editor {
  height: 60vh;
  width: 50vw;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  /* border: 3px solid rgb(65, 228, 206); */
  /* border-radius: 10px; */
  display: flex;
  position: absolute;
  margin: auto;
  left: 20vw;
  right: 20vw;
  top: 10vh;
  bottom: 10vh;
  background-color: #fff;
}

.input,
.output {
  overflow: auto;
  width: 50%;
  height: 60vh;
  box-sizing: border-box;
  padding: 0 20px;
}

.input {
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>
