<template>
    <div class="w-full">
        <div class="flex items-center justify-between max-w-[1134px] mx-auto mt-[130px]">
            <div class="flex flex-col max-w-[659px]">
                <div class="text-black text-[71px] leading-[126%] mb-8">Buy, sell and trade crypto today</div>
                <div class="max-w-[431px] text-main-300 text-[20px] font-light mb-8">Trade with confidence and build your future with Australia’s fastest crypto exchange.</div>
                <div class="flex items-center gap-x-4 mb-4">
                    <Button text="Get started" size="md" colorType="green" link="/login" />
                    <Button text="View exchange" size="md" colorType="white" link="/login" />
                </div>
                <div class="flex items-center">
                    <img src="~/assets/img/google.svg" alt="">
                    <img class="ml-2" src="~/assets/img/rating.svg" alt="">
                    <span class="ml-3">4.6</span>
                </div>
            </div>
            <img class="-translate-x-10" src="~/assets/img/hero.svg" alt="">
        </div>
    </div>
</template>
<script>
import Button from '~/components/Button.vue'
export default {
    components: {
        Button
    }
}
</script>