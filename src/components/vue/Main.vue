<template>
        <div @dragover.prevent="dragover" @dragleave="dragleave" @drop.prevent="drop" class="relative flex min-h-screen flex-col justify-center overflow-hidden cover-gradient py-6 sm:py-12 px-4">
            <div class="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div :class="[isDrag ? 'border-dashed border-sky-400' : 'border-gray-900/5']" class="relative bg-white px-6 py-8 border-2 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                <div class="mx-auto max-w-md">
                    <a href="/">
                        <img src="/file.svg" width="48" height="48" class="h-12" alt="Image Compressor" />
                    </a>
                    <div class="text-base leading-7 text-gray-600">
                        <p>Reduce your file size to save more storage space.</p>
                        <UploadImage :files="files" @on-upload="(payload: ImagesModel[])=> upload(payload)" />
                        <p class="text-center text-xs text-gray-400">© {{new Date().getFullYear()}} Made with ♥ by Eko Sutrisno <a class="hover:text-sky-500" :href="`https://github.com/ekosutrisno/image-size-compressor/commit/${latestVersion}`">({{ latestVersion }})</a></p>
                    </div>
                </div>
            </div>
            <div class="absolute top-0 right-0 p-10">
                <a href="https://github.com/ekosutrisno/image-size-compressor"><img src="/github-mark.png" class="h-8 w-8" alt="github"></a>
            </div>
            <img v-if="isDrag" class="transition w-60 h-60 absolute bottom-0 right-0" src="/dropbox.gif" aria-hidden="true" />
        </div>

        <!-- Navbar Action -->
        <NavbarAction v-if="files.length" @clear="clearList" @download="download" @scroll="scrollToPage"/>

        <!-- Anchor for List Images After Uploaded the Images -->
        <div ref="anchor"></div>
        
        <!-- Image List -->
        <ImageList v-if="files.length" :files="files" />

</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { ImagesModel } from '@model/images.model';
import UploadImage from './UploadImage.vue';
import { compressImages } from '@service/compress';
import ImageList from './ImageList.vue';
import NavbarAction from './NavbarAction.vue';
import { downloadAll } from '@service/utilities';
import getGitCommit from '@service/lastCommit';

const files = ref<ImagesModel[]>([]);
const isDrag =  ref<boolean>(false);
const isAdded = ref<boolean>(false);
const latestVersion = ref<string>('');

onMounted(async ()=>latestVersion.value = await getGitCommit());

function clearList() {
    files.value = [];
}

function download() {
    downloadAll(files.value)
}

async function dragAndDrop (event: any){
    const filesTemp: File[] = event.dataTransfer.files;
    
    if(isAdded.value)
        files.value.push(...(await compressImages(filesTemp)).value);
    else
        files.value= (await compressImages(filesTemp)).value;

    isAdded.value = true;
}

function upload(images: ImagesModel[]) {
    if(isAdded.value)
        files.value.push(...images);
    else
        files.value = images;

    isAdded.value = true;
}

function dragover(event: any){
    isDrag.value = true;
}

function dragleave(event: any){
    isDrag.value = false;
}

function drop(event: any){
    isDrag.value = false;
    dragAndDrop(event);
}

const anchor = ref<any>(null)
const scrollToPage = () => {
    anchor.value.scrollIntoView({behavior: 'smooth'});
}
</script>