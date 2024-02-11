import {
  calculateAge,
  isPostalCodeValid,
  isNameValid,
  isEmailValid,
  isAgeOver18,
} from "./ValidationFunctions";

describe("Tests fonctionnels", () => {
  test("Calcul de l'âge", () => {
    const birthDate = "1990-01-01";
    expect(calculateAge(birthDate)).toBe(34); // Adapter l'âge en conséquence
  });

  test("Code postal valide", () => {
    const postalCode = "75000";
    expect(isPostalCodeValid(postalCode)).toBe(true);
  });

  test("Nom valide", () => {
    const name = "Doe";
    expect(isNameValid(name)).toBe(true);

    const name2 = "John";
    expect(isNameValid(name2)).toBe(true);

    const name3 = "John Doe";
    expect(isNameValid(name3)).toBe(true);

    const name4 = "John-Doe";
    expect(isNameValid(name4)).toBe(true);
  });

  test("Email valide", () => {
    const email = "exemple@gmail.com";
    expect(isEmailValid(email)).toBe(true);
  });

  test("Email invalide", () => {
    const email = "xxxxxxx@xxxxx";
    expect(isEmailValid(email)).toBe(false);
  });

  test("Nom invalide", () => {
    const name = "123";
    expect(isNameValid(name)).toBe(false);

    const name2 = "123@doe";
    expect(isNameValid(name2)).toBe(false);

    const name3 = "@66-";
    expect(isNameValid(name3)).toBe(false);

    const name4 = "John Doe@";
    expect(isNameValid(name4)).toBe(false);
  });

  test("Code postal invalide", () => {
    const postalCode = "750000";
    expect(isPostalCodeValid(postalCode)).toBe(false);

    const postalCode2 = "7500";
    expect(isPostalCodeValid(postalCode2)).toBe(false);

    const postalCode3 = "7500a";
    expect(isPostalCodeValid(postalCode3)).toBe(false);

    const postalCode4 = "75000@";
    expect(isPostalCodeValid(postalCode4)).toBe(false);

    const postalCode5 = "75000-";
    expect(isPostalCodeValid(postalCode5)).toBe(false);

    const postalCode6 = "75000-0";
    expect(isPostalCodeValid(postalCode6)).toBe(false);

    const postalCode7 = "AAAAA";
    expect(isPostalCodeValid(postalCode7)).toBe(false);

    const postalCode8 = "abc";
    expect(isPostalCodeValid(postalCode8)).toBe(false);
  });

  test("Retourne true si l'utilisateur a plus de 18 ans", () => {
    // Date de naissance d'un utilisateur ayant plus de 18 ans
    const dateOfBirthOver18 = "1990-01-01";
    expect(isAgeOver18(dateOfBirthOver18)).toBe(true);
  });

  test("Retourne false si l'utilisateur a moins de 18 ans", () => {
    const dateOfBirthUnder18 = "2008-01-01";
    expect(isAgeOver18(dateOfBirthUnder18)).toBe(false);
  });
});
