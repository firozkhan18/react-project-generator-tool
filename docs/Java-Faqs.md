
To generate all permutations of a string (e.g., "ABC") using Java's Stream API, you can utilize the `Stream` and `Collectors` to create a more functional approach. While Java's Stream API does not have a direct method to generate permutations, we can create a recursive solution that generates permutations and then use the Stream API to process them.

Here's how you can generate all permutations of a string like "ABC" using Java Stream API:

### Steps:
1. **Create a function** to generate all permutations of a string.
2. Use **Streams** to collect the permutations.
3. You can use `flatMap` to flatten the list of permutations and generate the results.

### Solution

```java
import java.util.*;
import java.util.stream.*;

public class StringPermutations {

    // Method to generate permutations of a string
    public static List<String> getPermutations(String str) {
        if (str == null || str.length() == 0) {
            return Collections.emptyList();  // No permutations for empty string
        }
        
        return generatePermutations("", str);
    }

    // Recursive method to generate permutations
    private static List<String> generatePermutations(String prefix, String remaining) {
        if (remaining.length() == 0) {
            return Collections.singletonList(prefix);  // Return a single-element list
        }
        
        return IntStream.range(0, remaining.length())
                .mapToObj(i -> generatePermutations(prefix + remaining.charAt(i),
                        remaining.substring(0, i) + remaining.substring(i + 1)))
                .flatMap(List::stream)  // Flatten the stream of lists
                .collect(Collectors.toList());
    }

    public static void main(String[] args) {
        String input = "ABC";
        
        // Get all permutations using the Stream API
        List<String> permutations = getPermutations(input);
        
        // Print the permutations
        permutations.forEach(System.out::println);
    }
}
```

### Explanation of the Code:
1. **`getPermutations(String str)`**:
   - This method starts the process and calls a helper method `generatePermutations`.
   - If the input string is empty or `null`, it returns an empty list.

2. **`generatePermutations(String prefix, String remaining)`**:
   - This is a recursive method that generates permutations.
   - It concatenates each character of the string (from the `remaining` string) with the `prefix` string, recursively generating permutations.
   - Once the `remaining` string is empty, it returns a list containing the current `prefix`.

3. **Using `IntStream.range(0, remaining.length())`**:
   - This creates an index stream from `0` to the length of the `remaining` string.
   - For each index, a recursive call is made with the updated `prefix` and the shortened `remaining` string.
   
4. **`flatMap(List::stream)`**:
   - This flattens the stream of lists of permutations into a single stream.

5. **Collecting the results**:
   - The stream of permutations is collected into a list using `Collectors.toList()`.

### Output:
For the input `"ABC"`, the output will be:
```
ABC
ACB
BAC
BCA
CAB
CBA
```

### Notes:
- The recursive approach explores all possible positions for each character and generates permutations by swapping characters.
- The use of **Streams** here is for functional style processing and to handle the recursive list of permutations.

### Performance Considerations:
- This approach is efficient in terms of generating permutations but could still become computationally expensive for large strings due to the factorial complexity (`O(n!)`) involved in generating permutations.
---
## in-memory cache using a `ConcurrentHashMap` 

An in-memory cache using a `ConcurrentHashMap` can be a simple and effective way to store data that can be shared across threads in a multithreaded environment. The `ConcurrentHashMap` ensures thread-safety when performing operations such as inserting, updating, and retrieving data concurrently.

Here’s an example of how to implement a basic in-memory cache using `ConcurrentHashMap` in Java:

### Steps to Implement an In-Memory Cache using `ConcurrentHashMap`

1. **Create a Cache Class**:
   You’ll create a class that uses a `ConcurrentHashMap` to store the cache data.

2. **Basic Operations**:
   Implement basic cache operations like `get`, `put`, and `remove` to interact with the cache.

3. **Optional Enhancements**:
   You can add additional features like cache expiration, size limits, or background cleanup, but for now, we’ll keep it simple.

### Example: Basic In-Memory Cache Using `ConcurrentHashMap`

