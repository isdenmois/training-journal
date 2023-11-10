<script lang="ts">
  import type { ActionData } from './$types';

  export let form: ActionData;
</script>

<form method="post">
  <input type="text" name="login" placeholder="Login" autocorrect="off" autocapitalize="none" required />
  <input type="password" name="password" placeholder="Password" />

  {#if form?.message}
    <h1>{form.message}</h1>
  {/if}

  <button class="full-width">Login</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
</style>
