# Aventisia Frontend Assignment: Knowledge Base UI

A production-grade, highly-responsive frontend React application replicating the required Knowledge Base Figma design with pixel-accurate precision, built with React, TypeScript, and Tailwind CSS.

## 🚀 Key Highlights & Features

### 1. Pixel-Accurate UI Implementation

- **High-Fidelity Translation:** Faithfully translated the Figma concept into robust React components, ensuring exact margin mathematics, padding boundaries, and typography selections.
- **Design Tokens:** Strict adherence to the branding guidelines, successfully employing the exact `Primary Color: HEX #4F46E5` and `Secondary Color: HEX #1E1B4B` specifications globally across the app.

### 2. Advanced Responsive Fluidity

- **Completely Mobile-Ready:** The application flawlessly scales from tiny smartphone viewports up to large ultrawide desktop monitors seamlessly without horizontal scrolling or breakages.
- **Custom Drawer Navigation Navigation:** Instead of simply hiding the Sidebar on mobile, it gracefully transitions into an interactive, off-canvas sliding drawer triggered by a header hamburger menu (complete with a focus-dimming backdrop).
- **Auto-Collapsing Header UI:** Contextually minimizes the workspace dropdowns and header search parameters on restrictive breakpoints.
- **Resilient Grid Scaling:** The Knowledge Base cards component dynamically transitions from single-stack mobile views to dense multi-column arrays (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`).

### 3. Complex UI State Management

- **Slide-in Action Panels:** Full implementation of the "Create New" Knowledge Base pop-up screen natively bound to the window's right edge.
- **Silky Smooth 60FPS Animations:** Replaced quick nested-DOM snaps with intelligent CSS-Transform transitions orchestrated by specific JavaScript `setTimeout` delays. This completely prevents skipped mounting frames to guarantee buttery-smooth CSS sliding capabilities on the panel!

### 4. Enterprise-Level Component Architecture

- **Clean Feature-based Routing:** Highly scalable folder structures explicitly dividing layout scaffolding (`src/components/layout`), generic utilities (`src/components/common`), and distinct app features (`src/features/...`).
- **High Reusability:** Every input and action uses globally reusable, extensible primitive architecture components like `<Button />` and `<Input />`.

### 5. Stringent TypeScript & Quality Methodologies

- **Universal Typing Module:** Deployed a globally accessible `src/types/general.d.ts` namespace to perfectly encapsulate interfaces and share data models intelligently without cyclic dependencies.
- **No Compromise Linting:** Fully implemented `ESLint` and `Prettier` systems rigorously managing code structuring and cleanliness to strict industry standards.
- **Continuous Integration Ready:** Supplied with a structured `.github/workflows/ci.yml` pipeline allowing seamless evaluation within a CI/CD environment.

---

## 🛠️ Technology Stack

- **Core:** React 18, TypeScript, Vite
- **Routing:** React Router DOM
- **Styling Engine:** Tailwind CSS
- **Iconography:** Lucide-React
- **Code Quality:** ESLint, Prettier

## 📦 Running the Application Locally

1. **Install Dependencies:**

   ```bash
   npm install
   ```

2. **Run the Development Server:**

   ```bash
   npm run dev
   ```

3. **Navigate to Localhost:**
   Open the port generated in your terminal (usually `http://localhost:5173`) to view and interact with the UI.
