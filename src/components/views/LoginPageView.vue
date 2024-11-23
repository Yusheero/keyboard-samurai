<script setup>
import { useKeyboardStore } from '@/store/store.js'
import { useRouter } from 'vue-router'
import Footer from '../Footer.vue'

import Header from '../Header.vue'

const router = useRouter()
const store = useKeyboardStore()

function Login() {
  if (!store.name) {
    return
  }

  /** Объект с логином и временем */
  const currentUser = {
    userName: store.name,
    loginTime: new Date(),
  }

  router.push('/main')
  localStorage.setItem('userName', currentUser)
}
</script>

<template>
  <div class="login-page">
    <Header />
    <div class="login-page__content">
      <div class="login-page__title">
        {{ 'Call Yourself, Samurai' }}
      </div>
      <input v-model="store.name" class="login-page__input" type="text" @keydown.enter="Login">
      <button class="login-page__button" @click="Login">
        Let's Start
      </button>
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.login-page {
  display:             flex;
  flex-direction:      column;
  width:               100%;
  height:              100vh;
  background-color:    var(--imperator);
  @include font-family;

	&__content {
		height:          90%;
		display:         flex;
		flex-direction:  column;
		justify-content: center;
		align-items:     center;
		gap:             10px;
	}

	&__title {
		font-size: 20px;
	}

	&__input {
		border:        2px solid var(--snow);
		border-radius: 5px;
		width:         300px;
		height:        30px;
		background-color: var(--imperator);
		padding: 10px;
		font-size: 18px;
		@include font-family;
	}

	&__button {
		border:        2px solid var(--snow);
		border-radius: 5px;
		width:         320px;
		height:        40px;
		display:         flex;
		flex-direction:  column;
		justify-content: center;
		align-items:     center;
		background-color: var(--sparrow);
		color: var(--snow);
		text-decoration: none;
		@include font-family;

		&:hover {
			background-color: var(--sparrow-light);
		}

		&:active {
			background-color: var(--sparrow-dark);
		}
	}
}
</style>
