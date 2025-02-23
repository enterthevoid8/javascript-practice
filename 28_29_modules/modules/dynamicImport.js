export async function loadMathModule() {
    const mathModule = await import('./mathUtils.js');
    console.log("Dynamic Import - Addition:", mathModule.add(10, 2));
}