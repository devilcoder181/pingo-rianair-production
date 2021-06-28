<template>
  <div class="p-container mt_1">
     <!-- Title Component -->
    <div class="p-row">
      <div class="p-col">
        <AdminCommonTitle :title="pageTitle" :backLink="backLink">
        </AdminCommonTitle>
      </div>
    </div>

    <div class="p-row">
      <div class="p-col-3" v-if="!this.$userAgent.agent()">
          <div class="p-content-body">
              <AdminCommonFileUpload title="Upload Image"  @update-imageURL="getURL"></AdminCommonFileUpload>
          </div>
      </div>

      <div class="p-col-9">
        <div class="p-content-body">
            <div class="p-row">
                <div class="p-col">
                    <AdminFormPingoInput :text.sync="fetchSeminar.title" title="Seimar Title"></AdminFormPingoInput>
                </div>
                <div class="p-col-6">
                    <AdminFormPingoInput :text.sync="fetchSeminar.date" title="Seminar Date"></AdminFormPingoInput>
                </div>
                <div class="p-col-6">
                    <AdminFormPingoInput :text.sync="fetchSeminar.phone" title="Enroll Number"></AdminFormPingoInput>
                </div>
                <div class="p-col-6">
                 <div class="check_box">
                        <label class="checkBox">Active
  <input type="checkbox" v-model="fetchSeminar.isActive">
  <span class="checkmark"></span>
</label>
                 </div>
                </div>
                <div class="p-col">
                            <div class="button_group">
                                <nuxt-link :to="backLink" class="btn_secondary"><i class="icon icon-close-circled"></i> Cancel</nuxt-link>
                                <button class="btn_primary" @click="submit()"><i class="icon icon-check-circle"></i> Update</button>
                            </div>
                        </div>
            </div>
        </div>
      </div>

      <div class="p-col-3" v-if="this.$userAgent.agent()">
          <div class="p-content-body">
              <AdminCommonFileUpload title="Upload Image"  :fetchUrl="fetchSeminar.image"  @update-imageURL="getURL"></AdminCommonFileUpload>
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
      pageTitle: 'Update Seminar',
      backLink: '/',
      successMessage: '',
      errorMessage: '',
      currentId: '',
      seminar: {
          title: '',
          date: '',
          isActive: true,
            image: ''
      },
      fetchSeminar: ''
     }
   },
   computed: {
    ...mapGetters([ 'seminarTest', 'showAlert', 'errAlert']),
    },
    methods: {
       getURL(value) {
            this.fetchSeminar.image = value
        },
        async submit(value) {
       try{
        this.$store.commit('activateLoader', true)
        this.$store.dispatch('updateSeminar', this.fetchSeminar)
       } catch(e) {
        this.errorMessage = e
        this.$store.commit('activateErrAlert', true)
        console.log(e)
       } finally {
          setTimeout(()=> {
            this.$store.commit('activateLoader', false)
            this.successMessage = 'Content Updated Successfully'
            this.$store.commit('activateAlert', true)
          },2000)
       }
     },
        
    },

    async asyncData ({ app, params, error }) {
        const db = app.$fire.firestore

        try {
        const documentSnapshot = await db.collection('seminar').doc('content').get()

        if (!documentSnapshot.exists) {
            error({ statusCode: 404, message: 'Data not found' })
            return
        }

        // Returned value is merged with the values defined in data().
        return {
            fetchSeminar: {
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
