import Link from "next/link";

const Demo = () => {
  return (
    <Link
      target="_blank"
      className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-primary/80"
      href=" https://meet.brevo.com/ngrpay"
    >
      Request Demo
    </Link>
  );
};

export default Demo;
