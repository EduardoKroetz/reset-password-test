
export function validateEmail(email: string) {
  let error = ""

  // Validação do e-mail
  if (!email) {
    error = 'O e-mail é obrigatório';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    error = 'Formato de e-mail inválido';
  }

  return error
};

export function validatePassword(password: string)
{
  let error = ""

  // Validação da senha
  if (!password) {
    error = 'A senha é obrigatória';
  } else if (password.length < 8 || password.length > 32) {
    error = 'A senha deve ter entre 8 e 32 caracteres';
  } else if (!/[A-Z]/.test(password)) {
    error = 'A senha deve conter pelo menos uma letra maiúscula';
  } else if (!/[a-z]/.test(password)) {
    error = 'A senha deve conter pelo menos uma letra minúscula';
  } else if (!/[0-9]/.test(password)) {
    error = 'A senha deve conter pelo menos um número';
  } else if (!/[!@#$%^&*]/.test(password)) {
    error = 'A senha deve conter pelo menos um caractere especial';
  }

  return error;
}