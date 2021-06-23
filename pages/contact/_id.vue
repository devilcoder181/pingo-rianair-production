<template>
   <div class="p-container mt_1">
        <div class="p-row">
            <div class="p-col">
                <AdminCommonTitle
                    :title="pageTitle"
                    :backLink="backLink">
                </AdminCommonTitle>
            </div>
        </div>

        <div class="p-row mt_1">
            <div class="p-col">
                <div class="p-content-body">
                    <div class="p-row no_margin_top">
                        <div class="p-col">
                            <div class="contact_title_wrapper">
                                <h3>{{fetchContactContent.name}}</h3>
                                
                                <div class="button_wrapper">
                                    <a :href="`tel:${fetchContactContent.phone}`" class="btn_ btn_primary" target="blank_"><i class="icon icon-phone-square"></i> Call</a>
                                    <a :href="`https://wa.me/${fetchContactContent.phone}`" class="btn_ btn_green" target="blank_"><i class="icon icon-whatsapp-2"></i> Whatsapp</a>
                                    <a :href="`mailto:${fetchContactContent.email}`" class="btn_ btn_blue" target="blank_"><i class="icon icon-envelope-square"></i> Email</a>
                                    <button @click="delList(fetchContactContent.id)" class="btn_ btn_danger plane_"><i class="icon icon-trash"></i></button>
                                    <button disabled class="btn_ btn_primary">{{assignDate(fetchContactContent.setDate)}}</button>
                                </div>

                            </div>
                        </div>

                        <div class="p-col">
                            <div class="p_details">
                                <label>Full Name</label>
                                <div class="holder_">
                                    <span>{{fetchContactContent.name}}</span>
                                </div>
                            </div>
                        </div>

                        <div class="p-col-6">
                            <div class="p_details">
                                <label>Email</label>
                                <div class="holder_">
                                    <span>{{fetchContactContent.email}}</span>
                                </div>
                            </div>
                        </div>

                        <div class="p-col-6">
                            <div class="p_details">
                                <label>Phone</label>
                                <div class="holder_">
                                    <span>{{fetchContactContent.phone}}</span>
                                </div>
                            </div>
                        </div>

                        <div class="p-col-6">
                            <div class="p_details">
                                <label>Country</label>
                                <div class="holder_">
                                    <span>{{fetchContactContent.country}}</span>
                                </div>
                            </div>
                        </div>

                        <div class="p-col-6">
                            <div class="p_details">
                                <label>IP</label>
                                <div class="holder_">
                                    <span>{{fetchContactContent.ip}}</span>
                                </div>
                            </div>
                        </div>

                        <div class="p-col">
                            <div class="p_details">
                                <label>Message</label>
                                <div class="holder_">
                                    <span>{{fetchContactContent.message}}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        
        </div>

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
    layout: 'admin',
    data() {
        return {
            pageTitle: 'Contact Details',
            backLink: '/contact',
            successMessage: '',
            errorMessage: '',
            fetchContactContent:'',
            deleteAlert: false,
            currentId: '',
        }
    },
    computed: {
     ...mapGetters(['showAlert'],),
    },
    methods: {
       assignDate(value) {
            return new Date(value).toLocaleString()
        },
        delList(value) {
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
                this.$store.dispatch('deleteContact', value)
            } catch(e) {
                console.log(e)
            } finally {
                setTimeout(()=> {
                    this.$store.commit('activateLoader', false)
                    this.successMessage = 'Content Deleted Successfully'
                    this.$store.commit('activateAlert', true)
                    this.$router.push(`/contact`)
                },2000)
            }
        }
    },
    async asyncData ({ app, params, error }) {
        const db = app.$fire.firestore

        try {
        const documentSnapshot = await db.collection('contactContent').doc(params.id).get()

        if (!documentSnapshot.exists) {
            error({ statusCode: 404, message: 'Data not found' })
            return
        }

        // Returned value is merged with the values defined in data().
        return {
            fetchContactContent: {
            id: documentSnapshot.id,
            ...documentSnapshot.data()
            }
        }
        } catch (e) {
        error({ statusCode: 404, message: 'Data not found' })
        }
    },
    
    
}
</script>