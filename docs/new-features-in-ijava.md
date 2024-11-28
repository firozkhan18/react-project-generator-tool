### Features introduced in Java from **Java 7 to Java 21**

| **Java Version** | **Feature** | **Description** | **Use Case** | **Benefits** |
|------------------|-------------|-----------------|--------------|--------------|
| **Java 7** (Released in July 2011) | **Try-with-resources** | Simplifies the management of resources such as streams, connections, and files by automatically closing them after use. | Ideal for managing resources like file streams and database connections. | Reduces boilerplate code, prevents resource leaks, and ensures better resource management. |
| | **Diamond Operator (`<>`)** | Allows the compiler to infer the type arguments in generics. | Used in generic classes and methods. Example: `Map<String, List<String>> map = new HashMap<>();` | Improves code readability and reduces redundancy in specifying generic types. |
| | **Strings in Switch Statements** | Enables `String` objects to be used in `switch` statements. | Common in cases where actions depend on string values (e.g., command line inputs). | Increases performance and readability when switching over string values. |
| | **NIO.2 (New I/O API)** | Enhanced file I/O with better file system APIs. Includes features like symbolic links, file attributes, and improved Path API. | Used for file manipulation and directory management (e.g., copying files, walking directories). | Simplifies file handling and provides more flexibility compared to previous I/O APIs. |
| | **Fork/Join Framework** | Designed for parallelism, it allows efficient parallel processing of tasks. | Useful in multi-core processors where tasks can be split and executed in parallel. | Improves performance by taking advantage of multicore processors and simplifying parallel processing. |
| **Java 8** (Released in March 2014) | **Lambda Expressions** | Introduces functional programming concepts such as lambda expressions for passing behavior as parameters. | Used in collections, event handling, and parallel streams. Example: `list.forEach(e -> System.out.println(e));` | Increases conciseness, readability, and allows functional programming in Java. |
| | **Streams API** | Supports functional-style operations on sequences of elements. Allows filter, map, reduce operations in a declarative style. | Useful for working with large data sets, filtering, transforming, or aggregating collections. | Facilitates cleaner, more expressive code, and can potentially improve performance with parallel streams. |
| | **Default Methods in Interfaces** | Interfaces can now have method implementations. | Allows for backward compatibility in interfaces while adding new functionality. | Reduces the need for creating abstract classes or breaking existing code when adding new methods. |
| | **Method References** | Provides a shorthand syntax to invoke methods. | Simplifies lambda expressions where the function is already implemented. Example: `list.forEach(System.out::println);` | Enhances code readability and eliminates redundancy. |
| | **Optional Class** | Represents a container object which may or may not contain a value. | Helps to avoid `NullPointerException` and reduces null checks in the code. | Improves null safety and promotes better handling of absent values. |
| | **New Date/Time API (java.time)** | A new date and time library that addresses problems with the old `Date` and `Calendar` classes. | Used for manipulating date and time, time zones, and durations. | Solves problems with old Date API, provides immutability, and is more user-friendly. |
| **Java 9** (Released in September 2017) | **Module System (Project Jigsaw)** | Introduces a module system that enables better encapsulation and modularization of code. | Ideal for large applications to divide the code into modules for better maintainability. | Improves code maintainability, security, and allows creating smaller, more efficient applications. |
| | **JShell (Java Shell)** | An interactive REPL (Read-Eval-Print Loop) tool for Java. | Used for quick experimentation and testing small code snippets. | Increases productivity and allows quick prototyping without the need for writing full programs. |
| | **Private Methods in Interfaces** | Allows private methods in interfaces to share code between default methods. | Used for reusing logic within default methods without exposing it publicly. | Promotes code reuse and cleaner interface design. |
| | **Improved Javadoc** | New features in `Javadoc`, including support for generating HTML5 output. | Used in generating API documentation. | Enhances the quality and readability of API documentation. |
| | **Compact Strings** | Optimizes string storage by using a more compact representation when only ASCII characters are used. | Automatically applied to `String` objects that only contain ASCII characters. | Reduces memory footprint for applications dealing with lots of text in ASCII. |
| **Java 10** (Released in March 2018) | **Local-Variable Type Inference** | Allows `var` keyword for local variable declarations, letting the compiler infer the type. | Used for variable declarations where the type is obvious from context. Example: `var list = new ArrayList<String>();` | Increases code readability and reduces verbosity. |
| | **Application Class-Data Sharing (AppCDS)** | Enhances the Class Data Sharing (CDS) feature to share application classes. | Helps in reducing startup time for applications by sharing classes across multiple Java processes. | Reduces application startup time and improves memory usage efficiency. |
| **Java 11** (Released in September 2018) | **HTTP Client API (Standard)** | The new `HttpClient` API replaces the old `HttpURLConnection` for making HTTP requests. | Used for making HTTP requests, handling responses, and working with REST APIs. | Simplifies HTTP operations and offers better support for HTTP/2, WebSockets, and asynchronous requests. |
| | **String Methods** | New methods added to the `String` class like `isBlank()`, `lines()`, `strip()`, etc. | Used for string manipulation (e.g., stripping whitespace, checking if a string is blank). | Improves string handling and makes it easier to work with strings. |
| | **Running Java Code in Containers** | Java 11 optimizes its use in containerized environments (like Docker). | Enables better resource management when running Java applications in containers. | Ensures predictable resource usage and performance inside containers. |
| | **Deprecation of `java.awt` and `java.applet`** | Marks some older APIs (e.g., `Applet`) for removal. | Encourages migration away from outdated APIs. | Reduces maintenance overhead and encourages the use of modern technologies. |
| **Java 12** (Released in March 2019) | **Switch Expressions** | Extends the `switch` statement to return a value and use multiple labels. | Used for more concise, readable, and flexible switch statements. Example: `var result = switch (day) { case MONDAY -> "Start"; default -> "End"; };` | Enhances code clarity and simplifies control flow in cases with multiple conditions. |
| | **Shenandoah GC (Garbage Collector)** | A low-latency garbage collector. | Used for applications where minimizing garbage collection pauses is critical. | Reduces pause times, improving the responsiveness of latency-sensitive applications. |
| **Java 13** (Released in September 2019) | **Text Blocks** | Introduces multi-line string literals. | Used for handling multi-line strings such as JSON or SQL queries. Example: `String query = """SELECT * FROM users""";` | Simplifies the use of multi-line strings and improves code readability. |
| **Java 14** (Released in March 2020) | **Records** | Introduces a new type of class that acts as a transparent carrier for immutable data. | Ideal for simple data-holding classes (DTOs, value objects). Example: `record Person(String name, int age) {}` | Reduces boilerplate code by auto-generating `toString()`, `equals()`, `hashCode()`, and constructors. |
| | **Pattern Matching for `instanceof`** | Simplifies the `instanceof` check by combining it with type casting. | Used to simplify code where an object needs to be checked for type and cast. Example: `if (obj instanceof String s) {}` | Increases code readability and reduces boilerplate. |
| **Java 15** (Released in September 2020) | **Sealed Classes** | Allows classes and interfaces to control which other classes or interfaces can extend or implement them. | Used in domain modeling to limit the set of subclasses for better maintainability. | Provides better control over inheritance hierarchies. |
| | **Hidden Classes** | Allows for defining classes that are not accessible from outside the JVM, typically used by frameworks. | Useful for frameworks and tools that generate bytecode at runtime. | Improves performance and security by restricting access to generated classes. |
| **Java 16** (Released in March 2021) | **JEP 376: ZGC (Garbage Collector) on macOS** | Extends ZGC to macOS, bringing the low-latency garbage collector to this platform. | Useful for applications running on macOS that need low-latency GC. | Increases the cross-platform support for ZGC and optimizes memory management. |
| | **Records (Finalized)** | Finalizing the Record feature introduced in Java 14. | Used for more concise and immutable data classes. | Further simplifies code and promotes immutability. |
| **Java 17** (Released in September 2021) | **Sealed Classes (Finalized)** | Finalizes sealed classes feature from Java 15. | Used for data modeling and limiting subclassing. | Enhances domain modeling and control over class hierarchies. |
| | **JEP 356: Enhanced Pseudo-Random Number Generators** | Introduces new interfaces and implementations for random number generation. | Used in cryptographic applications and simulations. | Improves random number generation for better performance and security. |
| **Java 18** (Released in March 2022) | **Simple Web Server** | A simple HTTP server that can be used for testing, debugging, or development purposes. | Ideal for quick prototyping or testing web-based applications. | Simplifies development and testing workflows without needing full-fledged web servers. |
| **Java 19** (Released in September 2022) | **Record Patterns (Preview)** | Introduces pattern matching for records. | Allows deconstructing records in pattern matching. Example: `if (person instanceof Person(String name, int age)) {}` | Enhances the flexibility of pattern matching with records. |
| **Java 20** (Released in March 2023) | **Vector API (Incubator)** | Offers a vector API for working with SIMD (Single Instruction, Multiple Data) operations. | Used in high-performance computing, scientific applications, and graphics. | Boosts performance by enabling vectorized operations. |
| **Java 21** (Released in September 2023) | **Pattern Matching for Switch (Preview)** | Extends pattern matching to `switch` statements. | Enhances readability and flexibility when using `switch`. Example: `switch (obj) { case Integer i -> ...; }` | Simplifies complex `switch` statements, making them more powerful and concise. |
| | **Virtual Threads** | Introduces lightweight threads to handle high concurrency with minimal overhead. | Ideal for applications with high concurrency, such as web servers or microservices. | Significantly reduces the overhead of handling large numbers of threads, improving scalability. |

Java 8 introduced several key updates and new features to the **Collections Framework**, significantly enhancing how collections are handled, processed, and manipulated. Below are the most notable changes and additions that Java 8 brought to the Collections Framework:

### 1. **Introduction of the Streams API**

The **Streams API** in Java 8 is one of the most significant changes to the Collections Framework. It allows you to process collections in a more functional and declarative style, with support for both sequential and parallel operations.

- **Stream Interface**: The `Stream` interface represents a sequence of elements and provides methods to perform aggregate operations on them (e.g., filtering, mapping, reducing).
- **Key Methods**:
  - `filter(Predicate<? super T> predicate)` – Filters elements based on the provided predicate.
  - `map(Function<? super T, ? extends R> mapper)` – Transforms each element into another form.
  - `reduce(T identity, BinaryOperator<T> accumulator)` – Performs a reduction on the elements using an associative accumulation function.
  - `forEach(Consumer<? super T> action)` – Performs an action for each element of the stream.
  - `collect(Collector<? super T, A, R> collector)` – Collects the elements of the stream into a collection or other containers.
  - `sorted(Comparator<? super T> comparator)` – Sorts elements according to a comparator.
  - **Parallel Streams**: `parallelStream()` can be used to process data in parallel, making full use of multi-core processors.

**Example**:
```java
List<String> list = Arrays.asList("apple", "banana", "cherry", "date");
list.stream()
    .filter(s -> s.startsWith("a"))
    .map(String::toUpperCase)
    .forEach(System.out::println);  // Output: APPLE
```

**Benefits**:
- Simplifies working with large collections of data.
- Supports both sequential and parallel execution.
- Reduces boilerplate code for filtering, mapping, and collecting.

---

### 2. **Lambda Expressions and Functional Interfaces**

Lambda expressions in Java 8 allowed for more concise and flexible ways to write functional-style code. They can be used extensively with the **Streams API** and other new collection methods.

- **Lambda Syntax**: `(parameters) -> expression` or `(parameters) -> { statements; }`
- **Functional Interfaces**: Java 8 introduced the concept of **functional interfaces**, which are interfaces that have only one abstract method. Common examples include `Predicate<T>`, `Function<T, R>`, `Consumer<T>`, and `Supplier<T>`.

**Example**:
```java
List<String> list = Arrays.asList("one", "two", "three");
list.forEach(s -> System.out.println(s));  // Prints each element of the list
```

**Benefits**:
- Improves readability by reducing boilerplate code (e.g., no need for anonymous inner classes).
- Enables functional programming in Java, allowing collections to be processed in a more declarative manner.

---

### 3. **Default Methods in Interfaces**

Java 8 allows interfaces to have **default methods**—methods with a body. This change was made to enable the addition of new methods to existing interfaces without breaking existing implementations. Now, collection interfaces like `Collection`, `List`, `Set`, `Queue`, and `Map` have default methods.

- **Example of Default Method**:
  ```java
  interface MyInterface {
      default void print() {
          System.out.println("Default print method");
      }
  }
  ```

