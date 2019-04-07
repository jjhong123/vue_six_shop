<template>
  <div class="wrapper">
    <!-- Sidebar  -->
    <Sidebar></Sidebar>
    <!-- <Alert></Alert> -->
    <div id="content">
      <Navbar />
      <transition name="fade-transform" mode="out-in">
        <router-view :key="key"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
// import Alert from '../AlertMessage';

export default {
  name: 'AppMain',
  components: {
    Sidebar,
    Navbar,
    // Alert,
  },
  computed: {
    key() {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  }
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.28s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

/*fade-transform*/
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>