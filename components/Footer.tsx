import Link from "next/link";
import { FaAnchor, FaInstagram, FaLinkedinIn, FaFacebookF, FaLocationArrow, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="kontak" className="bg-maritime-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <FaAnchor className="text-2xl" />
              <span className="text-xl font-bold">SHIPYARD</span>
            </div>
            <p className="text-gray-400 text-sm">
              Membangun kapal berkualitas tinggi dengan integritas dan inovasi untuk masa depan maritim Indonesia.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Layanan</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="#produksi" className="hover:text-white transition">Pembuatan Kapal Baru</Link></li>
              <li><Link href="#perawatan" className="hover:text-white transition">Perbaikan & Docking</Link></li>
              <li><Link href="#" className="hover:text-white transition">Fabrikasi Baja</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Hubungi Kami</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0" />
                <span>Jl. Pelabuhan No. 123, Jawa Timur, Indonesia</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 flex-shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 flex-shrink-0" />
                <span>info@perusahaan.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Sosial Media</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-ocean-blue transition">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-ocean-blue transition">
                <FaLinkedinIn />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-ocean-blue transition">
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Shipyard Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