- **Example in Collections**:
  - `forEach(Consumer<? super E> action)` is a default method added to the `Collection` interface. It allows iterating over the elements of the collection using a lambda expression or method reference.

**Benefits**:
- Enables the extension of interfaces without breaking backward compatibility.
- Reduces the need for abstract classes.

---

### 4. **New Methods in the `Collection` Interface**

Java 8 added several new methods to the **`Collection`** interface. These methods are now available to all collections (`List`, `Set`, `Queue`, etc.):

- **`forEach(Consumer<? super E> action)`**: Iterates over each element in the collection and performs the given action.
  
  **Example**:
  ```java
  List<String> list = Arrays.asList("apple", "banana", "cherry");
  list.forEach(System.out::println);  // Output: apple, banana, cherry
  ```

- **`removeIf(Predicate<? super E> filter)`**: Removes elements from the collection that satisfy the given predicate.

  **Example**:
  ```java
  List<String> list = new ArrayList<>(Arrays.asList("a", "b", "c"));
  list.removeIf(s -> s.equals("b"));
  System.out.println(list);  // Output: [a, c]
  ```

- **`stream()`**: Converts the collection into a stream for further processing.

  **Example**:
  ```java
  List<String> list = Arrays.asList("one", "two", "three");
  list.stream().filter(s -> s.length() == 3).forEach(System.out::println);  // Output: one two
  ```

- **`parallelStream()`**: Returns a parallel stream for concurrent processing of the collection.

  **Example**:
  ```java
  list.parallelStream().forEach(System.out::println);  // Processes elements in parallel
  ```

**Benefits**:
- Makes iteration and filtering easier with lambdas.
- Improves performance with parallel streams.
- Allows for more concise and readable code.

---

### 5. **New Methods in the `Map` Interface**

Several new methods were introduced to the **`Map`** interface in Java 8 to improve how maps are manipulated:

- **`forEach(BiConsumer<? super K, ? super V> action)`**: Iterates over the map's key-value pairs and applies the given action.

  **Example**:
  ```java
  Map<Integer, String> map = Map.of(1, "one", 2, "two");
  map.forEach((key, value) -> System.out.println(key + ": " + value));
  ```

- **`replaceAll(BiFunction<? super K, ? super V, ? extends V> function)`**: Replaces each value in the map with the result of applying the provided function.

  **Example**:
  ```java
  Map<Integer, String> map = new HashMap<>();
  map.put(1, "apple");
  map.replaceAll((key, value) -> value.toUpperCase());
  System.out.println(map);  // Output: {1=APPLE}
  ```

- **`computeIfAbsent(K key, Function<? super K, ? extends V> mappingFunction)`**: Computes a value for the key if it is absent.

  **Example**:
  ```java
  Map<Integer, String> map = new HashMap<>();
  map.computeIfAbsent(1, k -> "one");
  System.out.println(map);  // Output: {1=one}
  ```

- **`merge(K key, V value, BiFunction<? super V, ? super V, ? extends V> remappingFunction)`**: Merges a value with the existing value for the given key.

  **Example**:
  ```java
  Map<Integer, String> map = new HashMap<>();
  map.put(1, "apple");
  map.merge(1, "fruit", (oldValue, newValue) -> oldValue + " & " + newValue);
  System.out.println(map);  // Output: {1=apple & fruit}
  ```

**Benefits**:
- More flexible and functional methods for manipulating maps.
- Simplifies operations like replacing, merging, and computing values.

---

### 6. **The `Optional` Class**

The **`Optional`** class was introduced in **`java.util`** to help avoid `NullPointerException`. It represents a value that might or might not be present, encouraging safer handling of nulls, especially when working with collections.

- **Example**:
  ```java
  Optional<String> name = Optional.ofNullable(getName());
  name.ifPresent(n -> System.out.println("Name is: " + n));
  ```

- **Methods**:
  - `isPresent()` – Checks if a value is present.
  - `ifPresent(Consumer<? super T> action)` – Executes a given action if the value is present.
  - `orElse(T other)` – Returns the value if present, otherwise returns the provided default value.

**Benefits**:
- Reduces the need for explicit null checks.
- Prevents `NullPointerException` by enforcing handling of absent values.

---

### 7. **Collectors Utility Class**

The **`Collectors`** utility class provides predefined implementations for common collection operations that can be used with streams:

- **`toList()`**: Collects elements into a `List`.
- **`toSet()`**: Collects elements into a `Set`.
- **`joining()`**: Concatenates elements into a string.
- **`groupingBy()`**: Groups elements by a classifier function.
- **`partitioningBy()`**: Partitions elements into two groups based on a predicate.

**Example**:
```java
List<String> list = Arrays.asList("apple", "banana", "cherry");
String result = list.stream().collect(Collectors.joining(", ", "[", "]"));
System.out.println(result);  // Output: [apple, banana, cherry]
```

**Benefits**:
- Simplifies collecting and grouping elements from a stream.
- Provides a consistent way to

 convert stream data into various collection types.

---

### Summary of Key Java 8 Updates to the Collections Framework:

| **Feature**            | **Description**                                                                 | **Example**                                                       | **Benefits**                                                              |
|------------------------|---------------------------------------------------------------------------------|-------------------------------------------------------------------|---------------------------------------------------------------------------|
| **Streams API**         | Functional-style operations on collections, supporting parallelism.            | `stream().filter().map().reduce()`                                | Concise, readable, and performant data processing.                        |
| **Lambda Expressions**  | Enables functional programming style with shorter syntax.                       | `forEach(s -> System.out.println(s))`                             | Reduces boilerplate, increases flexibility.                               |
| **Default Methods**     | Allows interfaces to have default implementations without breaking existing code.| `forEach()`, `removeIf()`                                         | Extends interfaces while maintaining backward compatibility.              |
| **New Collection Methods** | New methods in `Collection`, like `forEach`, `removeIf`, `stream()`.             | `list.forEach()`, `list.stream()`                                  | Simplifies iteration, filtering, and collection processing.               |
| **Optional Class**      | Encapsulates an optional value to avoid `NullPointerException`.                | `Optional.ofNullable(value).ifPresent()`                          | Safer handling of null values, prevents `NullPointerException`.           |
| **Map Updates**         | New methods in `Map`, like `computeIfAbsent()`, `replaceAll()`, and `merge()`. | `map.merge()`, `map.replaceAll()`                                  | Simplifies map manipulation and functional handling of key-value pairs.   |
| **Collectors Class**    | Utility methods for collecting stream elements.                               | `Collectors.toList()`, `Collectors.groupingBy()`                   | Provides convenient ways to gather stream results into collections.      |

---

In **Java 8**, the **`Map`** interface was enhanced with several new methods, making it more flexible, functional, and easier to work with. These updates enable you to perform a variety of operations on maps in a more concise and expressive manner, often using **lambdas** and **streams**.

Here are the key updates and new methods introduced to the **`Map`** interface in Java 8:

### 1. **`forEach(BiConsumer<? super K, ? super V> action)`**
- **Description**: This method allows you to iterate over the entries (key-value pairs) in a `Map` and perform an action for each entry. The action is provided as a `BiConsumer`, which takes two parameters: the key and the value.
- **Example**:
  ```java
  Map<Integer, String> map = Map.of(1, "one", 2, "two", 3, "three");
  map.forEach((key, value) -> System.out.println(key + ": " + value));
  ```
  **Output**:
  ```
  1: one
  2: two
  3: three
  ```

- **Benefits**: 
  - Simplifies iteration over `Map` entries.
  - Makes the code more readable and concise.
  - Can be combined with **lambda expressions** or **method references**.

---

### 2. **`replaceAll(BiFunction<? super K, ? super V, ? extends V> function)`**
- **Description**: This method allows you to replace all values in the map by applying a given function to each key-value pair. The function takes the key and value, and returns the new value.
- **Example**:
  ```java
  Map<Integer, String> map = new HashMap<>();
  map.put(1, "apple");
  map.put(2, "banana");
  map.put(3, "cherry");
  
  map.replaceAll((key, value) -> value.toUpperCase());
  
  System.out.println(map);  // Output: {1=APPLE, 2=BANANA, 3=CHERRY}
  ```

- **Benefits**: 
  - Provides a more concise way to modify all values in the map.
  - Enables transformations to be performed on map values in a functional style.

---

### 3. **`computeIfAbsent(K key, Function<? super K, ? extends V> mappingFunction)`**
- **Description**: This method computes a value for the specified key if the key is not already present in the map. If the key is absent, the `mappingFunction` is applied to compute the value and insert it into the map.
- **Example**:
  ```java
  Map<Integer, String> map = new HashMap<>();
  map.put(1, "apple");
  
  map.computeIfAbsent(2, key -> "banana");
  map.computeIfAbsent(1, key -> "grape");  // This won't change the value for key 1
  
  System.out.println(map);  // Output: {1=apple, 2=banana}
  ```

- **Benefits**:
  - Helps in populating the map with computed values only when necessary.
  - Avoids unnecessary recomputation when the key already exists.
  - Useful for lazy loading or default values.

---

### 4. **`computeIfPresent(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction)`**
- **Description**: This method computes a new value for an existing key if the key is present in the map. If the key is absent, nothing happens. The provided `remappingFunction` takes both the key and the current value, and computes a new value.
- **Example**:
  ```java
  Map<Integer, String> map = new HashMap<>();
  map.put(1, "apple");
  map.put(2, "banana");
  
  map.computeIfPresent(1, (key, value) -> value.toUpperCase());
  map.computeIfPresent(3, (key, value) -> value.toLowerCase());  // No effect, as key 3 is not present
  
  System.out.println(map);  // Output: {1=APPLE, 2=banana}
  ```

- **Benefits**:
  - Enables updating an existing value if the key is present.
  - Provides a functional way to modify map entries conditionally.

---

### 5. **`merge(K key, V value, BiFunction<? super V, ? super V, ? extends V> remappingFunction)`**
- **Description**: This method allows you to merge the specified value with the existing value for the given key in the map. If the key is absent, the given value is inserted. If the key is present, the `remappingFunction` is used to combine the existing value with the new value.
- **Example**:
  ```java
  Map<Integer, String> map = new HashMap<>();
  map.put(1, "apple");
  map.put(2, "banana");
  
  map.merge(1, "fruit", (oldValue, newValue) -> oldValue + " & " + newValue);
  map.merge(3, "cherry", (oldValue, newValue) -> oldValue + " & " + newValue);  // Key 3 is absent, value is inserted
  
  System.out.println(map);  // Output: {1=apple & fruit, 2=banana, 3=cherry}
  ```

- **Benefits**:
  - Provides a powerful mechanism to update or insert values based on a custom merge logic.
  - Useful for scenarios where the value for an existing key needs to be modified or combined with a new value.

---

### 6. **`getOrDefault(Object key, V defaultValue)`**
- **Description**: This method returns the value associated with the specified key, or the provided default value if the key is not found in the map.
- **Example**:
  ```java
  Map<Integer, String> map = new HashMap<>();
  map.put(1, "apple");
  
  String value = map.getOrDefault(2, "banana");
  System.out.println(value);  // Output: banana
  ```

- **Benefits**:
  - Simplifies retrieving a value with a fallback if the key is missing.
  - Reduces the need for null checks when the key might be absent.

---

### 7. **`putIfAbsent(K key, V value)`**
- **Description**: This method inserts the value for the given key only if the key is not already present in the map. If the key already exists, the existing value is retained.
- **Example**:
  ```java
  Map<Integer, String> map = new HashMap<>();
  map.put(1, "apple");
  
  map.putIfAbsent(1, "banana");  // Does nothing because key 1 already exists.
  map.putIfAbsent(2, "cherry");  // Adds key 2 with value "cherry".
  
  System.out.println(map);  // Output: {1=apple, 2=cherry}
  ```

- **Benefits**:
  - Prevents overwriting existing values.
  - Useful for ensuring that a key has a default value only if it is not already set.

---

### Summary of Key Java 8 Updates to the `Map` Interface:

