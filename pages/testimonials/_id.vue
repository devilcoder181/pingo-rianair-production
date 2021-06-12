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
            <div class="p-col-9">
                <div class="p-content-body">
                    <div class="p-row">
                        <div class="p-col">
                            <h2 class="subtitle_">Add Required Contents</h2>
                        </div>

                        <div class="p-col">
                            <AdminFormPingoInput :text.sync="fetchTestiContent.name" title="Full Name"></AdminFormPingoInput>
                        </div>
                        <div class="p-col-6">
                            <AdminFormPingoInput :text.sync="fetchTestiContent.email" title="Email"></AdminFormPingoInput>
                        </div>
                         <div class="p-col-6">
                            <AdminFormPingoInput :text.sync="fetchTestiContent.phone" title="Phone"></AdminFormPingoInput>
                        </div>
                        <div class="p-col">
                            <AdminFormPingoTextarea :text.sync="fetchTestiContent.description" title="Description"></AdminFormPingoTextarea>
                        </div>

                        <div class="p-col">
                            <div class="button_group">
                                <nuxt-link :to="backLink" class="btn_secondary"><i class="icon icon-close-circled"></i> Cancel</nuxt-link>
                                <button class="btn_primary" @click="submit()"><i class="icon icon-check-circle"></i> Create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="p-col-3">
                <div class="p-content-body">
                    <AdminCommonFileUpload title="Image Upload"  :fetchUrl="fetchTestiContent.image" @update-imageURL="getURL"></AdminCommonFileUpload>
                </div>
            </div>
        </div>

        <transition name="alertAnim">
            <AdminFormSuccess v-if="showAlert">
                <p><i class="icon icon-check-circle"></i> {{successMessage}}</p>
            </AdminFormSuccess>
        </transition>

        <transition name="alertAnim">
            <AdminFormErrorAlert v-if="errAlert">
                <p><i class="icon icon-check-circle"></i> {{errorMessage}}</p>
            </AdminFormErrorAlert>
        </transition>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    layout: 'admin',
    data() {
        return {
            pageTitle: 'Edit Testimonial',
            backLink: '/testimonials',
            successMessage: '',
            errorMessage: '',
            fetchTestiContent:''
        }
    },
    computed: {
     ...mapGetters(['showAlert', 'errAlert']),
    },
    methods: {
        getURL(value) {
            this.fetchTestiContent.image = value
        },
        async submit() {

            try{
            this.$store.commit('activateLoader', true)
            this.$store.dispatch('editTesti', this.fetchTestiContent)
            } catch(e) {
                this.errorMessage = e
                this.$store.commit('activateErrAlert', true)
            } finally {
                setTimeout(()=> {
                    this.$store.commit('activateLoader', false)
                    this.successMessage = 'Content Updated Successfully'
                    this.$store.commit('activateAlert', true)
                   // location.reload()
                },2000)
                
            }
        }
    },
    async asyncData ({ app, params, error }) {
        const db = app.$fire.firestore

        try {
        const documentSnapshot = await db.collection('testiContent').doc(params.id).get()

        if (!documentSnapshot.exists) {
            error({ statusCode: 404, message: 'Data not found' })
            return
        }

        // Returned value is merged with the values defined in data().
        return {
            fetchTestiContent: {
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