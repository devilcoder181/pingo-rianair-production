<template>
    <div>
        <input type="text" v-model="enquiryContent.name" placeholder="name">
        <input type="text" v-model="enquiryContent.email" placeholder="email">
        <input type="text" v-model="enquiryContent.phone" placeholder="phone">
        <select v-model="enquiryContent.program">
            <option v-for="(item, index) in program" :key="index">{{item}}</option>
        </select>
        <textarea placeholder="message" v-model="enquiryContent.message"></textarea>
        <button @click="submit">Submit</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            enquiryContent: {
                name:'',
                email:'',
                phone:'',
                message:'',
                isActive: false,
                ip: '',
                country: '',
                program: '',
                setDate: new Date(),
            },
            program: [
                'Commercial Pilot License',
                'Privot Pilot License',
                'Multi-Engine Rating',
                'Type Rating',
                'Cabin Crew',
                'Aircraft Maintenance Engineer'
            ]
        }
    },
    methods: {
        submit(){
            const target =  this.$fire.firestore.collection('enquiryContent')
            target.doc().set(this.enquiryContent)
            .then(res => {
                console.log(res)
            })
            .catch( (e)=> {
                console.log(e)
            })
        }
    },
    mounted() {
        fetch("https://ipinfo.io/json?token=43bc579b8cac39")
            .then((res) => res.json())
            .then((data) => 
                {
                    this.enquiryContent.ip = data.ip,
                    this.enquiryContent.country = data.country
                }
            )
    },
    
}
</script>