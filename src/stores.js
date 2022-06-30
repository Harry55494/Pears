import { persistStore } from "./persistStore";

const defaultEntries = [
        {
            key: 'key-name',
            value: 'value',
            tags: ['tag1', 'tag2']
        }, {
            key: 'key-name2',
            value: 'value2',
            tags: ['tag3', 'tag4']
        }
]

export const pairs = persistStore('entries', defaultEntries);

const defaultSettings = {
    first_load: false
}

export const settings = persistStore('settings', defaultSettings);
