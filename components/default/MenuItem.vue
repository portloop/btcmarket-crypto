<template>
  <div class="relative group">
    <router-link :to="link || '#'" class="text-main-400 mx-4 flex items-center">
      <span>{{ label }}</span>
      <img v-if="hasDropdown" class="ml-2" src="~/assets/img/dropdownArrow.svg" alt="Dropdown Arrow Icon">
    </router-link>

    <div
      v-if="hasDropdown"
      class="absolute left-[calc(50%_-_70px)] top-6 hidden w-[140px] rounded-lg group-hover:flex flex-col backdrop-blur-3xl shadow-lg z-10"
    >
      <div
        v-for="child in children"
        :key="child.label"
        class="px-4 py-2"
      >
        <router-link :to="child.link || '#'" class="block text-[14px] text-main-400">
          {{ child.label }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: { type: String, required: true },
    link: { type: String, default: null },
    children: { type: Array, default: () => [] },
  },

  computed: {
    hasDropdown() {
      return this.children && this.children.length > 0;
    },
  },
};
</script>
