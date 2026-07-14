'use client';

import { useEffect, useRef } from 'react';
import '@n8n/chat/dist/style.css';
import { createChat } from '@n8n/chat';

export default function ChatWidget() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    createChat({
      webhookUrl: process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL,
      target: '#n8n-chat',
      mode: 'fullscreen',
      showWelcomeScreen: false,
      loadPreviousSession: true,
      initialMessages: ['¡Hola! ¿En qué te ayudo hoy?'],
      i18n: {
        en: {
          title: 'Asistente',
          subtitle: '',
          footer: '',
          getStarted: 'Nueva conversación',
          inputPlaceholder: 'Escribe tu mensaje...',
          closeButtonTooltip: 'Cerrar',
        },
      },
    });
  }, []);

  return (
    <>
      <div id="n8n-chat" />
      <style jsx global>{`
        html, body, #n8n-chat {
          width: 100%;
          height: 100vh;
        }

        :root {
          /* Azul de marca */
          --chat--color-primary: #002fe2;
          --chat--color-primary-shade-50: #0026b8;
          --chat--color-primary-shade-100: #001c8a;
          --chat--color-secondary: #002fe2;
          --chat--color-secondary-shade-50: #0026b8;

          /* Base minimalista: blancos y grises suaves */
          --chat--color-white: #ffffff;
          --chat--color-light: #f7f8fb;
          --chat--color-light-shade-50: #edeff5;
          --chat--color-light-shade-100: #dfe2ea;
          --chat--color-medium: #d2d4d9;
          --chat--color-dark: #1a1a2e;
          --chat--color-disabled: #a3a3a3;
          --chat--color-typing: #4d4d4d;

          /* Formas y espaciado limpios */
          --chat--spacing: 1rem;
          --chat--border-radius: 12px;
          --chat--transition-duration: 0.15s;

          /* Mensajes */
          --chat--message--font-size: 1rem;
          --chat--message-line-height: 1.5;
          --chat--message--padding: var(--chat--spacing);
          --chat--message--border-radius: var(--chat--border-radius);
          --chat--message--bot--background: var(--chat--color-light);
          --chat--message--bot--color: var(--chat--color-dark);
          --chat--message--bot--border: none;
          --chat--message--user--background: var(--chat--color-primary);
          --chat--message--user--color: var(--chat--color-white);
          --chat--message--user--border: none;

          /* Input */
          --chat--input--border-radius: 12px;
          --chat--input--border: 1px solid var(--chat--color-light-shade-100);
          --chat--input--send--button--background: var(--chat--color-primary);
          --chat--input--send--button--color: var(--chat--color-white);

          /* Header (por si algún día lo activas) */
          --chat--header--background: var(--chat--color-white);
          --chat--header--color: var(--chat--color-dark);
        }
      `}</style>
    </>
  );
}
