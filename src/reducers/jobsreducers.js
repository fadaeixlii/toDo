export const jobsreducer = (state = [
    { name: 'خواندن کتاب', startingTime: "10:00", endingTime: "12:00", priority: 3, isDone: false, detail: 'خوتندن هر روز مقداری از یک کتاب', id: 1, edit: false },
    { name: 'یادگیری روزانه', startingTime: "13:00", endingTime: "16:00", priority: 2, isDone: false, detail: 'یادگیری روزانه در مبحث  کامپیوتر', id: 2, edit: false },
    { name: 'انجام کار های خونه', startingTime: "08:00", endingTime: "10:00", priority: 1, isDone: false, detail: 'کمک کردن در کار های خانه', id: 3, edit: false },
    { name: 'درس', startingTime: "18:00", endingTime: "20:00", priority: 4, isDone: false, detail: 'انجام درس های لازم برای فردا', id: 4, edit: false },
], action) => {
    switch (action.type) {
        case "CHECK_OTHER_JOB_EDIT":
            return [...action.payload];
        case "EDIT_JOB":
            return [...action.payload];
        case "ADD_JOB":
            return [...action.payload];
        case "DONE_JOB":
            return [...action.payload];
        case "DELETE_JOB":
            return [...action.payload];
        default:
            return state;
    }

}