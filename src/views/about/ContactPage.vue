<template>

    <div class="bkg">
      
      <div> 
        
        <rotate-page></rotate-page>
        
     </div>
    </div>
      
    </template>
    
    <script>
    import RotatePage from '@/components/RotatePage/RotatePage.vue'

    import { defineComponent } from '@vue/runtime-core';
    
    export default defineComponent({
      name: "ContactPage",
      components: { 
        RotatePage,
    },
      setup () {
       
        
    
        return {
        
        }
      }
    })
    </script>
    
    <style lang="scss" scoped>

    
    </style>