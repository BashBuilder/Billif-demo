import TopographySvg from "@/components/global/TopographySvg";
import WaitListForm from "./waitlistForm";
import GoBack from "./back";

const Waitlist = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-orange-dark p-8">
      <GoBack />
      <TopographySvg
        color="white"
        className="absolute -bottom-[20%] -left-[15%] rotate-90 opacity-50"
      />
      <TopographySvg
        color="white"
        className="absolute -right-[25%] -top-[50%] z-10 rotate-12"
      />
      <div className="relative z-20 w-full max-w-lg space-y-5 rounded-md bg-white p-10">
        <WaitListForm />
      </div>
    </main>
  );
};

export default Waitlist;
