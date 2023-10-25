export const changeTheme = () => {
    const selectedTheme = localStorage.getItem('color-theme');
    if (selectedTheme === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
        return;
    }

    document.documentElement.classList.remove('dark');
    localStorage.setItem('color-theme', 'light');
};

export const isDarkTheme = () => {
    const selectedTheme = localStorage.getItem('color-theme');

    if (selectedTheme === 'light') return false;
    return true;
};