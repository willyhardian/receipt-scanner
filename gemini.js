import "dotenv/config";
import { GoogleGenAI } from "@google/genai";
import fs from "fs";
const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });
const base64ImageFile = fs.readFileSync("./receipt.jpg", {
    encoding: "base64",
});

const contents = [
    {
        inlineData: {
            mimeType: "image/jpg",
            data: base64ImageFile,
        },
    },
    {
        text: `Extract the following details from this receipt image:
                - Store name
                - Date of purchase
                - List of items with name and price
                - Total amount
                Format your response as structured JSON like this:
                {
                    "store": "Example Store",
                    "date": "YYYY-MM-DD",
                    "items": [
                        { "name": "Item A", "price": 4.99 },
                        { "name": "Item B", "price": 2.50 }
                    ],
                    "total": 7.49
                }`,
    },
];

const response = await ai.models.generateContent({
    model: "gemini-1.5-flash",
    contents: contents,
});
const text = response.text;
const cleanedText = text.replace("```json", "").replace("```", "");
const jsonResponse = JSON.parse(cleanedText);
console.log(jsonResponse.store);
console.log(
    new Date(jsonResponse.date).toLocaleDateString("en-GB", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
    })
);
console.table(jsonResponse.items);
