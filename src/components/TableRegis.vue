<template>
  <div>
    <v-simple-table
      :dense="dense"
      :fixed-header="fixedHeader"
      :height="height"
    >
      <template v-slot:default >
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">วันที่</th>
            <th class="text-left">ดูรายละเอียด</th>
            <th class="text-left">ลงทะเบียน</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in desserts" :key="index">
            <td class="text-left">{{ item.name }}</td>
            <td class="text-left">{{ item.calories }}</td>
            <td class="text-left">
              <v-btn color="success">
                รายละเอียดกิจกรรม
              </v-btn>
            </td>
            <td class="text-left">
              <v-btn @click="changer(index, item.regis)" :color="item.regis === 'Unregis' ? 'red' : 'success'" >
                {{ item.regis }}
                {{ index }}
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
  export default {
    methods: {
      changer(index, paramStatus) {
        if (paramStatus === 'regis') {
          this.desserts[index].regis = 'Unregis'
        } else {
          this.desserts[index].regis = 'regis'
        }
      }
    },
    data: () => ({
      dense: false,
      fixedHeader: true,
      height: 300,
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          regis: 'regis'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          regis: 'Unregis'
        },
        {
          name: 'Eclair',
          calories: 262,
          regis: 'regis'
        },
        {
          name: 'Cupcake',
          calories: 305,
          regis: 'Unregis'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          regis: 'Unregis'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          regis: 'regis'
        },
        {
          name: 'Lollipop',
          calories: 392,
          regis: 'Unregis'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          regis: 'Unregis'
        },
        {
          name: 'Donut',
          calories: 452,
          regis: 'regis'
        },
        {
          name: 'KitKat',
          calories: 518,
          regis: 'Unregis'
        },
      ],
    })
  }
</script>