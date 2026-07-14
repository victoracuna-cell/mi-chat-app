export const metadata = {
  title: 'TUU | Asistente',
  description: 'Chat impulsado por n8n',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
