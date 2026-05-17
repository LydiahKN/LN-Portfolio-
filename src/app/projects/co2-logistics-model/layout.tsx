import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Predicting 2027 CO₂ Road Charges | Lydiah Nyakweba',
  description: 'An interactive macroeconomic simulation of the German logistics transformation, evaluating the financial impact of expanded BFStrMG tolls and EV fleet adoption.',
  keywords: [
    'BFStrMG',
    'Lkw-Maut',
    'CO2 Surcharge',
    'TCO Calculator',
    'Logistics Modeling',
    'Fleet Electrification',
    'Supply Chain Analytics',
    'Germany 2027'
  ],
  authors: [{ name: 'Lydiah Nyakweba' }],
  openGraph: {
    title: 'Predicting 2027 CO₂ Road Charges | Logistics Simulation',
    description: 'An interactive macroeconomic simulation evaluating the financial impact of expanded BFStrMG tolls and the break-even point for electric fleet adoption in Germany.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Predicting 2027 CO₂ Road Charges | Logistics Simulation',
    description: 'Interactive macroeconomic simulation of the German logistics transformation.',
  }
};

export default function CO2ModelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
