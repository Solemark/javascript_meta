<script>
export default {
    props: ['artifact'],
    methods: {
        getImage: function (name) {
            let name_ = name.replace(' ', '-')
            return `https://api.genshin.dev/artifacts/${name_.toLowerCase()}/flower-of-life`
        }
    }
}
</script>
<template>
    <div class="card">
        <div class="flexbox">
            <img v-bind:src="getImage(artifact.name)" />
            <div class="card-body">
                <p>
                    Name: {{ artifact.name }} <br />
                    Rarity: {{ artifact.max_rarity }}* <br />
                    2p Bonus: {{ artifact['2-piece_bonus'] }} <br />
                    4p Bonus: {{ artifact['4-piece_bonus'] }} <br />
                </p>
            </div>
        </div>
    </div>
</template>

<style>
.flexbox {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}
</style>
