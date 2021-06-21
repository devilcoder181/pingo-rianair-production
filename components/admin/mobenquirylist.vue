<template>
    <div class="custom_table_wrapper mobi_">

        <ul class="table_body hover_">

            <li 
            v-for="(item, index) in searchEnquiryContent" 
            :key="index" 
            @click="getMeInside(item.id)"
            :class="{active_: item.isActive}"
            >
                <div class="index_ sm_">
                    <span class="icon icon-social-buffer"></span>
                </div>
                 <div>
                 <label>{{item.name}}</label>
                 <label>{{item.email}}</label>
                 <label>{{item.phone}}</label>
                 </div>
            </li>

        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
     ...mapGetters(['searchEnquiryContent'],),
    },
    methods: {
        assignDate(value) {
            return new Date(value.seconds * 1000).toLocaleString()
        },
        getMeInside(value){
            this.$store.dispatch('makeActive', value)
            this.$router.push(`/enquiry/${value}`)
        }
    }
}
</script>