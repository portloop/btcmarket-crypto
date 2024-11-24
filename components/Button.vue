<template>
    <div>
      <router-link v-if="link" :to="link" :class="['rounded-[4px] border-box flex items-center justify-center', sizeClass, colorClass]">
        {{ text }}
      </router-link>
  
      <div v-else :class="['rounded-[4px]', sizeClass, colorClass]">
        {{ text }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      size: {
        type: String,
        default: 'md',
        validator: (value) => ['sm', 'md', 'lg'].includes(value),
      },
      colorType: {
        type: String,
        default: 'white',
        validator: (value) => ['white', 'green'].includes(value),
      },
      text: { type: String, required: true },
      link: { type: String },
    },
  
    computed: {
      sizeClass() {
        switch (this.size) {
          case 'sm':
            return 'py-[9px] px-[17px] text-sm';
          case 'md':
            return 'py-[9px] px-8 text-md';
          case 'lg':
            return 'py-4 px-12 text-lg';
          default:
            return '';
        }
      },
  
      colorClass() {
        switch (this.colorType) {
          case 'white':
            return 'text-main-400 border border-solid border-main-400 bg-transparent';
          case 'green':
            return 'text-green-800  bg-green-400';
          default:
            return '';
        }
      },
    },
  };
  </script>
  