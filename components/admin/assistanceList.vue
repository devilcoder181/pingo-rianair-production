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
            <li v-for="(item, index) in assistanceContent" :key="index">
                <div class="index_">
                    <span class="icon icon icon-folder-1"></span>
                </div>
                <label>{{item.title}}</label>
                <label>{{new Date(item.setDate)}}</label>
                <div class="badge_sec">
                    <div class="badge_ green_" v-if="item.isActive">Active</div>
                    <div class="badge_ orange_" v-if="!item.isActive">Disabled</div>
                </div>
                <ul class="action_">
                    <li>
                        <a :href="`https://www.rainair.in/assistance/${item.id}`" target="_blank" class="link_"><span class="icon icon-doc-text-inv"></span></a>
                    </li>
                    <li>
                        <button @click="deleteNow(item.id)" class="link_"><span class="icon icon-trash"></span></button>
                    </li>
                    <li>
                        <nuxt-link :to="`/assistance/${item.id}`" class="link_"><span class="icon icon-pencil-square"></span></nuxt-link>
                    </li>
                </ul>
            </li>
        </ul>

        <transition name="alert">
            <UIAlertDelete 
                v-if="deleteAlert"
                @cancel="cancelDelete"
                @remove="remove"
                :id="currentId"
            >

            </UIAlertDelete>
        </transition>

        <transition name="alertAnim">
            <AdminFormSuccess v-if="showAlert">
                <p><i class="icon icon-check-circle"></i> {{successMessage}}</p>
            </AdminFormSuccess>
        </transition>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            successMessage: '',
            deleteAlert: false,
            currentId: '',
        }
    },
    computed: {
     ...mapGetters(['assistanceContent', 'showAlert'],),
    },
    methods: {
        deleteNow(value) {
            this.deleteAlert = true;
            this.currentId = value;
        },
        cancelDelete() {
            this.deleteAlert = false;
        },
        async remove(value) {
           try{
            this.deleteAlert = false
            this.$store.commit('activateLoader', true)
             this.$store.dispatch('deleteAssistance', value)
            } catch(e) {
                console.log(e)
            } finally {
                setTimeout(()=> {
                    this.$store.commit('activateLoader', false)
                    this.successMessage = 'Content Deleted Successfully'
                    this.$store.commit('activateAlert', true)
                    
                },2000)
            }
        }
    }
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

                        .link_{
                            display: block;
                            position: relative;
                            color: $color-icon;
                            transition: all 0.3s ease;
                            @include mdText2;
                            background: none;
                            outline: none;
                            border: none;
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