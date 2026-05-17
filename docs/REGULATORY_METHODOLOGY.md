# Logistics Regulatory Methodology & Data Assumptions

This document outlines the specific empirical, legal, and regulatory sources used to validate the mathematical logic behind the **CO₂-Based Road Charging Expansion Model**. All values in the application's TCO Calculator are grounded in these official German and European institutions.

## 1. Toll Rates & CO₂ Classes (BMDV / Toll Collect)
- **Institution**: Bundesministerium für Digitales und Verkehr (BMDV) & Toll Collect
- **Data Source**: Official Toll Rate Tables (effective July 1, 2024)
- **Application**: The base calculations for the model assume a 5-axle Euro 6 >18t HGV toll rate of **34.8 cents/km**. For the interactive calculator, the >3.5t LCV rate is modeled at a baseline of **15.1 cents/km**.
- **Legal Framework**: *Bundesfernstraßenmautgesetz (BFStrMG)* and the *Eurovignette Directive (EU 2022/362)*.

## 2. Emission Factors (UBA)
- **Institution**: Umweltbundesamt (UBA)
- **Data Source**: CO₂ Emission Factors for the German Energy Mix and Diesel Fuel
- **Application**: Used to conceptually validate the energy arbitrage component of the model. The calculator defines diesel operations at ~€14.40 / 100km and EV depot charging at ~€6.00 / 100km.

## 3. Fleet TCO Forecasts (Fraunhofer ISI)
- **Institution**: Fraunhofer Institute for Systems and Innovation Research (ISI)
- **Data Source**: TCO Parity Studies for Commercial Fleet Electrification
- **Application**: The bar chart OPEX breakdown specifically models a 50% maintenance cost reduction for electric drivetrains (€750 vs €1500 annually) based on Fraunhofer's projections regarding reduced wear items (regenerative braking, lack of transmission).

## 4. Urban Congestion Simulation (TomTom)
- **Institution**: TomTom / Municipal Climate Action Plans (e.g., Munich's *Roadmap Urbane Logistik 2035*)
- **Data Source**: TomTom Traffic Index & Zero Emission Zone (ZEZ) proposals.
- **Application**: Drives the "Urban Route" parameter in the calculator. To model incoming municipal congestion charges, a **5.0 cents/km** penalty is dynamically added to the diesel baseline when activated.

## 5. Fleet Structure Exposure (KBA)
- **Institution**: Kraftfahrt-Bundesamt (KBA)
- **Data Source**: Fleet Composition Data (Light Commercial Vehicles vs. Heavy Goods Vehicles)
- **Application**: Underpins the "Sub-3.5t Frontier" narrative. KBA data proves the massive influx of 3.49t vans used to evade the BFStrMG tolls, validating the strategic recommendation for Micro-Hub Arbitrage.

## Model Limitations
- **Deterministic Approach**: The current calculator uses flat averages for energy efficiency. A future expansion could utilize a Monte Carlo simulation to account for payload weight variance and topographical energy consumption.
- **Grid Volatility**: EV charging is calculated at a flat rate, whereas true VPP (Virtual Power Plant) integration using BESS (Battery Energy Storage Systems) would see variable OPEX based on real-time spot market prices (EPEX SPOT).
