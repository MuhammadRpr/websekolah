import Image from "next/image"

export default function Hero() {
    return (
        <section id="home" className="relative h-[668px]">
            <Image
                src="/hero.jpg"
                alt="Foto Kegiatan Sekolah"
                layout="fill"
                objectFit="cover"
                priority
            />
            <div className="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold">Sekolah Daarul Ilmi Depok</h1>
                <p className="mt-2 text-lg md:text-xl">Shalih, Unggul, Cerdas, Terampil & Mandiri</p>

                <a
                    href="#alamat"
                    className="mt-5 px-6 py-2 bg-lime-400 text-green-600 font-semibold rounded-lg shadow hover:bg-lime-500 transition duration-200"
                >
                    Daftar Sekarang
                </a>
            </div>
        </section>
    )
}
