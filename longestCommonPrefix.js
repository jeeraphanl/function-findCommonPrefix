/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
    if (strs.length === 0 || strs.length > 200) return "";
  
    let shortest = strs.reduce((min, current) => (current.length < min.length ? current : min), strs[0]);
    let prefix = "";
    
    for (let i = 0; i < shortest.length; i++) {
      let char = shortest[i];
      for (let j = 1; j < strs.length; j++) {
        if (strs[j].length > 200) return prefix;
        if (strs[j][i] !== char) return prefix;
      }
      prefix += char;
    }
    return prefix;
  }

module.exports = longestCommonPrefix;
