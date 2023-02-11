<template>
    <v-app class="dashboard-container">
        <v-card>
            <v-layout>
                <v-navigation-drawer permanent theme="dark">
                    <v-list nav>
                        <v-list-item prepend-icon="mdi-email" title="Inbox" value="inbox"></v-list-item>
                        <v-list-item prepend-icon="mdi-account-supervisor-circle" title="My Patients"
                            value="myPatients"></v-list-item>
                        <v-list-item prepend-icon="mdi-clock-start" title="Clock-in" value="clockin"></v-list-item>
                    </v-list>
                </v-navigation-drawer>
                <v-main style="height: 250px"></v-main>
            </v-layout>
        </v-card>
    </v-app>
</template>

<script setup>

import { useAuthStore } from "@/stores/auth";

const useAuth = useAuthStore();
const userInfo = useAuth.user.attributes.email;



</script>

<style lang="scss" scoped>
.dashboard-container {
    display: flex;
    flex-direction: column;

    & * {
        border-radius: 0;
    }
}
</style>