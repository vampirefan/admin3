<template>
  <NuxtLayout name="admin">
    <div>
      <h1>main-container</h1>
      <p v-for="index in 50" :key="index">
        p: {{ index }}
      </p>
    </div>
  </NuxtLayout>
</template>
