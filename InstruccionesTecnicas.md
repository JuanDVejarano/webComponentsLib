# Comandos

## Correr proyecto en local

```bash
    cd packages/stencil-library
    npm run start
```

## Crear build

Lo buildea por lerna

```bash
    npm run build
```

## Build React

Se recomienda hacer el build de react despues de que se haga el build de la libreria de stencils

```bash
    cd packages/webcomponentslib-react
    npm run build
```

# Como publicar libreria en npm

Se publica automaticamente en npm cuando se sube la version en el package.json y cuando se hace un push a la rama main

1. Crear el commit

1.1. Estar en una rama diferente a main o a staging

1.2. Agregar los archivos

```bash
    git add .
```

1.2. Crear el commit

Se debe seguir los commits semanticos para esto se recomienda usar la extension conventional commits

```bash
    git commit -m "feat(Global): :sparkles: Add new feature"
```

1.3. Hacer el push

Si aun no se va  a hacer un pr a la rama staging o main

```bash
    git push
```

si se va a hacer un pr a la rama staging o main

Se recomienda usar los comandos de cambio de version que generan de una vez el push

## cambio de Versiones

Comandos para subir versiones tanto en la libreria de stencils como en los wrappers

### patch

```bash
    npm run patch
```

### minor

```bash
    npm run minor
```

### major

```bash
    npm run major
```
