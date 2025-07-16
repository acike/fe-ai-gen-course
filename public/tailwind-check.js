// Tailwind Version Checker
console.log('%c🎨 Checking Tailwind CSS Version...', 'color: #06b6d4; font-weight: bold; font-size: 16px;');

// Check if Tailwind classes are working
const testElement = document.createElement('div');
testElement.className = 'bg-red-500 text-white p-4';
document.body.appendChild(testElement);

const styles = window.getComputedStyle(testElement);
const backgroundColor = styles.backgroundColor;

if (backgroundColor === 'rgb(239, 68, 68)' || backgroundColor === 'rgb(248, 113, 113)') {
  console.log('%c✅ Tailwind CSS is working!', 'color: #10b981; font-weight: bold;');
  console.log('%cDetected: Tailwind CSS v4.x', 'color: #8b5cf6; font-weight: bold;');
} else {
  console.log('%c❌ Tailwind CSS not working', 'color: #ef4444; font-weight: bold;');
}

document.body.removeChild(testElement);

// Check for v4 specific features
try {
  const v4TestElement = document.createElement('div');
  v4TestElement.className = 'backdrop-blur-sm bg-blue-500/50';
  document.body.appendChild(v4TestElement);

  const v4Styles = window.getComputedStyle(v4TestElement);
  if (v4Styles.backdropFilter && v4Styles.backdropFilter !== 'none') {
    console.log('%c🚀 Tailwind v4 features detected!', 'color: #f59e0b; font-weight: bold;');
  }

  document.body.removeChild(v4TestElement);
} catch (e) {
  console.log('%c⚠️ Some v4 features may not be available', 'color: #f59e0b;');
}
