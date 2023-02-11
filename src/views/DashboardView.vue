<template>
    <div class="dashboard-view-container">
        <Sidebar />
        <Main :componentChoice='componentChoice' />
    </div>
</template>

<script>
import Sidebar from '@/components/DashboardComponents/Sidebar.vue';
import Main from '@/components/DashboardComponents/Main.vue';
import { useAuthStore } from "@/stores/auth";
export default {
    name: "DashboardView",
    components: {
        Sidebar, Main
    },
    setup() {
        const componentChoices = {
            newPatient: "Enter New Patient",
            myPatients: "My Patients",
        }
        const useAuth = useAuthStore();
        const userInfo = useAuth.user.attributes.email;
        return { useAuth, userInfo };
    }


}


</script>

<style lang="scss" scoped>
.dashboard-view-container {
    display: flex;
    flex-direction: row;

    & * {
        border-radius: 0;
    }

}

.v-application {
    & .v-application__wrap {
        display: flex;
        flex-direction: row;
    }

}
</style>