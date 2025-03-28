import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [    
    tailwindcss(),
    react()
  ],
  server: {
    historyApiFallback: 'html', // Asegura que todas las rutas sean manejadas por index.html
  },
  
})
