<template>
<div class="flex flex-col w-full my-20 items-center justify-center bg-grey-lighter">
    <label class="w-64 flex flex-col items-center px-4 py-6 bg-white text-sky-500 rounded-lg tracking-wide uppercase border-2 border-dashed border-sky-400 hover:border-transparent cursor-pointer hover:bg-sky-500 transition-colors duration-300 hover:text-white">
        <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span class="mt-2 text-base leading-normal">Select an image</span>
        <input @change="select" type='file' multiple accept="image/apng, image/avif, image/gif, image/jpeg, image/jpg, image/png, image/svg+xml, image/webp" class="hidden" />
    </label>
    <div class="text-center py-5 text-gray-400 uppercase">
        OR <p class="mt-2 text-sky-500">Drag your image anywhere.</p>
    </div>
</div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import type { ImagesModel } from '@model/images.model';
import { compressImages } from '@service/compress';

const props = defineProps<{files: ImagesModel[]}>()
const emit = defineEmits(['on-upload'])

const select = async (event: any) =>  emit('on-upload', (await compressImages(event.target.files)).value);

watch(props.files, (newData, __oldData) => emit('on-upload', newData))
</script>