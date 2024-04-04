<script>
    import { onMount } from 'svelte';
    import { auth } from '$lib/firebase.ts';

    onMount(()=>{
        console.log('mounting')
    })
</script>

<slot />