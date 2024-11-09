import React from 'react';

const OTP = () => {
  return (
    <div className="[--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] w-4/5 max-w-xs h-auto space-y-4">
      <div className="flex flex-col items-center justify-center relative rounded-md p-4 bg-gray-300 [box-shadow:var(--shadow)] overflow-hidden">
        <h6 className="text-2xl font-bold">OTP Verification</h6>
        <div className="my-6 w-full grid grid-flow-col grid-cols-4 items-center justify-center justify-items-center">
          <input className="aria-[disabled='true']:cursor-not-allowed aria-[disabled='true']:opacity-50 block focus:placeholder:opacity-0 placeholder:text-muted-foreground/80 placeholder:text-[24px] text-[20px] leading-[20px] font-bold text-center h-10 w-10 max-w-full rounded-md p-0 border border-input bg-white [box-shadow:var(--shadow)] transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-0 focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-[black] focus-visible:ring-offset-0 placeholder:select-none" spellCheck="false" autoComplete="one-time-code" placeholder="○" aria-invalid="false" type="tel" aria-disabled="false" inputMode="numeric" maxLength={1} />
          <input className="aria-[disabled='true']:cursor-not-allowed aria-[disabled='true']:opacity-50 block focus:placeholder:opacity-0 placeholder:text-muted-foreground/80 placeholder:text-[24px] text-[20px] leading-[20px] font-bold text-center h-10 w-10 max-w-full rounded-md p-0 border border-input bg-white [box-shadow:var(--shadow)] transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-0 focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-[black] focus-visible:ring-offset-0 placeholder:select-none" spellCheck="false" autoComplete="one-time-code" placeholder="○" aria-invalid="false" type="tel" aria-disabled="false" inputMode="numeric" maxLength={1} />
          <input className="aria-[disabled='true']:cursor-not-allowed aria-[disabled='true']:opacity-50 block focus:placeholder:opacity-0 placeholder:text-muted-foreground/80 placeholder:text-[24px] text-[20px] leading-[20px] font-bold text-center h-10 w-10 max-w-full rounded-md p-0 border border-input bg-white [box-shadow:var(--shadow)] transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-0 focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-[black] focus-visible:ring-offset-0 placeholder:select-none" spellCheck="false" autoComplete="one-time-code" placeholder="○" aria-invalid="false" type="tel" aria-disabled="false" inputMode="numeric" maxLength={1} />
          <input className="aria-[disabled='true']:cursor-not-allowed aria-[disabled='true']:opacity-50 block focus:placeholder:opacity-0 placeholder:text-muted-foreground/80 placeholder:text-[24px] text-[20px] leading-[20px] font-bold text-center h-10 w-10 max-w-full rounded-md p-0 border border-input bg-white [box-shadow:var(--shadow)] transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-0 focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-[black] focus-visible:ring-offset-0 placeholder:select-none" spellCheck="false" autoComplete="one-time-code" placeholder="○" aria-invalid="false" type="tel" aria-disabled="false" inputMode="numeric" maxLength={1} />
        </div>
        <span className="text-zinc-500 text-[12px] text-center mt-2">Please enter the 4-digits one time password (OTP) that we sent to your
          registered email</span>
        <button type="button" className="oauthButton mt-2">
          Verify
        </button>
      </div>
      </div>
  );
}

export default OTP;
