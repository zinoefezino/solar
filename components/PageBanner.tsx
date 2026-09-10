import Image from "next/image";

type PageBannerProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export default function PageBanner({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: PageBannerProps) {
  return (
    <section className="relative isolate overflow-hidden bg-green">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green via-green/85 to-green/60" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24">
        <span className="text-sm font-medium text-amber">{eyebrow}</span>
        <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight max-w-3xl">
          {title}
        </h1>
        <p className="mt-4 text-white/75 text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
