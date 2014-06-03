var HashMap = function(){
    this._map = {};
};
HashMap.prototype = (function(){
    return {
       /***
        * Associates the specified value with the specified key in this map. If the map previously contained a mapping
        * for the key, the old value is replaced.
        *
        * @param key - key with which the specified value is to be associated
        * @param value - value to be associated with the specified key
        * @returns {Object} the previous value associated with key.
        */
        put : function(key, value){
            return this._map[key] = value;
        },
        /***
         * Returns the value to which the specified key is mapped, or undefined if this map contains no mapping for the
         * key.
         *
         * @param key - the key whose associated value is to be returned.
         * @returns {Object} the value to which the specified key is mapped, or undefined if this map contains no mapping for the
         * key.
         */
        get: function(key){
            if(this._map.hasOwnProperty(key)){
                return this._map[key];
            }
        },
        /**
         * Returns a shallow copy of this HashMap instance: the keys and values themselves are not cloned.
         *
         * @returns {HashMap} a shallow copy of this map
         */
        clone : function(){
            return new HashMap(this);
        },
        /**
         * Removes the mapping for the specified key from this map if present.
         *
         * @param key
         * @returns {Object} the previous value associated with key, or undefined if there was no mapping for key.
         */
        remove : function(key){
            var value = this._map[key];
            delete this._map[key];
            return value;
        },
        /**
         * Returns the number of key-value mappings in this map.
         *
         * @returns {int} the number of key-value mappings in this map.
         */
        size : function(){
            return Object.keys(this._map).length; // Temp as ECMAScript 5
        }

    }
}());