| **Method**                         | **Description**                                                                 | **Example Use Case**                                                    |
|------------------------------------|---------------------------------------------------------------------------------|------------------------------------------------------------------------|
| **`forEach(BiConsumer<? super K, ? super V> action)`** | Iterates over the map and applies the action on each key-value pair. | `map.forEach((key, value) -> System.out.println(key + ": " + value));` |
| **`replaceAll(BiFunction<? super K, ? super V, ? extends V> function)`** | Replaces all values in the map using the provided function. | `map.replaceAll((key, value) -> value.toUpperCase());`                 |
| **`computeIfAbsent(K key, Function<? super K, ? extends V> mappingFunction)`** | Computes a value for a missing key if it is not already present. | `map.computeIfAbsent(2, key -> "banana");`                             |
| **`computeIfPresent(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction)`** | Computes a new value if the key is present in the map. | `map.computeIfPresent(1, (key, value) -> value.toUpperCase());`       |
| **`merge(K key, V value, BiFunction<? super V, ? super V, ? extends V> remappingFunction)`** | Merges a value with an existing value for a key. | `map.merge(1, "fruit", (oldValue, newValue) -> oldValue + " & " + newValue);` |
| **`getOrDefault(Object key, V defaultValue)`** | Returns the value or the default if the key is absent. | `String value = map.getOrDefault(2, "banana");`                       |
| **`putIfAbsent(K key, V value)`**   | Adds a key-value pair only if the key is not already present. | `map.putIfAbsent(2, "cherry");`                                         |

### Benefits of Java 8 Updates to `Map`:
- **Conciseness**: The new methods simplify map manipulations, making the code more concise and readable.
- **Functional Style**: These methods encourage the use of functional programming techniques (like lambdas and higher-order functions) for

 handling maps.
- **Performance**: Some methods like `computeIfAbsent` or `merge` can be more efficient than manually checking if a key exists and performing operations.

These updates to the `Map` interface make it easier and more flexible to work with key-value pairs in a more modern, functional programming style in Java.

---

In **Java 8**, the **`String`** class received several important updates that enhanced its functionality and made string manipulation more powerful, especially in the context of **lambda expressions**, **streams**, and **functional programming**. Below are the key updates introduced to the **`String`** class in Java 8:

### 1. **`String.join(CharSequence delimiter, CharSequence... elements)`**
- **Description**: The `String.join()` method was introduced to simplify joining multiple strings (or other `CharSequence` objects) with a specified delimiter. It works with any collection of `CharSequence` elements, including arrays, lists, or any iterable collection.
  
- **Example**:
  ```java
  String result = String.join(", ", "apple", "banana", "cherry");
  System.out.println(result);  // Output: apple, banana, cherry
  ```

  You can also use `String.join()` with collections or arrays:
  ```java
  List<String> list = Arrays.asList("one", "two", "three");
  String result = String.join("-", list);
  System.out.println(result);  // Output: one-two-three
  ```

- **Benefits**:
  - Simplifies the process of joining strings with a delimiter.
  - Avoids the need for manually iterating over collections to concatenate elements.
  
---

### 2. **`String.lines()`**
- **Description**: The `String.lines()` method was added to split a `String` into a stream of lines. It returns a **Stream<String>**, where each element in the stream represents a line from the string (based on line separators such as `\n` or `\r\n`).
  
- **Example**:
  ```java
  String text = "First line\nSecond line\nThird line";
  text.lines().forEach(System.out::println);
  ```

  **Output**:
  ```
  First line
  Second line
  Third line
  ```

- **Benefits**:
  - Provides an easy and functional way to process text line by line.
  - Can be used in combination with the **Streams API** for more complex text processing tasks.

---

### 3. **`String.strip()` and `String.stripLeading()` / `String.stripTrailing()`**
- **Description**: Java 8 introduced new methods for removing whitespace from the beginning and end of a string:
  - `String.strip()` removes both leading and trailing whitespace.
  - `String.stripLeading()` removes leading whitespace (beginning of the string).
  - `String.stripTrailing()` removes trailing whitespace (end of the string).
  
  These methods are an improvement over `trim()`, as they are Unicode-aware and follow the Unicode standard for whitespace characters.

- **Example**:
  ```java
  String text = "   Hello World!   ";
  
  System.out.println(text.strip());       // Output: "Hello World!"
  System.out.println(text.stripLeading());  // Output: "Hello World!   "
  System.out.println(text.stripTrailing()); // Output: "   Hello World!"
  ```

- **Benefits**:
  - Handles Unicode whitespace characters, not just the ASCII space.
  - Provides more accurate string trimming according to Unicode definitions.

---

### 4. **`String.repeat(int count)`**
- **Description**: The `String.repeat()` method was added to repeat a string a given number of times. This makes it much easier to create repeated patterns or strings without needing to write loops.

- **Example**:
  ```java
  String repeated = "abc".repeat(3);
  System.out.println(repeated);  // Output: abcabcabc
  ```

- **Benefits**:
  - Provides a more concise and readable way to repeat strings compared to using a loop or `StringBuilder`.
  - Great for generating repeated patterns or generating text content dynamically.

---

### 5. **`String.chars()`**
- **Description**: The `String.chars()` method was introduced to return an **IntStream** of the code points of a string. This allows you to work with the individual Unicode code points of a string in a more functional and stream-based way.

- **Example**:
  ```java
  String text = "Hello";
  text.chars().forEach(c -> System.out.println((char) c));
  ```

  **Output**:
  ```
  H
  e
  l
  l
  o
  ```

- **Benefits**:
  - Facilitates working with individual characters in a more functional and stream-based manner.
  - Useful for processing non-ASCII characters and surrogate pairs in Unicode.

---

### 6. **`String.codePoints()`**
- **Description**: The `String.codePoints()` method returns an **IntStream** of Unicode code points from a string. This is similar to `chars()`, but it allows you to process code points in a way that properly handles characters outside the Basic Multilingual Plane (BMP), such as emoji or characters from other scripts that require multiple `char` values.

- **Example**:
  ```java
  String text = "Hello 🌍";
  text.codePoints().forEach(c -> System.out.println((char) c));
  ```

  **Output**:
  ```
  H
  e
  l
  l
  o
  (space)
  🌍
  ```

- **Benefits**:
  - Handles Unicode characters and surrogate pairs properly.
  - Useful for processing complex characters (e.g., emoji, Asian scripts, etc.) in a functional style.

---

### 7. **`String.isBlank()`**
- **Description**: The `String.isBlank()` method was introduced to check whether a string is empty or consists only of whitespace characters (spaces, tabs, newlines, etc.). This is an improvement over `isEmpty()`, as it accounts for strings that might contain only spaces or other whitespace characters.

- **Example**:
  ```java
  String str1 = "   ";
  String str2 = "Hello";
  
  System.out.println(str1.isBlank());  // Output: true
  System.out.println(str2.isBlank());  // Output: false
  ```

- **Benefits**:
  - Provides a simple and reliable way to check for blank (whitespace-only) strings.
  - Useful for validation checks where only non-empty, non-blank strings are acceptable.

---

### 8. **`String.format(Locale, String, Object...)`**
- **Description**: Java 8 introduced the ability to pass a `Locale` explicitly to the `String.format()` method, making it easier to format strings in a locale-specific way. This is particularly useful for internationalization (i18n) and ensuring the correct format for dates, numbers, and currencies.

- **Example**:
  ```java
  Locale locale = Locale.FRANCE;
  String formatted = String.format(locale, "Price: %.2f", 1234.56);
  System.out.println(formatted);  // Output: Price: 1234,56 (using French locale formatting)
  ```

- **Benefits**:
  - Helps in formatting strings based on a specific locale, ensuring that numbers, currencies, and other locale-sensitive data are displayed correctly.

---

### Summary of Key String Updates in Java 8:

| **Method**                        | **Description**                                                       | **Example**                                                              |
|-----------------------------------|-----------------------------------------------------------------------|--------------------------------------------------------------------------|
| **`String.join(CharSequence delimiter, CharSequence... elements)`** | Joins multiple strings with a delimiter.                             | `String.join(", ", "apple", "banana", "cherry")`                          |
| **`String.lines()`**              | Splits a string into a stream of lines.                               | `"First line\nSecond line".lines().forEach(System.out::println)`          |
| **`String.strip()`**              | Removes leading and trailing whitespace (Unicode-aware).             | `"   Hello   ".strip()`                                                  |
| **`String.stripLeading()`**       | Removes leading whitespace (Unicode-aware).                          | `"   Hello   ".stripLeading()`                                            |
| **`String.stripTrailing()`**      | Removes trailing whitespace (Unicode-aware).                         | `"   Hello   ".stripTrailing()`                                           |
| **`String.repeat(int count)`**    | Repeats the string a given number of times.                           | `"abc".repeat(3)`  (Output: `"abcabcabc"`)                                |
| **`String.chars()`**              | Returns an `IntStream` of the string’s characters.                    | `"Hello".chars().forEach(c -> System.out.println((char) c))`              |
| **`String.codePoints()`**         | Returns an `IntStream` of Unicode code points.                        | `"Hello 🌍".codePoints().forEach(c -> System.out.println((char) c))`      |
| **`String.isBlank()`**            | Checks if a string is empty or only contains whitespace.              | `"   ".isBlank()`  (Output: `true`)                                       |
| **`String.format(Locale, String, Object...)`** | Formats a string with a given locale.                                | `String.format(Locale.FRANCE, "Price: %.2f", 1234.56)`                   |

### Benefits of Java 8 String Updates:
- **Simplification**: Many of these updates simplify common string operations, such as joining, trimming, and checking for blank strings.
- **Functional Programming**: Methods like `lines()`, `chars()`, and `codePoints()` provide stream-based, functional-style operations for working with strings.
- **Unicode Support**: Methods like `strip()`, `chars()`, and `codePoints()` ensure proper handling of Unicode characters, including whitespace and surrogate pairs.

These enhancements to

 the **`String`** class in Java 8 provide a more powerful and flexible set of tools for string manipulation and improve compatibility with modern programming paradigms, like functional programming and internationalization.

---

In **Java 8**, abstract classes received some important updates, primarily with the addition of **default methods** and **static methods**. These changes allowed abstract classes to have behavior (in addition to just defining an API) and also improved the overall flexibility and usability of abstract classes in Java. Below are the key updates introduced to abstract classes in Java 8:

### 1. **Default Methods in Abstract Classes**
- **Description**: Java 8 introduced the concept of **default methods** in interfaces, but abstract classes can also define methods with a body (which behave similarly to default methods in interfaces). This allows abstract classes to provide concrete behavior that can be inherited by subclasses, making it easier to add new methods without breaking existing implementations.
  
- **Key Points**:
  - A default method in an abstract class is a method with a body, defined using the `default` keyword.
  - Abstract classes can now provide a default implementation for some methods, which can be overridden by subclasses if needed.
  
- **Example**:
  ```java
  abstract class Shape {
      abstract void draw(); // Abstract method (must be implemented by subclasses)

      // Default method with a body
      public void color() {
          System.out.println("Coloring the shape");
      }
  }

  class Circle extends Shape {
      @Override
      void draw() {
          System.out.println("Drawing Circle");
      }
  }

  public class Main {
      public static void main(String[] args) {
          Circle circle = new Circle();
          circle.draw();  // Output: Drawing Circle
          circle.color(); // Output: Coloring the shape (default implementation)
      }
  }
  ```

- **Benefits**:
  - **Backward Compatibility**: You can add new methods to abstract classes without forcing subclasses to implement them.
  - **Code Reusability**: Provides common functionality (like `color()` in the example) in the abstract class that can be shared by all subclasses.
  - **Flexibility**: Subclasses can override default methods to provide their own specific behavior.

---

### 2. **Static Methods in Abstract Classes**
- **Description**: Java 8 also introduced the ability to define **static methods** in abstract classes. This allows abstract classes to provide utility methods or other static behavior, which is common in base classes. Static methods in abstract classes are not inherited by subclasses but can be accessed through the class name.

- **Example**:
  ```java
  abstract class Shape {
      static void printShapeType() {
          System.out.println("This is a shape.");
      }
  }

  class Circle extends Shape {
      // No need to override the static method
  }

  public class Main {
      public static void main(String[] args) {
          // Accessing the static method via the abstract class
          Shape.printShapeType();  // Output: This is a shape.
      }
  }
  ```

- **Benefits**:
  - **Utility Methods**: Abstract classes can now have static utility methods (like `printShapeType()`) that are related to the class but are not required to be overridden by subclasses.
  - **Organized Code**: Helps in organizing common static methods in abstract classes, reducing code duplication.

---

### 3. **Private Methods in Abstract Classes**
- **Description**: Java 9 (after Java 8) introduced **private methods** in interfaces, but in Java 8, abstract classes already supported private methods. This means that in Java 8, you could have **private helper methods** inside abstract classes. These methods cannot be overridden, and they are only accessible within the class itself.

