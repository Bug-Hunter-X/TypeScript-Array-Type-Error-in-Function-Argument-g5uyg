# TypeScript Array Type Error

This repository demonstrates a common TypeScript error: passing an array to a function expecting a single string.

## The Bug

The `greeter` function expects a single string argument. However, an array of strings is passed, resulting in a type error.

## The Solution

The solution involves modifying the function to accept an array or iterating through the array to call the function for each element.