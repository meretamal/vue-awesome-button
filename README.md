# Vue Awesome Button

Vue Awesome Button is a Vue 3 compatible component that renders an animated 3D button, for you tu use in your own projects.

## Acknowledgments

This project is based on [Rafael Caferati's](https://github.com/rcaferati) work and his very own [React Awesome Button](https://github.com/rcaferati/react-awesome-button). He's an increible award winning software engineer, so go and check some of the amazing stuff he has made.

## Instalation

Using npm:
```bash
npm install --save vue-awesome-button
```

Using yarn:
```bash
yarn add vue-awesome-button
```

## `AwesomeButton` example
```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

import "vue-awesome-button/style"; // import the button's syles

createApp(App).mount('#app')
```

```html
<!-- App.vue -->
<template>
  <AwesomeButton>Hello World</AwesomeButton>
</template>
<script lang="ts">
import { AwesomeButton } from 'vue-awesome-button';
</script>   
```
## `AwesomeButton` props

| Attribute           | Type                                                      | Default     | Description                                                                         |
|---------------------|-----------------------------------------------------------|-------------|-------------------------------------------------------------------------------------|
| disabled            | `boolean`                                                 | `false`     | Renders the disabled button and disables the button's actions                       |
| disable-move-events | `boolean`                                                 | `false`     | If set to `true`, when hovering the button, it will only be pressed from the middle |
| hidden              | `boolean`                                                 | `false`     | Changes the opacity of the button                                                   |
| size                | `null \| "small" \| "medium" \| "large"`                  | `null`      | Changes the size of the button                                                      |
| type                | `"primary" \| "secondary" \| "link" \| "danger"` | `"primary"` | Sets the button's variant                                                           |

## License

MIT. Copyright (c) 2023 Moisés Retamal.
