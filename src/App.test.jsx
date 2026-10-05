import { fireEvent, render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    localStorage.clear();
    delete document.documentElement.dataset.theme;
    window.history.replaceState(null, "", "/");
  });

  it("renders the CV content in Spanish", () => {
    localStorage.setItem("lang", "es");
    render(<App />);

    expect(screen.getByRole("heading", { level: 1, name: "Hola, soy Carlos" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Dónde he trabajado" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: /MapVX \(Lazarillo\)/ })).toBeInTheDocument();
    expect(screen.getByText("reduciendo el tiempo de respuesta de 5.000 ms a 900 ms").tagName).toBe("STRONG");
    expect(screen.getByRole("link", { name: "Descargar CV" })).toHaveAttribute(
      "href",
      "/cv/Carlos-Juca-Fullstack-ES.pdf",
    );
    expect(document.documentElement.lang).toBe("es");
  });

  it("switches language and remembers the choice", () => {
    localStorage.setItem("lang", "es");
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Cambiar el sitio a inglés" }));

    expect(screen.getByRole("heading", { level: 2, name: "Where I've worked" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Download CV" })).toHaveAttribute(
      "href",
      "/cv/Carlos-Juca-Fullstack-EN.pdf",
    );
    expect(document.documentElement.lang).toBe("en");
    expect(localStorage.getItem("lang")).toBe("en");
  });

  it("uses the ?lang= query parameter over the saved language", () => {
    localStorage.setItem("lang", "es");
    window.history.replaceState(null, "", "/?lang=en");
    render(<App />);

    expect(screen.getByRole("heading", { level: 1, name: "Hi, I'm Carlos" })).toBeInTheDocument();
  });

  it("starts in dark mode and toggles to light", () => {
    localStorage.setItem("lang", "en");
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Switch to light mode" }));

    expect(document.documentElement.dataset.theme).toBe("light");
    expect(localStorage.getItem("theme")).toBe("light");
    expect(screen.getByRole("button", { name: "Switch to dark mode" })).toBeInTheDocument();
  });

  it("mirrors the contact form in the code preview", () => {
    localStorage.setItem("lang", "en");
    render(<App />);

    fireEvent.change(screen.getByLabelText("Your name"), { target: { value: "Ada Lovelace" } });

    const preview = screen.getByText("new-message.js").closest(".code-card");
    expect(within(preview).getByText('"Ada Lovelace"')).toBeInTheDocument();
  });

  it("opens and closes the mobile menu", () => {
    localStorage.setItem("lang", "en");
    render(<App />);

    const menuButton = screen.getByRole("button", { name: "Open menu" });
    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute("aria-expanded", "true");

    fireEvent.click(screen.getByRole("link", { name: "Skills" }));
    expect(screen.getByRole("button", { name: "Open menu" })).toHaveAttribute("aria-expanded", "false");
  });
});
