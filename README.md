# 📸 Receipt Scanner

A simple project that uses OCR (Optical Character Recognition) powered by Gemini AI to scan and extract structured data from receipt images.

## ✨ Features

-   Extracts text from receipt images using Gemini API.
-   Parses and structures receipt data (e.g., items, prices, store name, date).
-   Outputs clean, ready-to-use JSON for further processing or export.

## 🚀 Installation

Clone the repository:

```
git clone https://github.com/your-username/receipt-scanner.git
cd receipt-scanner
```

Install dependencies:

```
npm install
```

## 📦 Usage

Add your receipt image(s) to the project directory (e.g., receipt.jpg).

Create a .env file in the root directory and add your Gemini API key:

```
GOOGLE_API_KEY=your-gemini-api-key
```

Run the script:

```bash
node gemini.js
```
