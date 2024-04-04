<script lang="ts">
    import { auth } from "$lib/firebase";
    import { authHandlers } from "../../store/store";

    let email = '';
    let password = '';
    
    const register = () => {
        authHandlers.signup(email, password).then(()=>{
            console.log('registersuccess', auth.currentUser)
        }).catch((error)=>{
            console.log('error', error);
        })
    }
</script>

<form on:submit|preventDefault={register}>
    <label for="email">Email:</label>
    <input bind:value={email} type="email" id="email" name="email" required>

    <label for="password">Password:</label>
    <input bind:value={password} type="password" id="password" name="password" required>

    <button type="submit">Register</button>
</form>