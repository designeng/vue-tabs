<template>
    <h1>{{ appName }}</h1>
    <ul>
        <li
            v-for="(tab, index) in tabs"
            :key="index"
        >{{ tab.name }}</li>
    </ul>
    <input v-model="tabName" type="text" />
    <button @click="addTab">add tab</button>
</template>

<script>
import { storeToRefs } from 'pinia';
import { useTabsStore } from './store/tabs';
// import { useVModel } from './composable/useVModel';

export default {
    setup () {
        const tabsStore = useTabsStore();
        const { tabs, tabName } = storeToRefs(tabsStore);

        const addTab = () => {
            tabName.value.length ? tabs.value.push({ name: tabName.value }) : void 0;
        }

        return {
            tabs,
            appName: 'Example application',

            tabName,
            addTab,
        }
    }
}
</script>
