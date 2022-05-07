import { useAppDispatch, useAppSelector } from "hooks";
import { ReactElement, useEffect } from "react";
import { checkOutOfDateTodo } from "store/actions";
import { notifyOutOfDateTodos ,popFirstNotification} from "store/actions/notification-action";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

interface IProps {
  children?: ReactElement;
}

const Layout = ({ children }: IProps) => {
  const dispatch = useAppDispatch();
  const notificationStore = useAppSelector(
    (store) => store.notificationReducer
  );
  const enqueue = useEffect(() => {
    const interval = setInterval(() => {
      dispatch(checkOutOfDateTodo());
      dispatch(notifyOutOfDateTodos());
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (notificationStore.notis.length === 0) return;
    const noti = notificationStore.notis[0];
    toast(noti.message, { type: noti.variant });
    dispatch(popFirstNotification());
  }, [notificationStore.notis]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {children}
    </>
  );
};

export default Layout;
