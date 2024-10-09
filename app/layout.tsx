// app/layout.tsx
import './globals.css'; // Import global styles, TailwindCSS
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            {/* Add your global navigation if needed */}
          </nav>
        </header>
        <main>{children}</main>
        <footer>© 2024 To-Do App</footer>
      </body>
    </html>
  );
}
