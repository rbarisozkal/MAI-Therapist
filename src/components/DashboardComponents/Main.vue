<template>
    <div v-if="chosenComponent === 'Create New Client'">
        <v-container>
            Create New Client
        </v-container>
    </div>
    <div v-else-if="chosenComponent === 'All Clients'">
        <v-container>
            My Patients
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

        let chosenComponent = store.chosenComponent;
        let operation = chosenComponent;
        console.log("operation is " + operation)
        return { operation };
    },
    computed: {
        chosenComponent() {
            return useCommunicationStore().chosenComponent;
        }
    },
    name: "Main",
}
</script>