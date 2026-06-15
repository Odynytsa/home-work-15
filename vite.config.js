import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    base: '/home-work-15/',
    plugins: [tailwindcss()],
});