import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-lime-400 text-white py-6">
            <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row md:justify-between md:items-start gap-6">


                <div className="flex flex-col items-center md:items-start md:pl-8">
                    <Image src="/lgdi.png" alt="Logo" width={150} height={150} />
                </div>

                <div className="flex flex-col md:flex-row gap-8 text-center md:text-left md:pr-8">

                    <div>
                        <h4 className="font-semibold mb-2">Menu Lain</h4>
                        <ul className="space-y-1">
                            <li>Pendidikan</li>
                            <li>Informasi</li>
                            <li>PPDB</li>
                            <li>Kontak</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Tentang Kami</h4>
                        <ul className="space-y-1">
                            <li>Youtube</li>
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Whatsapp</li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
}
