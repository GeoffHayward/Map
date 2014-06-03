var HashMap = function(){
    this._map = {};
};
Hash.prototype = (function(){
    return {
       /***
        * Associates the specified value with the specified key in this map. If the map previously contained a mapping
        * for the key, the old value is replaced.
        *
        * @param key - key with which the specified value is to be associated
        * @param value - value to be associated with the specified key
        * @returns The previous value associated with key.
        */
        put : function(key, value){
            return this._map[key] = value;
        },
        /***
         * Returns the value to which the specified key is mapped, or undefined if this map contains no mapping for the
         * key.
         *
         * @param key - the key whose associated value is to be returned.
         * @returns The value to which the specified key is mapped, or undefined if this map contains no mapping for the
         * key.
         */
        get: function(key){
            if(this._map.hasOwnProperty(key)){
                return this._map[key];
            }
        }
    }
}());