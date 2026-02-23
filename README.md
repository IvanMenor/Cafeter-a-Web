<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======
# ☕ Plataforma Web para Cafetería

Aplicación web desarrollada con **React, Vite, TypeScript y TailwindCSS** que permite mostrar los productos de una cafetería, información del negocio, ubicaciones y facilitar pedidos mediante **WhatsApp con un mensaje predeterminado**.

La plataforma está pensada para ofrecer a los clientes una forma rápida y clara de conocer los productos disponibles y realizar pedidos de manera sencilla.

---

## 🚀 Funcionalidades

- Catálogo de productos  
- Información de la cafetería  
- Ubicación de locales  
- Identificación de productos disponibles para **consumo en tienda o delivery**  
- Botón para realizar pedidos por WhatsApp  
- Diseño responsive para móviles y escritorio  

---

## 🛠 Tecnologías utilizadas

- React  
- Vite  
- TypeScript  
- TailwindCSS  

---

## 📦 Descripción del proyecto

Este proyecto consiste en una interfaz web enfocada en mejorar la presencia digital de una cafetería.  
Permite mostrar productos, brindar información importante a los clientes y ofrecer un acceso rápido para realizar pedidos mediante WhatsApp.

---

## 📂 Estructura del proyecto

src
├─ components
├─ pages
├─ assets
└─ styles

---

## ⚙ Instalación y ejecución

```bash
git clone https://github.com/IvanMenor/Cafeter-a-Web.git
cd Cafeter-a-Web
npm install
npm run dev
>>>>>>> 30991ceb2814290a830d32f5760479a462fb6bba
