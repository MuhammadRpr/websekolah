import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Kontak() {
    return (
        <section id="alamat" className="py-12 px-4 bg-lime-100">
            <h2 className="text-2xl font-bold bg-lime-400 text-green-500 mb-6">Alamat</h2>


            <div className="flex flex-col md:flex-row md:items-start gap-6">

                <div className="flex-1">
                    <div className="flex p-2">
                        <FaLocationDot className="mt-1 mr-2" />
                        <p>Kp. Parung Serab RT 007/RW 003, Kelurahan Tirtajaya, Kecamatan Sukmajaya, Kota Depok, Jawa Barat (kode pos 16412)</p>
                    </div>
                    <div className="flex p-2">
                        <BsFillTelephoneFill className="mt-1 mr-2" />
                        <p>0821-1131-3536</p>
                    </div>
                    <div className="flex p-2">
                        <MdEmail className="mt-1 mr-2" />
                        <p>daarulilmidepok@gmail.com</p>
                    </div>
                </div>


                <div className="flex-1 object-right md:flex justify-center items-center">
                    <Image
                        src="/alamat.png"
                        alt="Peta Lokasi Sekolah"
                        width={400}
                        height={200}
                        className="max-w-full h-auto rounded-lg"
                        priority
                    />
                </div>
            </div>

            <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Nama" className="p-2 border rounded" />
                <input type="email" placeholder="Email" className="p-2 border rounded" />
                <input type="number" placeholder="Nomor Telepon" className="p-2 border rounded" />
                <input type="text" placeholder="DD/MM/YY" className="p-2 border rounded" />
                <textarea placeholder="Catatan" className="p-2 border rounded md:col-span-2 h-40"></textarea>
                <button className="bg-lime-400 text-white font-semibold text-center w-30 py-2 px-2 rounded md:col-span-2 hover:bg-lime-300">
                    Submit
                </button>
            </form>
        </section>
    );
}
