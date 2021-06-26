<template>
    <div class="custom_table_wrapper v_2">
        <div class="table_head">
            <label>Image</label>
            <label>Student Name</label>
            <label>Email</label>
            <label>Date</label>
            <label>Status</label>
            <label>Action</label>
        </div>
        <ul v-if="this.$userAgent.agent()" class="table_body">
            <li v-for="(item, index) in searchTestiContent" :key="index">
                <div class="index_">
                    <div class="img_box">
                        <div class="img_" :style="{backgroundImage: `url(${item.image})`}"></div>
                    </div>
                </div>
                <label>{{item.name}}</label>
                <label>{{item.email}}</label>
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
                        <nuxt-link :to="`/testimonials/${item.id}`" class="link_"><span class="icon icon-pencil-square"></span></nuxt-link>
                    </li>
                </ul>
            </li>
        </ul>

        <ul v-if="!this.$userAgent.agent()" class="table_body">
            <li v-for="(item, index) in searchTestiContent" :key="index">
                <div class="index_">
                    <div class="img_box">
                        <div class="img_" :style="{backgroundImage: `url(${item.image})`}"></div>
                    </div>
                </div>
                <div class="content_">
                    <label>{{item.name}}</label>
                <label>{{item.email}}</label>
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
                        <nuxt-link :to="`/testimonials/${item.id}`" class="link_"><span class="icon icon-pencil-square"></span></nuxt-link>
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
     ...mapGetters(['testiContent', 'showAlert', 'searchTestiContent'],),
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
             this.$store.dispatch('deleteTesti', value)
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