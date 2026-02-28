import { createHashRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Academics } from "./pages/Academics";
import { Admissions } from "./pages/Admissions";
import { Facilities } from "./pages/Facilities";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";

export const router = createHashRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "academics", Component: Academics },
      { path: "admissions", Component: Admissions },
      { path: "facilities", Component: Facilities },
      { path: "gallery", Component: Gallery },
      { path: "contact", Component: Contact },
    ],
  },
]);
