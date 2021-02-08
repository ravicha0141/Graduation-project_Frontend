<template>
    <div >
        <NavbarAdmin />
        <div id="DivIdToPrint" class="bbbbb">
          <v-row >
        <v-col  xs="5" sm="3" md="11" lg="11" xl="11" class="titlepage"></v-col>
        <v-col  xs="1" sm="3" md="1" lg="1" xl="1" class="iconeditac">
          <v-btn icon @click="printData">
                      <v-icon large>mdi-printer</v-icon>             
        </v-btn>
        </v-col>
      </v-row>
        <v-spacer></v-spacer>
        <div id="printMe">
            <span v-html="printStuff"></span>
        <TableSt />
        </div>
    </div>
    </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17-beta.0/vue.js"></script>
<script>
import NavbarAdmin from '@/components/NavbarAdmin'
import TableSt from '@/components/TableSt'
// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
export default {
    components: {
        NavbarAdmin,
        TableSt
    },
    methods:{
//   printData()
//   {
//      this.$htmlToPaper('printMe', () => {
//      console.log('Printing completed or was cancelled!');
// });
  
printData()
  {
    var divToPrint= document.getElementById('DivIdToPrint');
   var newWin=window.open('','Print-Window');
  newWin.document.open();
  newWin.document.write('<html><body onload="window.print()">'+divToPrint.innerHTML+'</body></html>');
  newWin.document.close();
  setTimeout(function(){newWin.close();},10);
    console.log('Print')
  }
     },
     mounted(){
       if(this.$store.getters.loginstatus==false){
      this.$router.push({name:"loginadmin"})
      }
     }
    
}
</script>