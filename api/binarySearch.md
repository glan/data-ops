<a name="module_binarySearch"></a>
#binarySearch
<a name="module_binarySearch..binarySearch"></a>
##binarySearch~binarySearch(subject, value, startIndex, endIndex)
Perform a binary search on a presorted array.

**Params**

- subject `Array` - Array of Numbers  
- value `Number` - to search for  
- startIndex `Number` - the index to start searching from (optional)  
- endIndex `Number` - the index to end search on (optional)  

**Scope**: inner function of [binarySearch](#module_binarySearch)  
**Returns**: `Number` | `undefined` - the index of the value or `undefined` if not found  
**Example**  
```js
var index = binarySearch([1,3,7,10], 7);
```
> 2