```java
import java.util.concurrent.*;

public class InMemoryCache<K, V> {

    // The underlying concurrent hash map to store cache
    private final ConcurrentHashMap<K, V> cache;

    public InMemoryCache() {
        // Initialize the cache with a default concurrency level
        cache = new ConcurrentHashMap<>();
    }

    // Put an item in the cache
    public void put(K key, V value) {
        cache.put(key, value);
    }

    // Get an item from the cache
    public V get(K key) {
        return cache.get(key);
    }

    // Remove an item from the cache
    public void remove(K key) {
        cache.remove(key);
    }

    // Check if the cache contains the key
    public boolean containsKey(K key) {
        return cache.containsKey(key);
    }

    // Get the size of the cache
    public int size() {
        return cache.size();
    }

    // Clear the cache
    public void clear() {
        cache.clear();
    }

    public static void main(String[] args) {
        // Example usage
        InMemoryCache<String, String> cache = new InMemoryCache<>();
        
        // Adding items to the cache
        cache.put("key1", "value1");
        cache.put("key2", "value2");

        // Retrieving an item from the cache
        System.out.println("Cache contains key1: " + cache.get("key1"));

        // Removing an item from the cache
        cache.remove("key1");
        System.out.println("Cache contains key1: " + cache.get("key1"));

        // Checking the cache size
        System.out.println("Cache size: " + cache.size());

        // Clearing the cache
        cache.clear();
        System.out.println("Cache size after clearing: " + cache.size());
    }
}
```

### Explanation:

1. **Cache Structure**:
   The `ConcurrentHashMap<K, V>` is the underlying data structure that stores the cache. It's thread-safe and allows multiple threads to read and write to it concurrently without risking data corruption.

2. **Basic Operations**:
   - `put(K key, V value)`: Inserts a new key-value pair into the cache.
   - `get(K key)`: Retrieves the value associated with the key.
   - `remove(K key)`: Removes the entry associated with the key.
   - `containsKey(K key)`: Checks if a particular key exists in the cache.
   - `size()`: Returns the number of entries currently stored in the cache.
   - `clear()`: Removes all entries from the cache.

3. **Thread Safety**:
   The `ConcurrentHashMap` ensures thread safety for all operations. This means multiple threads can safely add, retrieve, or remove items from the cache without needing explicit synchronization.

### Optional Enhancements

1. **Cache Expiration**: You could add cache expiration by associating a timestamp with each entry and removing items after a certain period.

2. **Maximum Size**: To limit memory usage, you can add a maximum size for the cache and evict old entries (like using an LRU (Least Recently Used) strategy).

3. **Lazy Loading**: You can combine the cache with lazy loading patterns, where data is only fetched or calculated when it is needed and not already cached.

4. **Background Cleanup**: You could periodically run a background task to clean up expired cache entries if you're implementing cache expiration.

Here's a **simple expiration strategy** example where we set a TTL (Time-to-Live) for cache entries:

```java
import java.util.concurrent.*;
import java.util.*;

public class ExpiringCache<K, V> {
    private final ConcurrentHashMap<K, CacheEntry> cache;
    private final long ttlInMillis;

    // Cache entry with a timestamp
    private class CacheEntry {
        V value;
        long timestamp;

        CacheEntry(V value) {
            this.value = value;
            this.timestamp = System.currentTimeMillis();
        }
    }

    public ExpiringCache(long ttlInMillis) {
        this.cache = new ConcurrentHashMap<>();
        this.ttlInMillis = ttlInMillis;
    }

    // Put item with TTL in the cache
    public void put(K key, V value) {
        cache.put(key, new CacheEntry(value));
    }

    // Get item from the cache with TTL check
    public V get(K key) {
        CacheEntry entry = cache.get(key);
        if (entry != null && (System.currentTimeMillis() - entry.timestamp) < ttlInMillis) {
            return entry.value; // Valid cache entry
        } else {
            cache.remove(key); // Remove expired entry
            return null;
        }
    }

    // Remove item from the cache
    public void remove(K key) {
        cache.remove(key);
    }

    // Check if the cache contains a valid key
    public boolean containsKey(K key) {
        return cache.containsKey(key);
    }

    public static void main(String[] args) {
        ExpiringCache<String, String> cache = new ExpiringCache<>(5000); // TTL = 5 seconds
        
        cache.put("key1", "value1");
        
        // Retrieve value within TTL
        System.out.println(cache.get("key1")); // Should print "value1"
        
        try {
            Thread.sleep(6000); // Wait for 6 seconds (TTL has passed)
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }

        // Try retrieving value after TTL expiration
        System.out.println(cache.get("key1")); // Should print null (expired)
    }
}
```

