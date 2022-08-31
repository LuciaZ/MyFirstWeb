<template>

    <div class="bkg">
      
      <div> 
        <nav-tab></nav-tab>   
      </div>
      <album-folder></album-folder>
    </div>
      
    </template>
    
    <script>
    import NavTab from '@/components/NavTab/NavTab.vue'
    import AlbumFolder from '@/components/FolderSlider/AlbumFolder.vue'
    import { useRouter } from "vue-router";
    import { defineComponent } from '@vue/runtime-core';

    
    export default defineComponent({
      name: "HomePage",
      components: { 
        NavTab,
        AlbumFolder,

      },
      setup () {
        const router = useRouter()
        let loadPage = () => {
          router.push('/load')
        }
    
        return {
          loadPage
        }
      }
    })
    </script>
    
    <style lang="scss" scoped>
    // .bkg {
    //       background-image: linear-gradient(
    //         to bottom,
    //         #fff 0vh,
    //         #fff 90vh,
    //         #00d3b7 90vh,
    //         #00d3b7 100vh
    //     );
    //     height: 100vh;
    // }
    h1 {
      position:absolute;
      top: 100px;
      left: 50%;
      margin:auto;
    }
   
    
    </style>