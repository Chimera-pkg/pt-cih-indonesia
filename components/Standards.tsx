import { FaShieldAlt, FaHardHat, FaCertificate, FaAward } from "react-icons/fa";

export default function Standards() {
  return (
    <section id="standar" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <FaShieldAlt className="absolute -right-10 top-10 text-[20rem] text-white/5 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Standar Kualitas & Keselamatan</h2>
          <p className="text-gray-400">Prioritas utama kami adalah keselamatan kerja dan kualitas hasil produksi.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 border border-gray-700 rounded-xl hover:bg-gray-800 transition">
            <FaHardHat className="text-5xl text-yellow-500 mb-6 mx-auto" />
            <h3 className="text-xl font-bold mb-3">Safety First (K3)</h3>
            <p className="text-gray-400 text-sm">Penerapan prosedur K3 yang ketat untuk menjamin keselamatan seluruh tenaga kerja dan lingkungan area galangan.</p>
          </div>
          <div className="p-8 border border-gray-700 rounded-xl hover:bg-gray-800 transition">
            <FaCertificate className="text-5xl text-blue-400 mb-6 mx-auto" />
            <h3 className="text-xl font-bold mb-3">ISO Certified</h3>
            <p className="text-gray-400 text-sm">Mengikuti standar manajemen mutu ISO 9001:2015 untuk memastikan kepuasan pelanggan dan kualitas produk.</p>
          </div>
          <div className="p-8 border border-gray-700 rounded-xl hover:bg-gray-800 transition">
            <FaAward className="text-5xl text-green-400 mb-6 mx-auto" />
            <h3 className="text-xl font-bold mb-3">Class Approved</h3>
            <p className="text-gray-400 text-sm">Seluruh konstruksi kapal diawasi dan disetujui oleh badan klasifikasi (BKI/ClassNK/dll).</p>
          </div>
        </div>
      </div>
    </section>
  );
}
