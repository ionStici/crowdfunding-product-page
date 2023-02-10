const btn = document.querySelector('.back__bookmark-wrapper');
const container = document.querySelector('.back__wrapper');

const isBookmarked = JSON.parse(localStorage.getItem('bookmark'));
let isPageBookmarked = false;
if (isBookmarked) isPageBookmarked = isBookmarked;
if (isPageBookmarked) container.classList.add('bookmarked');

btn.addEventListener('click', function () {
    if (!isPageBookmarked) {
        container.classList.add('bookmarked');
        isPageBookmarked = true;
        localStorage.setItem('bookmark', isPageBookmarked);
    } else {
        container.classList.remove('bookmarked');
        isPageBookmarked = false;
        localStorage.setItem('bookmark', isPageBookmarked);
    }
});
