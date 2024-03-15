<script>
    import TruckDetails from "/src/components/truck_details.svelte";
    let trucks = [
        {
            name: "Big Truck",
            details: "Big Truck Details",
            image: "big_truck.webp",
        },
        {
            name: "Medium Truck",
            details: "Medium Truck Details",
            image: "medium_truck.jpg",
        },
        {
            name: "Small Truck",
            details: "Small Truck Details",
            image: "small_truck.webp",
        },
    ];
</script>

<div>
    <title>Vehicle Details</title>
    <h1>Vehicle Details</h1>
    <div class="flexbox">
        {#each trucks as truck}
            <TruckDetails {truck} />
        {/each}
    </div>
</div>

<style>
    h1 {
        color: white;
        text-align: center;
    }
    .flexbox {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
    }
</style>
