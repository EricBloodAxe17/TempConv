# TempConv # 🌡️ Temperature Converter

A basic web-based temperature converter that allows users to convert values between Celsius and Fahrenheit.

## 🚀 Features

- Convert °C to °F and vice versa
- Input validation
- Simple, clean UI
- Styled with CSS for a modern look

## 🧱 Built With

- **HTML** – Structure
- **CSS** – Styling
- **JavaScript** – Logic & interactivity

## 📁 File Structure

/project-folder
│
├── index.html # Main HTML page
├── style.css # Styling for the app
└── script.js # JavaScript conversion logic


## ⚙️ How It Works

1. User enters a temperature value.
2. Selects either:
   - °C to °F
   - °F to °C
3. Clicks **Submit**.
4. Output is displayed below the button.

## 🔍 Conversion Formulas

- **°C to °F**: `(°C × 9/5) + 32`
- **°F to °C**: `(°F - 32) × 5/9`

## 📌 Notes

- Prevents form reload using `event.preventDefault()`.
- Validates input to ensure it's a number.
- Displays result with 2 decimal places using `.toFixed(2)`.

## 🎨 UI Highlights

- Centered form with drop shadow
- Styled input, button, and layout
- Responsive and visually accessible

---

✅ A great beginner project to learn DOM, events, and basic styling!
