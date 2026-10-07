import { fireEvent, render, screen, within } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { routes } from "./routes";

const step = (name, seconds) => ({
  name,
  status: "completed",
  conclusion: "success",
  startedAt: "2026-10-06T10:00:00Z",
  completedAt: new Date(Date.parse("2026-10-06T10:00:00Z") + seconds * 1000).toISOString(),
});

const RUN = {
  id: 1,
  number: 12,
  status: "completed",
  conclusion: "success",
  event: "push",
  sha: "abc1234def5678",
  message: "Add the live pipeline page",
  author: "chjuca",
  startedAt: "2026-10-06T10:00:00Z",
  updatedAt: "2026-10-06T10:03:10Z",
  url: "https://github.com/chjuca/chjuca.dev/actions/runs/1",
};

const PIPELINE = {
  repo: "chjuca/chjuca.dev",
  runs: [RUN],
  latest: {
    ...RUN,
    jobs: [
      {
        name: "Build & test",
        steps: [
          step("Lint", 8),
          step("Test", 21),
          step("Build", 4),
          step("Bundle budget", 1),
          step("Lighthouse", 35),
        ],
      },
      { name: "Deploy", steps: [step("Deploy", 18), step("Smoke test", 12)] },
    ],
  },
};

const METRICS = {
  tests: { total: 30, passed: 30 },
  coverage: { lines: 88.2 },
  bundle: { jsGzip: 143_000, cssGzip: 9_000, budgetKb: { js: 170, css: 12 } },
  lighthouse: { performance: 0.97, accessibility: 1, bestPractices: 1, seo: 1 },
};

function mockApi(responses) {
  vi.stubGlobal(
    "fetch",
    vi.fn(async (url) => {
      const response = responses[url];
      if (!response) return new Response("not found", { status: 404, headers: { "Content-Type": "text/html" } });
      return Response.json(response.body, { status: response.status ?? 200 });
    }),
  );
}

function renderAt(path, language = "es") {
  localStorage.setItem("lang", language);
  const router = createMemoryRouter(routes, { initialEntries: [path] });
  render(<RouterProvider router={router} />);
  return router;
}

