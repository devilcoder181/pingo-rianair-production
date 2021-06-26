<template>

    <div class="custom_table_wrapper v_3">
        <div class="table_head">
            <label>Index</label>
            <label>Address</label>
            <label>Email</label>
            <label>Phone</label>
         
        </div>


        <ul class="table_body hover_">

            <li
            v-for="(item, index) in locationContent"
            :key="index"
            @click="getMeInside(item.id)"
            :class="{active_: item.isActive}"
            >
                <div class="index_ sm_">
                    <span class="icon icon-user"></span>
                </div>
                 <label>{{item.address}}</label>
                 <label>{{item.email}}</label>
                 <label>{{item.phone}}</label>
                
            </li>

        </ul>
    </div>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
     ...mapGetters(['locationContent'],),
    },
    methods: {
        getMeInside(value){
            this.$store.dispatch('makeActive', value)
            this.$router.push(`/settings/${value}`)
        }
    }
}
</script>
