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
                <div class="p-row">
                    <div class="p-col">
                        <h2 class="subtitle_">Add Required Contents</h2>
                    </div>

                    <div class="p-col-6">
                        <AdminFormPingoInput :text.sync="assistanceContent.title" title="Assistance Title"></AdminFormPingoInput>
                    </div>

                    <div class="p-col-6">
                        <AdminFormPingoInput :text.sync="assistanceContent.icon" title="Assistance Icon"></AdminFormPingoInput>
                    </div>

                    <div class="p-col">
                        <AdminFormPingoTextarea :text.sync="assistanceContent.description" title="Assistance Description"></AdminFormPingoTextarea>
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
    </div>

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
            pageTitle: 'Create Assistance',
            backLink: '/assistance',
            successMessage: '',

            assistanceContent: {
                title: '',
                icon: '',
                description: '',
                isActive: true,
                setDate: new Date(),
            }
        }
    },
    computed: {
     ...mapGetters(['showAlert']),
    },
    methods: {
        async submit() {
            try{
            this.$store.commit('activateLoader', true)
            this.$store.dispatch('addAssistance', this.assistanceContent)
            } catch(e) {
                console.log(e)
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
