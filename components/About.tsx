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
                    src="/image2.png" 
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
              Kami adalah perusahaan galangan kapal yang berdedikasi tinggi dalam menyediakan layanan konstruksi dan pemeliharaan kapal berkualitas. Dengan tim ahli dan fasilitas modern, kami berkomitmen untuk mendukung kelancaran logistik maritim Indonesia.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <FaCheckCircle className="text-ocean-blue mr-3" />
                <span>Berpengalaman lebih dari 1 dekade</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-ocean-blue mr-3" />
                <span>Teknologi manufaktur modern</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
