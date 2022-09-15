<template>
    <div class="bkg">
        <nav-tab></nav-tab>
      <mark-down></mark-down>  
    </div>
</template>

<script>
    import MarkDown from '@/components/MarkDown/MarkDown.vue'
    import NavTab from '@/components/NavTab/NavTab.vue'
export default {
    components:{
        MarkDown,
        NavTab
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
.bkg {
    font-family: "Lato", sans-serif;
  height: 100vh;
}
</style>