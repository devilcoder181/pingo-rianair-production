<template>
    <div class="custom_table_wrapper">
        <div class="table_head">
            <label>Index</label>
            <label>Name</label>
            <label>Date</label>
            <label>Status</label>
            <label>Action</label>
        </div>

        <ul class="table_body">
            <li>
                <div class="index_">
                    <span class="icon icon icon-folder-1"></span>
                </div>
                <label>Name of the Assistance</label>
                <label>24 May 2021</label>
                <div class="badge_sec">
                    <div class="badge_ green_">Active</div>
                </div>
                <ul class="action_">
                    <li>
                        <nuxt-link to="/" class="link_"><span class="icon icon-doc-text-inv"></span></nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/" class="link_"><span class="icon icon-trash"></span></nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/" class="link_"><span class="icon icon-pencil-square"></span></nuxt-link>
                    </li>
                </ul>
            </li>
            <li>
                <div class="index_">
                    <span class="icon icon icon-folder-1"></span>
                </div>
                <label>Name of the Assistance</label>
                <label>24 May 2021</label>
                <div class="badge_sec">
                    <div class="badge_ orange_">Disabled</div>
                </div>
                <ul class="action_">
                    <li>
                        <nuxt-link to="/" class="link_"><span class="icon icon-doc-text-inv"></span></nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/" class="link_"><span class="icon icon-trash"></span></nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/" class="link_"><span class="icon icon-pencil-square"></span></nuxt-link>
                    </li>
                </ul>
            </li>
            <li>
                <div class="index_">
                    <span class="icon icon icon-folder-1"></span>
                </div>
                <label>Name of the Assistance</label>
                <label>24 May 2021</label>
                <div class="badge_sec">
                    <div class="badge_ green_">Active</div>
                </div>
                <ul class="action_">
                    <li>
                        <nuxt-link to="/" class="link_"><span class="icon icon-doc-text-inv"></span></nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/" class="link_"><span class="icon icon-trash"></span></nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/" class="link_"><span class="icon icon-pencil-square"></span></nuxt-link>
                    </li>
                </ul>
            </li>
            <li>
                <div class="index_">
                    <span class="icon icon icon-folder-1"></span>
                </div>
                <label>Name of the Assistance</label>
                <label>24 May 2021</label>
                <div class="badge_sec">
                    <div class="badge_ green_">Active</div>
                </div>
                <ul class="action_">
                    <li>
                        <nuxt-link to="/" class="link_"><span class="icon icon-doc-text-inv"></span></nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/" class="link_"><span class="icon icon-trash"></span></nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/" class="link_"><span class="icon icon-pencil-square"></span></nuxt-link>
                    </li>
                </ul>
            </li>
             <li>
                <div class="index_">
                    <span class="icon icon icon-folder-1"></span>
                </div>
                <label>Name of the Assistance</label>
                <label>24 May 2021</label>
                <div class="badge_sec">
                    <div class="badge_ orange_">Disabled</div>
                </div>
                <ul class="action_">
                    <li>
                        <nuxt-link to="/" class="link_"><span class="icon icon-doc-text-inv"></span></nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/" class="link_"><span class="icon icon-trash"></span></nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/" class="link_"><span class="icon icon-pencil-square"></span></nuxt-link>
                    </li>
                </ul>
            </li>
             <li>
                <div class="index_">
                    <span class="icon icon icon-folder-1"></span>
                </div>
                <label>Name of the Assistance</label>
                <label>24 May 2021</label>
                <div class="badge_sec">
                    <div class="badge_ orange_">Disabled</div>
                </div>
                <ul class="action_">
                    <li>
                        <nuxt-link to="/" class="link_"><span class="icon icon-doc-text-inv"></span></nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/" class="link_"><span class="icon icon-trash"></span></nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/" class="link_"><span class="icon icon-pencil-square"></span></nuxt-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .custom_table_wrapper{
        position: relative;
        display: block;
        width: 100%;
        background-color: $color-dark;

        .table_head{
            position: relative;
            width: 100%;
            display: grid;
            grid-template-columns: 0.5fr 3fr 2fr 1fr 2fr;
            grid-gap: 1em;
            padding: 1rem;

             label {
                display: block;
                position: relative;
                font-weight: 500;
                width: 100%;
                color: $color-text;
                @include smText2();
            }
        }

        .table_body{
            position: relative;
            display: block;
            width: 100%;
            list-style: none;
            padding: 0;
            margin: 0;

            &>li{
                position: relative;
                display: grid;
                grid-template-columns: 0.5fr 3fr 2fr 1fr 2fr;
                grid-gap: 1em;
                padding: 0.75rem 1rem;
                align-items: center;
                border-top: 1px solid $color-dark-2;
                transition: all 0.3s ease;

                &:hover{
                    background-color: $color-dark-2;
                }

                label {
                    display: block;
                    position: relative;
                    font-weight: 500;
                    width: 100%;
                    color: $color-white;
                    @include smText2();
                }

                .index_{
                    position: relative;
                    display: block;

                    span{
                        display: contents;
                        color: $color-text;
                        @include lgText();
                    }
                }
            
                .action_{
                    position: relative;
                    list-style: none;
                    padding: 0;
                    margin: 0 -10px;
                    display: flex;
                    flex-wrap: wrap;

                    li{
                        display: block;
                        margin: 0 10px;
                        position: relative;

                        a{
                            display: block;
                            position: relative;
                            color: $color-icon;
                            transition: all 0.3s ease;
                            @include mdText2;
                            &:hover{
                                color: $color-primary;
                            }
                        }
                    }
                }
            }
        }
    }
</style>