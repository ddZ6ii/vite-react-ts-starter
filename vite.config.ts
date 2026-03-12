import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// Define chrome as default browser for the dev server.
const opsys = process.platform
// windows
if (opsys === 'win32') process.env.BROWSER = 'chrome'
// macOS
if (opsys === 'darwin') process.env.BROWSER = '/Applications/Google Chrome.app'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src', 'assets'),
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@contexts': path.resolve(__dirname, 'src', 'contexts'),
      '@hooks': path.resolve(__dirname, 'src', 'hooks'),
      '@pages': path.resolve(__dirname, 'src', 'pages'),
      '@reducers': path.resolve(__dirname, 'src', 'reducers'),
      '@stores': path.resolve(__dirname, 'src', 'stores'),
      '@tests': path.resolve(__dirname, 'src', 'tests'),
      '@themes': path.resolve(__dirname, 'src', 'themes'),
      '@types': path.resolve(__dirname, 'src', 'types'),
      '@utils': path.resolve(__dirname, 'src', 'utils'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__tests__/setup.ts',
  },
})
