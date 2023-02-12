<template>
    <v-card max-width="300">
        <v-list density="compact">
            <v-list-subheader>REPORTS</v-list-subheader>
            <v-list-item @click="chooseOperation(item.text)" v-for="(item, i) in items" :key="i" :value="item"
                active-color="primary">
                <template v-slot:prepend>
                    <v-icon :icon="item.icon"></v-icon>
                </template>
                <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item>
        </v-list>
    </v-card>
</template>
<script>
import { useCommunicationStore } from "@/stores/communication";
export default {
    name: "Sidebar",
    components: {},
    setup() {
        const store = useCommunicationStore();
        const chooseOperation = (component) => {
            store.setChosenComponent(component);
        };
        let selectedItem = 0;
        const items = [
            { text: 'Create New Client', icon: 'mdi-plus' },
            { text: 'All Clients', icon: 'mdi-account-multiple' },
            { text: 'Upload New Video', icon: 'mdi-upload' },
        ];
        return { items, selectedItem, chooseOperation };
    },
};
</script>
<style lang="scss">
.sidebar-container {
    flex-grow: 222;
    display: flex;

    & .v-navigation-drawer {
        position: unset;
    }
}
</style>