- **Example**:
  ```java
  abstract class Shape {
      abstract void draw(); // Abstract method

      // Private helper method
      private void printMessage() {
          System.out.println("Shape is being drawn.");
      }

      // Method using the private method
      public void drawShape() {
          printMessage();
          draw();
      }
  }

  class Circle extends Shape {
      @Override
      void draw() {
          System.out.println("Drawing Circle");
      }
  }

  public class Main {
      public static void main(String[] args) {
          Circle circle = new Circle();
          circle.drawShape();  // Output: Shape is being drawn. Drawing Circle
      }
  }
  ```

- **Benefits**:
  - **Encapsulation**: The ability to use private methods allows for better encapsulation within abstract classes.
  - **Helper Methods**: Private methods can be used as helper methods that are not intended to be accessed outside the abstract class.
  
---

### 4. **Increased Flexibility with Method Overriding**
- **Description**: Java 8 abstract classes can now have methods that are already implemented with a default implementation or static methods, giving subclasses the flexibility to override or not override methods based on the need.

  - Abstract classes can define methods with default behaviors, and subclasses can override them if they require specialized behavior.
  
- **Example**:
  ```java
  abstract class Animal {
      abstract void sound();  // Abstract method

      // Default method
      public void breathe() {
          System.out.println("Breathing...");
      }
  }

  class Dog extends Animal {
      @Override
      void sound() {
          System.out.println("Barking");
      }

      // No need to override breathe() if the default behavior is sufficient
  }

  public class Main {
      public static void main(String[] args) {
          Dog dog = new Dog();
          dog.sound();  // Output: Barking
          dog.breathe(); // Output: Breathing...
      }
  }
  ```

- **Benefits**:
  - **Reduced Boilerplate**: You can provide default behavior to reduce the need for every subclass to implement every method.
  - **Enhanced Flexibility**: Subclasses can choose to override methods as needed, or use the default methods directly.

---

### Summary of Java 8 Updates to Abstract Classes:

| **Feature**              | **Description**                                                                 | **Example Use Case**                                         |
|--------------------------|---------------------------------------------------------------------------------|-------------------------------------------------------------|
| **Default Methods**       | Abstract classes can provide method implementations, which can be inherited or overridden by subclasses. | Allows providing common method implementations for subclasses. |
| **Static Methods**        | Abstract classes can now have static methods, which can be called without instantiating the class. | Utility or helper methods that don't need to be overridden.  |
| **Private Methods**       | Abstract classes can define private methods that are only used internally.        | Helper methods for internal use that don't need to be accessed outside the class. |
| **Method Overriding Flexibility** | Subclasses can choose to override default methods or use them as-is. | Subclasses can choose to override or use default behavior from the abstract class. |

### Benefits of Java 8 Updates to Abstract Classes:
- **Code Reusability**: Abstract classes can now provide default behavior, reducing the amount of code that subclasses need to write.
- **Backward Compatibility**: Default methods allow you to add new methods to abstract classes without breaking existing subclasses.
- **Flexible Design**: Subclasses can now inherit behavior from abstract classes but still override methods as needed.
- **Improved Organization**: Static and private methods help in organizing and structuring code more effectively.

These updates to abstract classes in **Java 8** allow for more flexible and powerful object-oriented design, where abstract classes can provide behavior while still maintaining their role as templates for subclasses.

---

In **Java 8**, interfaces, abstract classes, and regular interfaces (before Java 8) have distinct characteristics. The introduction of new features like **default methods** and **static methods** in interfaces has blurred the lines between abstract classes and interfaces, but there are still key differences between them. Here’s a detailed comparison between **Java 8 interfaces**, **abstract classes**, and **regular interfaces (before Java 8)**:

### 1. **Regular Interface (Before Java 8)**
In Java versions prior to **Java 8**, interfaces were used primarily to define **abstract methods** that must be implemented by any class that implements the interface. They could not have any method implementations (except for `static` and `default` methods, which were introduced in Java 8).

#### Key Characteristics:
- **All methods are abstract by default** (except for `static` and `default` methods in Java 8).
- **Cannot have instance fields**; they can only have `static` constants (public, static, final fields).
- **Cannot have method implementations** (all methods are implicitly abstract before Java 8).
- **Cannot have constructors**.

#### Example of Regular Interface (Before Java 8):
```java
interface Animal {
    void sound();  // Abstract method, no implementation

    // All fields are implicitly public, static, final
    int age = 5;

    // No constructors allowed
}
```

### 2. **Java 8 Interface (With Default and Static Methods)**
Java 8 introduced the concept of **default methods** and **static methods** in interfaces, allowing interfaces to provide method implementations. This gave interfaces more functionality, similar to abstract classes, but with certain restrictions.

#### Key Characteristics of Java 8 Interface:
- **Can have abstract methods** (which must be implemented by classes that implement the interface).
- **Can have default methods**: These are methods with a body, which provide a default implementation. They can be overridden by implementing classes but are not required to be.
- **Can have static methods**: These are methods that belong to the interface itself and can be called without an instance of the interface.
- **Can have constants**: Like regular interfaces, all fields are `public`, `static`, and `final`.
- **Cannot have instance fields or constructors**.
  
#### Example of Java 8 Interface (With Default and Static Methods):
```java
interface Animal {
    void sound();  // Abstract method

    // Default method
    default void eat() {
        System.out.println("Eating food");
    }

    // Static method
    static void sleep() {
        System.out.println("Sleeping");
    }
}
```

### 3. **Abstract Class**
An abstract class is a class that cannot be instantiated directly and is meant to be subclassed. It can contain both abstract methods (without a body) and concrete methods (with a body). Abstract classes are a more flexible alternative to interfaces when you need shared code in the base class.

#### Key Characteristics of Abstract Classes:
- **Can have both abstract and concrete methods**: Abstract methods must be implemented by subclasses, while concrete methods provide a default implementation.
- **Can have instance fields** (non-static fields). Unlike interfaces, abstract classes can hold state.
- **Can have constructors**: Abstract classes can define constructors, which can be invoked by subclasses.
- **Can implement interfaces**: An abstract class can implement one or more interfaces.
- **Can inherit from other classes**: Unlike interfaces, abstract classes can extend other classes, making it possible to create a class hierarchy.
  
#### Example of Abstract Class:
```java
abstract class Animal {
    int age;  // Instance field

    // Constructor
    Animal(int age) {
        this.age = age;
    }

    // Abstract method
    abstract void sound();

    // Concrete method
    void breathe() {
        System.out.println("Breathing...");
    }
}
```

---

### **Comparison Table: Interface vs Abstract Class vs Regular Interface**

| Feature                            | **Regular Interface (Before Java 8)**                               | **Java 8 Interface (With Default and Static Methods)**         | **Abstract Class**                                      |
|------------------------------------|---------------------------------------------------------------------|----------------------------------------------------------------|----------------------------------------------------------|
| **Method Implementation**          | No method implementation (only abstract methods)                   | Can have abstract methods, default methods, and static methods | Can have both abstract and concrete methods              |
| **Instance Fields**                | Cannot have instance fields (only static final constants)          | Cannot have instance fields (only static final constants)     | Can have instance fields (non-static fields)             |
| **Static Methods**                 | Not allowed (only constants)                                        | Can have static methods                                         | Can have static methods                                  |
| **Default Methods**                | Not available (methods must be implemented in classes)              | Can have default methods (methods with a body)                 | Not applicable (methods must be implemented or abstract)  |
| **Constructor**                    | Cannot have constructors                                            | Cannot have constructors                                       | Can have constructors                                    |
| **Inheritance**                    | Can implement multiple interfaces, but cannot extend another class | Can implement multiple interfaces, but cannot extend another class | Can extend one class (abstract or concrete) and implement interfaces |
| **Access Modifiers**              | All methods are implicitly `public`; no other access modifiers allowed | Methods can be `public` (default and static methods); constants are `public static final` | Methods and fields can have any access modifiers (private, protected, public) |
| **Multiple Inheritance**           | No multiple inheritance of implementation (since all methods are abstract, no method body) | Supports multiple inheritance of behavior via default methods | Single inheritance from a base class; can implement multiple interfaces |
| **Purpose**                        | Used to define a contract for implementing classes; no shared state or behavior | Used to define a contract with optional default behavior, but still primarily a contract | Used to define a common base class that can share code and state, and enforce a contract through abstract methods |
| **Example**                        | ```interface Animal { void sound(); }```                          | ```interface Animal { void sound(); default void eat() { ... } }``` | ```abstract class Animal { void sound(); abstract void breathe(); }``` |

---

### **When to Use Which:**
- **Use a regular interface (before Java 8)** when you want to define a contract that must be implemented by any class, without providing any behavior or state. Typically used when you need polymorphism (i.e., classes can implement multiple interfaces).
  
- **Use a Java 8 interface** when you need to define a contract, but also want to provide default behavior in the form of default methods. This is particularly useful when you want to add new functionality to interfaces without breaking existing classes. Java 8 interfaces are great for functional programming paradigms, such as passing behavior via lambdas or using `Stream` APIs.

- **Use an abstract class** when you need to share code (methods or state) among multiple subclasses. Abstract classes allow you to define a base class with both abstract and concrete methods, as well as instance fields, which can be inherited and customized by subclasses. Use an abstract class when your base class has some shared behavior and common fields that multiple subclasses will need to use.

### **Summary:**
- **Regular Interfaces (Before Java 8)**: Only abstract methods, no method implementations or state.
- **Java 8 Interfaces**: Can have abstract methods, default methods (with implementation), static methods, but no instance fields or constructors.
- **Abstract Classes**: Can have abstract and concrete methods, instance fields, constructors, and can inherit from other classes.
  
---

In **Java 8**, the **Concurrency API** saw several important updates and additions that significantly enhanced the way multithreading and parallel processing are handled. These improvements aimed to make concurrency easier to manage, more efficient, and more scalable. Some of the major updates introduced in Java 8 and beyond include new classes, methods, and concepts for better thread management, parallelism, and synchronization.

Here’s an overview of the key new features and enhancements in the **Concurrency API** introduced in **Java 8 and later**, along with their uses and purposes:

---

### 1. **`CompletableFuture` (Java 8)**
- **Description**: The **`CompletableFuture`** class was introduced in Java 8 as part of the `java.util.concurrent` package. It provides a more flexible and powerful way to handle asynchronous programming and concurrency, allowing for non-blocking asynchronous tasks, combining tasks, and working with results in a fluent and functional style.
  
- **Key Features**:
  - **Asynchronous Execution**: You can run tasks asynchronously and then chain actions on the result.
  - **Composability**: `CompletableFuture` can be used to chain multiple tasks together and manage them concurrently.
  - **Non-blocking**: You can write asynchronous code in a more readable, non-blocking manner.
  
- **Example**:
  ```java
  CompletableFuture<Integer> future = CompletableFuture.supplyAsync(() -> {
      return 10;
  }).thenApplyAsync(result -> {
      return result * 2;
  });

  // Combine futures
  future.thenAcceptAsync(System.out::println);  // Output: 20
  ```

- **Use Case**:
  - Ideal for handling long-running or IO-bound tasks (like reading data from a file or making HTTP requests) asynchronously without blocking the main thread.
  - You can easily chain multiple tasks that depend on each other, making your asynchronous code more readable and maintainable.

---

### 2. **`ForkJoinPool` and Parallel Streams (Java 8)**
- **Description**: The **`ForkJoinPool`** was introduced to help with parallel execution of tasks that can be broken down into smaller sub-tasks. In Java 8, the **`ForkJoinPool`** was used internally to execute **parallel streams** (via the `Stream.parallel()` method) and the `CompletableFuture` tasks.
  
- **Key Features**:
  - **Parallel Processing**: Allows tasks to be broken down into smaller tasks and executed in parallel, with the results then being combined.
  - **Work Stealing**: The `ForkJoinPool` uses a work-stealing algorithm, where idle threads can "steal" tasks from busy threads, making the execution more efficient.

- **Example**:
  ```java
  List<Integer> list = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  int sum = list.parallelStream()
                .mapToInt(Integer::intValue)
                .sum();
  System.out.println(sum);  // Output: 55 (calculated in parallel)
  ```

- **Use Case**:
  - Efficient for **data parallelism** where tasks can be split and processed concurrently (e.g., summing large datasets, performing heavy computations).
  - The **`Stream.parallel()`** method allows you to leverage multiple cores for parallel processing without worrying about managing threads manually.

---