### Key Features of the Enhanced Cache:
- **TTL**: Each entry has a time-to-live (TTL), and it will be removed from the cache after the specified time.
- **Expiration Logic**: When an expired entry is accessed, it’s removed from the cache automatically.

This gives a basic structure to build a more robust, thread-safe, and efficient in-memory cache in Java using `ConcurrentHashMap`.

## Immutable class in Java

In Java, an **immutable class** is a class whose objects cannot be modified after they are created. Once an object is instantiated, its state (i.e., its fields) cannot be changed. Immutable classes are often used in situations where thread-safety and security are important, because they can be safely shared between multiple threads without synchronization.

### Key Characteristics of an Immutable Class:

1. **Final class**: The class itself should be declared as `final` to prevent subclassing, which could potentially modify the behavior.
2. **Final fields**: All fields in the class should be declared `final` to ensure they are assigned only once.
3. **No setter methods**: Immutable objects should not have setter methods that modify fields.
4. **Proper constructor**: The constructor should initialize all fields, ensuring the object's state is fully defined upon creation.
5. **Deep copies**: If the class holds mutable objects (e.g., arrays or collections), ensure that these objects are not directly exposed and that deep copies of these objects are made when necessary.

### Example of an Immutable Class in Java

Here is an example of an immutable class in Java:

```java
import java.util.Date;

public final class Person {

    private final String name;
    private final int age;
    private final Date birthDate;  // Date is mutable, so we need to handle it carefully

    // Constructor to initialize the immutable fields
    public Person(String name, int age, Date birthDate) {
        this.name = name;
        this.age = age;
        // Create a new Date object to ensure immutability
        this.birthDate = new Date(birthDate.getTime());
    }

    // Getter methods (no setters, so the state is immutable)
    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public Date getBirthDate() {
        // Return a defensive copy of birthDate to preserve immutability
        return new Date(birthDate.getTime());
    }

    public static void main(String[] args) {
        Date birthDate = new Date();
        Person person = new Person("John Doe", 30, birthDate);

        // Accessing fields via getter methods
        System.out.println("Name: " + person.getName());
        System.out.println("Age: " + person.getAge());
        System.out.println("Birth Date: " + person.getBirthDate());

        // If you try to modify the internal state, it will not be allowed
        // person.name = "Jane Doe"; // Compile-time error
    }
}
```

### Key Points in the Example:

1. **Class is `final`**: The class is declared as `final` so it cannot be subclassed. This is important for maintaining immutability.
2. **Final fields**: All fields (`name`, `age`, and `birthDate`) are `final` and can only be assigned once, typically in the constructor.
3. **Constructor**: The constructor initializes the fields, ensuring that the object's state is set when it's created.
4. **No setters**: There are no setter methods, ensuring the fields cannot be modified after the object is created.
5. **Defensive Copy**: Since `Date` is mutable, we create a **defensive copy** of `birthDate` when passing it into the constructor and when returning it from the `getBirthDate()` method. This ensures that the original `Date` object cannot be modified from outside the class.

### Why Use Immutable Classes?

- **Thread Safety**: Immutable objects can be shared between threads without synchronization because their state cannot change once they are created.
- **Security**: Immutable objects cannot be altered by malicious code, which makes them useful in situations where security is important.
- **Hashing Consistency**: Immutable objects are safe to use as keys in hash-based collections like `HashMap`, `HashSet`, etc., because their hash code cannot change once they are created.

### Using Reflection with Immutable Classes

