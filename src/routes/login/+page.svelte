<script lang="ts">
    import { authHandlers } from "../../store/store";
    import { auth } from "$lib/firebase";
    let email = '';
    let password = '';
    
    const login = () => {
        authHandlers.login(email, password).then(()=>{
            console.log('login success', auth.currentUser)
        }).catch((error)=>{
            console.log('error', error);
        })

    }
</script>

<form on:submit|preventDefault={login}>
    <label for="email">Email:</label>
    <input bind:value={email} type="email" id="email" name="email" required>

    <label for="password">Password:</label>
    <input bind:value={password} type="password" id="password" name="password" required>

    <button type="submit">Register</button>
</form>