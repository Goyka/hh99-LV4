export const validateUserId = (value) => {
  const regex = /^[a-z0-9]{8,12}$/;
  return regex.test(value);
};

export const validatePassword = (value) => {
  const regex = /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/;
  return regex.test(value);
};
