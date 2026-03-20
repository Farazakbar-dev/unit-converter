# Metric/Imperial Unit Converter

A clean, responsive web app that converts between Metric and Imperial units. Built with vanilla HTML, CSS, and JavaScript.

## Features

- Convert between **Length** (Feet ↔ Meters)
- Convert between **Volume** (Litres ↔ Gallons)
- Convert between **Mass** (Kilograms ↔ Pounds)
- Dropdown selector to choose which unit to convert
- Only the relevant result card is displayed based on selection
- **Dark Mode** toggle with preference saved via `localStorage`

## How to Use

1. Enter a numeric value in the input field
2. Select a unit type from the dropdown (Length, Volume, or Mass)
3. Click the **CONVERT** button
4. The result will display below

## Tech Stack

- HTML5
- CSS3 (CSS Variables for theming)
- JavaScript (Vanilla — no frameworks)

## Project Structure

```
├── index.html
├── style.css
└── script.js
```

## What I Learned

- Dynamically creating HTML elements with JavaScript (`createElement`, `appendChild`)
- DOM manipulation and event listeners
- Conditional logic based on user input
- Dark mode implementation using `classList.toggle` and `localStorage`
- Controlling UI visibility dynamically with `style.display`