# ✨ twmx ✨

A helper that merges clsx with tailwind-merge

## Installation

`npm`

```
npm install twmx
```

`yarn`

```
yarn add twmx
```

`pnpm`

```
pnpm add twmx
```

## Usage

```tsx
import { twmx } from "twmx";

export default function Demo() {
  return (
    <div className={twmx("relative", true ? "bg-red-500" : "bg-green-500")}>
      ...
    </div>
  );
}
```
