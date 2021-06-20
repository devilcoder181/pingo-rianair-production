<template>
    <div class="bottom_nav_wrapper">
        <div class="item_">
            <nuxt-link to="/mob">
                <i class="icon icon-social-buffer"></i>
                <strong>Enquiry</strong>
            </nuxt-link>
        </div>

        <div class="item_">
            <nuxt-link to="/mob/contact">
                <i class="icon icon-person-stalker"></i>
                <strong>Contacts</strong>
            </nuxt-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .bottom_nav_wrapper{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: auto;
        background: $color-dark;
        display: flex;
        flex-direction: row;
        align-items: baseline;
        justify-content: center;
        z-index: 9999;

        .item_{
            position: relative;
            display: block;
            width: 50%;

            a{
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                flex-direction: column;
                transition: all 0.3s ease;
                padding: 0.5em;

                &.nuxt-link-exact-active{
                    background: $color-primary;

                    .icon{
                        color: $color-white;
                    }

                    strong{
                        color: $color-white;
                    }
                }

                .icon{
                    font-size: 8vw;
                    line-height: 1;
                }

                strong{
                    font-size: 10px;
                    margin: 0;
                    line-height: 1;
                    color: $color-text;
                }
            }
        }
    }
</style>