### 3. **`@FunctionalInterface` and Lambda Expressions (Java 8)**
- **Description**: With the introduction of **lambda expressions** and **functional interfaces**, Java 8 made it easier to pass behavior (as parameters) to methods in the concurrency API, such as `ExecutorService.submit()` or `CompletableFuture.thenApply()`. Lambdas make asynchronous tasks and functional-style concurrency more concise and expressive.

- **Example**:
  ```java
  ExecutorService executorService = Executors.newFixedThreadPool(10);
  executorService.submit(() -> {
      System.out.println("Task is running asynchronously");
  });
  ```

- **Use Case**:
  - Lambda expressions simplify the implementation of short-lived concurrency tasks (like submitting jobs to an executor).
  - They are ideal when you want to pass simple behavior to a method or task (e.g., submitting a task to an executor or processing results asynchronously).

---

### 4. **`new` `Executor` API (Java 8)**
- **Description**: The **`ExecutorService`** API was enhanced in Java 8 to support more flexible and efficient handling of concurrency tasks. A number of new methods were added to handle parallel tasks better.
  
- **Key Features**:
  - The **`Executor`** and **`ExecutorService`** interfaces are part of a high-level API that abstracts away low-level thread management.
  - New methods like **`invokeAll()`**, **`invokeAny()`**, and **`submit()`** provide more options for managing tasks.
  
- **Example**:
  ```java
  ExecutorService executorService = Executors.newFixedThreadPool(4);
  executorService.submit(() -> {
      System.out.println("Task executed in a pool thread");
  });
  executorService.shutdown();
  ```

- **Use Case**:
  - **`ExecutorService`** is ideal for running multiple tasks in parallel without manually managing threads.
  - **`invokeAll()`** and **`invokeAny()`** allow you to wait for tasks to finish or obtain results from multiple tasks at once, providing higher-level concurrency control.

---

### 5. **`StampedLock` (Java 8)**
- **Description**: The **`StampedLock`** class was introduced to provide a more flexible and high-performance lock mechanism compared to traditional **`ReentrantLock`**. It offers three modes of locking:
  - **Write Lock**: Exclusive lock for writing.
  - **Read Lock**: Shared lock for reading.
  - **Optimistic Lock**: Allows reading without blocking and checks if the lock was modified after reading.
  
- **Key Features**:
  - **Optimistic Locking**: Allows a read operation to proceed without blocking, but it checks whether the data has been modified after the read. If modified, the read operation is retried.
  - **Lock Downgrading**: A thread can acquire a write lock and then downgrade to a read lock.

- **Example**:
  ```java
  StampedLock lock = new StampedLock();
  long stamp = lock.readLock();
  try {
      // perform read operation
  } finally {
      lock.unlockRead(stamp);
  }
  ```

- **Use Case**:
  - **Optimistic reads**: Where reads are frequent and can be performed without acquiring a full lock, improving performance.
  - **High contention scenarios**: Where different threads may want to read and write concurrently, but using traditional locks would introduce too much overhead.

---

### 6. **`Parallel Streams` (Java 8)**
- **Description**: Java 8 added **parallel streams** to the **Stream API**. You can now convert a sequential stream to a parallel stream using the `parallel()` method, which allows operations on large datasets to be performed concurrently across multiple threads.

- **Key Features**:
  - **Easy Parallelization**: Simply call `.parallel()` on a stream to parallelize it.
  - **Efficient Use of CPU Cores**: Stream operations can now be parallelized using available CPU cores, improving performance for large-scale data processing.

- **Example**:
  ```java
  List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);
  int sum = numbers.parallelStream().mapToInt(Integer::intValue).sum();
  System.out.println(sum);  // Output: 21 (calculated in parallel)
  ```

- **Use Case**:
  - Ideal for **data parallelism** when processing large collections of data, such as in map-reduce-like operations.
  - Can be used for aggregating results from large datasets, such as computing the sum, average, or other statistics in parallel.

---

### 7. **`@Async` (Spring Framework)**
- **Description**: Although not part of the core Java library, **`@Async`** (in Spring) provides an easy way to handle asynchronous tasks in Java. It is often used with Spring’s concurrency management tools for executing methods asynchronously in a background thread.
  
- **Key Features**:
  - **Declarative Asynchronous Execution**: Mark methods with `@Async` and Spring will execute them asynchronously.
  - **Thread Pool Management**: Spring can automatically handle thread pools, making it easier to manage background tasks.

- **Use Case**:
  - Ideal for applications that use the Spring framework and need to execute tasks asynchronously (like sending email notifications, processing data in the background, etc.).

---

### Summary of New Concurrency Features in Java 8:

| **Feature**                          | **Description**                                                                                  | **Use Case**                                                                                             |
|--------------------------------------|--------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| **`CompletableFuture`**              | Provides a way to handle asynchronous tasks with callbacks, composing multiple futures.          | Asynchronous processing, managing complex workflows and chaining dependent tasks.                        |
| **`ForkJoinPool` and Parallel Streams** | Parallel processing of tasks using a work-stealing algorithm, leveraging available CPU cores.    | Data parallelism, large-scale computations, optimizing multi-core performance.                          |
| **Lambda Expressions and `@FunctionalInterface`** | Allows passing behavior (e.g., tasks) as parameters.                                              | Simplifies asynchronous tasks like submitting jobs to executors, processing results with lambda expressions. |
|**`ExecutorService` Enhancements**   | Higher-level abstractions to manage concurrency and parallelism.                                 | Running multiple concurrent tasks, managing thread pools, handling long-running or IO-bound tasks.      |
| **`StampedLock`**                    | A more flexible locking mechanism with optimistic reading and lock downgrading.                  | High contention situations, where reads are frequent, and you want efficient locking.                    |
| **Parallel Streams**                 | Parallelization of stream operations using multiple threads to improve performance.              | Processing large collections in parallel, such as summing values, filtering large datasets.              |
| **`@Async` in Spring Framework**     | Annotations for executing methods asynchronously, with thread management handled by Spring.       | Background task execution in Spring-based applications, such as asynchronous notifications or data processing. |

These updates in the **Java 8 Concurrency API** provide modern tools to simplify and improve parallel processing, asynchronous programming, and multi-threaded applications. They make it easier to write more efficient, readable, and scalable concurrent code.

---
In **Java 8 and later versions**, several significant changes and improvements were introduced to the **Thread API** and concurrency mechanisms. These changes focus on making multithreading more efficient, easier to manage, and more flexible. Below is an overview of key updates and changes related to **Thread** and thread management in **Java 8** and beyond.

---

### 1. **`Thread` API Enhancements**
In Java 8 and beyond, while the core `Thread` class didn't receive major changes, several important features in the **Concurrency API** made it easier to manage and control threads. Here are some of the improvements:

---

### 2. **`CompletableFuture` and `ExecutorService`**
Although `Thread` itself didn't have major new methods, the introduction of **`CompletableFuture`** and the enhanced **`ExecutorService`** API provided better abstractions for managing concurrent tasks and executing threads asynchronously.

#### **Key Features**:
- **`CompletableFuture`** provides an easy way to write non-blocking, asynchronous code that can be chained and combined, providing better handling of threads compared to directly managing `Thread` instances.
- **`ExecutorService`** provides better thread pooling and management compared to manually creating and starting `Thread` instances. 

#### **Usage**:
Instead of manually managing threads, developers are encouraged to use `ExecutorService` to submit tasks or `CompletableFuture` to handle asynchronous computations.

**Example**:
```java
ExecutorService executorService = Executors.newFixedThreadPool(2);

// Submitting a task to the ExecutorService
executorService.submit(() -> {
    System.out.println("Task is running on thread: " + Thread.currentThread().getName());
});

// Creating a CompletableFuture for asynchronous execution
CompletableFuture<Void> future = CompletableFuture.runAsync(() -> {
    System.out.println("Asynchronous task executed");
});
```

---

### 3. **`ForkJoinPool` (Java 8)**
The **`ForkJoinPool`** was introduced as a more efficient mechanism for parallel execution of tasks that can be recursively split into smaller sub-tasks. It is used internally by **`Stream.parallel()`** and **`CompletableFuture`**, making it easier to parallelize computations without manually handling threads.

#### **Key Features**:
- **Work-Stealing**: ForkJoinPool uses a work-stealing algorithm to ensure that idle threads can "steal" work from other busy threads, improving CPU utilization.
- **Parallelism for Recursive Tasks**: Suitable for tasks that can be divided into smaller subtasks recursively (e.g., divide-and-conquer algorithms).
  
#### **Usage**:
The `ForkJoinPool` is typically used when you need to execute tasks that can be broken down into smaller sub-tasks. When you use **parallel streams**, **`CompletableFuture`**, or **`Stream.parallel()`**, the `ForkJoinPool` is used internally for task execution.

**Example**:
```java
ForkJoinPool forkJoinPool = new ForkJoinPool();

forkJoinPool.submit(() -> {
    // Some parallel task
    System.out.println("Task executed by ForkJoinPool: " + Thread.currentThread().getName());
});
```

---

### 4. **`ThreadLocal` Enhancements (Java 8)**
In Java 8, **`ThreadLocal`** continued to provide a mechanism for creating variables that are local to each thread, ensuring that each thread has its own isolated copy of a variable. This concept is very useful when dealing with multi-threaded applications, especially for storing user sessions, database connections, etc., without risk of data corruption or race conditions.

#### **Key Features**:
- **Thread-Specific Data**: Ensures that each thread has a separate, independent copy of the variable, making it thread-safe.
- **Use in parallel tasks**: With the advent of parallel streams and other parallelization mechanisms in Java 8, `ThreadLocal` is useful for maintaining thread-specific states.

**Example**:
```java
ThreadLocal<Integer> threadLocal = ThreadLocal.withInitial(() -> 1);

Runnable task = () -> {
    System.out.println("ThreadLocal Value: " + threadLocal.get());
};

Thread thread1 = new Thread(task);
Thread thread2 = new Thread(task);

thread1.start();
thread2.start();
```

---

### 5. **Lambda Expressions and the `Executor` API (Java 8)**
Java 8 introduced **lambda expressions** and **functional interfaces**, which allowed for more concise and expressive handling of threads and tasks. This makes it easier to pass behavior as parameters to thread-executing methods, such as those in the **`ExecutorService`** or **`ThreadPoolExecutor`**.

#### **Key Features**:
- **Simplified Syntax**: Lambda expressions make the syntax for creating threads or submitting tasks to an executor more concise and readable.
- **Functional Style**: The introduction of functional programming elements made it easier to handle concurrency in a more declarative style.

**Example**:
```java
ExecutorService executor = Executors.newFixedThreadPool(2);

// Using a lambda to submit a task
executor.submit(() -> {
    System.out.println("Task executed by: " + Thread.currentThread().getName());
});
```

---

### 6. **`@FunctionalInterface` and Lambda in `ExecutorService` (Java 8)**
The **`@FunctionalInterface`** annotation was introduced in Java 8 to indicate that an interface is designed to be used with lambda expressions. In combination with lambda expressions, this annotation simplifies the implementation of asynchronous tasks and thread management. The **`Runnable`** and **`Callable`** interfaces in the `java.util.concurrent` package are functional interfaces and can be used easily with lambdas.

#### **Key Features**:
- **Lambda-based Task Submission**: Allows you to submit `Runnable` or `Callable` tasks using lambda expressions to `ExecutorService`.
- **Cleaner Code**: Reduces boilerplate code for thread management by using functional programming concepts.

**Example**:
```java
ExecutorService executor = Executors.newCachedThreadPool();

// Using lambda expressions to submit tasks
executor.submit(() -> {
    System.out.println("Task executed by: " + Thread.currentThread().getName());
});
```

---

### 7. **`@Async` and Spring Framework (Java 8 and later)**
While not part of the core Java libraries, the **`@Async`** annotation in the Spring Framework allows for declarative asynchronous task execution. When applied to methods, Spring will automatically run the method asynchronously in a separate thread from the main application thread.

#### **Key Features**:
- **Simplified Asynchronous Execution**: Easily execute methods asynchronously without manually managing threads.
- **Thread Pool Management**: Spring manages the thread pool, so developers don’t need to worry about thread creation or management.

**Example**:
```java
@Service
public class MyService {
    @Async
    public void asyncMethod() {
        System.out.println("Asynchronous task running in thread: " + Thread.currentThread().getName());
    }
}
```

---

