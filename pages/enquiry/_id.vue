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
                                <h3>{{fetchEnquiryContent.name}}
                                    <span>{{fetchEnquiryContent.courses}}</span>
                                </h3>
                                
                                <div class="button_wrapper">
                                    <a :href="`tel:${fetchEnquiryContent.phone}`" class="btn_ btn_primary" target="blank_"><i class="icon icon-phone-square"></i> Call</a>
                                    <a :href="`https://wa.me/${fetchEnquiryContent.whatsapp}`" class="btn_ btn_green" target="blank_"><i class="icon icon-whatsapp-2"></i> Whatsapp</a>
                                    <a :href="`mailto:${fetchEnquiryContent.email}`" class="btn_ btn_blue" target="blank_"><i class="icon icon-envelope-square"></i> Email</a>
                                    <button @click="delList(fetchEnquiryContent.id)" class="btn_ btn_danger plane_"><i class="icon icon-trash"></i></button>
                                    <button disabled class="btn_ btn_primary">{{assignDate(fetchEnquiryContent.setDate)}}</button>
                                </div>

                            </div>
                        </div>

                        <div class="p-col">
                            <div class="p_details">
                                <label>Full Name</label>
                                <div class="holder_">
                                    <span>{{fetchEnquiryContent.name}}</span>
                                </div>
                            </div>
                        </div>

                        <div class="p-col">
                            <div class="p_details">
                                <label>Program</label>
                                <div class="holder_">
                                    <span>{{fetchEnquiryContent.courses}}</span>
                                </div>
                            </div>
                        </div>

                        <div class="p-col-4">
                            <div class="p_details">
                                <label>Email</label>
                                <div class="holder_">
                                    <span>{{fetchEnquiryContent.email}}</span>
                                </div>
                            </div>
                        </div>

                        <div class="p-col-4">
                            <div class="p_details">
                                <label>Gender</label>
                                <div class="holder_">
                                    <span>{{fetchEnquiryContent.gender}}</span>
                                </div>
                            </div>
                        </div>

                        <div class="p-col-4">
                            <div class="p_details">
                                <label>Age</label>
                                <div class="holder_">
                                    <span>{{fetchEnquiryContent.age}}</span>
                                </div>
                            </div>
                        </div>

                        <div class="p-col-6">
                            <div class="p_details">
                                <label>Phone</label>
                                <div class="holder_">
                                    <span>{{fetchEnquiryContent.phone}}</span>
                                </div>
                            </div>
                        </div>

                        <div class="p-col-6">
                            <div class="p_details">
                                <label>Whatsapp / Alternate</label>
                                <div class="holder_">
                                    <span>{{fetchEnquiryContent.whatsapp}}</span>
                                </div>
                            </div>
                        </div>

                        <div class="p-col-6">
                            <div class="p_details">
                                <label>Country</label>
                                <div class="holder_">
                                    <span>{{fetchEnquiryContent.country}}</span>
                                </div>
                            </div>
                        </div>

                        <div class="p-col-6">
                            <div class="p_details">
                                <label>State</label>
                                <div class="holder_">
                                    <span>{{fetchEnquiryContent.state}}</span>
                                </div>
                            </div>
                        </div>

                        <div class="p-col-6">
                            <div class="p_details">
                                <label>Education</label>
                                <div class="holder_">
                                    <span>{{fetchEnquiryContent.edu}}</span>
                                </div>
                            </div>
                        </div>

                        <div class="p-col-6">
                            <div class="p_details">
                                <label>IP</label>
                                <div class="holder_">
                                    <span>{{fetchEnquiryContent.ip}}</span>
                                </div>
                            </div>
                        </div>

                        <div class="p-col">
                            <div class="p_details">
                                <label>Message</label>
                                <div class="holder_">
                                    <span>{{fetchEnquiryContent.messages}}</span>
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
            pageTitle: 'Enquiry Details',
            backLink: '/enquiry',
            successMessage: '',
            errorMessage: '',
            fetchEnquiryContent:'',
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
                this.$store.dispatch('deleteEnquiry', value)
            } catch(e) {
                console.log(e)
            } finally {
                setTimeout(()=> {
                    this.$store.commit('activateLoader', false)
                    this.successMessage = 'Content Deleted Successfully'
                    this.$store.commit('activateAlert', true)
                    this.$router.push(`/enquiry`)
                },2000)
            }
        }
    },
    async asyncData ({ app, params, error }) {
        const db = app.$fire.firestore

        try {
        const documentSnapshot = await db.collection('enquiryContent').doc(params.id).get()

        if (!documentSnapshot.exists) {
            error({ statusCode: 404, message: 'Data not found' })
            return
        }

        // Returned value is merged with the values defined in data().
        return {
            fetchEnquiryContent: {
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