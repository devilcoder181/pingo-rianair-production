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
                        <AdminFormPingoInput :text.sync="fetchlocationContent.address" title="Address"></AdminFormPingoInput>
                    </div>

                    <div class="p-col-6">
                        <AdminFormPingoInput :text.sync="fetchlocationContent.location" title="Location Link"></AdminFormPingoInput>
                    </div>

                    <div class="p-col-6">
                        <AdminFormPingoInput :text.sync="fetchlocationContent.email" title="Email"></AdminFormPingoInput>
                    </div>

                    <div class="p-col-6">
                        <AdminFormPingoInput :text.sync="fetchlocationContent.phone" title="Phone"></AdminFormPingoInput>
                    </div>


                    <div class="p-col">
                        <div class="button_group">
                            <nuxt-link :to="backLink" class="btn_secondary"><i class="icon icon-close-circled"></i> Cancel</nuxt-link>
                            <button class="btn_danger" @click="deleteNow(fetchlocationContent.id)"><i class="icon icon-trash"></i> Delete</button>
                            <button class="btn_primary" @click="submit()"><i class="icon icon-check-circle"></i> Update</button>
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
            pageTitle: 'Add Location',
            backLink: '/settings',
            successMessage: '',
            errorMessage: '',
            deleteAlert: false,
            fetchlocationContent: '',
        }
    },
    computed: {
     ...mapGetters(['showAlert', 'errAlert']),
    },
    methods: {
        async submit() {
            try{
            this.$store.commit('activateLoader', true)
            this.$store.dispatch('addLocation', this.locationContent)
            
            } catch(e) {
                this.errorMessage = e
                this.$store.commit('activateErrAlert', true)
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
             this.$store.dispatch('deleteLocation', value)
            } catch(e) {
                console.log(e)
            } finally {
                setTimeout(()=> {
                    this.$store.commit('activateLoader', false)
                    this.successMessage = 'Content Deleted Successfully'
                    this.$store.commit('activateAlert', true)
                    this.$router.push('/settings');
                },2000)
            }
        }

    },
    async asyncData ({ app, params, error }) {
        const db = app.$fire.firestore

        try {
        const documentSnapshot = await db.collection('locationContent').doc(params.id).get()

        if (!documentSnapshot.exists) {
            error({ statusCode: 404, message: 'Data not found' })
            return
        }

        // Returned value is merged with the values defined in data().
        return {
            fetchlocationContent: {
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
