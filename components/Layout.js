import Header from "./Header"
import Footer from "./Footer"
import {motion, AnimatePresence} from "framer-motion"
import { useRouter } from "next/router"

export default function Layout({children}) {
  const router = useRouter()
  return (
    <>
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