### 8. **`Virtual Threads` (Java 19 - Project Loom)**
While this feature is not yet fully part of the Java 8 API, **`Virtual Threads`** is an exciting new concurrency model introduced with **Project Loom** in Java 19. Virtual threads are lightweight, user-mode threads that aim to simplify the development of concurrent applications.

#### **Key Features**:
- **Extremely Lightweight**: Virtual threads consume much less memory and resources compared to traditional Java threads.
- **Massive Scalability**: Virtual threads allow you to create thousands or even millions of concurrent threads with minimal overhead.
- **Integration with Existing APIs**: Virtual threads are designed to work seamlessly with existing concurrency APIs like `ExecutorService` and `ForkJoinPool`.

**Usage Example (Java 19+)**:
```java
Executor executor = Executors.newVirtualThreadPerTaskExecutor();

executor.execute(() -> {
    System.out.println("Task executed in virtual thread: " + Thread.currentThread().getName());
});
```

---

### 9. **Thread Pools and `newFixedThreadPool` (Java 8 and later)**
The **`newFixedThreadPool()`** method was enhanced in Java 8 to better handle concurrent task execution. It allows for thread reuse, ensuring that there is a fixed number of threads available to execute tasks, and the threads are recycled rather than created from scratch for each task.

#### **Key Features**:
- **Efficient Resource Usage**: A fixed number of threads are used to execute tasks, which helps optimize CPU and memory usage.
- **Task Scheduling**: Thread pools make it easier to manage the execution of large numbers of concurrent tasks by queuing tasks and executing them with a fixed number of threads.

**Example**:
```java
ExecutorService executor = Executors.newFixedThreadPool(4);
executor.submit(() -> System.out.println("Task executed by: " + Thread.currentThread().getName()));
```

---

### Summary of Key Thread-Related Changes:
| **Feature**                        | **Description**                                                                 | **Use Case**                                                                                                                                         |
|------------------------------------|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| **`CompletableFuture`**            | Simplifies asynchronous programming and task chaining.                           | Asynchronous task handling, non-blocking code execution.                                                                                           |
| **`ForkJoinPool`**                 | Efficient parallel task execution with work-stealing.                            | Recursive parallel tasks, divide-and-conquer algorithms, parallel stream processing.                                                                |
| **Lambda Expressions**            | Allows passing behavior (task execution) more concisely to executors or threads. | Simplifies thread execution and task submission using functional programming techniques.                                                            |
| **`ThreadLocal`**                  | Thread-specific storage for variables.                                          | Managing thread-local data, such as user sessions or database connections.                                                                         |
| **`@

Async` (Spring)**              | Simplifies asynchronous method execution using annotations.                    | Background tasks in Spring-based applications, such as sending notifications or processing data asynchronously.                                      |
| **`Virtual Threads` (Java 19)**   | Lightweight threads for massive concurrency.                                    | Highly scalable concurrent applications that require large numbers of threads with low overhead.                                                   |
| **`newFixedThreadPool`**           | Fixed-size thread pool for managing concurrent tasks.                           | Efficient thread pool management, optimized resource use when processing large numbers of tasks.                                                     |

---

In summary, the main focus of Java's thread-related enhancements in recent versions has been on **simplifying thread management**, **improving resource efficiency**, and **introducing new concurrency models** like **virtual threads** in Java 19 to handle massive concurrency with minimal overhead. These changes make it easier for developers to write scalable, efficient, and maintainable concurrent applications.

---
Java 21, released in **September 2023**, brought several new features and enhancements to the language, the JVM, and the overall development ecosystem. It is a **Long-Term Support (LTS)** release, meaning it will receive extended support from Oracle, making it a popular choice for enterprise applications.

Here’s a comprehensive overview of the key new features, changes, and improvements introduced in **Java 21**:

---

### 1. **Virtual Threads (Project Loom)**
- **Description**: The long-awaited **Virtual Threads** feature, introduced as part of **Project Loom**, was finalized in Java 21. Virtual threads are lightweight, user-mode threads that allow for massive concurrency with minimal overhead. They are designed to scale to millions of threads efficiently, providing a simpler and more scalable model for managing concurrency compared to traditional platform threads.
  
- **Key Features**:
  - **Lightweight Threads**: Virtual threads are much lighter than traditional threads, enabling developers to handle a much larger number of concurrent tasks.
  - **Seamless Integration**: Virtual threads are fully compatible with existing `java.util.concurrent` APIs and the `ExecutorService`, making it easier to migrate from traditional threads.
  - **Massive Scalability**: Virtual threads are optimized to handle millions of concurrent tasks with minimal overhead.

- **Use Case**:
  - Ideal for applications that need to manage thousands or millions of concurrent tasks (e.g., high-performance web servers, network I/O-bound applications).
  
- **Example**:
  ```java
  Executor executor = Executors.newVirtualThreadPerTaskExecutor();

  executor.execute(() -> {
      System.out.println("Task executed in virtual thread: " + Thread.currentThread().getName());
  });
  ```

---

### 2. **Scoped Values (Preview)**
- **Description**: **Scoped Values** are a new feature in Java 21 introduced as a **preview feature** that helps manage data that is only accessible within the scope of a specific thread or task. This feature is related to **Project Loom**, and it is designed to complement virtual threads by providing an easier and more effective way to handle shared data in a highly concurrent environment.

- **Key Features**:
  - **Data Scoping**: Scoped values allow data to be safely shared within the scope of a thread or task, preventing issues related to thread-local variables or improper sharing.
  - **Lightweight and Efficient**: Unlike traditional thread-local storage, scoped values can be used in virtual threads without incurring significant overhead.

- **Use Case**:
  - Useful for managing task-specific state in a more structured and less error-prone way than using `ThreadLocal` variables.
  
---

### 3. **Record Patterns (Preview)**
- **Description**: **Record Patterns**, introduced as a preview feature, allow developers to use **pattern matching** with **records**. This feature enables more expressive and concise code when deconstructing record objects, providing a more flexible way to match and extract data from records.

- **Key Features**:
  - **Enhanced Pattern Matching**: Allows using patterns to match records in `switch` statements and `if` expressions.
  - **Concise Deconstruction**: Simplifies extracting and using data from record objects, making code more readable and less error-prone.

- **Use Case**:
  - Useful in scenarios where you need to destructure records in a more readable and maintainable way.
  
- **Example**:
  ```java
  record Point(int x, int y) {}

  static void printPoint(Object obj) {
      switch (obj) {
          case Point(int x, int y) -> System.out.println("Point at (" + x + ", " + y + ")");
          default -> System.out.println("Unknown object");
      }
  }
  ```

---

### 4. **Foreign Function & Memory API (Incubator)**
- **Description**: The **Foreign Function & Memory API** continues its evolution in Java 21, moving towards a more stable state. This API allows Java programs to interact with native code (e.g., C or C++) and allocate memory outside the JVM heap in a more efficient, safe, and platform-independent way.

- **Key Features**:
  - **Native Memory Access**: The API provides direct, managed access to native memory, allowing Java programs to efficiently work with native code and resources.
  - **Interoperability with Native Code**: It makes calling native functions from Java more straightforward and less error-prone, without requiring JNI (Java Native Interface).
  - **Performance**: Offers better performance when working with native code or large datasets by avoiding the overhead of the JVM heap.

- **Use Case**:
  - Ideal for scenarios where Java programs need to interact with native libraries, perform low-level memory manipulation, or optimize I/O operations.

---

### 5. **String Templates (Preview)**
- **Description**: **String Templates** (Preview feature) provide a new way to embed expressions directly inside string literals. This allows for more readable and concise string construction, especially when incorporating variables or expressions within a string.

- **Key Features**:
  - **Template Literals**: Allows embedding expressions and variables directly inside string literals, simplifying the construction of dynamic strings.
  - **Improved Readability**: Eliminates the need for concatenating strings with `+` operators or using `String.format()`.

- **Use Case**:
  - Simplifies string formatting and reduces boilerplate when embedding variables or expressions in strings.
  
- **Example**:
  ```java
  String name = "Alice";
  int age = 30;
  String message = STR."Hello, my name is {name} and I am {age} years old.";
  System.out.println(message);  // Output: Hello, my name is Alice and I am 30 years old.
  ```

---

### 6. **New macOS Rendering Pipeline**
- **Description**: Java 21 introduces a new **macOS rendering pipeline** based on **Apple's Metal framework**. This improves the performance and responsiveness of Java applications on macOS, particularly for graphical user interface (GUI) applications using JavaFX.

- **Key Features**:
  - **Improved Performance**: Provides better performance for Java applications on macOS, leveraging Apple's native graphics capabilities.
  - **Enhanced JavaFX Support**: Optimizes JavaFX applications, particularly those that require rich graphics and UI rendering.

- **Use Case**:
  - Optimizes Java GUI applications running on macOS, especially those using JavaFX for rich user interfaces.

---

### 7. **JEP 405: Record Patterns (Preview)**
- **Description**: This feature extends **pattern matching** to **records**, allowing more efficient destructuring and data access within `switch` statements and conditional logic.

- **Key Features**:
  - **Deconstruct Records**: With record patterns, records can be deconstructed more easily in `switch` statements and other pattern matching contexts.
  - **Simplified Code**: This leads to more concise and readable code when working with record types.

---

### 8. **JEP 432: JDK Enhancement-Proposal (JEP) 432: Lightweight Concurrency**
- **Description**: This JEP introduces the concept of **lightweight concurrency** by improving how concurrency works in Java, particularly with virtual threads. It aims to make multi-threading and concurrency in Java easier to use and scale efficiently.

- **Key Features**:
  - **Scalable Concurrency**: Enables handling of high numbers of threads with minimal overhead by supporting virtual threads.
  - **Simplified APIs**: Makes concurrency models easier to use and understand.

---

### 9. **JEP 422: Foreign Function & Memory API (Incubator)**
- **Description**: Continues to evolve the **Foreign Function & Memory API** by improving its safety and performance features for better interoperability with native code.

---

### Summary of Key Features in **Java 21**:

| **Feature**                                  | **Description**                                                                                      | **Use Case**                                                                                                           |
|----------------------------------------------|------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| **Virtual Threads (Project Loom)**           | Lightweight threads for massive scalability and concurrency.                                           | High-concurrency applications, scalable network servers, and applications requiring large numbers of threads.          |
| **Scoped Values (Preview)**                  | Allows scoping of data to threads or tasks, making it easier to manage task-specific data.            | Managing thread/task-specific state in high-concurrency environments.                                                |
| **Record Patterns (Preview)**                | Pattern matching for records, enabling concise data deconstruction.                                  | Simplifying code when working with records in pattern matching scenarios.                                            |
| **Foreign Function & Memory API (Incubator)**| Access to native memory and functions outside the JVM.                                                | Interfacing with native code, optimizing low-level memory manipulation, and working with native libraries.             |
| **String Templates (Preview)**               | Allows embedding expressions inside strings for more readable dynamic strings.                        | Simplifies string construction with variables or expressions.                                                        |
| **macOS Rendering Pipeline**                 | A new graphics pipeline for better performance on macOS using the Metal framework.                    | Optimizing Java GUI applications, especially with JavaFX, on macOS.                                                   |
| **JEP 432: Lightweight Concurrency**         | Enhances concurrency models with virtual threads for better scalability.                              | Improving concurrent programming with millions of lightweight threads.                                                |

---

### Conclusion:
Java 21 introduces several exciting new features that significantly improve concurrency (via **Virtual Threads** and **Scoped Values**), enhance language expressiveness (with **Record Patterns** and **String Templates**), and optimize cross-platform performance (with the **macOS Rendering Pipeline**). These improvements pave the way for building more scalable, efficient, and modern Java applications. As a **Long-Term Support (LTS)** release, Java 21 is expected to be a popular choice for enterprises seeking to leverage these features in production environments.

---

The **`java.util.Collection`** framework in Java has evolved between **Java 8** and **Java 21**, with several new features, improvements, and enhancements that have made it more powerful, flexible, and easier to use. Below is an overview of the key updates and changes in the **`java.util.Collection`** framework across these versions.

---

### Key Changes in **`java.util.Collection`** Framework from **Java 8 to Java 21**

