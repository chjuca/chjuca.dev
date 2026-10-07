import { RootLayout } from "./layouts/RootLayout";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { HomePage } from "./pages/HomePage";
import { JobPage } from "./pages/JobPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PipelinePage } from "./pages/PipelinePage";
import { ProjectPage } from "./pages/ProjectPage";
import { ProjectsPage } from "./pages/ProjectsPage";

// Keep public/sitemap.xml in sync when adding pages.
export const routes = [
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "experience", Component: ExperiencePage },
      { path: "experience/:slug", Component: JobPage },
      { path: "projects", Component: ProjectsPage },
      { path: "projects/:slug", Component: ProjectPage },
      { path: "pipeline", Component: PipelinePage },
      { path: "about", Component: AboutPage },
      { path: "contact", Component: ContactPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
];
