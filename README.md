# Brain Tree English Medium School - Website

A modern, responsive school website built with **React**, **TypeScript**, **Tailwind CSS v4**, and **Vite**. This project showcases the school's information including academics, admissions, facilities, gallery, and more.

---

## 🌐 Live Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, Highlights, Principal's Message, Why Choose Us, Facilities, Testimonials, CTA |
| `/about` | About the school |
| `/academics` | Academic programs and curriculum |
| `/admissions` | Admission process and details |
| `/facilities` | School facilities overview |
| `/gallery` | Photo gallery |
| `/contact` | Contact information and form |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI library |
| **TypeScript** | Type-safe JavaScript |
| **Vite 6** | Build tool & dev server |
| **React Router 7** | Client-side routing |
| **Tailwind CSS v4** | Utility-first CSS framework |
| **Radix UI + shadcn/ui** | Accessible UI primitives |
| **Material UI (MUI)** | Additional UI components & icons |
| **Lucide React** | Icon library |
| **Motion (Framer Motion)** | Animations |
| **React Hook Form** | Form handling |
| **Recharts** | Charts & data visualization |
| **Embla Carousel / React Slick** | Carousels and sliders |
| **Sonner** | Toast notifications |

---

## 📁 Project Structure

```
src/
├── main.tsx                      # App entry point
├── styles/                       # Global CSS (fonts, tailwind, theme)
│   ├── fonts.css
│   ├── index.css
│   ├── tailwind.css
│   └── theme.css
└── app/
    ├── App.tsx                   # Root component (RouterProvider)
    ├── routes.ts                 # All route definitions
    ├── layouts/
    │   └── RootLayout.tsx        # Shared layout (Navbar + Footer + FloatingButtons)
    ├── pages/                    # Page-level components
    │   ├── Home.tsx
    │   ├── About.tsx
    │   ├── Academics.tsx
    │   ├── Admissions.tsx
    │   ├── Facilities.tsx
    │   ├── Gallery.tsx
    │   └── Contact.tsx
    └── components/
        ├── Navbar.tsx            # Navigation bar
        ├── Footer.tsx            # Footer
        ├── FloatingButtons.tsx   # Floating action buttons
        ├── home/                 # Home page sections
        │   ├── HeroSection.tsx
        │   ├── HighlightsSection.tsx
        │   ├── PrincipalSection.tsx
        │   ├── WhyChooseUsSection.tsx
        │   ├── FacilitiesSection.tsx
        │   ├── TestimonialsSection.tsx
        │   └── CTASection.tsx
        ├── figma/                # Figma-exported components
        │   └── ImageWithFallback.tsx
        └── ui/                   # Reusable UI primitives (shadcn/ui style)
            ├── button.tsx
            ├── card.tsx
            ├── dialog.tsx
            └── ... (40+ components)
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.x (recommended: v20+)
- **npm** >= 9.x

### Clone the Repository

```bash
git clone https://github.com/Nagaraj-Jadar/brain-tree.git
cd brain-tree
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will start at **http://localhost:5173/**

### Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist/` folder.

---

## 📌 Key Features

- **Fully Responsive** — Works on desktop, tablet, and mobile
- **Modern UI** — Clean design with smooth animations
- **Accessible** — Built on Radix UI primitives for accessibility
- **Fast** — Vite-powered instant HMR and optimized builds
- **Modular Architecture** — Component-based structure for easy maintenance

---

## 👤 Author

**Nagaraj Jadar**
- GitHub: [@Nagaraj-Jadar](https://github.com/Nagaraj-Jadar)
- Email: nagarajbjadar@gmail.com

---

## 📄 License

This project is for educational purposes.