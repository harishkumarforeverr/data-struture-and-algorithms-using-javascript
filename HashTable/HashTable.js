class DSAHashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  //  insert
  insert(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
   get(key){
    const index = this._hash(key);
    if (!this.keyMap[index])  return undefined; 
    return this.keyMap[index].find(([k])=>k==key) 
   }
   keyOrValues(sign="key"){ 
    const keyArr=[]; 
    for(let i=0;i<this.keyMap.length;i++){
      this.keyMap[i]&&this.keyMap[i].forEach(([key,value])=>sign==="key"? keyArr.push(key):keyArr.push(value))
    }
    return keyArr;
   }
  //  values
  //  keys
}
// @ts-ignore
let ht = new DSAHashTable(17);
ht.insert("maroon", "#800000");
ht.insert("yellow", "#FFFF00");
ht.insert("olive", "#808000");
ht.insert("salmon", "#FA8072");
ht.insert("lightcoral", "#F08080");
ht.insert("mediumvioletred", "#C71585");
ht.insert("plum", "#DDA0DD");
ht.insert("purple", "#DDA0DD");
ht.insert("violet", "#DDA0DD"); 
console.log(ht.keyOrValues("values"))
console.log(ht.keyOrValues())



console.log("hthththt",ht.keyMap)
