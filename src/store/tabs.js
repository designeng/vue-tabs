import { defineStore } from 'pinia';

export const useTabsStore = defineStore('tabs', {
    state: () => ({
        tabs: [
            { name: 'projects' },
            { name: 'tasks' },
            { name: 'users' },
        ],
        tabName: '',
    }),
    getters: {
        getTabs () {
            return this.tabs;
        }
    },
    actions: {
        addTab (name) {
            this.tabs.push({ name });
        },
    },
})
