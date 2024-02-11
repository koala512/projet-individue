// FormWithValidation.js
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useSnackbar } from "notistack";
import * as ValidationFunctions from "../../Utils/ValidationFunctions";

// Définition du composant Form
const Form = () => {
    // Utilisation du hook useSnackbar pour les notifications
    const { enqueueSnackbar } = useSnackbar();
  
    // Définition du state local pour les données du formulaire et les erreurs
    const [formState, setFormState] = useState({
      name: "",
      firstName: "",
      email: "",
      dateOfBirth: "",
      city: "",
      postalCode: "",
    });
    const [formErrors, setFormErrors] = useState({});
  
    // Fonction de gestion des changements de saisie dans les champs du formulaire
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormState({ ...formState, [name]: value });
      setFormErrors({ ...formErrors, [name]: "" }); // Réinitialisation de l'erreur lorsque l'utilisateur commence à corriger le champ
    };
  
    // Fonction de gestion de la soumission du formulaire
    const handleSubmit = (e) => {
      e.preventDefault(); // Empêche la soumission par défaut du formulaire
  
      let errors = {}; // Initialisation d'un objet pour stocker les erreurs
      let isValid = true; // Initialisation d'un indicateur pour vérifier la validité du formulaire
  
      // Validation des données saisies dans chaque champ du formulaire
      if (!ValidationFunctions.isEmailValid(formState.email)) {
        errors.email = "Invalid email"; // Stockage de l'erreur si l'email est invalide
        isValid = false; // Définition de isValid à false car une erreur a été trouvée
      }
      if (!ValidationFunctions.isNameValid(formState.name)) {
        errors.name = "Invalid name";
        isValid = false;
      }
      if (!ValidationFunctions.isNameValid(formState.firstName)) {
        errors.firstName = "Invalid first name";
        isValid = false;
      }
      if (!ValidationFunctions.isNameValid(formState.city)) {
        errors.city = "Invalid city";
        isValid = false;
      }
      if (!ValidationFunctions.isPostalCodeValid(formState.postalCode)) {
        errors.postalCode = "Invalid postal code";
        isValid = false;
      }
      if (!ValidationFunctions.isAgeOver18(formState.dateOfBirth)) {
        errors.dateOfBirth = "You must be over 18 years old";
        isValid = false;
      }
  
      setFormErrors(errors);
  
      if (isValid) {
        localStorage.setItem("userData", JSON.stringify(formState));
        enqueueSnackbar("Registration successful", { variant: "success" });
        setFormState({
          name: "",
          firstName: "",
          email: "",
          dateOfBirth: "",
          city: "",
          postalCode: "",
        });
      } else {
        enqueueSnackbar("There are errors in the form", { variant: "error" });
      }
    };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxWidth: "500px",
        margin: "auto",
        marginTop: "40px",
      }}
    >
      <TextField
        label="Name"
        name="name"
        value={formState.name}
        onChange={handleChange}
        error={!!formErrors.name}
        helperText={formErrors.name || ""}
      />
      <TextField
        label="First Name"
        name="firstName"
        value={formState.firstName}
        onChange={handleChange}
        error={!!formErrors.firstName}
        helperText={formErrors.firstName || ""}
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={formState.email}
        onChange={handleChange}
        error={!!formErrors.email}
        helperText={formErrors.email || ""}
      />
      <TextField
        label="Date of Birth"
        name="dateOfBirth"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={formState.dateOfBirth}
        onChange={handleChange}
        error={!!formErrors.dateOfBirth}
        helperText={formErrors.dateOfBirth || ""}
      />
      <TextField
        label="City"
        name="city"
        value={formState.city}
        onChange={handleChange}
        error={!!formErrors.city}
        helperText={formErrors.city || ""}
      />
      <TextField
        label="Postal Code"
        name="postalCode"
        value={formState.postalCode}
        onChange={handleChange}
        error={!!formErrors.postalCode}
        helperText={formErrors.postalCode || ""}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={Object.values(formState).some((v) => v === "")}
      >
        Save
      </Button>
    </form>
  );
};

export default Form;
