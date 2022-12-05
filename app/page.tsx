export default function Page() {
  return (
    <main className="container">
      <h1 className="text-primary text-8xl text-center">DAILY TAPS</h1>
      <p className="text-on-surface-light text-2xl text-center">
        The best companion for your workouts
      </p>
      <form action="">
        <div className="flex flex-col items-center">
          <input
            type="email"
            className="w-96 h-12 mt-8 text-2xl text-on-surface-normal bg-surface-2 rounded-lg"
            placeholder="Email"
          />
          <input
            type="password"
            className="w-96 h-12 mt-8 text-2xl text-on-surface-normal bg-surface-2 rounded-lg"
            placeholder="Password"
          />
          <button
            type="submit"
            className="w-96 h-12 mt-8 text-2xl text-white bg-primary rounded-lg"
          >
            Login
          </button>
        </div>
      </form>
    </main>
  );
}
