<template>
    <div class="custom_table_wrapper v_4">
        <div class="table_head">
            <label>Index</label>
            <label>Name</label>
            <label>Email</label>
            <label>Phone</label>
            <label>Program</label>
            <label>Date</label>
            <label>Country</label>
            <label>IP</label>
        </div>


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
                 <label>{{item.name}}</label>
                 <label>{{item.email}}</label>
                 <label>{{item.phone}}</label>
                 <label>{{item.program}}</label>
                 <label>{{assignDate(item.setDate)}}</label>
                 <label>{{item.country}}</label>
                 <label>{{item.ip}}</label>
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