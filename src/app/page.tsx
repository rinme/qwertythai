"use client";

import { useMemo, useState } from "react";
import styles from "./page.module.css";

const QWERTY_TO_THAI: Record<string, string> = {
  "`": "_",
  "1": "ๅ",
  "2": "/",
  "3": "-",
  "4": "ภ",
  "5": "ถ",
  "6": "ุ",
  "7": "ึ",
  "8": "ค",
  "9": "ต",
  "0": "จ",
  "-": "ข",
  "=": "ช",
  q: "ๆ",
  w: "ไ",
  e: "ำ",
  r: "พ",
  t: "ะ",
  y: "ั",
  u: "ี",
  i: "ร",
  o: "น",
  p: "ย",
  "[": "บ",
  "]": "ล",
  "\\": "ฃ",
  a: "ฟ",
  s: "ห",
  d: "ก",
  f: "ด",
  g: "เ",
  h: "้",
  j: "่",
  k: "า",
  l: "ส",
  ";": "ว",
  "'": "ง",
  z: "ผ",
  x: "ป",
  c: "แ",
  v: "อ",
  b: "ิ",
  n: "ื",
  m: "ท",
  ",": "ม",
  ".": "ใ",
  "/": "ฝ",
  "~": "%",
  "!": "+",
  "@": "๑",
  "#": "๒",
  $: "๓",
  "%": "๔",
  "^": "ู",
  "&": "฿",
  "*": "๕",
  "(": "๖",
  ")": "๗",
  _: "๘",
  "+": "๙",
  Q: "๐",
  W: '"',
  E: "ฎ",
  R: "ฑ",
  T: "ธ",
  Y: "ํ",
  U: "๊",
  I: "ณ",
  O: "ฯ",
  P: "ญ",
  "{": "ฐ",
  "}": ",",
  "|": "ฅ",
  A: "ฤ",
  S: "ฆ",
  D: "ฏ",
  F: "โ",
  G: "ฌ",
  H: "็",
  J: "๋",
  K: "ษ",
  L: "ศ",
  ":": "ซ",
  '"': ".",
  Z: "(",
  X: ")",
  C: "ฉ",
  V: "ฮ",
  B: "ฺ",
  N: "์",
  M: "?",
  "<": "ฒ",
  ">": "ฬ",
  "?": "ฦ",
};

function translateToThai(text: string) {
  return [...text].map((char) => QWERTY_TO_THAI[char] ?? char).join("");
}

export default function Home() {
  const [input, setInput] = useState("");

  const output = useMemo(() => translateToThai(input), [input]);

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <h1>QWERTY to Thai Translator</h1>
        <p>
          Paste or type English QWERTY text and instantly convert it to Thai keyboard
          output.
        </p>

        <label htmlFor="input">QWERTY input</label>
        <textarea
          id="input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="e.g. l;ylfu8iy["
        />

        <label htmlFor="output">Thai output</label>
        <textarea id="output" value={output} readOnly placeholder="Translated text" />
      </div>
    </main>
  );
}
