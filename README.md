# Shortly URL shorter

## Table of contents

- [Descripcion](#descripcion)
  - [El desafio](#el-desafio)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Mi proceso](#mi-proceso)
  - [Hecho con](#hecho-con)
  - [Lo aprendido](#lo-que-aprendi)
- [Autor](#autor)

## Descripcion

Solucion al reto de crear un aplicativo que acorte diversos links que sean pasados por el usuario. Para este reto queria practicar concretamente TypeScript y Unit Testing con Jest.

Ademas emplea una Server Funcion para manjear la request desde el lado del servidor.

## El desafio

El usuario deberia poder

- Acortar cualquier URL valido
- Ver una lista de los URL introducidos, incluso despues de refrescar el navegador
- Copiar el URL acortado en el clipboard
- Recibir un mensaje de error cuando el formulario es subido si el input esta vacio## El desafio
- Ver el layout optimo dependiendo de su tamano de pantalla.
- Ver la interaccion cuando se coloca el mouse encima de los elementos.

## Screenshot

![](./src/assets/screenshot.webp)

### Links

- [Repo](https://github.com/J-HernandezM/url-shortener)
- [Deploy](https://shortly-url-shorten.vercel.app)

## Mi proceso

Como ya he trabajado previamente realizando landing page, fue bastante sencillo la parte de estructura y estilos de la pagina.

En este reto queria enfocarme en afianzar los conocimientos de TypeScript y Jest, con lo cual fue la parte que mas atencion y empeño le puse. Fue bastante gratificante poder emplear los conocimientos adquiridos.

## Lo que aprendi

Este ejercicio lo habia completado hace algun tiempo con un proxy. Sin embargo en produccion no estaba funcionando adecuadamente el llamado a la API y esto es debido a que en este caso dicho llamado debia realizarse mediante una Server Function.

Para ello implemente las API Routes de Vercel, y ya que estoy en un entorno de Vite (Pues con Next hubiera sido un poco mas sencillo), realice las siguientes configuraciones para que funcionase.

Primero instale las dependencias requeridas

```bash
npm install --save-dev @vercel/node vite-plugin-vercel
```

Con el CLI de vercel, utilizando `vercel dev` podia simular el entorno de produccion que otorga vercel desde mi local.

En este caso no necesitaba de un `vercel.json` ya que la server function que tenemos ejecuta mediante un runtima predeterminado por vercel.

En el archivo `vite.config.ts` importamos el plugin de vercel y definimos el servidor asi

```ts
// vite.config.ts
export default defineConfig({
  server: {
    port: process.env.PORT as unknown as number,
  },
  plugins: [react(), vercel()],
});
```

Posteriormente escribimos nuestra Server Function dentro de una carpeta `api` ubicada en el root de la aplicacion, y cuyo url podremos acceder a traves de `prodUrl.com/api/nombreArchivo`.

```ts
// api/shortening.ts

import { type VercelRequest, type VercelResponse } from "@vercel/node";

const API = "https://cleanuri.com/api/v1/shorten";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const t: string = req.body.t;

    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "url=" + encodeURIComponent(t),
    });

    if (!response.ok) {
      throw new Error("Failed to shorten link");
    }

    const data = await response.json();
    res.status(200).send(data);
  } catch (e: any) {
    res.status(500).send({ error: e.message });
  }
}
```

y ahora para que todo funcione debemos llamar desde nuestro client side a nuestro endpoint /api/shortening

```ts
const res = await fetch("/api/shortening", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ t }),
});
```

## Hecho con

- Semantic HTML5 markup
- SASS
- React
- Vite
- TypeScript
- Jest
- Vercel CLI

## Autor

- [Github](https://github.com/J-HernandezM)
- [Linkedin](https://www.linkedin.com/in/juan-jose-hernandez-muñoz-9613821a2/)
- [Portfolio](https://j-hernandez-m-github-io.vercel.app)
