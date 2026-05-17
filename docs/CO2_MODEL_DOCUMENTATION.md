# CO₂ Logistics Model - Flagship Portfolio Asset

## Executive Summary
The **CO₂-Based Road Charging Expansion Model** is an interactive, React-based (Next.js) simulation built to showcase macroeconomic modeling and logistics domain expertise for the German market (2026-2027). It functions as a dynamic case study for potential employers (TSOs, DSOs, Logistics Consultancies), demonstrating the financial shock of the revised *Bundesfernstraßenmautgesetz (BFStrMG)* on standard distribution fleets.

## Core Features & Architecture

### 1. Interactive Fleet TCO Calculator
The core of the page is a highly parameterized Total Cost of Ownership (TCO) calculator comparing Diesel ICE (Internal Combustion Engine) vs. Electric ZEV (Zero-Emission Vehicle) OPEX over a configurable annual mileage.

**Key State Parameters:**
- `annualMileage`: Configurable via a slider range input (10,000 km to 100,000 km).
- `isUrbanRoute`: A toggle simulating an urban congestion/ZEZ surcharge (adding 5.0 cents/km to diesel operations).
- `isCraftsperson`: A toggle implementing the *Handwerkerausnahme* (Craftsperson Exemption for vehicles <7.5t), instantly dropping diesel toll exposure to €0.

### 2. Multi-Language Support (Localization)
All components, text nodes, and charts are fully integrated with the global `<LanguageContext>`. 
- Utilizing the custom `<T>` component and `translations.ts` dictionary.
- The Recharts elements dynamically rerender their legends, axis labels, and tooltips based on the active locale (EN/DE).

### 3. Data Visualization (Recharts)
- **Toll Cost Trajectory (AreaChart)**: Visualizes the long-term cost exposure of >18t HGVs out to 2031, visually highlighting the end of the ZEV toll exemption.
- **OPEX Breakdown (BarChart)**: Dynamically responds to user input (mileage, toggles) to break down annual Energy vs. Tolls vs. Maintenance costs.
- **Toll Anatomy (PieChart)**: A precise breakdown of the 15.1 cents/km toll rate (Infrastructure, Air Pollution, Noise, CO₂ Surcharge).

## Strategic Recommendations
The model is paired with three core logistics pivots derived from the mathematical data:
1. **Micro-Hub Arbitrage**: Evading tolls using peri-urban cross-docking to sub-3.5t electric vehicles.
2. **Virtual Power Plants (VPP)**: Crashing EV OPEX by leveraging BNetzA dynamic grid fees and depot Battery Energy Storage Systems (BESS).
3. **Retrofit-as-a-Service**: Upgrading municipal/specialized ICE superstructures to electric to drop into the toll-exempt bracket.
