import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full">
      <div className="container mx-auto max-w-3xl px-4 py-4">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="flex items-center space-x-4">
            <a
              href="https://instagram.com/aernstore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-400 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://facebook.com/aernstore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-400 transition-colors"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://wa.me/6282334039853"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-400 transition-colors"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
          <p className="text-sm text-white">
            © {new Date().getFullYear()} AernStore. Website oleh <a href="github.com/ifalfahri" className="hover:text-pink-600">ifalfahri</a>
          </p>
        </div>
      </div>
    </footer>
  )
}