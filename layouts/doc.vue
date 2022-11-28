<template>
  <div class="flex flex-col min-h-screen">
    <DocNavbar />
    <DocSidebar />
    <DocToc />
    <main class="container mt-20 mx-90">
      <slot />
    </main>
    <!-- <Footer /> -->
  </div>
</template>
