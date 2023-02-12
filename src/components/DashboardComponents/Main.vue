<template>
    <div v-if="chosenComponent === 'Create New Client'">
        <v-container>
            Create New Client
        </v-container>
    </div>
    <div v-else-if="chosenComponent === 'All Clients'">
        <v-container>
            {{ getAllPatients }}
        </v-container>
    </div>
    <div v-else-if="chosenComponent === 'Upload New Video'">
        <v-container>
            Upload New Video
        </v-container>
    </div>
    <div v-else>
        <v-container>
            This is default content
        </v-container>
    </div>
</template>
<script>
import { eventBus, ref } from 'vue';
import { reactive } from 'vue';
import { onMounted } from 'vue';
import { state } from 'vue';
import { useCommunicationStore } from '@/stores/communication';
import { usePatientStore } from '@/stores/patientApi';
export default {

    data() {
        return {
            components: [
                {
                    name: "Create New Client",
                    component: "NewPatient",
                },
                {
                    name: "All Clients",
                    component: "MyPatients",
                },
                {
                    name: "Upload New Video",
                    component: "UploadNewVideo",
                }
            ],
            operation: null
        }
    },
    // I have chosenComponent in the store, according to chosenComponent I want to render the component
    //do it on options api

    setup() {
        const store = useCommunicationStore();
        const patientStore = usePatientStore();
        patientStore.getAllPatients();
    },
    computed: {
        chosenComponent() {
            return useCommunicationStore().chosenComponent;
        },
        getAllPatients() {
            return usePatientStore().getAllPatients;
        }
    },
    name: "Main",
}
</script>