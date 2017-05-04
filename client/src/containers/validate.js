export const loginValidate = values => {
  const errors = {}
  if(!values.email) {
    errors.email = 'Required field'
  }
  console.log(errors);
  return errors
}
