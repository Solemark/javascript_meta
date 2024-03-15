<script>
import WeaponCard from '../components/WeaponCard.vue'
export default {
    data() {
        return {
            weapons: [
                {
                    name: '',
                    type: '',
                    rarity: 0,
                    baseAttack: 0,
                    subStat: '',
                    passiveName: '',
                    passiveDesc: '',
                    location: '',
                    ascensionMaterial: ''
                },
            ],
        }
    },
    created() {
        fetch('https://api.genshin.dev/weapons/all')
            .then(async (res) => {
                const data = await res.json()
                this.weapons = data
            })
            .catch((err) => {
                console.log('error:', err)
            })
    },
    components: { WeaponCard }
}
</script>

<template>
    <div v-for="weapon in weapons">
        <WeaponCard v-bind:weapon="weapon" />
    </div>
</template>
