# Component Usage Map

## 📄 Pages & Their Components

### HomePage.jsx
- Header
- AnimatedHero
- FeatureGrid
  - FeatureCard (3x instances)
- CallToAction
- AnimatedBackground
- TailwindBadge
- Footer

### LoginPage.jsx
- LoginForm
- LoginBackground

### DatepickerDemo.jsx
- Header
- Datepicker (3x instances with different configs)
- Footer

## 🧩 Component Types

### Global Components (Used across multiple pages)
- `Header` - Site-wide header with navigation
- `Footer` - Site-wide footer
- `Datepicker` - Reusable date selection component
- `AnimatedBackground` - Could be reused
- `TailwindBadge` - Development indicator

### Page-Specific Components
- `AnimatedHero` - Only for HomePage
- `FeatureGrid` + `FeatureCard` - Only for HomePage
- `CallToAction` - Only for HomePage (currently)
- `LoginForm` - Only for LoginPage
- `LoginBackground` - Only for LoginPage

## 🎯 Improvement Suggestions

### Option 1: Co-location Pattern (Facebook/Meta Style)
```
pages/
├── HomePage/
│   ├── index.jsx
│   ├── AnimatedHero.jsx
│   ├── FeatureGrid.jsx
│   ├── FeatureCard.jsx
│   └── CallToAction.jsx
└── LoginPage/
    ├── index.jsx
    ├── LoginForm.jsx
    └── LoginBackground.jsx
```

### Option 2: Feature-Based (Airbnb/Stripe Style)
```
features/
├── home/
├── auth/
└── shared/
```

### Option 3: Domain-Driven (Google/Netflix Style)
```
domains/
├── landing/
├── authentication/
└── core/
```
