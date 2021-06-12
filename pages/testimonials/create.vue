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
                            <AdminFormPingoInput :text.sync="testiContent.name" title="Full Name"></AdminFormPingoInput>
                        </div>
                        <div class="p-col-6">
                            <AdminFormPingoInput :text.sync="testiContent.email" title="Email"></AdminFormPingoInput>
                        </div>
                         <div class="p-col-6">
                            <AdminFormPingoInput :text.sync="testiContent.phone" title="Phone"></AdminFormPingoInput>
                        </div>
                        <div class="p-col">
                            <AdminFormPingoTextarea :text.sync="testiContent.description" title="Description"></AdminFormPingoTextarea>
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
                    <AdminCommonFileUpload title="Image Upload"  @update-imageURL="getURL"></AdminCommonFileUpload>
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
            pageTitle: 'Create Testimonial',
            backLink: '/testimonials',
            successMessage: '',
            errorMessage: '',
            testiContent: {
                name: '',
                email: '',
                phone: '',
                image: '',
                description: '',
                isActive: true,
                setDate: new Date(),
            }
        }
    },
    computed: {
     ...mapGetters(['showAlert', 'errAlert']),
    },
    methods: {
        getURL(value) {
            this.testiContent.image = value
        },
        async submit() {
            try{
            this.$store.commit('activateLoader', true)
            this.$store.dispatch('addTesti', this.testiContent)
            
            } catch(e) {
                this.errorMessage = e
                this.$store.commit('activateErrAlert', true)
            } finally {
                Object.assign(this.$data, this.$options.data());
                setTimeout(()=> {
                    this.$store.commit('activateLoader', false)
                    this.successMessage = 'Content Updated Successfully'
                    this.$store.commit('activateAlert', true)
                    location.reload()
                },2000)

            }
        }
    }
}
</script>