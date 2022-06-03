<template>
  <div class="home">
    <app-overlay/>
    <app-header/>
    <app-sidebar v-if="isActiveSidebar"/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppOverlay from '@/components/AppOverlay.vue'
import AppSidebar from '@/components/AddSidebar.vue'

export default {
  name: 'HomeView',
  components: {
    AppHeader,
    AppOverlay,
    AppSidebar
  },
  computed:{
    isActiveSidebar(){
      return this.$store.state.isActiveSidebar
    }
  }
}
</script>
