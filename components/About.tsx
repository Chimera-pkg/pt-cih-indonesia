import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function About() {
  return (
    <section id="profil" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative">
            <div className="rounded-lg shadow-2xl relative z-10 w-full h-96 overflow-hidden">
                <img 
                    src="/image2.jpg" 
                    alt="Shipyard" 
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-maritime-blue w-24 h-24 rounded-lg -z-0"></div>
            <div className="absolute -top-6 -left-6 border-4 border-ocean-blue w-24 h-24 rounded-lg -z-0"></div>
          </div>
          <div className="md:w-1/2">
            <h4 className="text-ocean-blue font-bold uppercase tracking-widest mb-2">Profil Perusahaan</h4>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Mitra Terpercaya Industri Maritim</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              PT. CIH INDONESIA berkomitmen menjadi mitra strategis di industri maritim Indonesia. Dengan tenaga profesional berpengalaman dan sistem produksi yang terstandarisasi, kami menyediakan layanan:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <FaCheckCircle className="text-ocean-blue mr-3" />
                <span>Produksi kapal tongkang (Barge)</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-ocean-blue mr-3" />
                <span>Produksi kapal tugboat</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-ocean-blue mr-3" />
                <span>Repair & maintenance kapal tongkang</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-ocean-blue mr-3" />
                <span>Repair & maintenance kapal tugboat</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
