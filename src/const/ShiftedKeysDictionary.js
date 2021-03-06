/**
 * Dictionary of symbols that correspond to keys when pressed with the shift key
 * also held down. Used for combinations involving the shift key and one or more
 * others. (e.g. shift+1)
 */
const ShiftedKeysDictionary = {
  '`': [ '~' ],
  '1': [ '!' ],
  '2': [ '@', /** UK Keyboard: **/ '"' ],
  '3': [ '#', /** UK Keyboard: **/ '£' ],
  '4': [ '$' ],
  '5': [ '%' ],
  '6': [ '^' ],
  '7': [ '&' ],
  '8': [ '*' ],
  '9': [ '(' ],
  '0': [ ')' ],
  '-': [ '_' ],
  '=': [ 'plus' ],
  ';': [ ':' ],
  "'": [ '"', /** UK Keyboard: **/ '@' ],
  ',': [ '<' ],
  '.': [ '>' ],
  '/': [ '?' ],
  '\\':[  '|' ],
  '[': [ '{' ],
  ']': [ '}' ],

  /**
   * UK Keyboard:
   */
  '#': [ '~' ],
};

export default ShiftedKeysDictionary;
