<template>
    <div>
        <h3>Upload new Video Analysis for Patients</h3>
        <div>
            <v-select v-model="selectedPatient" :items="patientList" label="Compact" density="compact"></v-select>
        </div>

    </div>
</template>
<script>
import { usePatientStore } from '@/stores/patientApi';
export default {
    name: "UploadVideo",
    data() {
        return {
            allPatients: [],
            selectedPatient: ''
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