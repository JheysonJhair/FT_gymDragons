export const dniRegex = /^[0-9]{8}$/; 
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
export const phoneRegex = /^9\d{8}$/; 

export const validateRequiredField = (value: string | undefined): string | null => {
  return value ? null : "Este campo es requerido.";
};

export const validateDNI = (value: string | undefined): string | null => {
    return value && !dniRegex.test(value) ? "Por favor ingrese un DNI válido (8 dígitos numéricos)." : null;
  };

export const validateEmail = (value: string | undefined): string | null => {
  return value && !emailRegex.test(value) ? "Por favor ingrese un correo electrónico válido." : null;
};

export const validatePhoneNumber = (value: string | undefined): string | null => {
  return value && !phoneRegex.test(value) ? "Por favor ingrese un número de teléfono válido (09 dígitos numéricos)." : null;
};
