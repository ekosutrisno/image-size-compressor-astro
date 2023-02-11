<template>
    <div class="bg-white shadow shadow-sky-900/10 z-10 border-t h-16 fixed bottom-0 w-full with-transition">
        <div class="p-4 flex items-center justify-between">
            <div>
                <button type="button" @click="$emit('scroll')" class="bg-white border text-sm hover:text-white hover:bg-sky-500 transition-colors text-sky-500 inline-flex items-center space-x-2 border-sky-400 rounded-md py-1.5 px-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                    </svg>
                    <span>Go to List</span>
                </button>
            </div>
            <div>
                <div class="inline-flex items-center justify-between space-x-4 ">
                <button type="button" @click="$emit('download')" class="bg-white border text-sm hover:text-white hover:bg-sky-500 transition-colors text-sky-500 inline-flex items-center space-x-2 border-sky-400 rounded-md py-1.5 px-3">
                    <svg width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M470.7 280.2c3-11.2 4.7-22.9 4.7-35c0-75.8-61.4-137.1-137.1-137.1c-19.5 0-38 4.1-54.7 11.4c-16.8-39-55.6-66.3-100.7-66.3c-60.6 0-109.7 49.1-109.7 109.7c0 4.1.8 7.9 1.2 11.9C30.5 195.1 0 239.3 0 290.9c0 70.7 57.3 128 128 128h310.9c40.4 0 73.1-32.7 73.1-73.1c0-29-16.9-53.7-41.3-65.6zM256 364l-91.4-91.4h54.9v-91.4h73.1v91.4h54.9L256 364z"/></svg>
                    <span><span class="hidden md:inline">Download </span>All</span>
                </button>
                <button type="button" @click="$emit('clear')" class="bg-white border text-sm hover:text-white hover:bg-sky-500 transition-colors text-sky-500 inline-flex items-center space-x-2 border-sky-400 rounded-md py-1.5 px-3">
                    <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"/></svg>
                    <span><span class="hidden md:inline">Clear </span> All</span>
                </button>
            </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>