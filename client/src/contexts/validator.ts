export const validateFullName = (fullName: string): boolean => {
    const validChars = /^[a-zA-Z\s]+$/.test(fullName);
    const noLeadingTrailing = /^[a-zA-Z][a-zA-Z\s]*[a-zA-Z]$/.test(fullName);
    const noConsecutiveSpaces = !(/[\s]{2,}/.test(fullName));
    const lengthValid = fullName.length >= 1 && fullName.length <= 50;
    return validChars && noLeadingTrailing && noConsecutiveSpaces && lengthValid;
};

export const validateEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