describe("site", () => {
  beforeEach(() => {
    localStorage.clear();
    delete document.documentElement.dataset.theme;
    window.history.replaceState(null, "", "/");
  });

  afterEach(() => vi.unstubAllGlobals());

  it("shows the live pipeline with its stages, metrics and history", async () => {
    mockApi({
      "/api/pipeline": { body: PIPELINE },
      "/metrics.json": { body: METRICS },
      "/metrics-history.json": { body: [{ sha: "abc1234", jsGzip: 143_000 }] },
    });
    renderAt("/pipeline", "en");

    expect(await screen.findByText(/Last deploy succeeded/, { selector: ".pipeline-status" })).toBeInTheDocument();
    const graph = screen.getByRole("list", { name: "Stages of the latest pipeline" });
    expect(within(graph).getAllByRole("button")).toHaveLength(8);
    expect(within(graph).getByRole("button", { name: /^Lighthouse/ })).toHaveAttribute("data-state", "success");

    fireEvent.click(within(graph).getByRole("button", { name: /^Tests/ }));
    expect(screen.getByRole("heading", { level: 2, name: "Tests" })).toBeInTheDocument();
    expect(screen.getByText("30 of 30 tests passed")).toBeInTheDocument();

    expect(screen.getAllByText("97").length).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: "Add the live pipeline page" })).toHaveAttribute("href", RUN.url);

    fireEvent.click(screen.getByRole("button", { name: "Replay" }));
    expect(screen.getByRole("button", { name: "Replaying…" })).toBeDisabled();
  });

  it("falls back to the deploy metrics when GitHub is unavailable", async () => {
    mockApi({
      "/api/pipeline": { body: { error: "github_unavailable" }, status: 502 },
      "/metrics.json": { body: METRICS },
    });
    renderAt("/pipeline", "en");

    expect(await screen.findByText("Couldn't load the live status from GitHub")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Metrics of the current deploy" })).toBeInTheDocument();
    expect(screen.getByText("No deploys recorded yet.")).toBeInTheDocument();
  });

  it("links the site's own project to the live pipeline", () => {
    renderAt("/projects/chjuca-dev", "en");

    expect(screen.getByRole("heading", { level: 1, name: "chjuca.dev · Live CI/CD" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "See the live pipeline" })).toHaveAttribute("href", "/pipeline");
  });

  it("renders the home page in Spanish", () => {
    renderAt("/");

    expect(screen.getByRole("heading", { level: 1, name: "Hola, soy Carlos" })).toBeInTheDocument();
    expect(screen.getByText("5.000 → 900 ms")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Descargar CV" })).toHaveAttribute(
      "href",
      "/cv/Carlos-Juca-Fullstack-ES.pdf",
    );
    expect(document.title).toBe("Carlos Juca — Fullstack Engineer");
    expect(document.documentElement.lang).toBe("es");
  });

  it("navigates between pages from the main menu", async () => {
    const router = renderAt("/");
    const nav = screen.getByRole("navigation", { name: "Navegación principal" });

    fireEvent.click(within(nav).getByRole("link", { name: "Experiencia" }));

    expect(await screen.findByRole("heading", { level: 1, name: "Dónde he trabajado" })).toBeInTheDocument();
    expect(router.state.location.pathname).toBe("/experience");
    expect(within(nav).getByRole("link", { name: "Experiencia" })).toHaveAttribute("aria-current", "page");
    expect(document.title).toBe("Experiencia — Carlos Juca");
  });

  it("shows a job detail page with its tasks, stack and neighbours", () => {
    renderAt("/experience/mapvx");

    expect(screen.getByRole("heading", { level: 1, name: "Fullstack Developer" })).toBeInTheDocument();
    expect(screen.getByText("reduciendo el tiempo de respuesta de 5.000 ms a 900 ms").tagName).toBe("STRONG");
    expect(screen.getByText("Kubernetes")).toBeInTheDocument();
    const pager = screen.getByRole("navigation", { name: "Anterior y siguiente" });
    expect(within(pager).getByRole("link", { name: /ExmerDev/ })).toHaveAttribute("href", "/experience/exmerdev");
  });

  it("marks projects without a public link as private", () => {
    renderAt("/projects", "en");

    expect(screen.getAllByText("Private project · no public demo")).toHaveLength(2);
    expect(screen.getAllByText("Live site")).toHaveLength(2);
    expect(screen.getByRole("link", { name: "LIV" })).toHaveAttribute("href", "/projects/liv");
  });

  it("shows a project detail page", () => {
    renderAt("/projects/liv", "en");

    expect(screen.getByRole("heading", { level: 1, name: "LIV" })).toBeInTheDocument();
    for (const tech of ["Angular", "Express", "PostgreSQL"]) {
      expect(screen.getByText(tech)).toBeInTheDocument();
    }
    expect(screen.getAllByText("Private project · no public demo").length).toBeGreaterThan(0);
  });

  it("renders the not-found page for unknown paths and slugs", () => {
    renderAt("/projects/does-not-exist", "en");
    expect(screen.getByRole("heading", { level: 1, name: "This page doesn't exist" })).toBeInTheDocument();
  });

  it("switches language and remembers the choice", () => {
    renderAt("/about");

    expect(screen.getByRole("button", { name: "Español" })).toHaveAttribute("aria-pressed", "true");
    fireEvent.click(screen.getByRole("button", { name: "English" }));

    expect(screen.getByRole("heading", { level: 1, name: "Who I am, in a few lines" })).toBeInTheDocument();
    expect(document.documentElement.lang).toBe("en");
    expect(localStorage.getItem("lang")).toBe("en");
  });

  it("uses the ?lang= query parameter over the saved language", () => {
    window.history.replaceState(null, "", "/?lang=en");
    renderAt("/", "es");

    expect(screen.getByRole("heading", { level: 1, name: "Hi, I'm Carlos" })).toBeInTheDocument();
  });

  it("starts in dark mode and toggles to light", () => {
    renderAt("/", "en");

    fireEvent.click(screen.getByRole("button", { name: "Switch to light mode" }));

    expect(document.documentElement.dataset.theme).toBe("light");
    expect(localStorage.getItem("theme")).toBe("light");
    expect(screen.getByRole("button", { name: "Switch to dark mode" })).toBeInTheDocument();
  });

  it("mirrors the contact form in the code preview", () => {
    renderAt("/contact", "en");

    fireEvent.change(screen.getByLabelText("Your name"), { target: { value: "Ada Lovelace" } });

    const preview = screen.getByText("new-message.js").closest(".code-card");
    expect(within(preview).getByText('"Ada Lovelace"')).toBeInTheDocument();
  });

  it("opens and closes the mobile menu", async () => {
    renderAt("/", "en");

    const menuButton = screen.getByRole("button", { name: "Open menu" });
    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute("aria-expanded", "true");

    const nav = screen.getByRole("navigation", { name: "Main navigation" });
    fireEvent.click(within(nav).getByRole("link", { name: "Projects" }));

    expect(await screen.findByRole("heading", { level: 1, name: "My projects" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Open menu" })).toHaveAttribute("aria-expanded", "false");
  });
});
