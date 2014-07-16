/**
 * Jasmine 2.0.0 unit tests
 */

describe("Map.js test suite for the Map's 'clear' method", function() {
  
    it("Is empty after 'clear' has been called.", function() {
        var map = new Map();
        map.put("key1", "value1");
        map.clear();
        expect(map.size()).toBe(0);
    });
  
});

describe("Map.js test suite for the Map's 'containsKey' method", function() {
  
    var map = new Map();
    map.put("key1", "value1");
    
    it("Returns true when the key is within the map.", function() {
        expect(map.containsKey("key1")).toBe(true);
    });
    
    it("Returns false when the key is not within the map.", function() {
        expect(map.containsKey("key2")).toBe(false);
    });
  
});

describe("Map.js test suite for the Map's 'containsValue' method", function() {
  
    var map = new Map();
    map.put("Key1", "value1");
    var arrayOfItems = ['javascript', 'map'];
    map.put("Key2", arrayOfItems);
    
    it("Returns true when the value (String) is within the map.", function() {
        expect(map.containsValue("value1")).toBe(true);
    });
    
    it("Returns true when the value (Array) is within the map.", function() {
        expect(map.containsValue(arrayOfItems)).toBe(true);
    });
    
    it("Returns false when the value (String) is not within the map.", function() {
        expect(map.containsKey("StringValue")).toBe(false);
    });
    
    it("Returns false when the value (Array) is not within the map.", function() {
        expect(map.containsKey(["String", "Value"])).toBe(false);
    });
  
});

describe("Map.js test suite for the Map's 'equals' method", function() {

     it("Return false as the given object is not of type  Map.", function(){
        var fakeMap = [];
        var map = new Map();
        expect(map.equals(fakeMap)).toBe(false);
    });
    
    it("Return false the two maps do not represent the same mappings (Same item different key).", function(){
        var map1 =  new Map();
        var map2 = new Map();
        var item = new Date();
        map1.put("key1", item);
        map2.put("notTheSameKey", item);
        expect(map1.equals(map2)).toBe(false);
    });
    
    it("Return false the two maps do not represent the same mappings (Same key different item).", function(){
        var map1 =  new Map();
        var map2 = new Map();
        map1.put("key1", "value1");
        map2.put("key1", "notTheSameValue");
        expect(map1.equals(map2)).toBe(false);
    });
    
    it("Return true the two maps represent the same mappings.", function(){
        var map1 =  new Map();
        map1.put("key1", new Date());
        var map2 = map1.clone();
        expect(map1.equals(map2)).toBe(true);
    });
  
});

describe("Map.js test suite for the Map's 'get' method", function() {
    
    var map = new Map();
    map.put("key1", "value1");
    
    it("Return undefined when the key value pair are missing from the map.", function(){
        expect(map.get("key2")).toBeUndefined();
    });
    
    it("Returns the value to which the specified key is mapped.", function(){
        expect(map.get("key1")).toBe("value1");
    });
    
});

describe("Map.js test suite for the Map's 'isEmpty' method", function() {
        
    it("Return true when the map is empty (always empty).", function(){
        var map = new Map();
        expect(map.isEmpty()).toBe(true);
    });
    
    it("Return true when the map is empty (empty after cleared).", function(){
        var map = new Map();
        map.put("key1", "value1");
        map.clear();
        expect(map.isEmpty()).toBe(true);
    });
    
    it("Return true when the map is not empty.", function(){
        var map = new Map();
        map.put("key1", "value1");
        expect(map.isEmpty()).toBe(false);
    });
    
});

describe("Map.js test suite for the Map's 'keys' method", function() {
        
    it("Return empty array when no keys are within the map.", function(){
        var map = new Map();
        expect(map.keys()).toEqual([]);
    });
    
    it("Return the keys that are within the map.", function(){
        var map = new Map();
        map.put("key1", "value1");
        map.put("key2", "value2");
        map.put("key3", "value3");
        expect(map.keys().sort()).toEqual(['key3', 'key2', 'key1'].sort());
    });
    
});

describe("Map.js test suite for the Map's 'put' method", function() {
        
    it("the old value for a key value pair is replaced", function(){
        var map = new Map();
        map.put("key1", "oldValue");
        map.put("key1", "newValue");
        expect(map.get("key1")).toBe("newValue");
    });
    
    it("The same value given is returned", function(){
        var map = new Map();
        map.put("key1", "value1");
        expect(map.put("key1", "value1")).toBe("value1");
    });
    
});

describe("Map.js test suite for the Map's 'putAll' method", function() {
        
    it("the values from a given map are put into this map", function(){
        var map1 = new Map();
        map1.put("key1", "value1");
        map1.put("key2", "value2");
        var map2 = new Map();
        map2.put("key3", "value3");
        map2.put("key4", "value4");
        map1.putAll(map2);
        expect( map1.get("key1")).toBe("value1");
        expect( map1.get("key2")).toBe("value2");
        expect( map1.get("key3")).toBe("value3");
        expect( map1.get("key4")).toBe("value4");
    });
    
});

describe("Map.js test suite for the Map's 'clone' method", function() {
        
    it("Returns a shallow copy of this Map instance", function(){ 
        var map1 = new Map();
        map1.put("key1", "value1");
        var map2 = map1.clone();
        expect(map1.equals(map2)).toBe(true);
    });
    
});

describe("Map.js test suite for the Map's 'remove' method", function() {
        
    it("Removes the mapping for the specified key (did exist).", function(){
        var map = new Map();
        map.put("key1", "value1");
        map.remove("key1");
        expect(map.get("key1")).toBeUndefined();
    });
    
    it("Removes the mapping for the specified key (did not exist).", function(){
        var map = new Map();
        map.remove("key1");
        expect(map.get("key1")).toBeUndefined();
    });
    
    it("Returns the previous value associated with key (did exist).", function(){
        var map = new Map();
        map.put("key1", "value1");
        expect(map.remove("key1")).toBe("value1");
    });
    
    it("Returns the previous value associated with key (did not exist).", function(){
        var map = new Map();
        expect(map.remove("key1")).toBeUndefined();
    });
    
});

describe("Map.js test suite for the Map's 'size' method", function() {
        
    it("Returns the correct size (empty).", function(){
        var map = new Map();
        expect(map.size()).toBe(0);
    });
    
     it("Returns the correct size (with items).", function(){
        var map = new Map();
        map.put("key1", "value1");
        map.put("key2", "value2");
        map.put("key3", "value2");
        expect(map.size()).toBe(3);
    });
    
});

describe("Map.js test suite for the Map's 'values' method", function() {
        
    it("Returns an Array view of the values contained in this map.", function(){
        var map = new Map();
        map.put("key1", "value1");
        var date = new Date();
        map.put("key2", date);
        var object = { "some" : "object" };
        map.put("key3", object);
        expect(map.values().sort()).toEqual([object, date, 'value1'].sort());
    });
    
});