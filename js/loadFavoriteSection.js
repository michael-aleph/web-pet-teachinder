import { createTeacherCard } from "./createTeacherCard.js";
import { teachers } from "./loadUsers.js";

export function loadFavoriteSection() {
    let section = document.getElementById('section-favorites');
    section.innerHTML = '';

    let filterTeachers = teachers.filter((teacher) => {
        if(teacher['favorite'] !== undefined && teacher['favorite'] !== null && teacher['favorite']) {
            return true;
        }

        return false;
    });


    if (filterTeachers.length === 0) {
        section.classList.remove('container', 'section');
        section.innerHTML = '';
        return;
    }
    
    section.className = 'container section';
    let h2 = document.createElement('h2');
    h2.textContent = 'Favorites';
    h2.className = 'section-title-paddings';
    section.appendChild(h2);

    let favoritesSlider = document.createElement('div');
    favoritesSlider.className = 'favorites-slider';
    section.appendChild(favoritesSlider);

    let leftArrow = document.createElement('img');
    leftArrow.className = 'favourites-slider-arrow favourites-slider-left-arrow';
    leftArrow.src = 'images/left-arrow.png';
    leftArrow.alt = 'Left arrow';
    favoritesSlider.appendChild(leftArrow);

    let hoveredLeftArrow = document.createElement('img');
    hoveredLeftArrow.className = 'favourites-slider-arrow favourites-slider-left-arrow-hovered';
    hoveredLeftArrow.src = 'images/left-arrow-hovered.png';
    hoveredLeftArrow.alt = 'Left arrow';
    favoritesSlider.appendChild(hoveredLeftArrow);

    let rightArrow = document.createElement('img');
    rightArrow.className = 'favourites-slider-arrow favourites-slider-right-arrow';
    rightArrow.src = 'images/right-arrow.png';
    rightArrow.alt = 'Right arrow';
    favoritesSlider.appendChild(rightArrow);

    let hoveredRightArrow = document.createElement('img');
    hoveredRightArrow.className = 'favourites-slider-arrow favourites-slider-right-arrow-hovered';
    hoveredRightArrow.src = 'images/right-arrow-hovered.png';
    hoveredRightArrow.alt = 'Right arrow';
    favoritesSlider.appendChild(hoveredRightArrow);

    let favoritesSliderGrid = document.createElement('div');
    favoritesSliderGrid.className = 'favorites-slider-grid';
    favoritesSlider.appendChild(favoritesSliderGrid);
    
    filterTeachers = filterTeachers.slice(0, 5);

    filterTeachers.forEach(teacher => {
        let card = createTeacherCard(teacher);
        favoritesSliderGrid.appendChild(card);
    });
}

loadFavoriteSection();