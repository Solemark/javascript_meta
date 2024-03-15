<script>
import ArtifactCard from '../components/ArtifactCard.vue'
export default {
    data() {
        return {
            artifacts: [
                {
                    name: '',
                    max_rarity: 0,
                    '2-piece_bonus': "",
                    '4-piece_bonus': "",
                },
            ],
        }
    },
    created() {
        fetch('https://api.genshin.dev/artifacts/all')
            .then(async (res) => {
                const data = await res.json()
                this.artifacts = data
            })
            .catch((err) => {
                console.log('error:', err)
            })
    },
    components: { ArtifactCard }
}
</script>

<template>
    <div v-for="artifact in artifacts">
        <ArtifactCard v-bind:artifact="artifact" />
    </div>
</template>
