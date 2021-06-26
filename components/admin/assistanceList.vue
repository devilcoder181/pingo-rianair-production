<template>
    <div class="custom_table_wrapper">
        <div class="table_head">
            <label>Index</label>
            <label>Name</label>
            <label>Date</label>
            <label>Status</label>
            <label>Action</label>
        </div>

        <ul v-if="this.$userAgent.agent()" class="table_body">
            <li v-for="(item, index) in searchAssistanceContent" :key="index">
                <div class="index_">
                    <span class="icon icon icon-folder-1"></span>
                </div>
                <label>{{item.title}}</label>
                <label>{{assignDate(item.setDate)}}</label>
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

            <li v-for="(item, index) in searchAssistanceContent" :key="index">

            </li>
        </ul>

        <ul class="table_body" v-if="!this.$userAgent.agent()">
            <li v-for="(item, index) in searchAssistanceContent" :key="index">
                <div class="index_">
                    <span class="icon icon icon-folder-1"></span>
                </div>

                <div class="content_">
                    <label>{{item.title}}</label>
                <label>{{assignDate(item.setDate)}}</label>
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
                </div>
            </li>
        </ul>

        <transition name="scale">
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
     ...mapGetters(['assistanceContent', 'showAlert', 'searchAssistanceContent'],),
    },
    methods: {
        assignDate(value) {
            return new Date(value.seconds * 1000).toLocaleString()
        },
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
                    //location.reload();
                },2000)
            }
        }
    }
}
</script>


