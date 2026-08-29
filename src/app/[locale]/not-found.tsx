import Link from "next/link";
import { Container } from "@/components/Section";
import { clinic } from "@/data/clinic";

/**
 * Topilmagan sahifa. `[locale]` segmenti ichida turadi, shuning uchun
 * saytning o'z layouti (shrift, rang, <html lang>) bilan chiziladi.
 */
export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center py-[60px]">
      <Container className="flex flex-col items-start gap-6">
        <span className="label">404</span>

        <h1 className="max-w-[18ch] text-[clamp(2rem,4vw,3rem)]">
          Bunday sahifa <span className="accent">yo&apos;q</span>
        </h1>

        <p className="max-w-[46ch] text-[0.95rem] text-muted">
          Havola eskirgan bo&apos;lishi mumkin. Bosh sahifadan davom eting
          yoki telefon qiling — savolingizga darrov javob beramiz.
        </p>

        <div className="mt-2 flex flex-wrap gap-[0.7rem]">
          <Link href="/uz" className="btn btn-dark">
            Bosh sahifa
          </Link>
          <a href={clinic.phoneHref} className="btn btn-ghost">
            {clinic.phone}
          </a>
        </div>

        <p className="mt-4 text-[0.85rem] text-muted">
          <Link href="/ru" className="underline underline-offset-4">
            Ruscha versiya
          </Link>
        </p>
      </Container>
    </main>
  );
}
