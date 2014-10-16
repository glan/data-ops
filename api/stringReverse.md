<a name="module_stringReverse"></a>
#stringReverse
**Members**

* [stringReverse](#module_stringReverse)
  * [stringReverse~_codePointAt](#module_stringReverse.._codePointAt)
  * [stringReverse~stringReverse](#module_stringReverse..stringReverse)

<a name="module_stringReverse.._codePointAt"></a>
##stringReverse~_codePointAt
Gets the Unicode char at a given point with in a string,
taking into account surrogate pairs.

**Params**

- str `String` - the string  
- index `Number` - the point to access  

**Scope**: inner member of [stringReverse](#module_stringReverse)  
**Returns**: `Number` - the char code  
**Example**  
```js
var code = stringReverse._codePointAt('abc', 0);
```
> 0x0061

<a name="module_stringReverse..stringReverse"></a>
##stringReverse~stringReverse
Unicode safe string reversal.

**Params**

- str `String` - The string to reverse  

**Scope**: inner member of [stringReverse](#module_stringReverse)  
**Returns**: `String` - reversed string  
**Example**  
```js
var reversedString = stringReverse('abc');
```
> cba

