The concurrency utilities are contained in the java.util.concurrent package and in its two subpackages: **`java.util.concurrent.atomic`** and **`java.util.concurrent.locks`**.

### java.util.concurrent
**`java.util.concurrent`** defines the core features that support alternatives to the built-in approaches to synchronization and interthread communication. 

These include
- Synchronizers
- Executors
- Concurrent collections
- The Fork/Join Framework

Synchronizers offer high-level ways of synchronizing the interactions between multiple threads. The synchronizer classes defined by **`java.util.concurrent`** are

**`Semaphore`**: Implement the classic Semaphore.
**`CountDownLatch`**: Waits until a specified number of events have occured.
**`CyclicBarrier`**: Enables a group of threads to wait at a predefined execution point.
**`Exchanger`**: Exchanges data between two threads.
**`Phaser`**: Synchronizes thread that advance through multiple phases of an operation.

**`Executors**` manage thread execution. At the top of the executor hierarchy is the **`Executor`** interface, which is used to initiate a thread. **`ExecutorService`** extends **`Executor`** and provides methods that manage execution. There are three implementations of **`ExecutorService`**: **`ThreadPoolExecutor`**, **`ScheduledThreadPoolExecutor`**, and **`ForkJoinPool`**. 
**`java.util.concurrent`** also defines the Executors utility class, which includes a number of static methods that simplify the creation of various executors.

Related to executors are the Future and **`Callable`** interfaces. A **`Future`** contains a value that is returned by a thread after it executes. 
Thus, its value becomes defined “in the future,” when the thread terminates. **`Callable`** defines a thread that returns a value.

**`java.util.concurrent`** defines several concurrent collection classes, including **`ConcurrentHashMap`**, **`ConcurrentLinkedQueue`**, and **`CopyOnWriteArrayList`**.
These offer concurrent alternatives to their related classes defined by the Collections Framework.

The **`Fork/Join`** Framework supports parallel programming. Its main classes are **`ForkJoinTask`**, ForkJoinPool`**, **`RecursiveTask`**, and **`RecursiveAction`**.
To better handle thread timing, **`java.util.concurrent`** defines the TimeUnit enumeration.

