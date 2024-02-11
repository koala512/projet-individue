import React from "react";
import Form from ".";
import { fireEvent, screen, render, waitFor } from "@testing-library/react";

test("La désactivation du bouton si les champs ne sont pas remplis", () => {
  render(<Form />);

  const saveButton = screen.getByRole("button", { name: /save/i });
  expect(saveButton).toBeDisabled();

  // Simuler la saisie d'informations
  fireEvent.change(screen.getByLabelText("Name"), {
    target: { value: "John" },
  });
  fireEvent.change(screen.getByLabelText("First Name"), {
    target: { value: "Doe" },
  });
  fireEvent.change(screen.getByLabelText("Email"), {
    target: { value: "john.doe@example.com" },
  });
  fireEvent.change(screen.getByLabelText("Date of Birth"), {
    target: { value: "2000-01-01" },
  });
  fireEvent.change(screen.getByLabelText("City"), {
    target: { value: "Paris" },
  });
  fireEvent.change(screen.getByLabelText("Postal Code"), {
    target: { value: "75001" },
  });

  // Vérifier que le bouton n'est plus désactivé
  expect(saveButton).not.toBeDisabled();
});


