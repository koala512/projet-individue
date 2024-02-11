// Fonctions de validation des données

// Vérifie si une adresse e-mail est valide
export const isEmailValid = (email) => /\S+@\S+\.\S+/.test(email);

// Vérifie si un texte (nom, prénom, ville) est valide
export const isNameValid = (text) => /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]+$/.test(text);

// Vérifie si un code postal est valide (composé de 5 chiffres)
export const isPostalCodeValid = (postalCode) => /^[0-9]{5}$/.test(postalCode);

// Fonction pour calculer l'âge à partir de la date de naissance (au format YYYY-MM-DD)
export function calculateAge(dateOfBirth) {
  const dateOfBirthArray = dateOfBirth.split("-");
  const year = dateOfBirthArray[0];
  const month = dateOfBirthArray[1];
  const day = dateOfBirthArray[2];
  const today = new Date();
  const birthDate = new Date(year, month, day);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

// Vérifie si une date est valide (au format YYYY-MM-DD)
export function isDateValid(date) {
  const dateArray = date.split("-");
  const year = dateArray[0];
  const month = dateArray[1];
  const day = dateArray[2];
  const parsedDate = new Date(year, month - 1, day);
  return parsedDate instanceof Date && !isNaN(parsedDate);
}

// Vérifie si l'utilisateur a plus de 18 ans à partir de sa date de naissance
export function isAgeOver18(dateOfBirth) {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  const ageDifference = today.getFullYear() - birthDate.getFullYear();

  if (ageDifference > 18) {
    return true;
  } else if (ageDifference === 18) {
    const todayMonth = today.getMonth();
    const birthMonth = birthDate.getMonth();

    if (todayMonth > birthMonth) {
      return true;
    } else if (todayMonth === birthMonth) {
      const todayDay = today.getDate();
      const birthDay = birthDate.getDate();
      return todayDay >= birthDay;
    }
  }

  return false;
}


