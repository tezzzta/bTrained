const { execSync } = require('child_process');

try {
  console.log('=== TypeScript Errors ===');
  execSync('npx tsc --noEmit', { stdio: 'inherit' });

  console.log('\n=== ESLint Errors ===');
  execSync('npx eslint . --max-warnings=0', { stdio: 'inherit' });
} catch (err) {
  console.log('Errores encontrados, revisa arriba.');
}