In some situations, you might want to modify the fields of an immutable class using reflection, even though you can't directly modify the fields using setters. While reflection can bypass some of Java's access control mechanisms, modifying an immutable class using reflection is not recommended because it goes against the design principles of immutability.

However, to illustrate how reflection can be used to modify the final fields, here's an example:

```java
import java.lang.reflect.Field;
import java.util.Date;

public class ImmutableReflectionExample {
    public static void main(String[] args) throws NoSuchFieldException, IllegalAccessException {
        Date birthDate = new Date();
        Person person = new Person("John Doe", 30, birthDate);

        // Print the original object state
        System.out.println("Before modification:");
        System.out.println("Name: " + person.getName());
        System.out.println("Age: " + person.getAge());
        System.out.println("Birth Date: " + person.getBirthDate());

        // Access the 'name' field using reflection
        Field nameField = Person.class.getDeclaredField("name");
        nameField.setAccessible(true); // Bypass private modifier

        // Modify the 'name' field using reflection
        nameField.set(person, "Jane Doe");

        // Print the modified object state
        System.out.println("After modification:");
        System.out.println("Name: " + person.getName());
        System.out.println("Age: " + person.getAge());
        System.out.println("Birth Date: " + person.getBirthDate());
    }
}
```

### Important Notes:

1. **Reflection Bypasses Access Control**: Reflection allows access to private fields and methods. `setAccessible(true)` is used to modify private fields like `name` in the `Person` class. However, this breaks encapsulation and the principles of immutability.
2. **Not Recommended**: Changing an immutable object's state using reflection is generally not recommended because it defeats the purpose of making the object immutable. In production code, this is considered bad practice and should be avoided.

### Conclusion

An **immutable class** is one whose state cannot be modified once it is created. This is useful for thread safety, security, and maintaining consistency. While reflection can modify immutable objects, it's discouraged because it goes against the intent and benefits of immutability. If you need to mutate objects, it's better to use a mutable class instead of trying to modify immutable ones using reflection.

---

## Singleton class in Java

A **Singleton** class in Java is a class that allows only one instance of itself to be created and provides a global point of access to that instance. The Singleton design pattern ensures that a class has only one instance and provides a way to access that instance.

### Characteristics of a Singleton class:
1. **Private constructor**: The constructor is made private to prevent the creation of instances from outside the class.
2. **Static reference**: A static reference variable is used to hold the unique instance of the class.
3. **Global access point**: A static method provides a way to access the unique instance of the class.

### Implementing Singleton Pattern in Java

#### 1. **Eager Initialization**
In eager initialization, the instance of the class is created at the time of class loading.

```java
public class Singleton {
    // Eagerly created instance
    private static final Singleton instance = new Singleton();

    // Private constructor to prevent instantiation
    private Singleton() {}

    // Public method to provide access to the instance
    public static Singleton getInstance() {
        return instance;
    }
}
```

In this implementation, the instance is created when the class is loaded into memory. This is simple and thread-safe, but it can be inefficient if the instance is never used because it is created at the class loading time.

#### 2. **Lazy Initialization (Thread-Safe)**
In lazy initialization, the instance is created only when it is needed (i.e., when the `getInstance()` method is called).

```java
public class Singleton {
    // Volatile keyword ensures visibility of changes across threads
    private static volatile Singleton instance;

    // Private constructor to prevent instantiation
    private Singleton() {}

    // Thread-safe method to get the instance
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton(); // Create the instance when needed
                }
            }
        }
        return instance;
    }
}
```

Here, we use **double-checked locking** to ensure that the instance is created only once and that subsequent calls to `getInstance()` are fast (without synchronization overhead). The `volatile` keyword ensures that changes to the `instance` variable are visible across all threads.

#### 3. **Bill Pugh Singleton Design (Using Static Inner Class)**

The **Bill Pugh Singleton** implementation is a more efficient way to implement the Singleton pattern. It takes advantage of the **Java class loader mechanism** to ensure that the instance is created only when it is needed.

