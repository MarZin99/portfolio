import '../app/_styles/_globals.scss';
import Navbar from '@/app/_layout/navbar/Navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='body'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
