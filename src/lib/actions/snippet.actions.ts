"use server";

import { db } from "@/db/drizzle";
import { SnippetTable } from "@/db/schema";
import { and, eq, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";

const TEST_DATA = [
  {
    id: "ac7c719b-f6bb-4343-9287-75c022ce42f0",
    userId: "user_2k9JBK5tYdnwTm4vqhhSojPvOnM",
    user: { username: null, clerkId: "user_2k9JBK5tYdnwTm4vqhhSojPvOnM" },
    title: "useDebounce hook in react",
    slug: "usedebounce-hook-in-react-ac7c719b-f6bb-4343-9287-75c022ce42f0",
    tags: "react, hooks, debounce",
    description: "A custom hook to debounce value changes in React, useful for search inputs and form validation.",
    codeLanguage: "typescript",
    codeValue: `import {useEffect, useState} from 'react';

export function useDebounce(value: string, delay = 800) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}`,
    public: true,
    deleted: false,
    createdAt: new Date("2024-08-10T10:42:54.068Z"),
    updatedAt: new Date("2024-08-10T11:19:08.009Z"),
  },
  {
    id: "bc8d829c-e7cc-5454-0398-86d133ce53e1",
    userId: "user_2k9JBK5tYdnwTm4vqhhSojPvOnM",
    user: { username: null, clerkId: "user_2k9JBK5tYdnwTm4vqhhSojPvOnM" },
    title: "useLocalStorage hook",
    slug: "uselocalstorage-hook-bc8d829c-e7cc-5454-0398-86d133ce53e1",
    tags: "react, hooks, storage",
    description: "A custom React hook for managing local storage state with type safety.",
    codeLanguage: "typescript",
    codeValue: `import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}`,
    public: true,
    deleted: false,
    createdAt: new Date("2024-08-11T09:30:00.000Z"),
    updatedAt: new Date("2024-08-11T09:30:00.000Z"),
  },
  {
    id: "de9f930d-f8dd-6565-1409-97e244df64f2",
    userId: "user_2k9JBK5tYdnwTm4vqhhSojPvOnM",
    user: { username: null, clerkId: "user_2k9JBK5tYdnwTm4vqhhSojPvOnM" },
    title: "useFetch custom hook",
    slug: "usefetch-custom-hook-de9f930d-f8dd-6565-1409-97e244df64f2",
    tags: "react, hooks, fetch",
    description: "A custom hook for handling API requests with loading and error states.",
    codeLanguage: "typescript",
    codeValue: `import { useState, useEffect } from 'react';

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export function useFetch<T>(url: string): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setData(json);
        setError(null);
      } catch (error) {
        setError(error instanceof Error ? error : new Error('An error occurred'));
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}`,
    public: true,
    deleted: false,
    createdAt: new Date("2024-08-12T14:15:00.000Z"),
    updatedAt: new Date("2024-08-12T14:15:00.000Z"),
  },
  {
    id: "ef0g041e-g9ee-7676-2510-08f355eg75g3",
    userId: "user_2k9JBK5tYdnwTm4vqhhSojPvOnM",
    user: { username: null, clerkId: "user_2k9JBK5tYdnwTm4vqhhSojPvOnM" },
    title: "Quick Sort Implementation",
    slug: "quick-sort-implementation-ef0g041e-g9ee-7676-2510-08f355eg75g3",
    tags: "algorithms, sorting, arrays",
    description: "An efficient implementation of the Quick Sort algorithm with TypeScript generics.",
    codeLanguage: "typescript",
    codeValue: `function quickSort<T>(arr: T[]): T[] {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);

  return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Example usage:
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log(quickSort(numbers));`,
    public: true,
    deleted: false,
    createdAt: new Date("2024-08-13T16:20:00.000Z"),
    updatedAt: new Date("2024-08-13T16:20:00.000Z"),
  },
  {
    id: "a1b2c3d4-e5f6-4321-8877-123456789abc",
    userId: "user_2k9JBK5tYdnwTm4vqhhSojPvOnM",
    user: { username: null, clerkId: "user_2k9JBK5tYdnwTm4vqhhSojPvOnM" },
    title: "Binary Search Implementation",
    slug: "binary-search-implementation-a1b2c3d4-e5f6-4321-8877-123456789abc",
    tags: "algorithms, searching, arrays",
    description: "Efficient binary search implementation with both iterative and recursive approaches.",
    codeLanguage: "python",
    codeValue: `def binary_search_iterative(arr, target):
left, right = 0, len(arr) - 1

while left <= right:
    mid = (left + right) // 2
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        left = mid + 1
    else:
        right = mid - 1

return -1

def binary_search_recursive(arr, target, left=None, right=None):
if left is None:
    left, right = 0, len(arr) - 1
    
if left > right:
    return -1
    
mid = (left + right) // 2
if arr[mid] == target:
    return mid
elif arr[mid] < target:
    return binary_search_recursive(arr, target, mid + 1, right)
else:
    return binary_search_recursive(arr, target, left, mid - 1)

# Example usage:
sorted_array = [1, 3, 5, 7, 9, 11, 13, 15]
target = 7

print(f"Iterative search: {binary_search_iterative(sorted_array, target)}")
print(f"Recursive search: {binary_search_recursive(sorted_array, target)}")`,
    public: true,
    deleted: false,
    createdAt: "2024-08-13T16:20:00.000Z",
    updatedAt: "2024-08-13T16:20:00.000Z",
  },
  {
    id: "b2c3d4e5-f6g7-5432-9988-987654321def",
    userId: "user_2k9JBK5tYdnwTm4vqhhSojPvOnM",
    user: { username: null, clerkId: "user_2k9JBK5tYdnwTm4vqhhSojPvOnM" },
    title: "LRU Cache Implementation",
    slug: "lru-cache-implementation-b2c3d4e5-f6g7-5432-9988-987654321def",
    tags: "data structures, caching, optimization",
    description: "Least Recently Used (LRU) Cache implementation using OrderedDict.",
    codeLanguage: "python",
    codeValue: `from collections import OrderedDict

class LRUCache:
def __init__(self, capacity: int):
    self.cache = OrderedDict()
    self.capacity = capacity

def get(self, key: int) -> int:
    if key not in self.cache:
        return -1
    # Move to end (most recently used)
    self.cache.move_to_end(key)
    return self.cache[key]

def put(self, key: int, value: int) -> None:
    if key in self.cache:
        # If exists, update value and move to end
        self.cache.move_to_end(key)
    self.cache[key] = value
    if len(self.cache) > self.capacity:
        # Remove least recently used item
        self.cache.popitem(last=False)

# Example usage:
cache = LRUCache(2)
cache.put(1, 1)
cache.put(2, 2)
print(cache.get(1))       # returns 1
cache.put(3, 3)          # evicts key 2
print(cache.get(2))       # returns -1 (not found)
print(cache.get(3))       # returns 3`,
    public: true,
    deleted: false,
    createdAt: "2024-08-13T16:25:00.000Z",
    updatedAt: "2024-08-13T16:25:00.000Z",
  },
  {
    id: "c3d4e5f6-g7h8-6543-0099-456789012ghi",
    userId: "user_2k9JBK5tYdnwTm4vqhhSojPvOnM",
    user: { username: null, clerkId: "user_2k9JBK5tYdnwTm4vqhhSojPvOnM" },
    title: "Decorator for Function Timing",
    slug: "decorator-for-function-timing-c3d4e5f6-g7h8-6543-0099-456789012ghi",
    tags: "decorators, performance, debugging",
    description: "A useful decorator to measure function execution time with detailed statistics.",
    codeLanguage: "python",
    codeValue: `import time
import functools
import statistics
from typing import List, Callable

def measure_time(func: Callable) -> Callable:
execution_times: List[float] = []

@functools.wraps(func)
def wrapper(*args, **kwargs):
    start_time = time.time()
    result = func(*args, **kwargs)
    end_time = time.time()
    
    execution_time = (end_time - start_time) * 1000  # Convert to milliseconds
    execution_times.append(execution_time)
    
    print(f"Function: {func.__name__}")
    print(f"Last execution time: {execution_time:.2f}ms")
    
    if len(execution_times) > 1:
        print(f"Average time: {statistics.mean(execution_times):.2f}ms")
        print(f"Max time: {max(execution_times):.2f}ms")
        print(f"Min time: {min(execution_times):.2f}ms")
    
    return result

return wrapper

# Example usage:
@measure_time
def fibonacci(n: int) -> int:
if n <= 1:
    return n
return fibonacci(n-1) + fibonacci(n-2)

# Test the function
print(fibonacci(10))
print(fibonacci(15))`,
    public: true,
    deleted: false,
    createdAt: "2024-08-13T16:30:00.000Z",
    updatedAt: "2024-08-13T16:30:00.000Z",
  },
  {
    id: "fg1h152f-h0ff-8787-3621-19g466fh86h4",
    userId: "user_2k9JBK5tYdnwTm4vqhhSojPvOnM",
    user: { username: null, clerkId: "user_2k9JBK5tYdnwTm4vqhhSojPvOnM" },
    title: "React Error Boundary Component",
    slug: "react-error-boundary-component-fg1h152f-h0ff-8787-3621-19g466fh86h4",
    tags: "react, error-handling, components",
    description: "A reusable Error Boundary component for handling React component errors gracefully.",
    codeLanguage: "typescript",
    codeValue: `import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div>
          <h2>Oops, there was an error!</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error?.toString()}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;`,
    public: true,
    deleted: false,
    createdAt: new Date("2024-08-14T11:25:00.000Z"),
    updatedAt: new Date("2024-08-14T11:25:00.000Z"),
  },
  {
    id: "gh2i263g-i1gg-9898-4732-20h577gi97i5",
    userId: "user_2k9JBK5tYdnwTm4vqhhSojPvOnM",
    user: { username: null, clerkId: "user_2k9JBK5tYdnwTm4vqhhSojPvOnM" },
    title: "useIntersectionObserver Hook",
    slug: "use-intersection-observer-hook-gh2i263g-i1gg-9898-4732-20h577gi97i5",
    tags: "react, hooks, intersection-observer",
    description: "A custom hook for tracking element visibility using the Intersection Observer API.",
    codeLanguage: "typescript",
    codeValue: `import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

export function useIntersectionObserver({
  threshold = 0,
  root = null,
  rootMargin = '0px'
}: UseIntersectionObserverProps = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold, root, rootMargin }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, root, rootMargin]);

  return [elementRef, isVisible] as const;
}`,
    public: true,
    deleted: false,
    createdAt: new Date("2024-08-15T13:40:00.000Z"),
    updatedAt: new Date("2024-08-15T13:40:00.000Z"),
  },
  {
    id: "hi3j374h-j2hh-0909-5843-31i688hj08j6",
    userId: "user_2k9JBK5tYdnwTm4vqhhSojPvOnM",
    user: { username: null, clerkId: "user_2k9JBK5tYdnwTm4vqhhSojPvOnM" },
    title: "Binary Search Tree Implementation",
    slug: "binary-search-tree-implementation-hi3j374h-j2hh-0909-5843-31i688hj08j6",
    tags: "data-structures, trees, algorithms",
    description: "A complete implementation of a Binary Search Tree with insertion, deletion, and search operations.",
    codeLanguage: "typescript",
    codeValue: `class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree<T> {
  root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  insert(value: T): void {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  }

  search(value: T): TreeNode<T> | null {
    let current = this.root;

    while (current) {
      if (value === current.value) {
        return current;
      }
      current = value < current.value ? current.left : current.right;
    }

    return null;
  }

  inOrderTraversal(): T[] {
    const result: T[] = [];

    function traverse(node: TreeNode<T> | null): void {
      if (node) {
        traverse(node.left);
        result.push(node.value);
        traverse(node.right);
      }
    }

    traverse(this.root);
    return result;
  }
}`,
    public: true,
    deleted: false,
    createdAt: new Date("2024-08-16T15:55:00.000Z"),
    updatedAt: new Date("2024-08-16T15:55:00.000Z"),
  },
  {
    id: "kl5m596j-l4jj-1111-7065-53k800jl20l8",
    userId: "user_2k9JBK5tYdnwTm4vqhhSojPvOnM",
    user: { username: null, clerkId: "user_2k9JBK5tYdnwTm4vqhhSojPvOnM" },
    title: "useMediaQuery Hook",
    slug: "use-media-query-hook-kl5m596j-l4jj-1111-7065-53k800jl20l8",
    tags: "react, hooks, responsive, media-queries",
    description: "A custom hook for handling responsive designs with media queries in React applications.",
    codeLanguage: "typescript",
    codeValue: `import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    
    function handleChange() {
      setMatches(getMatches(query));
    }

    // Initial check
    handleChange();

    // Watch for changes
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
}

// Example usage:
// const isMobile = useMediaQuery('(max-width: 768px)');
// const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');`,
    public: true,
    deleted: false,
    createdAt: new Date("2024-08-17T17:10:00.000Z"),
    updatedAt: new Date("2024-08-17T17:10:00.000Z"),
  },
  {
    id: "mn6n607k-m5kk-1212-8176-64l911km31m9",
    userId: "user_2k9JBK5tYdnwTm4vqhhSojPvOnM",
    user: { username: null, clerkId: "user_2k9JBK5tYdnwTm4vqhhSojPvOnM" },
    title: "LRU Cache Implementation",
    slug: "lru-cache-implementation-mn6n607k-m5kk-1212-8176-64l911km31m9",
    tags: "algorithms, cache, data-structures",
    description: "An implementation of the Least Recently Used (LRU) cache with TypeScript.",
    codeLanguage: "typescript",
    codeValue: `class LRUCache<K, V> {
  private capacity: number;
  private cache: Map<K, V>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key: K): V | undefined {
    if (!this.cache.has(key)) {
      return undefined;
    }

    // Get value and refresh its position
    const value = this.cache.get(key)!;
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key: K, value: V): void {
    // Remove key if it exists
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    // Remove oldest item if cache is at capacity
    else if (this.cache.size >= this.capacity) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    // Add new item
    this.cache.set(key, value);
  }

  clear(): void {
    this.cache.clear();
  }

  get size(): number {
    return this.cache.size;
  }

  has(key: K): boolean {
    return this.cache.has(key);
  }
}

// Example usage:
// const cache = new LRUCache<string, number>(3);
// cache.put("a", 1);
// cache.put("b", 2);
// console.log(cache.get("a")); // 1`,
    public: true,
    deleted: false,
    createdAt: new Date("2024-08-18T18:25:00.000Z"),
    updatedAt: new Date("2024-08-18T18:25:00.000Z"),
  },
  {
    id: "op7p718l-n6ll-1313-9287-75m022ln42n0",
    userId: "user_2k9JBK5tYdnwTm4vqhhSojPvOnM",
    user: { username: null, clerkId: "user_2k9JBK5tYdnwTm4vqhhSojPvOnM" },
    title: "useThrottle Hook",
    slug: "use-throttle-hook-op7p718l-n6ll-1313-9287-75m022ln42n0",
    tags: "react, hooks, performance",
    description: "A custom hook for throttling function calls in React applications.",
    codeLanguage: "typescript",
    codeValue: `import { useCallback, useRef, useEffect } from 'react';

export function useThrottle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): T {
  const lastRun = useRef<number>(0);
  const timeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);

  return useCallback((...args: Parameters<T>) => {
    const now = Date.now();

    if (lastRun.current && now - lastRun.current <= delay) {
      // If the function is being called before the delay has elapsed,
      // schedule it to be called after the delay
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      
      timeout.current = setTimeout(() => {
        lastRun.current = now;
        func(...args);
      }, delay);
      
      return;
    }

    lastRun.current = now;
    func(...args);
  }, [func, delay]) as T;
}

// Example usage:
// const throttledScroll = useThrottle(() => {
//   console.log('Scrolled!');
// }, 1000);`,
    public: true,
    deleted: false,
    createdAt: new Date("2024-08-19T19:40:00.000Z"),
    updatedAt: new Date("2024-08-19T19:40:00.000Z"),
  },
  {
    id: "qr8r829m-o7mm-1414-0398-86n133mo53o1",
    userId: "user_2k9JBK5tYdnwTm4vqhhSojPvOnM",
    user: { username: null, clerkId: "user_2k9JBK5tYdnwTm4vqhhSojPvOnM" },
    title: "JWT Token Manager Class",
    slug: "jwt-token-manager-class-qr8r829m-o7mm-1414-0398-86n133mo53o1",
    tags: "authentication, security, typescript",
    description: "A utility class for managing JWT tokens with TypeScript, including refresh token handling.",
    codeLanguage: "typescript",
    codeValue: `type TokenPair = {
  accessToken: string;
  refreshToken: string;
};

class TokenManager {
  private static readonly ACCESS_TOKEN_KEY = 'access_token';
  private static readonly REFRESH_TOKEN_KEY = 'refresh_token';

  static setTokens(tokens: TokenPair): void {
    localStorage.setItem(this.ACCESS_TOKEN_KEY, tokens.accessToken);
    localStorage.setItem(this.REFRESH_TOKEN_KEY, tokens.refreshToken);
  }

  static getAccessToken(): string | null {
    return localStorage.getItem(this.ACCESS_TOKEN_KEY);
  }

  static getRefreshToken(): string | null {
    return localStorage.getItem(this.REFRESH_TOKEN_KEY);
  }

  static clearTokens(): void {
    localStorage.removeItem(this.ACCESS_TOKEN_KEY);
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);
  }

  static isTokenExpired(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const expirationTime = payload.exp * 1000; // Convert to milliseconds
      return Date.now() >= expirationTime;
    } catch {
      return true;
    }
  }

  static async refreshTokens(): Promise<TokenPair | null> {
    const refreshToken = this.getRefreshToken();
    
    if (!refreshToken) {
      return null;
    }

    try {
      const response = await fetch('/api/auth/refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken }),
      });

      if (!response.ok) {
        throw new Error('Token refresh failed');
      }

      const tokens: TokenPair = await response.json();
      this.setTokens(tokens);
      return tokens;
    } catch (error) {
      this.clearTokens();
      return null;
    }
  }
}

export default TokenManager;`,
    public: true,
    deleted: false,
    createdAt: new Date("2024-08-20T20:55:00.000Z"),
    updatedAt: new Date("2024-08-20T20:55:00.000Z"),
  },
  {
    id: "st9s930n-p8nn-1515-1409-97o244np64p2",
    userId: "user_2k9JBK5tYdnwTm4vqhhSojPvOnM",
    user: { username: null, clerkId: "user_2k9JBK5tYdnwTm4vqhhSojPvOnM" },
    title: "React Infinite Scroll Hook",
    slug: "react-infinite-scroll-hook-st9s930n-p8nn-1515-1409-97o244np64p2",
    tags: "react, hooks, infinite-scroll, pagination",
    description: "A custom hook for implementing infinite scroll functionality in React applications.",
    codeLanguage: "typescript",
    codeValue: `import { useEffect, useRef, useState } from 'react';

interface UseInfiniteScrollOptions {
  threshold?: number;
  loadMore: () => Promise<void>;
  hasMore: boolean;
}

export function useInfiniteScroll({
  threshold = 100,
  loadMore,
  hasMore
}: UseInfiniteScrollOptions) {
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef<IntersectionObserver>();
  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadMoreElement = loadMoreRef.current;

    const handleObserver = async (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      
      if (target.isIntersecting && hasMore && !isLoading) {
        setIsLoading(true);
        
        try {
          await loadMore();
        } finally {
          setIsLoading(false);
        }
      }
    };

    observerRef.current = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: \`\${threshold}px\`,
    });

    if (loadMoreElement) {
      observerRef.current.observe(loadMoreElement);
    }

    return () => {
      if (loadMoreElement && observerRef.current) {
        observerRef.current.unobserve(loadMoreElement);
      }
    };
  }, [threshold, loadMore, hasMore, isLoading]);

  return {
    loadMoreRef,
    isLoading
  };
}

// Example usage:
// const MyList = () => {
//   const [items, setItems] = useState<string[]>([]);
//   const [hasMore, setHasMore] = useState(true);
//
//   const loadMore = async () => {
//     const newItems = await fetchMoreItems();
//     setItems(prev => [...prev, ...newItems]);
//     setHasMore(newItems.length > 0);
//   };
//
//   const { loadMoreRef, isLoading } = useInfiniteScroll({
//     loadMore,
//     hasMore
//   });
//
//   return (
//     <div>
//       {items.map(item => <div key={item}>{item}</div>)}
//       <div ref={loadMoreRef}>
//         {isLoading && 'Loading more...'}
//       </div>
//     </div>
//   );
// };`,
    public: true,
    deleted: false,
    createdAt: new Date("2024-08-21T22:10:00.000Z"),
    updatedAt: new Date("2024-08-21T22:10:00.000Z"),
  },
];

export const getPublicSnippets = async () => {
  return TEST_DATA;
};

export const getSnippets = async ({
  forUser,
  query,
  languages = [],
  isPublic,
  isDeleted,
}: {
  forUser?: string;
  query: string;
  languages?: Array<string>;
  isPublic?: boolean;
  isDeleted?: boolean;
}) => {
  const userQuery = forUser ? eq(SnippetTable.userId, forUser) : undefined;
  const publicQuery = isPublic ? eq(SnippetTable.public, isPublic) : undefined;
  const isDeletedQuery = isDeleted ? eq(SnippetTable.deleted, isDeleted) : undefined;

  const searchQuery = query
    ? sql`(
      setweight(to_tsvector('english', ${SnippetTable.title}), 'A') ||
      setweight(to_tsvector('english', ${SnippetTable.description}), 'B')
      ) @@ phraseto_tsquery('english', ${query})`
    : undefined;

  // // Check if value is in array
  // db.select().from(table).where(inArray(table.column, [1, 2, 3, 4]));

  // // Check if value is not in array
  // db.select().from(table).where(notInArray(table.column, [1, 2, 3, 4]));

  let langString = languages.join("|").toString();
  let languageQuery =
    languages.length > 0 ? sql`${SnippetTable.codeLanguage} similar to '%(${langString})%'` : undefined;

  return db.select().from(SnippetTable).where(and(userQuery, publicQuery, isDeletedQuery, searchQuery, languageQuery));
};

type InsertSnippetParams = {
  // id: string;
  // userId: string | null;
  username: string;
  clerkId: string;
  // user: {
  //     username: string;
  //     clerkId: string;
  // } | null;
  title: string;
  // slug: string | null;
  tags: string;
  description: string;
  codeLanguage: string;
  codeValue: string;
  isPublic: boolean;
  // deleted:
  // createdAt: Date;
  // updatedAt: Date;
};

export type UpdateSnippetParams = {
  // user: {
  //     username: string;
  //     clerkId: string;
  // } | null;
  title?: string;
  tags?: string;
  description?: string;
  codeLanguage?: string;
  codeValue?: string;
  isPublic?: boolean;
  deleted?: boolean;
};

export const inserSnippetAction = async ({
  username,
  clerkId,
  title,
  tags,
  description,
  codeLanguage,
  codeValue,
  isPublic,
}: InsertSnippetParams) => {
  const snipp = {
    userId: clerkId,
    user: {
      username,
      clerkId,
    },
    title,
    tags,
    description,
    codeLanguage,
    codeValue,
    public: isPublic,
  };
  await db.insert(SnippetTable).values(snipp);
  revalidatePath("/dashboard");
  return "";
};

export const getSnippetBySlug = async (slug: string) => {
  return db.select().from(SnippetTable).where(eq(SnippetTable.slug, slug));
};

export const updateSnippetAction = async (id: string, updatedData: UpdateSnippetParams) => {
  await db.update(SnippetTable).set(updatedData).where(eq(SnippetTable.id, id));
  revalidatePath("/dashboard");
};

export const deleteSnippetAction = async (id: string) => {
  await db.delete(SnippetTable).where(eq(SnippetTable.id, id));
  revalidatePath("/trash");
  return null;
};
