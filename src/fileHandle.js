export default class fileHandle {
    constructor(preview, file) {
        this.preview = preview;
        this.file = file;
        this.reader = new FileReader();
    }

    getDataURL() {
        return this.reader.result;
    }

    updateImage() {
        return this.reader.readAsDataURL(this.file);
    }
}