```java
public class Singleton {
    // Static inner class that holds the Singleton instance
    private static class SingletonHelper {
        // This will be initialized when the class is accessed
        private static final Singleton INSTANCE = new Singleton();
    }

    // Private constructor to prevent instantiation
    private Singleton() {}

    // Public method to provide access to the instance
    public static Singleton getInstance() {
        return SingletonHelper.INSTANCE;
    }
}
```

This implementation is thread-safe, lazy-loaded, and efficient. The instance is created only when the `getInstance()` method is called for the first time, and the class loader ensures that it is done in a thread-safe manner.

---

### How to Break a Singleton Class

In some cases, it is important to understand how a Singleton class might be **broken** (i.e., how multiple instances of the class can be created). This typically happens when **serialization**, **reflection**, or **cloning** is used improperly.

#### 1. **Breaking Singleton Using Reflection**

Reflection allows us to bypass the private constructor and create a new instance of the Singleton class.

```java
import java.lang.reflect.Constructor;

public class SingletonBreak {
    public static void main(String[] args) throws Exception {
        // Using reflection to access the private constructor
        Constructor<Singleton> constructor = Singleton.class.getDeclaredConstructor();
        constructor.setAccessible(true); // Allows access to private constructor

        // Create two instances using reflection
        Singleton instance1 = constructor.newInstance();
        Singleton instance2 = constructor.newInstance();

        // Print the instances
        System.out.println("Instance 1 hashcode: " + instance1.hashCode());
        System.out.println("Instance 2 hashcode: " + instance2.hashCode());
    }
}
```

In the example above, even though the Singleton class has a private constructor, the `getDeclaredConstructor()` method allows us to access and invoke the constructor using reflection, thus creating multiple instances.

#### 2. **Breaking Singleton Using Serialization**

Serialization allows an object to be written to a stream and then deserialized to restore the object. If a Singleton class implements `Serializable` and does not override the `readResolve()` method, multiple instances of the Singleton may be created during deserialization.

```java
import java.io.*;

public class SingletonBreak {
    public static void main(String[] args) throws Exception {
        // Serialize the Singleton instance
        Singleton instance = Singleton.getInstance();
        try (ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("singleton.ser"))) {
            out.writeObject(instance);
        }

        // Deserialize and create a new instance
        Singleton deserializedInstance = null;
        try (ObjectInputStream in = new ObjectInputStream(new FileInputStream("singleton.ser"))) {
            deserializedInstance = (Singleton) in.readObject();
        }

        // Print hashcodes to show that it's a new instance
        System.out.println("Original instance hashcode: " + instance.hashCode());
        System.out.println("Deserialized instance hashcode: " + deserializedInstance.hashCode());
    }
}
```

By default, the deserialization process creates a new instance, thus breaking the Singleton pattern. To prevent this, you can implement the `readResolve()` method to return the existing instance during deserialization:

```java
private Object readResolve() {
    return getInstance();  // Return the existing Singleton instance
}
```

#### 3. **Breaking Singleton Using Cloning**

In Java, if a class implements `Cloneable`, the `clone()` method can be used to create a copy of the object. If the Singleton class does not override the `clone()` method, a new instance can be created via cloning.

```java
public class Singleton implements Cloneable {
    private static final Singleton instance = new Singleton();

    private Singleton() {}

    public static Singleton getInstance() {
        return instance;
    }

    // Override clone() to prevent cloning
    @Override
    public Object clone() throws CloneNotSupportedException {
        throw new CloneNotSupportedException("Cloning not supported.");
    }
}
```

By overriding the `clone()` method and throwing a `CloneNotSupportedException`, we prevent creating new instances of the Singleton via cloning.

---

### Conclusion

The **Singleton pattern** ensures that only one instance of a class is created. You can implement it using eager initialization, lazy initialization with double-checked locking, or the Bill Pugh Singleton Design. However, if the Singleton class is not carefully implemented, it can be broken using techniques like **reflection**, **serialization**, and **cloning**.

To protect a Singleton from being broken, consider:
- Using **reflection** with caution and limiting access to the constructor.
- Implementing the `readResolve()` method to handle serialization.
- Overriding `clone()` to prevent cloning of Singleton instances.
