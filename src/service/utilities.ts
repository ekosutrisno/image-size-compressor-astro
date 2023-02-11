import type { ImagesModel } from "@model/images.model";
import JSZip from "jszip";
import FileSaver from "file-saver";
import { ref } from "vue";

export function download(image: ImagesModel) {
    var fileURL = image.fileCompressedUrl;
    var fileLink = document.createElement("a");

    fileLink.href = fileURL;
    fileLink.setAttribute("download", `${image.fileCompressed.name}`);
    document.body.appendChild(fileLink);
    fileLink.click();
}

export function remove(files: ImagesModel[], image:ImagesModel) {
    const index = files.indexOf(image);

    if(index > -1) 
        files.splice(index, 1);
}

export function downloadAll(files: ImagesModel[]) {
    const zip = new JSZip();
    const status = ref<number>(0);

    files.forEach((images: ImagesModel)=> {
        const file = images.fileCompressed;

        status.value += 1;

        // Zipping Process
        zip.file(file.name, file, {binary: true});

        if(status.value == files.length){
            zip.generateAsync({"type": "blob"})
                .then((content: any) =>{
                    FileSaver.saveAs(
                        content,
                        `compressed_images.zip`
                      );

                });
        };

    })
}