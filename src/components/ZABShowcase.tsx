import T from './T';

export default function ZABShowcase() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-green-50 border-l-8 border-green-600 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex-1">
        <h3 className="text-xl font-bold text-green-900 mb-2 flex items-center gap-2">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
          <T id="zab.badge.title">EU Blue Card / Chancenkarte Eligible</T>
        </h3>
        <p className="text-sm text-green-700 leading-relaxed max-w-2xl">
          <T id="zab.badge.desc">Degrees officially recognized by the Central Office for Foreign Education (ZAB) as equivalent to German Master&apos;s and Bachelor&apos;s levels.</T>
        </p>
      </div>
      <div className="mt-6 md:mt-0 md:ml-8 shrink-0">
        <div className="inline-flex flex-col items-center">
          <span className="px-5 py-2.5 bg-green-600 text-white text-sm font-black rounded-full shadow-lg tracking-widest uppercase">
            ZAB Verified (H+)
          </span>
          <span className="mt-2 text-[10px] font-bold text-green-600 uppercase tracking-tighter opacity-70">ANABIN COMPLIANT</span>
        </div>
      </div>
    </div>
  );
}
