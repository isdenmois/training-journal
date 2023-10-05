<script lang="ts">
  import type { ActionData, PageData } from './$types';

  export let data: PageData;
  export let form: ActionData;
</script>

<form method="post">
  <input type="text" name="login" placeholder="Login" />
  <input type="password" name="password" placeholder="Password" />

  {#if form?.message}
    <h1>{form.message}</h1>
  {/if}

  <button>Login</button>
</form>
