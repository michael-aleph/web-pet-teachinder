
export function hideAddTeacherPopUp() {
    let popup = document.getElementById('add-teacher-popup');
    if (popup) {
        document.body.removeChild(popup);
    }
}