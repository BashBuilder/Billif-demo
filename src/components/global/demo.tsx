import Link from "next/link";

const Demo = () => {
  return (
    <Link
      target="_blank"
      className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
      href=" https://meet.brevo.com/ngrpay"
    >
      Request Demo
    </Link>
  );
};

export default Demo;
