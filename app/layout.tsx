import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fabric Thai Guide — ใช้ AI ให้ทำงานจริง',
  description: 'คู่มือ Fabric ภาษาไทย พร้อมคำสั่งและ Patterns สำหรับงานธุรกิจและคอนเทนต์',
  openGraph: { title: 'Fabric Thai Guide — ใช้ AI ให้ทำงานจริง', description: 'คู่มือ Fabric ภาษาไทย พร้อมคำสั่งและ Patterns สำหรับงานจริง', images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="th"><body>{children}</body></html>;
}
