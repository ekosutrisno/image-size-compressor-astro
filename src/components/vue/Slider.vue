<template>
    <ImgComparisonSlider client:only="vue" value="60" tabindex="0" class="slider-with-animated-handle cursor-grabbing focus:outline-none rounded-lg">
        <svg slot="handle" class="custom-animated-handle" xmlns="http://www.w3.org/2000/svg" width="100" viewBox="-8 -3 16 6">
            <path stroke="#fff" d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2" stroke-width="1" fill="#fff" vector-effect="non-scaling-stroke"></path>
        </svg>
        <figure slot="first" class="before text-sm">
            <img style="width: 100%" class="object-cover w-full h-full" :src="image.fileOriginalUrl" />
            <figcaption>Before</figcaption>
        </figure>
        <figure slot="second" class="after text-sm">
            <img style="width: 100%" class="object-cover w-full h-full" :src="image.fileCompressedUrl" />
            <figcaption>After</figcaption>
        </figure>
    </ImgComparisonSlider>
</template>

<script setup lang="ts">
import { ImgComparisonSlider } from '@img-comparison-slider/vue';
import type { ImagesModel } from '@model/images.model';
defineProps<{ image: ImagesModel }>();
</script>