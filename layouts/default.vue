<template>
    <div>
        <HeaderComponent />
      <slot />
    </div>
</template>

<script>
import HeaderComponent from '~/components/default/HeaderComponent.vue'
export default {
    components: {
        HeaderComponent
    }
}
</script>  