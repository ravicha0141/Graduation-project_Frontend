<template>
  <v-container>
    <div>
      <v-row>
        <v-col>
          <p class="text-sm-left">รายละเอียดกิจกรรม</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" sm="3">
          <p class="text-sm-left">ชื่อกิจกรรม</p>
        </v-col>
        <v-col cols="6" sm="3">
          <p class="text-sm-left" v-if="this.isEditing==false">{{title}}</p>
          <v-text-field v-if="this.isEditing==true" v-model="title" outlined shaped></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" sm="3">
          <p class="text-sm-left">ประเภทกิจกรรม</p>
        </v-col>
        <v-col cols="6" sm="3">
          <p class="text-sm-left" v-if="this.isEditing==false">{{type}}</p>
          <v-select :items="type" label="-" dense outlined></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" sm="3">
          <p class="text-sm-left">ด้านกิจกรรม</p>
        </v-col>
        <v-col cols="6" sm="3">
          <p class="text-sm-left" v-if="this.isEditing==false">{{type}}</p>
          <v-select :items="type" label="-" dense outlined></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" sm="3">
          <p class="text-sm-left">ปีการศึกษา</p>
        </v-col>
        <v-col cols="6" sm="3">
          <p class="text-sm-left" v-if="this.isEditing==false">{{syear}}</p>
          <v-text-field outlined shaped></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" sm="3">
          <p class="text-sm-left">เทอม</p>
        </v-col>
        <v-col cols="6" sm="3">
          <p class="text-sm-left" v-if="this.isEditing==false">{{term}}</p>
          <v-select :items="term" label="-" dense outlined></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" sm="3">
          <p class="text-sm-left">ชั่วโมงที่ได้รับ</p>
        </v-col>
        <v-col cols="6" sm="3">
          <p class="text-sm-left" v-if="this.isEditing==false">{{hour}}</p>    
          <v-text-field outlined shaped></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" sm="3">วันที่</v-col>
        <v-col cols="6" sm="3">
          <p class="text-sm-left" v-if="this.isEditing==false">{{date}}</p>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date"
                label="Picker in menu"
                :append-icon="'mdi-calendar'"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" sm="3">เวลา</v-col>
        <v-col cols="6" sm="3">
          <p class="text-sm-left" v-if="this.isEditing==false">{{time}}</p>
          <v-text-field outlined shaped></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" sm="3">
          <p class="text-sm-left">คำอธิบายเพิ่มเติม</p>
        </v-col>
        <v-col cols="6" sm="3">
          <p class="text-sm-left" v-if="this.isEditing==false">{{detail}}</p>
          <v-textarea outlined></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" sm="3">
          <p class="text-sm-left">สถานที่</p>
        </v-col>
        <v-col cols="6" sm="3">
          <p class="text-sm-left" v-if="this.isEditing==false">{{place}}</p>
          <v-text-field outlined shaped></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" sm="3">
          <p class="text-sm-left">จำนวนคน</p>
        </v-col>
        <v-col cols="6" sm="3">
          <p class="text-sm-left" v-if="this.isEditing==false">{{people}}</p>
          <v-text-field outlined shaped></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" sm="3">
          <p class="text-sm-left">ชั้นปี</p>
        </v-col>
        <v-col cols="6" sm="3">
         <p class="text-sm-left" v-if="this.isEditing==false">{{year}}</p>
          <v-checkbox label="ปี 1"></v-checkbox>
          <v-checkbox label="ปี 2"></v-checkbox>
          <v-checkbox label="ปี 3"></v-checkbox>
          <v-checkbox label="ปี 4"></v-checkbox>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    title: "วันรพีรำลึก",
    type:"",
    syear:"",
    term:"",
    hour:"",
    date:"",
    time:"",
    detail:"",
    place:"",
    people:"",
  })
};
</script>