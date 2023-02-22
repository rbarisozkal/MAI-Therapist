<template>
    <div class="table-container">
     <v-table class="table">
    <thead>
      <tr>
        <th class="text-center">
          ID
        </th>
        <th class="text-center">
          First Name
        </th>
        <th class="text-center">
          Last Name
        </th>
        <th class="text-center">
          Age
        </th>
        <th class="text-center">
          Gender
        </th>
        <th class="text-center">
          Diagnosis
        </th>
        <th class="text-center">
          Details
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in this.allPatients"
        :key="item.id"
      >
        <td>{{ item.id }}</td>
        <td>{{ item.firstName }}</td>
        <td>{{ item.lastName }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.gender }}</td>
      </tr>
    </tbody>
  </v-table>
</div>
</template>

<script>
import { usePatientStore } from '@/stores/patientApi';
export default {
    name: "AllClients",
    data() {
        return {
            allPatients: [],
        }
    },
    computed: {
        patientList() {
            return this.allPatients;
        }
    },
    created() {
        const patientStore = usePatientStore();
        const patients = patientStore.getAllPatients().data;

        this.allPatients = patients.map((patient) => {
            const { therapistId, ...rest } = patient;
            return rest;
        })
        console.log(this.allPatients, "allPatients")
    },

}
</script>

<style scoped lang="scss">

.table-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100vh;
    height: 80vh;
}

.table{
    display: flex;
    flex-direction: column;
  }
</style>