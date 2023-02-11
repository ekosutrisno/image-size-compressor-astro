import Compressor from "compressorjs";
import { ref } from "vue";
import type { ImagesModel } from "@model/images.model";

/**
 * Format Size file function
 * By. Eko Sutrisno
 */
export const formatBytes = (bytes: number, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

/**
 * @param  {File[]} rawFiles
 * This compossable function will compress and reduce the size of image when selected from local.
 * and then will sending to the API with size optimized images.
 * By. Eko Sutrisno
 */

export const compressImages = async (rawFiles: File[]) => {
    const filesPromises = ref<ImagesModel[]>([]);
    const promises: Promise<void>[] = [];

    for (let file of rawFiles) {
        promises.push(new Promise(function (resolve, reject) {
            new Compressor(file, {
                quality: 0.6,
                success(result) {
                    const finalFile = new File([result], file.name, { type: result.type });
                    const fileMapper: ImagesModel = {
                        fileOriginal: file,
                        fileOriginalUrl: URL.createObjectURL(file),
                        fileCompressed: finalFile,
                        fileCompressedUrl: URL.createObjectURL(finalFile),
                        id: Date.now()
                    };
                    
                    filesPromises.value.push(fileMapper);
                    resolve();
                },
                error(err) {
                    console.log(err.message)
                    reject()
                },
            })
        }))
    }

    await Promise.all(promises);
    return filesPromises;
}