| **Java Version** | **Feature/Enhancement**                                                                                       | **Description**                                                                                          | **Use Case**                                                                                                     |
|------------------|----------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| **Java 8**       | **Stream API Integration**                                                                                     | Introduced the **Stream** API for `Collection` classes. It allows you to process collections in a functional, declarative style. | Provides powerful data manipulation and transformation operations like filtering, mapping, and reducing.         |
| **Java 8**       | **`forEach()` method**                                                                                         | The `forEach()` method was added to the `Collection` interface, enabling an easier way to iterate over elements. | Simplifies iteration over collections without the need for explicit loops.                                        |
| **Java 8**       | **`removeIf()` method**                                                                                        | Added the `removeIf()` method to remove elements based on a given predicate.                             | Allows for easy removal of elements from a collection based on conditional logic.                                |
| **Java 8**       | **`Spliterator` interface**                                                                                     | Introduced `Spliterator` as a way to traverse and partition data in collections, enabling parallel processing. | Facilitates parallel stream processing and advanced collection traversal.                                        |
| **Java 9**       | **`List.copyOf()` and `Set.copyOf()` methods**                                                                 | Introduced methods to create immutable copies of lists and sets.                                           | Provides a convenient way to create immutable collections that cannot be modified.                               |
| **Java 9**       | **`TakeWhile()`, `DropWhile()` methods**                                                                       | Added methods for conditional filtering and processing of elements.                                       | Allows for lazy evaluation of elements that match certain conditions, especially in streams.                    |
| **Java 9**       | **`Immutable Collections`**                                                                                     | Added more support for immutable collections such as `Set`, `List`, and `Map`.                           | Makes it easier to work with immutable collections, enhancing code safety and performance.                       |
| **Java 10**      | **`var` keyword**                                                                                              | Introduced local-variable type inference (`var`) which simplifies the declaration of local variables.      | Simplifies code when declaring collection variables, removing the need for explicit type declarations.            |
| **Java 11**      | **`Collection.toArray()` improvements**                                                                         | Improved `toArray()` methods to make them more flexible, allowing the use of custom array types.           | Helps in converting a collection into an array more effectively, especially when you need to specify a custom array type. |
| **Java 12**      | **`Collections.unmodifiableList()` improvements**                                                               | Enhanced the unmodifiable collections to support additional collection types.                             | Better support for creating immutable views of various collection types.                                        |
| **Java 14**      | **`toArray(IntFunction)` method in `Collection`**                                                                | Added a new `toArray()` method which accepts an `IntFunction` to create an array of a specific type.       | Helps in generating arrays of the correct type when converting collections to arrays.                           |
| **Java 15**      | **`List.of()` improvements**                                                                                    | List introduced the ability to create unmodifiable lists directly with `List.of()` for 0 to N elements.     | Simplifies creation of unmodifiable lists in a concise and readable manner.                                      |
| **Java 16**      | **`Set.copyOf()` for all collections**                                                                          | Introduced the `copyOf()` method for **Set**, providing a more concise way to create immutable sets.        | Convenient method for creating unmodifiable sets from any collection or array.                                 |
| **Java 17**      | **`Stream.toList()`**                                                                                           | Introduced `Stream.toList()` to return an immutable list from a stream.                                    | Simplifies conversion of a stream back into an immutable list directly.                                          |
| **Java 18**      | **`Map.of()` API enhancements**                                                                                 | Introduced more flexible methods like `Map.ofEntries()` to create immutable maps.                         | Easier creation of immutable maps in a concise way (especially for small maps).                                 |
| **Java 19**      | **`Vector API` (Incubator)**                                                                                    | Introduced the **Vector API** (incubated) that allows for vectorized operations over collections and arrays. | Optimizes data processing tasks, like sorting or filtering, that can benefit from vectorized hardware operations. |
| **Java 21**      | **`Collection.stream()` improvements**                                                                          | Enhanced the stream API to work more efficiently with collections, supporting parallel operations on collections. | Better support for parallel stream processing and more efficient collection operations.                          |
| **Java 21**      | **`Spliterator` API improvements**                                                                               | Introduced more robust and efficient `Spliterator` implementations, particularly for large collections.      | Optimized parallel processing and improved support for large data sets.                                          |
| **Java 21**      | **Collection interface enhancements**                                                                            | Introduced more fine-grained control over collection behaviors, such as better thread-safety in certain implementations. | Enables greater flexibility and performance in concurrent collection operations.                                |

---

### Detailed Breakdown of Key Changes:

#### **Java 8: Stream API, `forEach`, and `removeIf`**

1. **Stream API**:
   - Java 8 introduced the **Stream API**, allowing collections to be processed in a functional style. This allows operations like filtering, mapping, and reducing elements more declaratively. Streams are also designed to take advantage of multi-core processors by enabling parallel processing.

   - Example:
     ```java
     List<String> names = List.of("Alice", "Bob", "Charlie");
     names.stream().filter(name -> name.startsWith("A")).forEach(System.out::println);
     ```

2. **`forEach()` method**:
   - The `forEach()` method, added to the `Collection` interface, simplifies iteration over collections using lambdas or method references.

   - Example:
     ```java
     List<String> names = List.of("Alice", "Bob", "Charlie");
     names.forEach(System.out::println);
     ```

3. **`removeIf()` method**:
   - The `removeIf()` method allows for removing elements from a collection that match a given predicate, simplifying the process compared to using explicit iteration.

   - Example:
     ```java
     List<String> names = new ArrayList<>(List.of("Alice", "Bob", "Charlie"));
     names.removeIf(name -> name.startsWith("A"));
     System.out.println(names); // Output: [Bob, Charlie]
     ```

#### **Java 9: Immutable Collections and New Methods**

1. **`List.copyOf()` and `Set.copyOf()`**:
   - These methods create immutable copies of collections, which means the collections cannot be modified after they are created. This improves safety in multithreaded environments or when immutability is a requirement.

   - Example:
     ```java
     List<String> immutableList = List.copyOf(Arrays.asList("A", "B", "C"));
     ```

2. **`TakeWhile()` and `DropWhile()`**:
   - These methods allow for more flexible collection processing. `takeWhile()` processes elements while a condition is true, and `dropWhile()` skips elements until a condition is met.

   - Example:
     ```java
     List<Integer> numbers = List.of(1, 2, 3, 4, 5);
     numbers.stream().takeWhile(n -> n < 4).forEach(System.out::println); // Output: 1, 2, 3
     ```

#### **Java 11 and Beyond: Enhancements to Collection Handling**

1. **`Collection.toArray()`**:
   - In Java 11, the `toArray()` method was enhanced to allow for better array creation with the correct type.

   - Example:
     ```java
     List<String> list = List.of("A", "B", "C");
     String[] array = list.toArray(String[]::new);
     ```

2. **`Stream.toList()` (Java 17)**:
   - `Stream.toList()` was added in Java 17 to easily collect elements from a stream into an immutable list.

   - Example:
     ```java
     List<String> list = Stream.of("A", "B", "C").toList();
     ```

3. **`Map.ofEntries()` (Java 18)**:
   - Java 18 enhanced the ability to create immutable maps with the `Map.ofEntries()` method, making it more convenient to create small immutable maps.

   - Example:
     ```java
     Map<String, Integer> map = Map.ofEntries(
         Map.entry("A", 1),
         Map.entry("B", 2)
     );
     ```

#### **Java 21: Continued Enhancements and New Features**

1. **Stream API Enhancements**:
   - Java 21 includes improvements to the stream API, enabling more efficient parallel stream processing and optimizations for large data sets.

2. **Spliterator Improvements**:
   - The `Spliterator` API, used to traverse and partition collections, has seen optimizations, especially for large collections, enhancing performance for parallel operations.

---

### Conclusion:
The **`java.util.Collection`

** framework has undergone significant improvements and additions from **Java 8** to **Java 21**. The introduction of **Streams** and **functional-style processing**, along with **immutable collections** and **enhanced iteration methods**, has transformed the way Java developers work with collections. Each new version has brought more expressive methods, parallel processing capabilities, and better support for **concurrent** and **immutable** collections. Java 21 continues to refine these features, making Java collections even more powerful and efficient.

---

The **`Executor`** and **`ExecutorService`** framework in Java is a key part of the **java.util.concurrent** package that simplifies thread management and concurrency handling. Starting from **Java 5**, the **`Executor`** framework provided a way to decouple task submission from the mechanics of how each task will be executed. Over the years, Java has introduced several updates to enhance and refine the **Executor** framework, especially between **Java 8** and **Java 21**.

Here's an overview of the **`Executor`** and **`ExecutorService`** updates in Java from **Java 8** to **Java 21**.

---

### Key Updates in **`Executor`** and **`ExecutorService`** from **Java 8 to Java 21**

| **Java Version** | **Feature/Enhancement**                                                                            | **Description**                                                                                      | **Use Case**                                                                                                  |
|------------------|---------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| **Java 8**       | **`CompletableFuture`**                                                                            | Added the `CompletableFuture` class to provide a more flexible and powerful way to work with asynchronous tasks. | Simplifies the handling of asynchronous tasks with non-blocking APIs, chaining, and combining multiple futures. |
| **Java 8**       | **`ExecutorService.submit()` with Callable and Runnable**                                          | Enhanced `submit()` to support both `Runnable` and `Callable` tasks, enabling tasks with return values.   | Allows submitting both blocking (e.g., `Callable`) and non-blocking (e.g., `Runnable`) tasks to the executor.    |
| **Java 8**       | **`ExecutorService.invokeAll()` and `invokeAny()`**                                               | Introduced better handling of multiple tasks submission. `invokeAll()` waits for all tasks to complete, while `invokeAny()` returns when any one task completes. | Useful for managing bulk tasks where you want to wait for all or any task completion.                         |
| **Java 9**       | **`Executors.newWorkStealingPool()`**                                                              | Introduced the `newWorkStealingPool()` method which provides a work-stealing thread pool.               | Ideal for parallel processing workloads that are split into independent tasks.                               |
| **Java 10**      | **`var` keyword (local variable type inference)**                                                  | Introduced the `var` keyword, making the usage of local variables (including Executor-related variables) cleaner and more concise. | Simplifies the code when declaring `ExecutorService` or `Executor` variables.                                |
| **Java 11**      | **`ExecutorService.shutdownNow()` improvements**                                                  | Improved the behavior of `shutdownNow()`, ensuring that the task interruption handling was more predictable. | Provides a more reliable way to shut down tasks that are actively executing.                                 |
| **Java 12**      | **`ExecutorService` improvements for `shutdown()` and task management**                            | Improved task shutdown behavior for greater flexibility in managing the lifecycle of tasks and executors. | Ensures cleaner shutdown behavior and improved handling of background tasks.                                 |
| **Java 14**      | **`ExecutorService` and performance improvements**                                                | Focused on internal performance optimizations related to thread pools and task scheduling efficiency.     | Enhances overall performance of thread pooling in multi-threaded applications.                               |
| **Java 15**      | **JEP 376: ZGC (Z Garbage Collector)** - Impact on `ExecutorService` management                      | The introduction of ZGC in Java 15 made improvements to low-latency memory management for `ExecutorService`. | Reduced GC pauses for applications using `ExecutorService` for low-latency, high-throughput tasks.             |
| **Java 16**      | **`Executors.newSingleThreadExecutor()` improvements**                                             | Simplified creating single-threaded executors for sequential task execution.                           | Better support for serial execution of tasks with automatic task scheduling and synchronization.            |
| **Java 17**      | **Improvements to `ExecutorService.submit()`**                                                     | Added better support for the submission of `Runnable` and `Callable` tasks, with improved exception handling. | More robust task submission and better error handling during task execution.                                 |
| **Java 18**      | **`ExecutorService` optimizations for I/O-bound tasks**                                            | Focused on I/O-bound task optimizations, especially when tasks are dependent on external resources.      | Optimizing `ExecutorService` for applications dealing with significant I/O-bound workloads (e.g., networking).  |
| **Java 19**      | **`ExecutorService` support for virtual threads (preview)**                                         | Introduced support for **virtual threads**, providing more lightweight and efficient task execution.     | Virtual threads allow handling many more concurrent tasks with minimal overhead, ideal for scalable systems.    |
| **Java 21**      | **`JEP 428: Structured Concurrency` (Preview)**                                                    | Introduced **structured concurrency** to simplify multithreaded programming by making it easier to manage tasks and handle their lifecycle. | Enables better handling of multiple threads/tasks within a structured and controlled scope.                   |

---

### Detailed Breakdown of Key Updates:

#### **Java 8: `CompletableFuture`, `ExecutorService.submit()`, and `invokeAll()`/`invokeAny()`**

