import Image from "next/image";

export default function MyProfilePic() {
    return (
        <section className="w-full mx-auto">
            <Image
                className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
                src="/images/Ayoub_Chahir_Image.jpg"
                width={256}
                height={256}
                alt="Ayoub Chahir"
                priority={true}
            />
        </section>
    );
}
