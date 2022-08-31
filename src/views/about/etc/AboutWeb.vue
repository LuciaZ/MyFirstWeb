<template>
    <div>
        <nav-tab></nav-tab>
        <timing-card></timing-card>
    </div>
    <div>
        <h1>About This Web>>></h1>
    </div>
</template>

<script>
    import NavTab from '@/components/NavTab/NavTab.vue';
    import TimingCard from '@/components/TimingCard/TimingCard.vue'
    export default {
  components: { 
    TimingCard,
    NavTab,
 },
        
    }
</script>

<style lang="scss" scoped>
h1 {
    font-size: 40px;
    font-weight: 300;
    position: absolute;
    left: 30%;
    top:  30%;
    min-width: 500px;
}
</style>