1. **`CompletableFuture`**:
   - Java 8 introduced **`CompletableFuture`** to provide a more powerful alternative to `Future` for handling asynchronous programming. It allows you to asynchronously handle results and exceptions, chain computations, and combine multiple futures.

   - Example:
     ```java
     ExecutorService executor = Executors.newFixedThreadPool(2);
     CompletableFuture<Integer> future = CompletableFuture.supplyAsync(() -> {
         return 42;  // Simulate a long-running task
     }, executor);

     future.thenApply(result -> result * 2)
           .thenAccept(result -> System.out.println("Result: " + result));
     ```

2. **`ExecutorService.submit()`**:
   - The `submit()` method now supports both `Runnable` (no return value) and `Callable` (with return value). This was a significant update to enhance flexibility in task submission.
   
   - Example with `Callable`:
     ```java
     ExecutorService executor = Executors.newFixedThreadPool(2);
     Callable<Integer> task = () -> 42;
     Future<Integer> future = executor.submit(task);
     ```

3. **`ExecutorService.invokeAll()` and `invokeAny()`**:
   - **`invokeAll()`** executes a collection of tasks and waits for all to finish, returning a list of `Future` objects. **`invokeAny()`** executes tasks and returns the result of the first task that completes successfully, canceling the others.

   - Example:
     ```java
     List<Callable<Integer>> tasks = Arrays.asList(
         () -> 1, () -> 2, () -> 3
     );
     List<Future<Integer>> results = executor.invokeAll(tasks);
     ```

#### **Java 9: `newWorkStealingPool()`**

1. **`newWorkStealingPool()`**:
   - Java 9 introduced a new type of thread pool, **work-stealing pool**, which is designed for parallel processing tasks that can be split into smaller subtasks. It enables better load balancing and improves performance for certain parallel applications.

   - Example:
     ```java
     ExecutorService executor = Executors.newWorkStealingPool();
     ```

#### **Java 10: `var` Keyword for Executor Variables**

1. **`var` Keyword**:
   - The `var` keyword, introduced in Java 10, allows local variable type inference, making code more concise. This is particularly useful for declaring `Executor` and `ExecutorService` variables.

   - Example:
     ```java
     var executor = Executors.newFixedThreadPool(2);
     ```

#### **Java 11: `shutdownNow()` Improvements**

1. **`shutdownNow()` Improvements**:
   - The `shutdownNow()` method was made more predictable and reliable for task interruption, ensuring that the tasks are stopped in a more consistent manner.

   - Example:
     ```java
     executor.shutdownNow();  // Stop all actively executing tasks
     ```

#### **Java 15: ZGC for ExecutorService Management**

1. **ZGC (Z Garbage Collector)**:
   - Java 15 introduced **ZGC**, a low-latency garbage collector that aims to reduce pause times in applications. This impacts `ExecutorService` by reducing GC overhead during task execution.

   - Example:
     - Tasks that involve heavy memory allocation and garbage collection benefit from ZGC's low-latency design.

#### **Java 19: Virtual Threads (Preview)**

1. **Virtual Threads**:
   - **Virtual threads** were introduced as a preview feature in Java 19. Virtual threads are lightweight threads that allow Java to handle many more concurrent tasks with much lower overhead compared to traditional platform threads.

   - Example:
     ```java
     ExecutorService executor = Executors.newVirtualThreadExecutor();
     executor.submit(() -> {
         // Handle asynchronous task
     });
     ```

   - This change greatly simplifies the management of massive numbers of concurrent tasks (e.g., HTTP request handling, file I/O) while reducing resource consumption.

#### **Java 21: Structured Concurrency (Preview)**

1. **Structured Concurrency**:
   - Java 21 introduced **structured concurrency**, which simplifies working with multiple threads by providing a more structured and predictable way to handle task lifecycles.

   - Example:
     ```java
     try (var executor = Executors.newVirtualThreadExecutor()) {
         executor.submit(() -> {/* Task 1 */});
         executor.submit(() -> {/* Task 2 */});
    

 }  // Executor is automatically shut down
     ```

   - This makes it easier to manage the start, waiting, and completion of tasks without manually managing thread lifecycles.

---

### Conclusion:
The **`Executor`** and **`ExecutorService`** framework has seen significant improvements from **Java 8 to Java 21**, particularly with the introduction of **`CompletableFuture`** for better asynchronous handling, **work-stealing pools**, and more efficient thread management tools such as **virtual threads** and **structured concurrency**. These updates provide developers with more powerful, efficient, and flexible tools for handling concurrency and parallelism in Java applications.

---

The **`Executor`** framework in Java, introduced in **Java 5**, has undergone several updates and enhancements over the years, particularly in versions from **Java 8** to **Java 21**. These updates aim to improve concurrency, simplify thread management, and optimize performance in multi-threaded applications. Below, I'll highlight the most important changes and updates in the **Executor framework** in recent Java versions.

---

### Key Updates in the **Executor Framework** from **Java 8 to Java 21**

| **Java Version** | **Feature/Enhancement**                                            | **Description**                                                                                          | **Use Case**                                                                                                 |
|------------------|--------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| **Java 8**       | **`CompletableFuture`**                                            | Introduced the **`CompletableFuture`** class to simplify asynchronous programming and support chaining of tasks. | Makes asynchronous tasks easier to manage with better control over completion, results, and exceptions.      |
| **Java 8**       | **`ExecutorService.submit()` with `Callable` and `Runnable`**        | The `submit()` method now supports both **`Runnable`** (no result) and **`Callable`** (with result).        | Allows task submission with or without return values.                                                        |
| **Java 8**       | **`ExecutorService.invokeAll()` and `invokeAny()`**                 | Methods for executing multiple tasks simultaneously and waiting for completion. **`invokeAll()`** waits for all tasks, **`invokeAny()`** returns when any task completes. | Useful for batch processing tasks, where you can wait for all or any task completion.                        |
| **Java 9**       | **`Executors.newWorkStealingPool()`**                              | Added a **work-stealing thread pool** for better load balancing across tasks and more efficient task execution in parallel processing scenarios. | Ideal for tasks that can be broken into independent subtasks and need efficient parallel processing.          |
| **Java 10**      | **`var` keyword (local variable type inference)**                   | The **`var`** keyword introduced for simplifying local variable declarations, especially in Executor-related code. | Makes code more concise when defining variables like **`ExecutorService`** or **`Executor`**.                |
| **Java 11**      | **`ExecutorService.shutdownNow()` improvements**                   | Enhanced **`shutdownNow()`** for more predictable task cancellation behavior and shutdown logic.            | More reliable task interruption and shutdown behavior when dealing with active tasks.                        |
| **Java 12**      | **Improved shutdown and task management**                          | More refined task management and improved lifecycle handling for tasks in **`ExecutorService`**.            | Better control over task execution, scheduling, and shutdown processes in multi-threaded environments.       |
| **Java 15**      | **ZGC (Z Garbage Collector) Impact on Executor**                   | **ZGC (Z Garbage Collector)** introduced low-latency garbage collection, reducing GC pauses and improving performance for tasks running in **`ExecutorService`**. | Optimizes **`ExecutorService`** in low-latency applications, especially when tasks involve significant memory operations. |
| **Java 16**      | **`Executors.newSingleThreadExecutor()` improvements**             | More streamlined creation and management of single-threaded executors for serial task execution.           | Ideal for tasks that must be executed in sequence (one at a time) while maintaining thread safety.            |
| **Java 17**      | **Improvements to `ExecutorService.submit()`**                      | Enhanced **`submit()`** method to provide more reliable and robust handling of exceptions and task results.  | Improved error handling when submitting tasks to **`ExecutorService`**.                                      |
| **Java 19**      | **Support for Virtual Threads (Preview)**                          | **Virtual threads** introduced as a preview feature for lightweight concurrency management. These threads significantly reduce resource consumption and overhead compared to platform threads. | Useful for applications needing to handle many concurrent tasks (e.g., microservices, HTTP servers, etc.).     |
| **Java 21**      | **`JEP 428: Structured Concurrency` (Preview)**                    | **Structured concurrency** introduced to simplify the use of multiple threads by managing their lifecycle within a structured scope. | Enhances code safety, improves thread management, and makes handling tasks across multiple threads easier.    |

---

### In-Depth Overview of Key Updates:

#### **1. Java 8: `CompletableFuture` & `ExecutorService.submit()`**

- **`CompletableFuture`**:
  - The **`CompletableFuture`** class was introduced in Java 8 to simplify handling asynchronous computations. It allows you to create asynchronous tasks, chain them, and handle their results or exceptions when they complete. It also supports non-blocking methods for joining results, applying functions, and combining futures.
  
  - **Example**:
    ```java
    ExecutorService executor = Executors.newFixedThreadPool(2);
    CompletableFuture<Integer> future = CompletableFuture.supplyAsync(() -> {
        return 42;
    }, executor);

    future.thenApply(result -> result * 2)
          .thenAccept(result -> System.out.println("Result: " + result));
    ```

- **`ExecutorService.submit()`**:
  - Java 8 enhanced **`submit()`** to handle both `Runnable` (no result) and `Callable` (with result). This makes task submission more flexible and enables returning values from background tasks.

  - **Example**:
    ```java
    ExecutorService executor = Executors.newFixedThreadPool(2);
    Callable<Integer> task = () -> 42;
    Future<Integer> future = executor.submit(task);
    ```

- **`ExecutorService.invokeAll()` and `invokeAny()`**:
  - **`invokeAll()`** is used to submit a collection of tasks and wait for all of them to complete, while **`invokeAny()`** returns as soon as one task completes, cancelling the others.
  
  - **Example**:
    ```java
    List<Callable<Integer>> tasks = Arrays.asList(
        () -> 1, () -> 2, () -> 3
    );
    List<Future<Integer>> results = executor.invokeAll(tasks);
    ```

#### **2. Java 9: `newWorkStealingPool()`**

- **`newWorkStealingPool()`**:
  - Java 9 introduced a **work-stealing thread pool**, which optimizes the execution of parallel tasks by allowing idle threads to "steal" work from busy threads. This leads to better load balancing when many tasks are executed concurrently.

  - **Example**:
    ```java
    ExecutorService executor = Executors.newWorkStealingPool();
    executor.submit(() -> { /* task */ });
    ```

#### **3. Java 10: `var` Keyword for Executor Variables**

- **`var` Keyword**:
  - The introduction of the **`var`** keyword in Java 10 simplifies the declaration of local variables, including those for **`Executor`** and **`ExecutorService`**. This reduces boilerplate code, especially when working with generics.

  - **Example**:
    ```java
    var executor = Executors.newFixedThreadPool(2);
    ```

#### **4. Java 11: `shutdownNow()` Improvements**

- **Improved `shutdownNow()`**:
  - Java 11 improved the behavior of **`shutdownNow()`**, making it more predictable when shutting down the **`ExecutorService`**. This method attempts to stop all actively executing tasks and prevents the submission of new tasks.

  - **Example**:
    ```java
    executor.shutdownNow(); // Initiates an immediate shutdown of the executor
    ```

#### **5. Java 19: Virtual Threads (Preview)**

- **Virtual Threads**:
  - **Virtual threads** (introduced as a preview feature in Java 19) are lightweight threads that can significantly reduce the overhead compared to platform threads. This allows Java applications to handle many more concurrent tasks with lower resource consumption.

  - **Example**:
    ```java
    ExecutorService executor = Executors.newVirtualThreadExecutor();
    executor.submit(() -> { /* perform task */ });
    ```

  - Virtual threads are especially useful in I/O-bound applications or high-concurrency environments (e.g., web servers) where millions of threads might need to be managed concurrently.

#### **6. Java 21: Structured Concurrency (Preview)**

- **Structured Concurrency**:
  - **Structured concurrency** (introduced in **JEP 428**) simplifies the management of multiple threads by grouping related tasks in a structured manner. This approach makes it easier to manage thread lifecycles, handle exceptions, and coordinate results across tasks.

  - **Example**:
    ```java
    try (var executor = Executors.newVirtualThreadExecutor()) {
        executor.submit(() -> { /* task 1 */ });
        executor.submit(() -> { /* task 2 */ });
    }  // Executor is automatically shut down
    ```

  - This improvement brings better safety and clarity to managing multi-threaded applications.

---

### Conclusion:
The **Executor** framework in Java has seen significant updates from **Java 8 to Java 21**. Key improvements include the introduction of **`CompletableFuture`**, **work-stealing pools**, **virtual threads**, and **structured concurrency**, all of which enhance the framework's ability to manage complex concurrent tasks. These updates make Java more efficient, scalable, and easier to use for developers working with multi-threaded applications.

