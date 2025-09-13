// Smooth sequential fade-in + scale for plans
document.addEventListener('DOMContentLoaded', () => {
    const plans = document.querySelectorAll('.plan');
    plans.forEach((plan, index) => {
        setTimeout(() => {
            plan.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            plan.style.opacity = '1';
            plan.style.transform = 'scale(1)';
        }, 200 * index);
    });
});
