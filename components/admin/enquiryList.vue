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


        <ul v-if="this.$userAgent.agent()" class="table_body hover_">

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
                 <label>{{item.courses}}</label>
                 <label>{{assignDate(item.setDate)}}</label>
                 <label>{{item.country}}</label>
                 <label>{{item.ip}}</label>
            </li>

        </ul>

        <ul v-if="!this.$userAgent.agent()" class="table_body hover_">
              <li 
            v-for="(item, index) in searchEnquiryContent" 
            :key="index" 
            @click="getMeInside(item.id)"
            :class="{active_: item.isActive}"
            >
             <div class="index_ sm_">
                    <span class="icon icon-social-buffer"></span>
                </div>
            <div class="content_">
                  <label>{{item.name}}</label>
                 <label>{{item.email}}</label>
                 <label>{{item.phone}}</label>
                 <label>{{item.courses}}</label>
                 <label>{{assignDate(item.setDate)}}</label>
                 <label>{{item.country}}</label>
                 <label>{{item.ip}}</label>
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
            return new Date(value).toLocaleString()
        },
        getMeInside(value){
            this.$store.dispatch('makeActive', value)
            this.$router.push(`/enquiry/${value}`)
        }
    }
}
</script>