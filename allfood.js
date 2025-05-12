window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
function showTab(tabName, btnElement) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });

    // Remove active class from all buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected tab
    document.getElementById(tabName).style.display = 'block';

    // Add active class to clicked button
    btnElement.classList.add('active');
}

// Show default tab on load
window.onload = function () {
    const defaultBtn = document.querySelector('.tabs .btn');
    if (defaultBtn) defaultBtn.click(); // Triggers showTab and adds .active
};