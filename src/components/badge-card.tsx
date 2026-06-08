export function BadgeCard() {
  return (
    <div className="relative mx-auto h-[520px] w-full max-w-[560px] sm:h-[600px]">
      <div className="absolute bottom-8 left-1/2 h-14 w-72 -translate-x-1/2 rounded-full bg-black opacity-70 blur-2xl" />

      <div className="absolute left-1/2 top-0 h-24 w-1 -translate-x-14 rotate-[152deg] bg-[#f5f5f0]" />
      <div className="absolute left-1/2 top-0 h-24 w-1 translate-x-10 rotate-[12deg] bg-[#f5f5f0]" />

      <div className="absolute left-1/2 top-28 h-[438px] w-[306px] -translate-x-[42%] -rotate-8 rounded-[30px] bg-[#1b1b1d]" />
      <div className="absolute left-1/2 top-32 h-[438px] w-[306px] -translate-x-[34%] -rotate-8 rounded-[30px] bg-[#26262a]" />

      <div className="absolute left-1/2 top-24 h-[438px] w-[306px] -translate-x-1/2 -rotate-8 rounded-[30px] bg-[#f4f4ee] p-10 text-[#111] shadow-[0_30px_38px_-10px_rgba(0,0,0,0.56),-18px_12px_24px_-12px_rgba(182,243,107,0.1)]">
        <div className="mx-auto h-10 w-[74px] rounded-[10px] bg-[#f5f5f0] p-3 shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
          <div className="h-2 rounded-full bg-[#050505]" />
        </div>

        <div className="mx-auto mt-9 h-[222px] w-[222px] rounded-3xl border border-[#111] bg-[#e2e2da] p-9">
          <div className="relative h-full rounded-full border border-[#111] bg-[#cfcfc8]">
            <div className="absolute left-1/2 top-11 h-14 w-14 -translate-x-1/2 rounded-full border border-[#111] bg-[#f4f4ee]" />
            <div className="absolute bottom-5 left-1/2 h-14 w-28 -translate-x-1/2 rounded-[28px] border border-[#111] bg-[#f4f4ee]" />
          </div>
        </div>

        <div className="mt-10">
          <p className="text-2xl font-bold leading-none">YOUR NAME</p>
          <p className="mt-3 text-sm font-medium text-[#5f5f5a]">
            Software Developer
          </p>
        </div>

        <div className="mt-6 h-px bg-[#111]" />
      </div>

      <p className="absolute bottom-10 left-8 font-mono text-sm font-medium text-[#b6f36b]">
        $ whoami
      </p>
    </div>
  );
}
