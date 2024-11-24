<template>
    <div class="max-w-[1134px] mx-auto pt-8 justify-between items-center flex">
        <router-link to="/">
            <img src="~/assets/img/logo.svg" alt="BTC Markets Logo">
        </router-link>

        <div class="flex items-center">
            <HeaderMenuItem 
                v-for="item in menuContent"
                :key="item.label"
                :label="item.label"
                :link="item.link"
                :children="item.children" 
            />
            <Button class="mr-2 ml-4" text="Log in" size="sm" colorType="white" link="/login" />
            <Button text="Sign up" size="sm" colorType="green" />
        </div>
    </div>
</template>
<script>
import HeaderMenuItem from '~/components/default/MenuItem.vue'
import Button from '~/components/Button.vue'
export default {
    components: {
        HeaderMenuItem,
        Button
    },
    data () {
        return {
            menuContent: [
            {
                label: 'Products',
                link: null,
                children: [
                { label: 'AI Trading', link: '/services/development' },
                { label: 'Tech Patterns', link: '/services/design' },
                { label: 'Copy Trading', link: '/services/marketing' },
                ],
            },
            { label: 'Prices', link: '/prices' },
            {
                label: 'Buy',
                link: null,
                children: [
                { label: 'AI Trading', link: '/services/development' },
                { label: 'Tech Patterns', link: '/services/design' },
                { label: 'Copy Trading', link: '/services/marketing' },
                ],
            },
            { label: 'OTC', link: '/otc' },
            {
                label: 'Learn',
                link: null,
                children: [
                { label: 'AI Trading', link: '/services/development' },
                { label: 'Tech Patterns', link: '/services/design' },
                { label: 'Copy Trading', link: '/services/marketing' },
                ],
            },

            {
                label: 'Help',
                link: null,
                children: [
                { label: 'AI Trading', link: '/services/development' },
                { label: 'Tech Patterns', link: '/services/design' },
                { label: 'Copy Trading', link: '/services/marketing' },
                ],
            },
            ]
        }
    }
}
</script>