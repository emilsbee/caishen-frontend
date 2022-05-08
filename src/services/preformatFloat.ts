// Found on StackOverflow: https://stackoverflow.com/a/61020180
export const preformatFloat = (float: string) => {
  if(!float){
     return '';
  };
  
  //Index of first comma
  const posC = float.indexOf(',');

  if(posC === -1){
     //No commas found, treat as float
     return float;
  };

  //Index of first full stop
  const posFS = float.indexOf('.');

  if(posFS === -1){
     //Uses commas and not full stops - swap them (e.g. 1,23 --> 1.23)
     return float.replace(/\,/g, '.');
  };

  //Uses both commas and full stops - ensure correct order and remove 1000s separators
  return ((posC < posFS) ? (float.replace(/\,/g,'')) : (float.replace(/\./g,'').replace(',', '.')));
};
