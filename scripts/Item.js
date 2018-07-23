/* global $, cuid */


const Item = (function(){
  
  const validateName = name => {
    try {
      throw new TypeError(name);
    } catch(e) {
      return `${e.name} does not exist.`;
    }
  };

  const create = name => {
    return {
      id: cuid(),
      name: name,
      checked: false
    };
  };

  return {
    validateName: validateName,
    create: create
  }

}()
);