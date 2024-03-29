// Problem 5


// Create a simple polyfill for the Array.includes method by the name of customIncludes

customIncludes = Array.includes;
Array.prototype.customIncludes = null;

if (!Array.prototype.customIncludes) {
    Array.prototype.customIncludes = function(element) 
    {
        for (let i = 0; i < this.length; i++) 
        {
            if (this[i] === element) 
            {
                return true;
            }
        }
        return false;
    };
}
const arr = [2,8,5,9];
console.log(arr.customIncludes(5));
