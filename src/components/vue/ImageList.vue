<template>
    <section class="p-5 pb-24 bg-gray-50 scroll-smooth">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-10">
            <ImageComparator @remove="remove(files, file)" v-for="file in files" :key="file.id" :image="file" class="h-full w-full object-cover" />
        </div>
    </section>
</template>

<script setup lang="ts">
import type { ImagesModel } from '@model/images.model';
import { remove } from '@service/utilities';
import ImageComparator from './ImageComparator.vue';

defineProps<{ files: ImagesModel[] }>();
</script>