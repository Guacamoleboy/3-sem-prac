import './style.css';
import './guacamoleboy-framework.css';
import './guacamoleboy-wow.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';

export const metadata = {
  title: 'Consumr – Del din oplevelse',
  description:
    'Smag, mærk, lyt – vurder produkter fra hønsesalat til træplader hos os.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <head>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
        </head>
        <body>

            {/* Preloader */}
            <Preloader />

            {/* Header */}
            <Header />
            
            {/* Page Specific */}
            {children}

            {/* Footer */}
            <Footer />

        </body>
    </html>
  );
}