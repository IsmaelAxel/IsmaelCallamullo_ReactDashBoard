export const validate = values => {
    const errors = {};
    if (!values.title) {
      errors.title = 'Te falta el titulo capo';
    } else if (values.title.length < 3) {
      errors.title = 'minimo 3 caracteres';
    }
    if (!values.rating) {
      errors.rating = 'La peor pelicula de todas?';
    }
    
    if (!values.awards) {
      errors.awards = 'Ningún premio capo?';
    } 
  
    if (!values.length) {
        errors.length = 'Ningún premio capo?';
      } 
    
    
    if (!values.release_date) {
        errors.release_date = 'Nunca existió? xD';
      }
    if (!values.genre_id) {
        errors.genre_id = 'No tiene genero xd?';
      }
  
    return errors;
  };