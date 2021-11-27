import { defineStore } from 'pinia';

export const useTabsStore = defineStore('tabs', {
    state: () => ({
        tabs: [
            { name: 'projects' },
            { name: 'tasks' },
            { name: 'users' },
        ],
        activeTabIndex: 0
    }),
    getters: {
        tabsCount () {
            return this.tabs.length;
        }
    },
    actions: {
        addTab (name) {
            this.tabs.push({ name });
        },
        setActiveTab (index) {
            this.activeTabIndex = index;
        },
    },
})
