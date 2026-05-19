import './App.css';
import { ThemeProvider } from '@/components/theme-provider';
import { TypographyH1 } from '@/components/ui/text';
import { Construction } from 'lucide-react';
import type { ReactNode } from 'react';

const footer: [string, [string, string][]][] = [
  [
    'Contact',
    [
      ['GitHub', 'https://github.com/scsupercraft'],
      ['Email', 'mailto:contact@scsupercraft.dev'],
    ],
  ],
  ['Support', [['Ko-Fi', 'https://ko-fi.com/scsupercraft']]],
];

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <div className="flex justify-center items-center h-full">
          <Construction
            size={'2.25rem'}
            color="yellow"
          ></Construction>
          <TypographyH1 className="ml-2 mr-2">
            Under construction, check back later!
          </TypographyH1>
          <Construction
            size={'2.25rem'}
            color="yellow"
          ></Construction>
        </div>
      </Layout>
    </ThemeProvider>
  );
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <span className="flex flex-col h-dvh">
      <Header />
      <span className="site-content">{children}</span>
      <Footer />
    </span>
  );
}

function Header() {
  return (
    <header className="h-15 flex select-none">
      <a
        className="h-full flex items-center"
        href="/"
      >
        <div className="h-full aspect-square flex justify-center items-center mr-1">
          <img
            className="h-[80%] aspect-square"
            src="/logo.png"
          />
        </div>
        <p className="font-semibold text-3xl text-center leading-none m-0">
          SCsupercraft.dev
        </p>
      </a>
    </header>
  );
}

function Footer() {
  return (
    <footer className="text-gray-300 p-2 flex flex-col items-center gap-4">
      <div className="flex flex-wrap justify-center gap-12">
        {footer.map(([section, links]) => (
          <div
            key={section}
            className="flex flex-col items-start text-left gap-1"
          >
            <h4 className="font-semibold text-white">{section}</h4>
            {links.map(([text, href]) => (
              <a
                key={text}
                href={href}
                target="_blank"
                className="hover:text-white transition-colors"
              >
                {text}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="text-sm text-gray-400">Copyright © 2026 SCsupercraft</div>
    </footer>
  );
}

export default App;
