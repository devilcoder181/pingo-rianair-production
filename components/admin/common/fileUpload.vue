<template>
  <div class="pingo_fileupload_wrapper">
    <h3>Upload Image</h3>
    <div class="image_placeholder">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px" y="0px" viewBox="0 0 128 128" enable-background="new 0 0 128 128" xml:space="preserve">
        <g>
          <g>
            <g>
              <polygon fill="#282a31" points="128,128 122.8,128 122.8,126.6 126.5,126.6 126.5,122.8 128,122.8 			" />
            </g>
            <g>
              <path fill="#282a31" d="M113.7,128h-9.1v-1.5h9.1V128z M95.6,128h-9.1v-1.5h9.1V128z M77.5,128h-9.1v-1.5h9.1V128z M59.4,128
				h-9.1v-1.5h9.1V128z M41.2,128h-9.1v-1.5h9.1V128z M23.1,128h-9.1v-1.5h9.1V128z" />
            </g>
            <g>
              <polygon fill="#282a31" points="5,128 -0.2,128 -0.2,122.8 1.3,122.8 1.3,126.6 5,126.6 			" />
            </g>
            <g>
              <path fill="#282a31" d="M1.3,113.8h-1.5v-9.1h1.5V113.8z M1.3,95.7h-1.5v-9.1h1.5V95.7z M1.3,77.5h-1.5v-9.1h1.5V77.5z M1.3,59.4
				h-1.5v-9.1h1.5V59.4z M1.3,41.3h-1.5v-9.1h1.5V41.3z M1.3,23.2h-1.5v-9.1h1.5V23.2z" />
            </g>
            <g>
              <polygon fill="#282a31" points="1.3,5.1 -0.2,5.1 -0.2,-0.1 5,-0.1 5,1.4 1.3,1.4 			" />
            </g>
            <g>
              <path fill="#282a31" d="M113.7,1.4h-9.1v-1.5h9.1V1.4z M95.6,1.4h-9.1v-1.5h9.1V1.4z M77.5,1.4h-9.1v-1.5h9.1V1.4z M59.4,1.4
				h-9.1v-1.5h9.1V1.4z M41.2,1.4h-9.1v-1.5h9.1V1.4z M23.1,1.4h-9.1v-1.5h9.1V1.4z" />
            </g>
            <g>
              <polygon fill="#282a31" points="128,5.1 126.5,5.1 126.5,1.4 122.8,1.4 122.8,-0.1 128,-0.1 			" />
            </g>
            <g>
              <path fill="#282a31" d="M128,113.8h-1.5v-9.1h1.5V113.8z M128,95.7h-1.5v-9.1h1.5V95.7z M128,77.5h-1.5v-9.1h1.5V77.5z M128,59.4
				h-1.5v-9.1h1.5V59.4z M128,41.3h-1.5v-9.1h1.5V41.3z M128,23.2h-1.5v-9.1h1.5V23.2z" />
            </g>
          </g>
          <g>
            <g>
              <circle fill="#282a31" cx="42.1" cy="43.1" r="7.6" />
            </g>
            <path fill="#282a31" d="M106.7,104.2V50.9c-2.8-1.6-6.1-2.4-9.4-2.1c-4.8,0.3-9.4,2.7-12.9,6.1c-2.6,2.5-4.6,5.6-6.9,8.4
			c-2.3,2.8-5,5.4-7.9,7.6c-1.5,1.2-3.2,2.3-5,2.7c-2,0.5-4,0.3-6-0.1c-4.3-0.9-8.4-2.9-12.6-4.3c-4.2-1.4-8.8-2.2-13.1-1
			c-5.2,1.6-8.8,6-11.9,10.6v25.5H106.7z" />
          </g>
        </g>
      </svg>

      <input @change="fileInput" type="file" accept="image/png, image/jpeg" :disabled="showLoader">

      <div class="image_" :style="{ backgroundImage: 'url(' + fileURL + ')' }"></div>
    </div>

    <label>Upload file should be in image format and max size should be 4MB</label>
  </div>
</template>

<script>
  export default {
    props: {
      loader: {
        require: true
      },
    },
    data() {
      return {
        myFile: null,
        fileURL: null,
        showLoader: false,
      }
    },
    methods: {
     async fileInput(file) {
       let updateLoader = this.showLoader;
        try{
            this.myFile = file.target.files[0]
            updateLoader = true
            this.$emit("update-showLoader", updateLoader)

            const imgData = new FormData();
            imgData.append("image", this.myFile);
            const filePath = `testPath/${Date.now()}-rianiar-img-data`;
            const metadata = { contentType: this.myFile.type };
            await this.$fire.storage.ref()
              .child(filePath)
              .put(this.myFile, metadata);
            const downURL = await this.$fire.storage.ref().child(filePath).getDownloadURL()

              this.fileURL = downURL

            this.$emit("update-imageURL", this.fileURL)

            //console.log("filePath: ", filePath);
        }catch (e) {
          console.error(e);
        } finally {
          updateLoader = false;
          this.$emit("update-showLoader", updateLoader)
        }
    },
    }
  }

</script>

<style lang="scss" scoped>
  .pingo_fileupload_wrapper {
    position: relative;
    display: block;
    width: 100%;

    h3{
      position: relative;
      display: block;
      color: $color-white;
      @include mdText2();
      margin-bottom: 1em;
    }

    .image_placeholder {
      position: relative;
      width: 100%;
      overflow: hidden;
      display: block;

      polygon, path, circle{
        fill: #282a31;
        transition: all 0.3s ease;
      }

      .image_{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
        z-index: 9;
        pointer-events: none;
      }

      input{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        cursor: pointer;
        opacity: 0;
        z-index: 1;
      }

      &:hover{
        polygon, path, circle{
          fill: $color-primary;
        }
      }

      SVG{
        width: 100%;
        height: auto;
      }
    }

    label {
      display: block;
      margin: 1em 0;
      color: $color-icon;
      @include smText();
    }
  }

</style>
