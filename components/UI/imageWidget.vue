<template>
    <div class="img_box">
        <div class="img_" :style="{backgroundImage: `url(${imgUrl})`}"></div>

        <button class="btn_danger plane_" @click="deleteMe(id)"><span class="icon icon-trash"></span></button>
    </div>
</template>

<script>
export default {
    props: {
        imgUrl: {
            type: String
        },
        id: {
            type: String
        }
    },
    methods: {
        deleteMe(value) {
            this.$emit('deleteImage', value)
        }
    }
}
</script>

<style lang="scss" scoped>
    .img_box{
        position: relative;
        display: block;
        width: 100%;
        height: 0;
        padding-top: 100%;
        overflow: hidden;
        border-radius: 0.5em;

        .img_{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-position: center;
            background-size: cover;
            z-index: 1;

            &:after{
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
            }
        }

        .btn_danger{
            position: absolute;
            bottom: 0;
            right: 0;
            transform-origin: center;
            transform: translateX(-10%) translateY(-10%) scale(0.75);
            z-index: 2;
        }

    }
</style>