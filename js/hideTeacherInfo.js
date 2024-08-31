
export function hidePopUpWithTeacherInfo(teacher) {
    let popup = document.getElementById('teacher-info-popup');
    if (popup) {
        document.body.removeChild(popup);
    }
}