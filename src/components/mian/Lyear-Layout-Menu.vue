<template>
  <LyearLayoutHeader/>
  <Lyear-Layout-Sidebar/>
  <Lyear-Layout-Content/>
</template>

<script>
import LyearLayoutHeader from "@/components/head/Lyear-Layout-Header.vue";
import LyearLayoutSidebar from "@/components/navigation/Lyear-Layout-Sidebar.vue";
import LyearLayoutContent from "@/components/mian/Lyear-Layout-Content.vue";

export default {
  name: "Lyear-Layout-Menu",
  components: {LyearLayoutContent, LyearLayoutSidebar, LyearLayoutHeader}
}
</script>

<style scoped>

</style>