class Formatter {
  //add static methods here
  static titleize(str) {
    str = str.split(' ').map(word => {
      let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
      if(!exceptions.includes(word)){
        return Formatter.capitalize(word);
      }
      else {
        return word;
      }
    }).join(' ');
    return Formatter.capitalize(str);
  }

  static capitalize(str) {
    // str.split(' ').map(word => Formatter.titleize(word)).join(' ');
    return [str.charAt(0).toUpperCase(),...str.slice(1)].join('');
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9 '-]/g,'')
  }

}
