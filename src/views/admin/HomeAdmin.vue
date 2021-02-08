<template>
    <div>
        <NavbarAdmin />
        <v-row>
        </v-row>
        <TableActivity />
    </div>
</template>
<script>
import NavbarAdmin from '@/components/NavbarAdmin'
import TableActivity from '@/components/TableActivity'
import {store} from '../../store/index.js'
import axios from 'axios'
export default {
    store,
    name: 'HomeAdmin',
    components: {
        TableActivity,
        NavbarAdmin
        
    },
    mounted(){
        if(this.$store.getters.loginstatus==false){
      this.$router.push({name:"loginadmin"})
      }
    }
}
</script>