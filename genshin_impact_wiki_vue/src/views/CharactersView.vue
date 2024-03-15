<script>
/**
 * @typedef SubCharacter
 * @property {string} name
 * @property {string} unlock
 * @property {string} description
 * @property {string} type
 * 
 * @typedef Character
 * @property {string} name
 * @property {string} title
 * @property {string} vision
 * @property {string} weapon
 * @property {string} nation
 * @property {string} affiliation
 * @property {number} rarity
 * @property {string} constellation
 * @property {string} birthday
 * @property {string} description
 * @property {SubCharacter[]} skillTalents
 * @property {SubCharacter[]} PassiveTalents
 * @property {SubCharacter[]} constellations
 * 
 * @typedef CustomSelect
 * @property {string} text
 * @property {string|number} value
 */
import CharacterCard from '../components/CharacterCard.vue'
export default {
    data() {
        return {
            /** @type {Character[]} */
            display: [],
            /** @type {Character[]} */
            characters: [
                {
                    name: '',
                    title: '',
                    vision: '',
                    weapon: '',
                    nation: '',
                    affiliation: '',
                    rarity: 0,
                    constellation: '',
                    birthday: '',
                    description: '',
                    skillTalents: [
                        {
                            name: '',
                            unlock: '',
                            description: '',
                            type: '',
                        },
                    ],
                    PassiveTalents: [
                        {
                            name: '',
                            unlock: '',
                            description: '',
                            level: 0,
                        },
                    ],
                    constellations: [
                        {
                            name: '',
                            unlock: '',
                            description: '',
                            level: 0,
                        },
                    ],
                },
            ],
            element_filter: "",
            /** @type {CustomSelect[]} */
            elements: [
                { text: "Elements", value: "" },
                { text: "Anemo", value: "anemo" },
                { text: "Cryo", value: "cryo" },
                { text: "Dendro", value: "dendro" },
                { text: "Electro", value: "electro" },
                { text: "Geo", value: "geo" },
                { text: "Hydro", value: "hydro" },
                { text: "Pyro", value: "pyro" },
            ],
            weapon_filter: "",
            /** @type {CustomSelect[]} */
            weapons: [
                { text: "Weapons", value: "" },
                { text: "Bow", value: "bow" },
                { text: "Catalyst", value: "catalyst" },
                { text: "Claymore", value: "claymore" },
                { text: "Polearm", value: "polearm" },
                { text: "Sword", value: "sword" },
            ],
            rarity_filter: 0,
            /** @type {CustomSelect[]} */
            rarities: [
                { text: "Rarity", value: 0 },
                { text: "5*", value: 5 },
                { text: "4*", value: 4 },
            ],
        }
    },
    methods: {
        /**
         * filters characters based on element, weapon and rarity
         * @returns {void}
         */
        filter: function () {
            this.display = this.characters
            if (this.element_filter != "") {
                this.display = this.display.filter((character) => character.vision.toLowerCase() == this.element_filter)
            }
            if (this.weapon_filter != "") {
                this.display = this.display.filter((character) => character.weapon.toLowerCase() == this.weapon_filter)
            }
            if (this.rarity_filter != 0) {
                this.display = this.display.filter((character) => character.rarity == this.rarity_filter)
            }
        },
        /**
         * sets element filter
         * @param {string} element
         * @returns {void} 
         */
        setElementFilter: function (element) {
            this.element_filter = element
            this.filter()
        },
        /**
         * sets weapon filter
         * @param {string} weapon
         * @returns {void} 
         */
        setWeaponFilter: function (weapon) {
            this.weapon_filter = weapon
            this.filter()
        },
        /**
         * sets rarity filter
         * @param {string} rarity
         * @returns {void} 
         */
        setRarityFilter: function (rarity) {
            this.rarity_filter = rarity
            this.filter()
        }
    },
    created() {
        fetch('https://api.genshin.dev/characters/all')
            .then(async (res) => {
                const data = await res.json()
                this.characters = data
                this.display = data
            })
            .catch((err) => {
                console.log('error:', err)
            })
        console.log("done!")
    },
    components: { CharacterCard }
}
</script>

<template>
    <h1>Characters</h1>
    <div class="flexbox">
        <table>
            <tr>
                <td>
                    <select class="form-select" v-model="element_filter" v-on:change="setElementFilter(element_filter)">
                        <option v-for="element in elements" :value="element.value">{{ element.text }}</option>
                    </select>
                </td>
                <td>
                    <select class="form-select" v-model="weapon_filter" v-on:change="setWeaponFilter(weapon_filter)">
                        <option v-for="weapon in weapons" :value="weapon.value">{{ weapon.text }}</option>
                    </select>
                </td>
                <td>
                    <select class="form-select" v-model="rarity_filter" v-on:change="setRarityFilter(rarity_filter)">
                        <option v-for="rarity in rarities" :value="rarity.value">{{ rarity.text }}</option>
                    </select>
                </td>
            </tr>
        </table>
    </div>
    <div class="flexbox">
        <div v-for="character in display">
            <CharacterCard v-bind:character="character" />
        </div>
    </div>
</template>

<style scoped>
.flexbox {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
}
</style>
