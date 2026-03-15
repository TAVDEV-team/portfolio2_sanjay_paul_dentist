export default function MobileBottomNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around p-3">

      <a className="flex flex-col items-center text-slate-400">
        <span className="material-symbols-outlined">home</span>
        <span className="text-[10px]">Home</span>
      </a>

      <a className="flex flex-col items-center text-primary">
        <span className="material-symbols-outlined">
          medical_services
        </span>
        <span className="text-[10px]">Services</span>
      </a>

      <a className="flex flex-col items-center text-slate-400">
        <span className="material-symbols-outlined">
          calendar_month
        </span>
        <span className="text-[10px]">Book</span>
      </a>

    </div>
  )
}