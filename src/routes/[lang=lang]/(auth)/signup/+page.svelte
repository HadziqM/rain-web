<script lang="ts">
    import type { ActionData } from './$types';
    import LL from '$i18n/i18n-svelte';

    export let form: ActionData;
</script>

<h1>{$LL.register['register_title']()}</h1>

<form action="?/signup" method="POST">
    <div>
        <label for="email">{$LL.register['email_label']()}</label>
        <input id="email" name="email" type="text" value={form?.credentials?.email ?? ''} autocomplete="off" />
        {#if form?.errors?.invalidEmail}
            <span style="color: red;">メールアドレスは正しく入力してください</span>
        {/if}
    </div>

    <div>
        <label for="username">{$LL.register['username_label']()}</label>
        <input id="username" name="username" type="text" value={form?.credentials?.username ?? ''} autocomplete="off" />
        {#if form?.errors?.invalidUsername}
            <span style="color: red;">ユーザー名は正しく入力してください</span>
        {/if}
    </div>

    <div>
        <label for="password">{$LL.register['password_label']()}</label>
        <input id="password" name="password" type="password" value={form?.credentials?.password ?? ''} autocomplete="off" />
        {#if form?.errors?.invalidPassword}
            <span style="color: red;">パスワードは正しく入力してください</span>
        {/if}
    </div>

    {#if form?.errors?.userExist}
        <p style="color: red;">{$LL.register['already']()}</p>
    {/if}

    <button type="submit">{$LL.register['register_button']()}</button>
</form>
