import { toast } from 'react-toastify';
export const notify = () => toast.error('شخص با موفقیت حذف شد', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});
export const notify2 = () => toast.info('کار جدید اضافه شد', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});