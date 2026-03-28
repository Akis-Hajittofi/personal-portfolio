export default function MaintenanceNotice() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center py-16 text-base-content">
      <section className="w-full max-w-2xl rounded-[2rem] border border-base-300 bg-base-200/70 p-8 shadow-xl backdrop-blur sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
          Temporary Maintenance
        </p>
        <h1 className="mt-4 text-5xl font-[1000] sm:text-6xl">
          This site is being updated.
        </h1>
        <p className="mt-6 text-lg font-light leading-8 sm:text-xl">
          I&apos;m making improvements behind the scenes right now. Please check
          back shortly.
        </p>
        <p className="mt-4 text-base font-light leading-7 opacity-80 sm:text-lg">
          If you need to reach me in the meantime, email
          phanakishajittofi@gmail.com.
        </p>
      </section>
    </main>
  );
}