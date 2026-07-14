# Mi Chat App (n8n + Next.js + Vercel)

App de chat de pantalla completa que se conecta a un workflow de n8n mediante el Chat Trigger.

## 1. Configurar n8n

1. Abre tu workflow y entra al nodo **Chat Trigger**.
2. En **Allowed Origins (CORS)** agrega:
   - `http://localhost:3000` (para probar en local)
   - La URL final de tu app en Vercel, ej: `https://mi-chat-app.vercel.app`
3. Activa el workflow (**Active = ON**).
4. Copia la **Production Webhook URL**.

## 2. Configurar el proyecto en local

```bash
npm install
cp .env.local.example .env.local
```

Edita `.env.local` y pega tu webhook:

```
NEXT_PUBLIC_N8N_WEBHOOK_URL=https://tu-instancia-n8n.com/webhook/tu-id
```

Corre en local:

```bash
npm run dev
```

Abre http://localhost:3000

## 3. Desplegar en Vercel

### Opción A: desde la CLI
```bash
npm i -g vercel
vercel
```
Cuando pregunte por variables de entorno, agrega `NEXT_PUBLIC_N8N_WEBHOOK_URL` con tu URL real.

### Opción B: desde GitHub
1. Sube esta carpeta a un repo de GitHub.
2. En vercel.com → "Add New Project" → importa el repo.
3. En **Environment Variables**, agrega `NEXT_PUBLIC_N8N_WEBHOOK_URL`.
4. Deploy.

Cada push a `main` volverá a desplegar automáticamente.

## 4. Personalizar

Todo el estilo está en `app/ChatWidget.js`, dentro del bloque `<style jsx global>`.
Puedes cambiar:
- `--chat--color-primary`: color principal (burbujas, botón)
- `--chat--color-secondary`: color de acento
- `--chat--border-radius`: qué tan redondeadas son las esquinas
- Los textos (`title`, `inputPlaceholder`, etc.) en el objeto `i18n`

## 5. Streaming (opcional)

Si quieres que las respuestas aparezcan palabra por palabra:
1. En el nodo Chat Trigger de n8n, activa **Streaming response**.
2. En `ChatWidget.js`, agrega `enableStreaming: true` dentro de `createChat({...})`.

## 6. Historial de conversación

`loadPreviousSession: true` guarda la sesión en el navegador (localStorage), así que si el
usuario recarga la página, retoma la misma conversación. Si cierra el navegador o usa otro
dispositivo, empieza una conversación nueva (no hay autenticación de usuarios en este setup).
