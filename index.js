document.addEventListener('DOMContentLoaded', function () {
    const closeBtn = document.querySelector('.closebtn');
    const openBtn = document.querySelector('.threebar-icon');

    closeBtn.addEventListener('click', closeSidebar);
    openBtn.addEventListener('click', showSidebar);
});

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.left = '0px';
}

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.left = '-250px';
}