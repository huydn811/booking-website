import { toast } from 'react-toastify';

toast.configure({
  position: 'top-right',
  autoClose: 2500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});

export const Toastify = ({ msg = '', type }) => {
  return toast[type](msg);
};
