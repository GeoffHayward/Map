var Map = function(){
    this._map = {};
};
Map.prototype = (function(){
    return {
        
        /**
         * Removes all of the mappings from this map. The map will be empty after 
         * this call returns.
         */
        clear : function(){
            // to do.
        },
        
        /**
         * Returns true if this map contains a mapping for the specified key. 
         * 
         * @param {String} key
         * @returns {Boolean}
         */
        containsKey : function(key){
            // to do.
        },
        
        /**
         * Returns true if this map maps one or more keys to the specified value. 
         *          
         * @param {Object} value           
         * @returns {Boolean}
         */
        containsValue : function(value){
            // to do.
        },
        
        
        /**
         * Compares the specified object with this map for equality. Returns 
         * true if the given object is also a map and the two maps represent the 
         * same mappings.
         * 
         * @returns {Boolean}
         */
        equals : function(){
            //to do
        },
        
        /***
         * Returns the value to which the specified key is mapped, or undefined 
         * if this map contains no mapping for the key.
         *
         * @param key - the key whose associated value is to be returned.
         * @returns {Object} the value to which the specified key is mapped, or 
         * undefined if this map contains no mapping for the key.
         */
        get: function(key){
            if(this._map.hasOwnProperty(key)){
                return this._map[key];
            }
        },
        
        /**
         * Returns the hash code value for this map. The hash code of a map is 
         * defined [To be defined]
         * 
         * @returns {String}
         */
        hashCode : function(){
            // to do.
        },
        
        /**
         * Returns true if this map contains no key-value mappings.
         * 
         * @returns {Boolean}
         */
        isEmpty : function() {
            // to do.
        },
        
        /**
         * Returns an Array of unique values that acts as a set view of the keys 
         * contained in this map. The set is backed by the map, so changes to the 
         * map are reflected in the set, and vice-versa.
         * 
         * @returns {Array}
         */
        keys: function(){
            return Object.keys(this._map);
        },
        
        
       /***
        * Associates the specified value with the specified key in this map. If 
        * the map previously contained a mapping for the key, the old value is 
        * replaced.
        *
        * @param key - key with which the specified value is to be associated
        * @param value - value to be associated with the specified key
        * @returns {Object} the previous value associated with key.
        */
        put : function(key, value){
            return this._map[key] = value;
        },
        
        /**
         * Copies all of the mappings from the specified map to this map. The 
         * effect of this call is equivalent to that of calling put(k, v) on this 
         * map once for each mapping from key k to value v in the specified map. 
         * The behavior of this operation is undefined if the specified map is 
         * modified while the operation is in progress.
         * 
         * @param {Map} mappings to be stored in this Map
         */
        putAll : function(map){
            //this._map = set;  Need to check spec.
            // to do.
        },
        
        /**
         * Returns a shallow copy of this Map instance: the keys and values 
         * themselves are not cloned.
         *
         * @returns {Map} a shallow copy of this map
         */
        clone : function(){
            var clone = new Map();
            for (var item in this._map){
                clone._map[item] = this._map[item];
            }
            return clone;
        },
        /**
         * Removes the mapping for the specified key from this map if present.
         *
         * @param key
         * @returns {Object} the previous value associated with key, or undefined 
         * if there was no mapping for key.
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
        },
        
        /**
         * Returns an Array view of the values contained in this map. The 
         * collection is backed by the map, so changes to the map are reflected 
         * in the collection, and vice-versa. 
         * 
         * @returns {undefined}
         */
        values : function(){
            // to do.
        } 
    };
}());
