<script setup lang="ts">
import { handleLogin, handleRegister } from "../controllers/auth";
import { ref } from "vue";

const registerData = ref({
  login: "",
  email: "",
  password: "",
});

const loginData = ref({
  login: "",
  password: "",
});
</script>
<template>
  <div class="mt-24 flex items-center justify-center p-4">
    <div class="container max-w-5xl">
      <div class="flex flex-col lg:flex-row gap-8 items-stretch">
        <div class="card bg-base-100/70 shadow-xl flex-1">
          <div class="card-body">
            <h2 class="card-title text-2xl mb-4">Zaloguj się</h2>
            <form
              @submit.prevent="handleLogin(loginData.login, loginData.password)"
              class="space-y-4"
            >
              <div v class="form-control">
                <label class="label"
                  ><span class="label-text">Login</span></label
                >
                <input
                  v-model="loginData.login"
                  type="text"
                  placeholder="Twój login"
                  class="input input-bordered w-full"
                  required
                />
              </div>
              <div class="form-control">
                <label class="label"
                  ><span class="label-text">Hasło</span></label
                >
                <input
                  v-model="loginData.password"
                  type="password"
                  placeholder="••••••••"
                  class="input input-bordered w-full"
                  required
                />
              </div>
              <div class="card-actions mt-6">
                <button type="submit" class="btn btn-primary w-full">
                  Zaloguj
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="divider lg:divider-horizontal">LUB</div>

        <div class="card bg-base-100/70 shadow-xl flex-1">
          <div class="card-body">
            <h2 class="card-title text-2xl mb-4">Stwórz konto</h2>
            <form
              @submit.prevent="
                handleRegister(
                  registerData.login,
                  registerData.password,
                  registerData.email,
                )
              "
              class="space-y-4"
            >
              <div class="form-control">
                <label class="label"
                  ><span class="label-text">Login</span></label
                >
                <input
                  v-model="registerData.login"
                  type="text"
                  placeholder="Wybierz login"
                  class="input input-bordered w-full"
                  required
                />
              </div>
              <div class="form-control">
                <label class="label"
                  ><span class="label-text">E-mail</span></label
                >
                <input
                  v-model="registerData.email"
                  type="email"
                  placeholder="email@przyklad.pl"
                  class="input input-bordered w-full"
                  required
                />
              </div>
              <div class="form-control">
                <label class="label"
                  ><span class="label-text">Hasło</span></label
                >
                <input
                  v-model="registerData.password"
                  type="password"
                  placeholder="Minimum 5 znaków"
                  class="input input-bordered w-full"
                  required
                />
              </div>
              <div class="card-actions mt-6">
                <button
                  type="submit"
                  class="btn btn-secondary w-full text-white"
                >
                  Zarejestruj się
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
