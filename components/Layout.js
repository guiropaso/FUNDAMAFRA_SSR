import Header from "./Header"
import Footer from "./Footer"
import {motion, AnimatePresence} from "framer-motion"
import { useRouter } from "next/router"
import { ToastContainer } from "react-toastify"

export default function Layout({children}) {
  const router = useRouter()
  return (
    <>
      <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
      <Header />
        <AnimatePresence>
          <motion.div
          key={router.route}
          initial={
            {opacity: 0,}
          }
          animate= {
            {opacity: 1,}
          }
          exit= {
            {opacity: 0}
          }
          transition={{
            duration: 0.2,
          }}>
            {children}
          </motion.div>
        </AnimatePresence>
      <Footer />
    </>
  )
}
