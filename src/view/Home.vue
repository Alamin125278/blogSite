<template>
  <VideoGrid />
  <Pagination />
</template>

<script>
import Pagination from "../components/Pagination.vue";
import VideoGrid from "../components/VideoGrid.vue";
export default {
  name: "Home",
  components: {
    VideoGrid,
    Pagination,
  },
};
</script>

<style></style>
