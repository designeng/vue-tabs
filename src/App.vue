<template>
    <h1>{{ appName }}</h1>
    <ul>
        <li
            v-for="(tab, index) in tabs"
            :key="index"
        ><a :class="{'active': index === activeTabIndex}"
            @click="setActive(index)"
        >{{ tab.name }}</a></li>
    </ul>
    <input v-model="tabName" type="text" />
    <button @click="addAnotherTab">add tab</button>
</template>

<script>
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useTabsStore } from './store/tabs';

const MAX_TABS_COUNT = 5;

export default {
    setup () {
        const tabsStore = useTabsStore();
        const {
            tabs,
            tabsCount,
            activeTabIndex,
        } = storeToRefs(tabsStore);

        const tabName = ref('');

        const isEnoughTabsCount = computed(() => {
            return tabsCount.value + 1 > MAX_TABS_COUNT
        });

        const addAnotherTab = () => {
            if(isEnoughTabsCount.value || !tabName.value.length) return;
            tabsStore.addTab(tabName.value);
        }

        const setActive = (index) => {
            tabsStore.setActiveTab(index);
        }

        return {
            tabs,
            activeTabIndex,

            appName: 'Example application',

            tabName,
            addAnotherTab,
            setActive,
        }
    }
}
</script>
