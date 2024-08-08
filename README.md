# Mono repository para libreria de web components en estencil js

## instalacion de libreria en JS vanilla

```bash
    npm create vite@latest
    npm install @juandvejarano/webcomponentslib
```

en el archivo index.js importar la libreria

```javascript
import { defineCustomElements } from "@juandvejarano/webcomponentslib/loader";
defineCustomElements();
```

Listo ya puedes usar los componetes en tu proyecto!!!

## instalacion de libreria en React

```bash
    npm create react-app@latest
    npm install @juandvejarano/webcomponentslib @juandvejarano/webcomponentslib-react
```

## Versiones

El proyecto solo tendra soporte desde la version 1.0.0 en adelante

para ver las versiones ver el archivo [CHANGELOG.md](./CHANGELOG.md)

## Componentes

### Botones

Botones en [Boton](./packages/stencil-library/src/components/lib-button/readme.md)

## Licencia

MIT
