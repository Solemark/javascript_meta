<script>
export default {
    props: ['weapon'],
    methods: {
        getImage: function (name) {
            let name_ = name.replace(' ', '-')
            return `https://api.genshin.dev/weapons/${name_.toLowerCase()}/icon`
        }
    }
}
</script>
<template>
    <div class="card">
        <div class="flexbox">
            <img v-bind:src="getImage(weapon.name)" />
            <div class="card-body">
                <p>
                    Name: {{ weapon.name }} <br />
                    Type: {{ weapon.type }} <br />
                    rarity: {{ weapon.rarity }}* <br />
                    Base Attack: {{ weapon.baseAttack }} <br />
                    Sub Stat: {{ weapon.subStat }} <br />
                    Passive: {{ weapon.passiveName }} <br />
                    Description: {{ weapon.passiveDesc }} star <br />
                    Location: {{ weapon.location }} <br />
                    Material: {{ weapon.ascensionMaterial }} <br />
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
