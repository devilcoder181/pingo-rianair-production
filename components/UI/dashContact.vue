<template>

    <div class="custom_table_wrapper mini_">
        <div class="table_head">
            <label>Name</label>
            <label>Email</label>
            <label>Date</label>
        </div>


        <ul class="table_body hover_">

            <li
            v-for="(item, index) in searchContactContent.slice(0, 5)"
            :key="index"
            @click="getMeInside(item.id)"
            :class="{active_: item.isActive}"
            >

                 <label>{{item.name}}</label>
                 <label>{{item.email}}</label>
                 <label>{{assignDate(item.setDate)}}</label>
            </li>

        </ul>
    </div>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
     ...mapGetters(['searchContactContent'],),
    },
    methods: {
        assignDate(value) {
            return new Date(value).toLocaleString()
        },
        getMeInside(value){
            this.$store.dispatch('makeActive', value)
            this.$router.push(`/contact/${value}`)
        }
    }
}
</script>
