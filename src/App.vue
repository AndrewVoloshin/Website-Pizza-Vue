<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400&display=swap');
:root{
    --font-sans-serif: 'Noto Sans','Roboto', sans-serif;
}

*{
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: var(--font-sans-serif);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
}
</style>
